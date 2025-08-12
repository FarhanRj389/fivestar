# Five Star Rentals - Property Management Dashboard

A comprehensive property management system built with React, TypeScript, Firebase, and Cloudinary for Five Star Rentals.

## Features

### 🏠 Property Management
- Add, edit, and delete rental properties
- Image upload with Cloudinary integration
- Property details including bedrooms, bathrooms, parking
- Availability status management
- Property features and descriptions

### 🎨 Button Customization
- Customize button links for each property
- Support for URLs, phone numbers, and email addresses
- Active/inactive button states
- Easy management of call-to-action buttons

### 🔐 Authentication
- Secure login with Firebase Authentication
- Email/password authentication
- Protected dashboard routes

### 📱 Responsive Design
- Mobile-first responsive design
- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Image Storage**: Cloudinary
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Build Tool**: Vite

## Prerequisites

- Node.js 16+ and npm
- Firebase project with Firestore enabled
- Cloudinary account

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fivestar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional required packages**
   ```bash
   npm install firebase cloudinary react-cloudinary @types/react-cloudinary
   ```

## Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Enable Firestore Database
4. Get your Firebase config from Project Settings

Update `src/config/firebase.ts` with your Firebase credentials:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

### Cloudinary Setup

1. Create a Cloudinary account at [Cloudinary](https://cloudinary.com/)
2. Get your cloud name, API key, and API secret

Update `src/config/cloudinary.ts` with your Cloudinary credentials:

```typescript
export const cloudinaryConfig = {
  cloudName: 'your-cloud-name',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
};
```

### Default Login Credentials

The system comes with pre-configured login credentials:
- **Email**: info@fivestarrentals.co.nz
- **Password**: fivestar123

## Usage

### Starting the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Accessing the Dashboard

1. Navigate to `/login` to access the admin login
2. Use the default credentials or your custom ones
3. After successful login, you'll be redirected to `/dashboard`

### Adding Properties

1. In the dashboard, click "Add Property"
2. Fill in all required fields
3. Upload property images (automatically stored in Cloudinary)
4. Add property features
5. Set availability status
6. Save the property

### Managing Button Links

1. Go to "Button Customization" tab in the dashboard
2. Add new button configurations
3. Set button names, links, and descriptions
4. Toggle active/inactive states
5. Edit or delete existing buttons

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── PropertyForm.tsx      # Property add/edit form
│   │   ├── PropertyList.tsx      # Properties display in dashboard
│   │   └── ButtonCustomization.tsx # Button management
│   ├── Header.tsx                # Main navigation header
│   ├── Footer.tsx                # Site footer
│   └── ...
├── config/
│   ├── firebase.ts               # Firebase configuration
│   └── cloudinary.ts             # Cloudinary configuration
├── contexts/
│   └── AuthContext.tsx           # Authentication context
├── pages/
│   ├── Dashboard.tsx             # Main admin dashboard
│   ├── Login.tsx                 # Admin login page
│   ├── Properties.tsx            # Public properties page
│   └── ...
├── services/
│   ├── propertyService.ts        # Property CRUD operations
│   └── buttonService.ts          # Button configuration management
└── ...
```

## Firebase Collections

### Properties Collection
```typescript
interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  description: string;
  available: string;
  features: string[];
  buttonLink?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Button Configurations Collection
```typescript
interface ButtonConfig {
  id: string;
  name: string;
  link: string;
  isActive: boolean;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

## Security Rules

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Properties collection
    match /properties/{document} {
      allow read: if true;  // Public read access
      allow write: if request.auth != null;  // Authenticated users only
    }
    
    // Button configurations
    match /buttonConfigs/{document} {
      allow read: if true;  // Public read access
      allow write: if request.auth != null;  // Authenticated users only
    }
  }
}
```

## Troubleshooting

### Common Issues

1. **Firebase Connection Error**
   - Verify Firebase config in `src/config/firebase.ts`
   - Check if Firestore is enabled in Firebase Console

2. **Image Upload Failures**
   - Verify Cloudinary credentials
   - Check upload preset configuration

3. **Authentication Issues**
   - Ensure Email/Password auth is enabled in Firebase
   - Verify user credentials

### Performance Tips

- Images are automatically optimized by Cloudinary
- Use appropriate image sizes for property photos
- Enable Firebase caching for better performance

## Support

For technical support or questions:
- Email: admin@fivestarrentals.co.nz
- Phone: +64 204 574 96

## License

This project is proprietary software developed for Five Star Rentals.

---

**Note**: This dashboard is designed specifically for Five Star Rentals property management needs. Custom modifications may be required for other use cases.
