import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Car, 
  DollarSign,
  Search,
  Filter,
  Heart,
  Eye,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Target,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { getProperties, Property as PropertyType } from '../services/propertyService';
import { Link } from 'react-router-dom';

const Properties: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});
  const [selectedProperty, setSelectedProperty] = useState<PropertyType | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const loadProperties = async () => {
      try {
        if (isMounted) {
          setLoading(true);
        }
        
        // Add timeout to prevent infinite loading on iOS
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Request timeout')), 15000);
        });
        
        const fetchedProperties = await Promise.race([
          getProperties(),
          timeoutPromise
        ]) as PropertyType[];
        
        if (isMounted) {
          setProperties(fetchedProperties || []);
        }
      } catch (error) {
        console.error('Error loading properties:', error);
        if (isMounted) {
          // Set empty array on error to prevent infinite loading
          setProperties([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProperties();
    
    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  const nextImage = (propertyId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (propertyId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const handleDetailsClick = (property: PropertyType) => {
    setSelectedProperty(property);
    setShowDetailsModal(true);
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === '0-500' && property.price <= 500) ||
                        (priceRange === '500-800' && property.price > 500 && property.price <= 800) ||
                        (priceRange === '800-1200' && property.price > 800 && property.price <= 1200) ||
                        (priceRange === '1200+' && property.price > 1200);
    
    const matchesType = propertyType === 'all' || property.type.toLowerCase() === propertyType.toLowerCase();
    
    const matchesBedrooms = bedrooms === 'all' || 
                           (bedrooms === '1' && property.bedrooms === 1) ||
                           (bedrooms === '2' && property.bedrooms === 2) ||
                           (bedrooms === '3' && property.bedrooms === 3) ||
                           (bedrooms === '4+' && property.bedrooms >= 4);
    
    return matchesSearch && matchesPrice && matchesType && matchesBedrooms;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=' relative -top-24'
    >
      {/* Hero Section */}
      <section className="py-40 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
        <div className='absolute z-0 w-ful top-0 right-0 left-0'>
          <img src="/banner_5.jpg" alt="banner" className=" w-full h-[600px] lg:h-[630px] object-cover"/>
          {/* <video
            className=" w-full h-[300px] lg:h-[630px] object-cover"
            src="/banner_video_1.mp4"
            autoPlay
            loop
            muted
            playsInline
          /> */}
          <div className="absolute  z-10 inset-0 bg-black/30">
          </div>

         
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Current Properties
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 max-w-3xl mx-auto leading-relaxed">
              Discover quality rental properties across Auckland, professionally managed by Five Star Rentals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-secondary-50 p-6 rounded-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by location or property name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="0-500">$0 - $500</option>
                  <option value="500-800">$500 - $800</option>
                  <option value="800-1200">$800 - $1200</option>
                  <option value="1200+">$1200+</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="studio">Studio</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">Any Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4+">4+ Bedrooms</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-secondary-900">
              {filteredProperties.length} Properties Available
            </h2>
            <div className="flex items-center space-x-2 text-secondary-600">
              <Filter className="w-5 h-5" />
              <span>Filtered Results</span>
            </div>
          </div>

          {loading ? (
            <div className="col-span-full text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
              <p className="mt-4 text-secondary-600">Loading properties...</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Property Image Slider */}
                <div className="relative overflow-hidden h-64">
                  {(() => {
                    const allImages = [property.image, ...(property.images || [])];
                    const currentIndex = currentImageIndex[property.id] || 0;
                    const currentImage = allImages[currentIndex] || property.image;
                    
                    return (
                      <>
                        <img
                          src={currentImage}
                          alt={property.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Image Navigation */}
                        {allImages.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(property.id, allImages.length);
                              }}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage(property.id, allImages.length);
                              }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                            
                            {/* Image Indicators */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                              {allImages.map((_, idx) => (
                                <div
                                  key={idx}
                                  className={`w-2 h-2 rounded-full ${
                                    idx === currentIndex ? 'bg-white' : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()}
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {property.available}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-yellow-500 transition-colors">
                      {property.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-500">
                        ${property.price}
                      </div>
                      <div className="text-sm text-secondary-500">per week</div>
                    </div>
                  </div>

                  <div className="flex items-center text-secondary-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.address}</span>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-secondary-600">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.parking}</span>
                    </div>
                  </div>

                  <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 3 && (
                      <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-xs">
                        +{property.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <Link to={`${property.buttonLink}`} target="_blank">
                    <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Book Viewing</span>
                    </button>
                    </Link>
                    <button 
                      onClick={() => handleDetailsClick(property)}
                      className="bg-secondary-100 text-secondary-700 py-2 px-4 rounded-lg font-medium hover:bg-secondary-200 transition-colors flex items-center space-x-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          )}

          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                No Properties Found
              </h3>
              <p className="text-secondary-600 mb-6">
                Try adjusting your search criteria to find more properties.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange('all');
                  setPropertyType('all');
                  setBedrooms('all');
                }}
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Our team is here to help you find the perfect rental property. Contact us today and let us know your requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+6420457496"
                className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
              
              <a
                href="mailto:admin@fivestarrentals.co.nz"
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-200 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Details Modal */}
      {showDetailsModal && selectedProperty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-secondary-200">
              <h2 className="text-2xl font-bold text-secondary-900">
                Property Details
              </h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-secondary-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Property Images */}
              <div className="mb-6">
                <div className="relative h-80 rounded-xl overflow-hidden mb-4">
                  {(() => {
                    const allImages = [selectedProperty.image, ...(selectedProperty.images || [])];
                    const currentIndex = currentImageIndex[selectedProperty.id] || 0;
                    const currentImage = allImages[currentIndex] || selectedProperty.image;
                    
                    return (
                      <>
                        <img
                          src={currentImage}
                          alt={selectedProperty.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Image Navigation */}
                        {allImages.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(selectedProperty.id, allImages.length)}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => nextImage(selectedProperty.id, allImages.length)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            
                            {/* Image Counter */}
                            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                              {currentIndex + 1} / {allImages.length}
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()}
                </div>
                
                {/* Image Thumbnails */}
                {(() => {
                  const allImages = [selectedProperty.image, ...(selectedProperty.images || [])];
                  if (allImages.length > 1) {
                    return (
                      <div className="flex space-x-2 overflow-x-auto pb-2">
                        {allImages.map((image, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [selectedProperty.id]: idx }))}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                              (currentImageIndex[selectedProperty.id] || 0) === idx 
                                ? 'border-yellow-500' 
                                : 'border-secondary-200'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${selectedProperty.title} ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>

              {/* Property Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {selectedProperty.title}
                  </h3>
                  <div className="flex items-center text-secondary-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{selectedProperty.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-6 text-secondary-600">
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 mr-2" />
                      <span>{selectedProperty.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 mr-2" />
                      <span>{selectedProperty.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="w-5 h-5 mr-2" />
                      <span>{selectedProperty.parking} Parking</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-2">Description</h4>
                    <p className="text-secondary-600 leading-relaxed">
                      {selectedProperty.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProperty.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-secondary-50 p-6 rounded-xl mb-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-yellow-500">
                        ${selectedProperty.price}
                      </div>
                      <div className="text-secondary-500">per week</div>
                    </div>
                    
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProperty.available === 'Available' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedProperty.available}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <Link to={`${selectedProperty.buttonLink}`} target="_blank" className="block">
                        <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-500 text-black py-3 px-4 rounded-lg font-medium hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 flex items-center justify-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span>Book Viewing</span>
                        </button>
                      </Link>
                      
                      <a href="tel:+6420457496" className="block">
                        <button className="w-full border-2 border-secondary-300 text-secondary-700 py-3 px-4 rounded-lg font-medium hover:bg-secondary-50 transition-colors flex items-center justify-center space-x-2">
                          <Phone className="w-5 h-5" />
                          <span>Call Now</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Properties;