# ☁️ Cloudinary Setup Guide for Five Star Rentals

## 🚨 Current Issue
The app is getting a **400 Bad Request** error when trying to upload images to Cloudinary. This usually means the upload preset is not configured correctly.

## 🔧 Step-by-Step Fix

### 1. Access Cloudinary Console
1. Go to [Cloudinary Console](https://cloudinary.com/console)
2. Sign in with your account
3. Make sure you're in the correct account

### 2. Check Your Account Details
Verify these details match your configuration:
- **Cloud Name**: `dpe0etldd`
- **API Key**: `386524736131781`
- **API Secret**: `dcb_hmGTvIcEAs7T03Jn4fklRQg`

### 3. Fix Upload Preset Issue

#### Option A: Use Existing Preset (Recommended)
1. Go to **Settings** → **Upload**
2. Scroll down to **Upload presets**
3. Look for `ml_default` preset
4. Make sure it's set to **"Unsigned"** (not "Signed")
5. If it's "Signed", change it to "Unsigned"

#### Option B: Create New Upload Preset
1. Go to **Settings** → **Upload**
2. Scroll down to **Upload presets**
3. Click **"Add upload preset"**
4. Fill in:
   - **Preset name**: `fivestar_rentals`
   - **Signing Mode**: **Unsigned**
   - **Folder**: `fivestar-rentals`
5. Click **Save**

#### Option C: Use Default Preset
1. Go to **Settings** → **Upload**
2. Look for a preset named `default` or similar
3. Make sure it's set to **"Unsigned"**

### 4. Update Environment Variables
After fixing the preset, update your `.env.local` file:

```bash
# If using existing preset
VITE_CLOUDINARY_UPLOAD_PRESET=ml_default

# If created new preset
VITE_CLOUDINARY_UPLOAD_PRESET=fivestar_rentals

# If using default preset
VITE_CLOUDINARY_UPLOAD_PRESET=default
```

### 5. Test Upload
1. Restart your development server
2. Try uploading an image again
3. Check browser console for success messages

## 🔍 Troubleshooting

### Common Issues

#### 1. "400 Bad Request" Error
- **Cause**: Upload preset is "Signed" instead of "Unsigned"
- **Solution**: Change preset to "Unsigned" in Cloudinary Console

#### 2. "Upload preset not found" Error
- **Cause**: Preset name doesn't exist
- **Solution**: Check exact preset name in Cloudinary Console

#### 3. "Permission denied" Error
- **Cause**: Preset is restricted
- **Solution**: Make sure preset allows unsigned uploads

### Debug Steps
1. Check Cloudinary Console → Settings → Upload presets
2. Verify preset name matches exactly
3. Ensure preset is set to "Unsigned"
4. Check if preset has any restrictions

## 📱 App Features

### Multiple Image Support
The app now supports:
- ✅ **Main Image**: Primary property image
- ✅ **Additional Images**: Multiple property photos
- ✅ **Bulk Upload**: Upload several images at once
- ✅ **Image Management**: Remove individual images
- ✅ **Fallback Presets**: Automatic fallback if main preset fails

### Image Validation
- **File Size**: Maximum 10MB per image
- **File Types**: JPG, JPEG, PNG, WebP
- **Auto Optimization**: Automatic format and quality optimization

## 🎯 Next Steps

1. **Fix Upload Preset**: Follow steps above
2. **Test Single Upload**: Try uploading main property image
3. **Test Multiple Uploads**: Try uploading multiple images
4. **Verify Storage**: Check Cloudinary Media Library for uploaded images

## 📞 Support

If you still have issues:
1. Check Cloudinary Console for error logs
2. Verify preset configuration
3. Test with a simple image file
4. Check browser console for detailed error messages

---

**💡 Tip**: The app now has automatic fallback presets, so if one preset fails, it will try others automatically!
