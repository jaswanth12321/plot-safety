import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { auth } from '../services/auth';
import { database } from '../services/database';

const Dashboard = () => {
  const navigate = useNavigate();
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await auth.getCurrentUser();
        if (!user) {
          navigate('/login');
          return;
        }
        setUser(user);
        loadPlots(user.id);
      } catch (err) {
        console.error('Auth error:', err);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  const loadPlots = async (userId) => {
    try {
      const plots = await database.getUserPlots(userId);
      setPlots(plots);
    } catch (err) {
      setError('Failed to load plots');
      console.error('Error loading plots:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPlot = () => {
    navigate('/plots/new');
  };

  const handleViewPlot = (plotId) => {
    navigate(`/plots/${plotId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Plots</h1>
          <button
            onClick={handleAddPlot}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add New Plot
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plots.map((plot) => (
            <motion.div
              key={plot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{plot.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{plot.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Location: {plot.location}</p>
                  <p className="text-sm text-gray-500">Area: {plot.area} sq. ft.</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => handleViewPlot(plot.id)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {plots.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No plots found. Add your first plot to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 