import React, { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';

const Properties: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');

  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Ponsonby",
      address: "123 Ponsonby Road, Ponsonby",
      price: 650,
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Stylish modern apartment in the heart of Ponsonby with city views and premium finishes.",
      available: "Available Now",
      features: ["City Views", "Modern Kitchen", "Balcony", "Close to Transport"]
    },
    {
      id: 2,
      title: "Family Home in Remuera",
      address: "456 Remuera Road, Remuera",
      price: 950,
      type: "House",
      bedrooms: 4,
      bathrooms: 2,
      parking: 2,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Spacious family home with large garden, perfect for families with children.",
      available: "Available 15 Jan",
      features: ["Large Garden", "Double Garage", "Study Room", "Near Schools"]
    },
    {
      id: 3,
      title: "Luxury Townhouse in Parnell",
      address: "789 Parnell Rise, Parnell",
      price: 1200,
      type: "Townhouse",
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      image: "https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Contemporary townhouse with premium finishes and harbour glimpses.",
      available: "Available Now",
      features: ["Harbour Views", "Premium Finishes", "Courtyard", "Security System"]
    },
    {
      id: 4,
      title: "Studio in Auckland CBD",
      address: "321 Queen Street, Auckland CBD",
      price: 450,
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      parking: 0,
      image: "https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Compact studio apartment perfect for professionals working in the city.",
      available: "Available 1 Feb",
      features: ["City Location", "Furnished", "Gym Access", "Concierge"]
    },
    {
      id: 5,
      title: "Waterfront Apartment in Mission Bay",
      address: "567 Tamaki Drive, Mission Bay",
      price: 850,
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      image: "https://images.pexels.com/photos/1396128/pexels-photo-1396128.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Stunning waterfront apartment with panoramic harbour views and beach access.",
      available: "Available Now",
      features: ["Waterfront", "Beach Access", "Panoramic Views", "Pool"]
    },
    {
      id: 6,
      title: "Character Villa in Grey Lynn",
      address: "890 Richmond Road, Grey Lynn",
      price: 750,
      type: "House",
      bedrooms: 3,
      bathrooms: 1,
      parking: 1,
      image: "https://images.pexels.com/photos/1396135/pexels-photo-1396135.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Beautifully restored character villa with original features and modern amenities.",
      available: "Available 20 Jan",
      features: ["Character Features", "Restored", "Large Deck", "Quiet Street"]
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Property Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {property.available}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-secondary-600" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Eye className="w-5 h-5 text-secondary-600" />
                    </button>
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
                    <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-500 text-black py-2 px-4 rounded-lg font-medium hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Book Viewing</span>
                    </button>
                    <button className="bg-secondary-100 text-secondary-700 py-2 px-4 rounded-lg font-medium hover:bg-secondary-200 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
    </motion.div>
  );
};

export default Properties;