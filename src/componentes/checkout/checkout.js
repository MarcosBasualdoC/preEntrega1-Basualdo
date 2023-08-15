import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const createCheckout = async (checkoutData) => {
    try {
        const checkoutRef = collection(db, 'checkout');
        const docRef = await addDoc(checkoutRef, checkoutData);
        return docRef.id;
    } catch (error) {
        console.error('Error al crear el checkout:', error);
        throw error;
    }
};
