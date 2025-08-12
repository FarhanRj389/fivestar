import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  LogOut, 
  Home, 
  Settings, 
  Search,
  Filter
} from 'lucide-react';
import PropertyForm from '../components/dashboard/PropertyForm';
import PropertyList from '../components/dashboard/PropertyList';
import ButtonCustomization from '../components/dashboard/ButtonCustomization';
import { getProperties, deleteProperty, updateProperty, Property } from '../services/propertyService';



const Dashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('properties');
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else {
      loadProperties();
    }
  }, [currentUser, navigate]);

  const loadProperties = async () => {
    try {
      setLoading(true);
      
      // Add timeout to prevent infinite loading on iOS
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 15000);
      });
      
      const fetchedProperties = await Promise.race([
        getProperties(),
        timeoutPromise
      ]) as Property[];
      
      setProperties(fetchedProperties || []);
    } catch (error) {
      console.error('Error loading properties:', error);
      // Set empty array on error to prevent infinite loading
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleDeleteProperty = async (propertyId: string) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await deleteProperty(propertyId);
        await loadProperties(); // Reload properties after deletion
      } catch (error) {
        console.error('Error deleting property:', error);
        alert('Failed to delete property. Please try again.');
      }
    }
  };

  const handlePropertySubmit = async (propertyData: any) => {
    try {
      if (editingProperty) {
        // Update existing property
        await updateProperty(editingProperty.id, propertyData);
        console.log('Property updated:', propertyData);
      } else {
        // Handle new property submission
        console.log('New property:', propertyData);
      }
      await loadProperties(); // Reload properties after submission
      setShowPropertyForm(false);
      setEditingProperty(null);
    } catch (error) {
      console.error('Error submitting property:', error);
      alert('Failed to submit property. Please try again.');
    }
  };

  const handleEditProperty = (property: Property) => {
    setEditingProperty(property);
    setShowPropertyForm(true);
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || property.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-black">⭐</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-secondary-900">Five Star Rentals</h1>
                <p className="text-sm text-secondary-600">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-secondary-600">
                Welcome, {currentUser?.email}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-secondary-200 mb-8">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('properties')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'properties'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Properties</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('button-customization')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'button-customization'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Button Customization</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'properties' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header Actions */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Property Management</h2>
                <p className="text-secondary-600">Manage your rental properties</p>
              </div>
              <button
                onClick={() => {
                  setEditingProperty(null);
                  setShowPropertyForm(true);
                }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Property</span>
              </button>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Studio">Studio</option>
                </select>
                <div className="flex items-center space-x-2 text-secondary-600">
                  <Filter className="w-5 h-5" />
                  <span>{filteredProperties.length} properties found</span>
                </div>
              </div>
            </div>

            {/* Properties List */}
            {loading ? (
              <div className="text-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
                <p className="mt-4 text-secondary-600">Loading properties...</p>
              </div>
            ) : (
              <PropertyList 
                properties={filteredProperties}
                onEdit={handleEditProperty}
                onDelete={handleDeleteProperty}
              />
            )}
          </motion.div>
        )}

        {activeTab === 'button-customization' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ButtonCustomization />
          </motion.div>
        )}
      </div>

      {/* Property Form Modal */}
      {showPropertyForm && (
        <PropertyForm
          onClose={() => {
            setShowPropertyForm(false);
            setEditingProperty(null);
          }}
          onSubmit={handlePropertySubmit}
          property={editingProperty ? {
            id: editingProperty.id, // Include the property ID for updates
            title: editingProperty.title,
            address: editingProperty.address,
            price: editingProperty.price,
            type: editingProperty.type,
            bedrooms: editingProperty.bedrooms,
            bathrooms: editingProperty.bathrooms,
            parking: editingProperty.parking,
            image: editingProperty.image,
            images: editingProperty.images || [], // Use existing images or empty array
            description: editingProperty.description,
            available: editingProperty.available,
            features: editingProperty.features,
            buttonLink: editingProperty.buttonLink
          } : undefined}
          isEditing={!!editingProperty}
        />
      )}
    </div>
  );
};

export default Dashboard;
