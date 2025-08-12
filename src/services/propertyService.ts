import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Property {
  id: string;
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
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyFormData {
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

// Add a new property
export const addProperty = async (propertyData: PropertyFormData): Promise<string> => {
  try {
    const property: Omit<Property, 'id'> = {
      ...propertyData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'properties'), property);
    return docRef.id;
  } catch (error) {
    console.error('Error adding property:', error);
    throw new Error('Failed to add property');
  }
};

// Get all properties
export const getProperties = async (): Promise<Property[]> => {
  try {
    const q = query(collection(db, 'properties'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot || querySnapshot.empty) {
      console.log('No properties found');
      return [];
    }
    
    const properties = querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      // Handle potential missing or invalid data
      return {
        id: doc.id,
        title: data.title || '',
        address: data.address || '',
        price: data.price || 0,
        type: data.type || 'Apartment',
        bedrooms: data.bedrooms || 1,
        bathrooms: data.bathrooms || 1,
        parking: data.parking || 0,
        image: data.image || '',
        images: data.images || [],
        description: data.description || '',
        available: data.available || 'Available',
        features: data.features || [],
        buttonLink: data.buttonLink || '',
        createdAt: data.createdAt ? (data.createdAt as Timestamp).toDate() : new Date(),
        updatedAt: data.updatedAt ? (data.updatedAt as Timestamp).toDate() : new Date()
      } as Property;
    });
    
    return properties;
  } catch (error) {
    console.error('Error getting properties:', error);
    // Return empty array instead of throwing to prevent infinite loading
    return [];
  }
};

// Update a property
export const updateProperty = async (id: string, propertyData: Partial<PropertyFormData>): Promise<void> => {
  try {
    const propertyRef = doc(db, 'properties', id);
    await updateDoc(propertyRef, {
      ...propertyData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating property:', error);
    throw new Error('Failed to update property');
  }
};

// Delete a property
export const deleteProperty = async (id: string): Promise<void> => {
  try {
    const propertyRef = doc(db, 'properties', id);
    await deleteDoc(propertyRef);
  } catch (error) {
    console.error('Error deleting property:', error);
    throw new Error('Failed to delete property');
  }
};

// Get property by ID
export const getPropertyById = async (id: string): Promise<Property | null> => {
  try {
    const propertyRef = doc(db, 'properties', id);
    const propertyDoc = await getDocs(collection(db, 'properties'));
    
    const property = propertyDoc.docs.find(doc => doc.id === id);
    if (property) {
      return {
        id: property.id,
        ...property.data(),
        createdAt: (property.data().createdAt as Timestamp).toDate(),
        updatedAt: (property.data().updatedAt as Timestamp).toDate()
      } as Property;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting property:', error);
    throw new Error('Failed to get property');
  }
};
