import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productCollection = collection(db, 'items');

        if (id) {
          const q = query(productCollection, where('categoryId', '==', id));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => doc.data());
          setProducts(data);
        } else {
          const querySnapshot = await getDocs(productCollection);
          const data = querySnapshot.docs.map((doc) => doc.data());
          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
