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

export interface ButtonConfig {
  id?: string;
  name: string;
  link: string;
  isActive: boolean;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ButtonFormData {
  name: string;
  link: string;
  description?: string;
}

// Add a new button configuration
export const addButton = async (buttonData: ButtonFormData): Promise<string> => {
  try {
    const button: Omit<ButtonConfig, 'id'> = {
      ...buttonData,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'buttonConfigs'), button);
    return docRef.id;
  } catch (error) {
    console.error('Error adding button:', error);
    throw new Error('Failed to add button');
  }
};

// Get all button configurations
export const getButtons = async (): Promise<ButtonConfig[]> => {
  try {
    const q = query(collection(db, 'buttonConfigs'), orderBy('createdAt', 'asc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: (doc.data().createdAt as Timestamp).toDate(),
      updatedAt: (doc.data().updatedAt as Timestamp).toDate()
    })) as ButtonConfig[];
  } catch (error) {
    console.error('Error getting buttons:', error);
    throw new Error('Failed to get buttons');
  }
};

// Update a button configuration
export const updateButton = async (id: string, buttonData: Partial<ButtonConfig>): Promise<void> => {
  try {
    const buttonRef = doc(db, 'buttonConfigs', id);
    await updateDoc(buttonRef, {
      ...buttonData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating button:', error);
    throw new Error('Failed to update button');
  }
};

// Delete a button configuration
export const deleteButton = async (id: string): Promise<void> => {
  try {
    const buttonRef = doc(db, 'buttonConfigs', id);
    await deleteDoc(buttonRef);
  } catch (error) {
    console.error('Error deleting button:', error);
    throw new Error('Failed to delete button');
  }
};

// Toggle button active status
export const toggleButtonActive = async (id: string, isActive: boolean): Promise<void> => {
  try {
    const buttonRef = doc(db, 'buttonConfigs', id);
    await updateDoc(buttonRef, {
      isActive,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error toggling button:', error);
    throw new Error('Failed to toggle button');
  }
};
