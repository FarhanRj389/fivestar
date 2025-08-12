import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, UserPlus } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('info@fivestarrentals.co.nz');
  const [password, setPassword] = useState('fivestar123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, createUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await createUser(email, password);
        // After creating account, automatically log in
        await login(email, password);
      } else {
        await login(email, password);
      }
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message || 'An error occurred. Please try again.');
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-28 h-28 bg-white/40 shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold text-black"><img src="/logo.png" alt="Five Star Rentals" /></span>
          </div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Five Star Rentals
          </h1>
          <p className="text-secondary-600">
            {isSignUp ? 'Create Admin Account' : 'Admin Dashboard Login'}
          </p>
          
          {/* Helpful note for first-time users */}
          {/* {!isSignUp && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>First time here?</strong> If login fails, click "Don't have an account? Create One" below to set up your admin account.
              </p>
            </div>
          )} */}
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (isSignUp ? 'Creating Account...' : 'Signing In...') : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        {/* <div className="mt-6 text-center">
          <button
            type="button"
            onClick={toggleMode}
            className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Create One"}
          </button>
        </div> */}

        {/* <div className="mt-8 text-center">
          <p className="text-sm text-secondary-500">
            {isSignUp 
              ? 'Create your admin account to access the dashboard'
              : 'Default credentials are pre-filled for your convenience'
            }
          </p>
          {!isSignUp && (
            <p className="text-xs text-secondary-400 mt-2">
              If login fails, you may need to create an account first
            </p>
          )}
        </div> */}

        {/* Debug information for troubleshooting */}
        {/* {process.env.NODE_ENV === 'development' && (
          <div className="mt-6 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <details className="text-xs text-gray-600">
              <summary className="cursor-pointer font-medium">Debug Info (Development)</summary>
              <div className="mt-2 space-y-1 text-left">
                <p><strong>Firebase Project:</strong> fivestarrentals-78855</p>
                <p><strong>Auth Domain:</strong> fivestarrentals-78855.firebaseapp.com</p>
                <p><strong>Your Domain:</strong> fivestarrentals.co.nz</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Mode:</strong> {isSignUp ? 'Sign Up' : 'Sign In'}</p>
                <p className="text-blue-600">
                  <strong>Note:</strong> Make sure Email/Password authentication is enabled in your Firebase project.
                </p>
                <p className="text-orange-600">
                  <strong>Important:</strong> Use info@fivestarrentals.co.nz for login, not the old domain.
                </p>
              </div>
            </details>
          </div>
        )} */}
      </motion.div>
    </div>
  );
};

export default Login;
