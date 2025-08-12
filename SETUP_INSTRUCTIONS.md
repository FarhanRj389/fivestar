# 🚀 Five Star Rentals - Complete Setup Instructions

## 📋 Prerequisites
- Node.js installed (version 16 or higher)
- npm or yarn package manager
- Firebase project created
- Cloudinary account set up

## 🔥 Step 1: Firebase Setup

### 1.1 Firebase Console Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: `fivestarrentals-78855`
3. Enable services:
   - **Authentication** → Sign-in method → Email/Password → Enable
   - **Firestore Database** → Create database → Start in test mode
   - **Storage** → Get started → Start in test mode

### 1.2 Apply Database Rules
1. **Firestore Rules**: Go to Firestore → Rules, paste content from `firestore.rules`
2. **Storage Rules**: Go to Storage → Rules, paste content from `storage.rules`
3. Click **Publish** for both

### 1.3 Create Admin User
1. Go to Authentication → Users → Add user
2. Email: `info@fivestarrentals.co.nz`
3. Password: `fivestar123`
4. Click **Add user**

## ☁️ Step 2: Cloudinary Setup

### 2.1 Cloudinary Configuration
1. Go to [Cloudinary Console](https://cloudinary.com/console)
2. Verify your account details:
   - Cloud Name: `dpe0etldd`
   - API Key: `386524736131781`
   - API Secret: `dcb_hmGTvIcEAs7T03Jn4fklRQg`

### 2.2 Upload Preset
1. Go to Settings → Upload
2. Scroll to Upload presets
3. Make sure `ml_default` preset exists and is set to "Unsigned"

## 📁 Step 3: Environment Variables

### 3.1 Create .env.local File
1. In your project root, create a file named `.env.local`
2. Copy the content from `ENV_LOCAL_CONTENT.txt`
3. Save the file

### 3.2 Verify Environment Variables
Your `.env.local` should contain:
```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyDcfLFqFYrqkDNdXPhmgeTOZx0UfGvc9AI
VITE_FIREBASE_AUTH_DOMAIN=fivestarrentals-78855.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=fivestarrentals-78855
VITE_FIREBASE_STORAGE_BUCKET=fivestarrentals-78855.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1081476639124
VITE_FIREBASE_APP_ID=1:1081476639124:web:27d627f674b661da088781
VITE_FIREBASE_MEASUREMENT_ID=G-7L653PDMEV

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=dpe0etldd
VITE_CLOUDINARY_API_KEY=386524736131781
VITE_CLOUDINARY_API_SECRET=dcb_hmGTvIcEAs7T03Jn4fklRQg
VITE_CLOUDINARY_UPLOAD_PRESET=ml_default

# App Configuration
VITE_APP_DOMAIN=fivestarrentals.co.nz
VITE_ADMIN_EMAIL=info@fivestarrentals.co.nz
VITE_APP_NAME=Five Star Rentals
VITE_APP_VERSION=1.0.0

# Development Settings
VITE_APP_ENV=development
VITE_DEBUG_MODE=true
VITE_LOG_LEVEL=debug
```

## 🛠️ Step 4: Install Dependencies

### 4.1 Install Packages
```bash
npm install
```

### 4.2 Verify Dependencies
Make sure these packages are installed:
- `firebase` - Firebase SDK
- `cloudinary` - Cloudinary SDK
- `lucide-react` - Icons
- `framer-motion` - Animations
- `react-router-dom` - Routing

## 🚀 Step 5: Start the Application

### 5.1 Development Mode
```bash
npm run dev
```

### 5.2 Access the App
1. Open browser and go to the URL shown in terminal
2. Navigate to `/login`
3. Use credentials:
   - Email: `info@fivestarrentals.co.nz`
   - Password: `fivestar123`

## 🧪 Step 6: Testing

### 6.1 Test Authentication
1. Go to `/login`
2. Try to sign in with existing credentials
3. If it fails, click "Don't have an account? Create One"
4. Create account with the same credentials

### 6.2 Test Dashboard
1. After login, you should be redirected to `/dashboard`
2. Check if you can see the dashboard interface
3. Verify tabs: Properties and Button Customization

### 6.3 Test Property Management
1. Click "Add Property" button
2. Fill in property details
3. Upload an image (should go to Cloudinary)
4. Submit the form
5. Check if property appears in the list

### 6.4 Test Public Properties Page
1. Go to `/properties` (public page)
2. Check if properties are displayed
3. Verify images are loading from Cloudinary

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. "Firebase not initialized" Error
- **Solution**: Check if `.env.local` file exists and has correct values
- **Check**: Browser console for Firebase initialization logs

#### 2. "Authentication failed" Error
- **Solution**: Verify Firebase Authentication is enabled
- **Check**: Firebase Console → Authentication → Sign-in method

#### 3. "Permission denied" Error
- **Solution**: Apply Firestore and Storage rules
- **Check**: Firebase Console → Rules sections

#### 4. "Image upload failed" Error
- **Solution**: Verify Cloudinary configuration
- **Check**: Cloudinary Console → Settings → Upload presets

#### 5. "Environment variables not working"
- **Solution**: Restart development server after creating `.env.local`
- **Check**: File is named exactly `.env.local` (not `.env.local.txt`)

### Debug Steps
1. Check browser console for error messages
2. Verify all environment variables are loaded
3. Check Firebase Console for authentication logs
4. Verify Cloudinary upload preset is set to "Unsigned"

## 📱 App Features

### Dashboard Features
- ✅ User Authentication (Login/Signup)
- ✅ Property Management (Add/Edit/Delete)
- ✅ Image Upload to Cloudinary
- ✅ Button Customization
- ✅ Search and Filter Properties

### Public Features
- ✅ Properties Listing Page
- ✅ Responsive Design
- ✅ Image Display from Cloudinary
- ✅ Property Details and Features

## 🎯 Next Steps After Setup

1. **Add Sample Properties**: Create 2-3 sample properties to test the system
2. **Test Image Uploads**: Upload different image formats and sizes
3. **Configure Button Links**: Set up button customization for properties
4. **Test Responsiveness**: Check app on different screen sizes
5. **Deploy to Production**: When ready, deploy to your hosting platform

## 📞 Support

If you encounter issues:
1. Check the debug info in the login form
2. Review browser console for error messages
3. Verify all setup steps are completed
4. Check Firebase and Cloudinary console logs

---

**🎉 Congratulations!** Your Five Star Rentals dashboard is now set up and ready to use!
