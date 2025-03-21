import { useState } from 'react';
import { supabase } from '../lib/supabase';

const TestSetup = () => {
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(false);

  const addStatus = (message, isError = false) => {
    setStatus(prev => [...prev, { message, isError, time: new Date() }]);
  };

  const testDatabaseSetup = async () => {
    setLoading(true);
    setStatus([]);

    try {
      // Test 1: Create a test user
      addStatus('Creating test user...');
      const { data: userData, error: userError } = await supabase.auth.signUp({
        email: `test${Date.now()}@example.com`,
        password: 'Test123!@#',
        options: {
          data: {
            name: 'Test User'
          }
        }
      });

      if (userError) throw new Error(`User creation failed: ${userError.message}`);
      addStatus('✅ Test user created successfully');

      // Test 2: Verify profiles table
      addStatus('Checking profiles table...');
      const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .limit(1);

      if (profileError) throw new Error(`Profiles table error: ${profileError.message}`);
      addStatus('✅ Profiles table exists and is accessible');

      // Test 3: Create a test plot
      addStatus('Creating test plot...');
      const { data: plotData, error: plotError } = await supabase
        .from('plots')
        .insert([
          {
            title: 'Test Plot',
            description: 'A test plot entry',
            location: 'Test Location',
            area: 1000,
            user_id: userData.user.id
          }
        ])
        .select();

      if (plotError) throw new Error(`Plot creation failed: ${plotError.message}`);
      addStatus('✅ Test plot created successfully');

      // Test 4: Create a security record
      addStatus('Creating security record...');
      const { error: securityError } = await supabase
        .from('security_records')
        .insert([
          {
            plot_id: plotData[0].id,
            record_type: 'TEST',
            description: 'Test security record'
          }
        ]);

      if (securityError) throw new Error(`Security record creation failed: ${securityError.message}`);
      addStatus('✅ Security record created successfully');

      // Test 5: Verify data relationships
      addStatus('Verifying data relationships...');
      const { data: plotWithRecords, error: relationError } = await supabase
        .from('plots')
        .select(`
          *,
          security_records (*)
        `)
        .eq('id', plotData[0].id)
        .single();

      if (relationError) throw new Error(`Relationship verification failed: ${relationError.message}`);
      addStatus('✅ Data relationships verified successfully');

      addStatus('🎉 All tests completed successfully!');
    } catch (error) {
      addStatus(`❌ Error: ${error.message}`, true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Database Setup Verification</h2>
        <button
          onClick={testDatabaseSetup}
          disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Running Tests...' : 'Run Database Tests'}
        </button>
      </div>

      <div className="space-y-2">
        {status.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-md ${
              item.isError ? 'bg-red-50 text-red-700' : 'bg-gray-50 text-gray-700'
            }`}
          >
            <div className="flex justify-between">
              <span>{item.message}</span>
              <span className="text-xs text-gray-500">
                {item.time.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSetup; 