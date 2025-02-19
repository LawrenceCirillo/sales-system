import { db } from '../config/firebase';
import { 
  collection,
  addDoc,
  getDocs,
  query,
  where 
} from 'firebase/firestore';

export const dbService = {
  // Add a new sale
  async addSale(saleData) {
    try {
      const docRef = await addDoc(collection(db, 'sales'), saleData);
      return docRef.id;
    } catch (error) {
      throw error;
    }
  },

  // Get sales for a user
  async getUserSales(userId) {
    try {
      const q = query(collection(db, 'sales'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      throw error;
    }
  }
}; 