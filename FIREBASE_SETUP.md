# Firebase Setup Guide for Five Star Rentals

## 🔥 Firebase Project Configuration

### 1. Firebase Console Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `fivestarrentals-78855`
3. Make sure you're in the correct project

### 2. Authentication Setup
1. Go to **Authentication** → **Sign-in method**
2. Enable **Email/Password** authentication
3. Click **Save**

### 3. Firestore Database Setup
1. Go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (for development)
4. Select a location (choose closest to your users)
5. Click **Done**

### 4. Storage Setup
1. Go to **Storage**
2. Click **Get started**
3. Choose **Start in test mode** (for development)
4. Select a location (same as Firestore)
5. Click **Done**

## 📋 Database Rules

### Firestore Rules (firestore.rules)
Copy the contents of `firestore.rules` file to your Firebase Console:
1. Go to **Firestore Database** → **Rules**
2. Replace existing rules with the content from `firestore.rules`
3. Click **Publish**

### Storage Rules (storage.rules)
Copy the contents of `storage.rules` file to your Firebase Console:
1. Go to **Storage** → **Rules**
2. Replace existing rules with the content from `storage.rules`
3. Click **Publish**

## 🔐 User Account Setup

### Option 1: Create Account Through App (Recommended)
1. Go to your app's login page
2. Click **"Don't have an account? Create One"**
3. Use: `info@fivestarrentals.co.nz` / `fivestar123`
4. Click **Create Account**

### Option 2: Create Account in Firebase Console
1. Go to **Authentication** → **Users**
2. Click **Add user**
3. Enter:
   - Email: `info@fivestarrentals.co.nz`
   - Password: `fivestar123`
4. Click **Add user**

## 🌐 Domain Configuration

### Current Setup
- **Firebase Project**: `fivestarrentals-78855`
- **Firebase Auth Domain**: `fivestarrentals-78855.firebaseapp.com`
- **Your Domain**: `fivestarrentals.co.nz`

### Important Notes
- The Firebase auth domain is different from your website domain
- This is normal and correct
- Users will authenticate through Firebase's domain
- Your app will work with your domain `fivestarrentals.co.nz`

## 🚀 Testing the Setup

### 1. Test Authentication
1. Go to `/login` in your app
2. Try to create account with `info@fivestarrentals.co.nz`
3. If successful, you should be redirected to `/dashboard`

### 2. Test Database
1. After login, go to dashboard
2. Try to add a property
3. Check Firebase Console → Firestore to see if data is saved

### 3. Test Storage
1. Try to upload an image when adding a property
2. Check Firebase Console → Storage to see if files are uploaded

## 🔧 Troubleshooting

### Common Issues

#### 1. "auth/invalid-credential" Error
- **Cause**: User account doesn't exist
- **Solution**: Create account first using the signup option

#### 2. "Permission denied" Error
- **Cause**: Database rules are too restrictive
- **Solution**: Check if you've published the correct rules

#### 3. "Network error" Error
- **Cause**: Firebase project not properly configured
- **Solution**: Verify project ID and API key in your config

### Debug Steps
1. Check browser console for error messages
2. Verify Firebase project ID matches
3. Ensure Authentication is enabled
4. Check if Firestore and Storage are created
5. Verify rules are published

## 📱 App Configuration

### Current Email
- **Login Email**: `info@fivestarrentals.co.nz`
- **Password**: `fivestar123`

### Firebase Config
All Firebase configuration is in `src/config/firebase.ts`
- API Key: ✅ Configured
- Project ID: ✅ Configured
- Auth Domain: ✅ Configured

## 🎯 Next Steps

1. **Complete Firebase Setup** (follow steps above)
2. **Test Authentication** (create account)
3. **Test Property Management** (add/edit properties)
4. **Test Image Uploads** (verify Cloudinary integration)
5. **Deploy Rules** (publish Firestore and Storage rules)

## 📞 Support

If you encounter issues:
1. Check the debug info in the login form
2. Review Firebase Console for errors
3. Check browser console for detailed error messages
4. Verify all setup steps are completed

---

**Note**: Keep your Firebase API keys secure. Never commit them to public repositories.
