import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, MapPin, Bed, Bath, Car, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../../services/propertyService';

interface PropertyListProps {
  properties: Property[];
  onEdit: (property: Property) => void;
  onDelete: (propertyId: string) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, onEdit, onDelete }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

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
  if (properties.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16 bg-white rounded-lg shadow-sm border border-secondary-200"
      >
        <div className="text-6xl mb-4">🏠</div>
        <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
          No Properties Found
        </h3>
        <p className="text-secondary-600">
          Start by adding your first property using the "Add Property" button above.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          {/* Property Image Slider */}
          <div className="relative h-48 overflow-hidden">
            {(() => {
              const allImages = [property.image, ...(property.images || [])];
              const currentIndex = currentImageIndex[property.id] || 0;
              const currentImage = allImages[currentIndex] || property.image;
              
              return (
                <>
                  <img
                    src={currentImage}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Navigation */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(property.id, allImages.length);
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(property.id, allImages.length);
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
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
            <div className="absolute top-3 left-3">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                {property.available}
              </span>
            </div>
            <div className="absolute top-3 right-3 flex space-x-2">
              <button
                onClick={() => onEdit(property)}
                className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                title="Edit Property"
              >
                <Edit className="w-4 h-4 text-secondary-600" />
              </button>
              <button
                onClick={() => onDelete(property.id)}
                className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                title="Delete Property"
              >
                <Trash2 className="w-4 h-4 text-red-600" />
              </button>
            </div>
          </div>

          {/* Property Details */}
          <div className="p-5">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-secondary-900 line-clamp-2">
                {property.title}
              </h3>
              <div className="text-right ml-3">
                <div className="text-xl font-bold text-yellow-500">
                  ${property.price}
                </div>
                <div className="text-sm text-secondary-500">per week</div>
              </div>
            </div>

            <div className="flex items-center text-secondary-600 mb-3">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm line-clamp-1">{property.address}</span>
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

            <div className="flex flex-wrap gap-2 mb-4">
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

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(property)}
                className="flex-1 bg-yellow-500 text-black py-2 px-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors text-sm flex items-center justify-center space-x-1"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => onDelete(property.id)}
                className="bg-red-500 text-white py-2 px-3 rounded-lg font-medium hover:bg-red-600 transition-colors text-sm flex items-center justify-center space-x-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>

            {/* Button Link Info */}
            {property.buttonLink && (
              <div className="mt-3 pt-3 border-t border-secondary-100">
                <p className="text-xs text-secondary-500">
                  Button Link: {property.buttonLink}
                </p>
              </div>
            )}

            {/* Created Date */}
            <div className="mt-3 pt-3 border-t border-secondary-100">
              <p className="text-xs text-secondary-500">
                Added: {property.createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PropertyList;
