import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useParams } from 'react-router-dom'; 

const ItemDetailContainer = ({ handleAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'items', id); 
        const docSnapshot = await getDoc(productRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setProduct(data);
        } else {
          console.error('Producto no encontrado');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  return <ItemDetail product={product} handleAddToCart={handleAddToCart} />;
};

export default ItemDetailContainer;
