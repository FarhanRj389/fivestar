// Cloudinary Configuration
export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dpe0etldd',
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '386524736131781',
  apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET || 'dcb_hmGTvIcEAs7T03Jn4fklRQg'
};

// Upload presets and settings
export const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'fivestar_rentals';
export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dpe0etldd';

// Cloudinary upload URL
export const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// Default upload settings (removed transformation parameter for unsigned uploads)
export const DEFAULT_UPLOAD_SETTINGS = {
  folder: 'fivestar-rentals',
  allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  max_file_size: 10 * 1024 * 1024 // 10MB
};

// Fallback upload presets (using the correct preset name)
export const FALLBACK_UPLOAD_PRESETS = [
  'fivestar_rentals', // Main preset (correct name)
  'ml_default',        // Alternative preset
  'digitroncx0'        // Another existing preset
];
