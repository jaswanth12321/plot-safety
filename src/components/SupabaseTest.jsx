import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { auth } from '../services/auth';
import { database } from '../services/database';

const SupabaseTest = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addTestResult = (test, success, message) => {
    setTestResults(prev => [...prev, { test, success, message, timestamp: new Date() }]);
  };

  const runTests = async () => {
    setTestResults([]);
    setLoading(true);
    setError(null);

    try {
      // Test 1: Register a test user
      try {
        const testUser = {
          email: `test${Date.now()}@example.com`,
          password: 'Test123!@#',
          name: 'Test User'
        };
        const { data: authData, error: authError } = await auth.signUp(testUser);
        
        if (authError) throw authError;
        addTestResult('User Registration', true, 'Successfully registered test user');
      } catch (err) {
        addTestResult('User Registration', false, `Failed to register user: ${err.message}`);
      }

      // Test 2: Create a test plot
      try {
        const { data: { user } } = await auth.getCurrentUser();
        if (!user) throw new Error('No user found');

        const testPlot = {
          title: 'Test Plot',
          description: 'A test plot for verification',
          location: 'Test Location',
          area: 1000,
          user_id: user.id
        };

        const plot = await database.createPlot(testPlot);
        addTestResult('Plot Creation', true, 'Successfully created test plot');

        // Test 3: Create a security record for the plot
        try {
          const securityRecord = {
            plot_id: plot.id,
            record_type: 'TEST',
            description: 'Test security record'
          };

          await database.createSecurityRecord(securityRecord);
          addTestResult('Security Record Creation', true, 'Successfully created security record');
        } catch (err) {
          addTestResult('Security Record Creation', false, `Failed to create security record: ${err.message}`);
        }

        // Test 4: Fetch plot details
        try {
          const fetchedPlot = await database.getPlot(plot.id);
          if (fetchedPlot.id === plot.id) {
            addTestResult('Plot Retrieval', true, 'Successfully retrieved plot details');
          } else {
            throw new Error('Plot data mismatch');
          }
        } catch (err) {
          addTestResult('Plot Retrieval', false, `Failed to retrieve plot: ${err.message}`);
        }

      } catch (err) {
        addTestResult('Plot Creation', false, `Failed to create plot: ${err.message}`);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Supabase Integration Tests</h2>
        <button
          onClick={runTests}
          disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Running Tests...' : 'Run Tests'}
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {testResults.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              result.success ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-medium ${result.success ? 'text-green-800' : 'text-red-800'}`}>
                  {result.test}
                </h3>
                <p className={`text-sm ${result.success ? 'text-green-600' : 'text-red-600'}`}>
                  {result.message}
                </p>
              </div>
              <span className="text-xs text-gray-500">
                {result.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupabaseTest; 