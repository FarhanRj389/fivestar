import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { 
  CLOUDINARY_UPLOAD_URL, 
  CLOUDINARY_UPLOAD_PRESET, 
  DEFAULT_UPLOAD_SETTINGS,
  FALLBACK_UPLOAD_PRESETS 
} from '../../config/cloudinary';
import { addProperty, updateProperty, PropertyFormData as PropertyFormDataType } from '../../services/propertyService';

interface PropertyFormData {
  title: string;
  address: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  images: string[]; // Multiple images support
  description: string;
  available: string;
  features: string[];
  buttonLink?: string;
}

interface PropertyFormProps {
  onClose: () => void;
  onSubmit: (data: PropertyFormData) => void;
  property?: PropertyFormData & { id?: string };
  isEditing?: boolean;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ 
  onClose, 
  onSubmit, 
  property, 
  isEditing = false 
}) => {
  const [formData, setFormData] = useState<PropertyFormData>({
    title: property?.title || '',
    address: property?.address || '',
    price: property?.price || 0,
    type: property?.type || 'Apartment',
    bedrooms: property?.bedrooms || 1,
    bathrooms: property?.bathrooms || 1,
    parking: property?.parking || 0,
    image: property?.image || '',
    images: property?.images || [], // Initialize empty array for multiple images
    description: property?.description || '',
    available: property?.available || 'Available Now',
    features: property?.features || [''],
    buttonLink: property?.buttonLink || ''
  });

  const [uploading, setUploading] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [newFeature, setNewFeature] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const multipleFileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'bedrooms' || name === 'bathrooms' || name === 'parking' 
        ? parseInt(value) || 0 
        : value
    }));
  };

  // Try different upload presets if one fails
  const tryUploadWithPreset = async (file: File, preset: string): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset);
    formData.append('folder', DEFAULT_UPLOAD_SETTINGS.folder);
    // Removed transformation parameter - not allowed with unsigned uploads

    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Upload failed with preset ${preset}: ${response.statusText} - ${errorData.error?.message || ''}`);
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size
    if (file.size > DEFAULT_UPLOAD_SETTINGS.max_file_size) {
      alert(`File size must be less than ${DEFAULT_UPLOAD_SETTINGS.max_file_size / (1024 * 1024)}MB`);
      return;
    }

    // Check file type
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !DEFAULT_UPLOAD_SETTINGS.allowed_formats.includes(fileExtension)) {
      alert(`Only ${DEFAULT_UPLOAD_SETTINGS.allowed_formats.join(', ')} files are allowed`);
      return;
    }

    setUploading(true);
    try {
      // Try main preset first
      let imageUrl = '';
      try {
        imageUrl = await tryUploadWithPreset(file, CLOUDINARY_UPLOAD_PRESET);
      } catch (error) {
        console.log('Main preset failed, trying fallbacks...');
        // Try fallback presets
        for (const fallbackPreset of FALLBACK_UPLOAD_PRESETS) {
          if (fallbackPreset === CLOUDINARY_UPLOAD_PRESET) continue; // Skip main preset
          try {
            imageUrl = await tryUploadWithPreset(file, fallbackPreset);
            console.log(`Successfully uploaded with fallback preset: ${fallbackPreset}`);
            break;
          } catch (fallbackError) {
            console.log(`Fallback preset ${fallbackPreset} failed:`, fallbackError);
            continue;
          }
        }
        
        if (!imageUrl) {
          throw new Error('All upload presets failed. Please check Cloudinary configuration.');
        }
      }

      setFormData(prev => ({
        ...prev,
        image: imageUrl
      }));
      
      console.log('Image uploaded successfully:', imageUrl);
    } catch (error: any) {
      console.error('Image upload error:', error);
      alert(`Failed to upload image: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  // Handle multiple image uploads
  const handleMultipleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Validate files
    const validFiles = files.filter(file => {
      if (file.size > DEFAULT_UPLOAD_SETTINGS.max_file_size) {
        alert(`File ${file.name} is too large. Must be less than ${DEFAULT_UPLOAD_SETTINGS.max_file_size / (1024 * 1024)}MB`);
        return false;
      }
      
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!fileExtension || !DEFAULT_UPLOAD_SETTINGS.allowed_formats.includes(fileExtension)) {
        alert(`File ${file.name} format not supported. Only ${DEFAULT_UPLOAD_SETTINGS.allowed_formats.join(', ')} allowed`);
        return false;
      }
      
      return true;
    });

    if (validFiles.length === 0) return;

    setUploadingImages(true);
    const uploadedUrls: string[] = [];

    try {
      for (const file of validFiles) {
        try {
          let imageUrl = '';
          try {
            imageUrl = await tryUploadWithPreset(file, CLOUDINARY_UPLOAD_PRESET);
          } catch (error) {
            // Try fallback presets
            for (const fallbackPreset of FALLBACK_UPLOAD_PRESETS) {
              if (fallbackPreset === CLOUDINARY_UPLOAD_PRESET) continue;
              try {
                imageUrl = await tryUploadWithPreset(file, fallbackPreset);
                break;
              } catch (fallbackError) {
                continue;
              }
            }
          }
          
          if (imageUrl) {
            uploadedUrls.push(imageUrl);
            console.log(`Uploaded: ${file.name} -> ${imageUrl}`);
          }
        } catch (error: any) {
          console.error(`Failed to upload ${file.name}:`, error);
        }
      }

      if (uploadedUrls.length > 0) {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, ...uploadedUrls]
        }));
        alert(`Successfully uploaded ${uploadedUrls.length} images`);
      }
    } catch (error: any) {
      console.error('Multiple image upload error:', error);
      alert('Some images failed to upload. Please try again.');
    } finally {
      setUploadingImages(false);
    }
  };

  // Remove individual image
  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Remove main image
  const removeMainImage = () => {
    setFormData(prev => ({ ...prev, image: '' }));
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.features.length === 0 || (formData.features.length === 1 && formData.features[0] === '')) {
      alert('Please add at least one feature');
      return;
    }
    
    try {
      // Filter out empty features
      const cleanFeatures = formData.features.filter(feature => feature.trim() !== '');
      const cleanFormData = { ...formData, features: cleanFeatures };
      
      if (isEditing && property?.id) {
        // Update existing property
        await updateProperty(property.id, cleanFormData);
        console.log('Property updated successfully');
      } else {
        // Add new property
        await addProperty(cleanFormData);
        console.log('Property added successfully');
      }
      
      onSubmit(cleanFormData);
    } catch (error: any) {
      console.error('Error submitting property:', error);
      alert(`Failed to ${isEditing ? 'update' : 'add'} property. Please try again.`);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-secondary-200">
            <h2 className="text-2xl font-bold text-secondary-900">
              {isEditing ? 'Edit Property' : 'Add New Property'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-secondary-600" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Property Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter property title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter property address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Weekly Rent ($) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Studio">Studio</option>
                  </select>
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      min="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      min="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Parking
                    </label>
                    <input
                      type="number"
                      name="parking"
                      value={formData.parking}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Availability *
                  </label>
                  <select
                    name="available"
                    value={formData.available}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  >
                    <option value="Your Status">Your Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Button Link (Optional)
                  </label>
                  <input
                    type="url"
                    name="buttonLink"
                    value={formData.buttonLink}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Property Image *
              </label>
              <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center">
                {formData.image ? (
                  <div className="space-y-4">
                    <img
                      src={formData.image}
                      alt="Property preview"
                      className="w-full h-48 object-cover rounded-lg mx-auto"
                    />
                    <button
                      type="button"
                      onClick={removeMainImage}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-secondary-400 mx-auto" />
                    <div>
                      <p className="text-secondary-600">
                        {uploading ? 'Uploading...' : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-sm text-secondary-500">PNG, JPG up to 10MB</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
                    >
                      {uploading ? 'Uploading...' : 'Choose File'}
                    </button>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Multiple Image Upload */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Additional Images (Optional)
              </label>
              <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center">
                {formData.images.length === 0 ? (
                  <div className="space-y-4">
                    <ImageIcon className="w-12 h-12 text-secondary-400 mx-auto" />
                    <div>
                      <p className="text-secondary-600">
                        {uploadingImages ? 'Uploading images...' : 'Click to upload multiple images'}
                      </p>
                      <p className="text-sm text-secondary-500">PNG, JPG up to 10MB</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => multipleFileInputRef.current?.click()}
                      disabled={uploadingImages}
                      className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
                    >
                      {uploadingImages ? 'Uploading...' : 'Choose Files'}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {formData.images.map((imageUrl, index) => (
                        <div key={index} className="relative">
                          <img
                            src={imageUrl}
                            alt={`Property image ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                            title="Remove image"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => multipleFileInputRef.current?.click()}
                      disabled={uploadingImages}
                      className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 mt-4"
                    >
                      {uploadingImages ? 'Uploading...' : 'Add More Images'}
                    </button>
                  </div>
                )}
                <input
                  ref={multipleFileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleMultipleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Describe the property..."
                required
              />
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Features *
              </label>
              <div className="space-y-3">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...formData.features];
                        newFeatures[index] = e.target.value;
                        setFormData(prev => ({ ...prev, features: newFeatures }));
                      }}
                      className="flex-1 px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter feature"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    className="flex-1 px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Add new feature"
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="p-2 bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-secondary-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200"
              >
                {isEditing ? 'Update Property' : 'Add Property'}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PropertyForm;
