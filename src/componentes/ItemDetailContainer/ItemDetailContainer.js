import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProductById } from '../../api';
import { useParams } from 'react-router-dom'; // Importar el hook useParams

const ItemDetailContainer = ({ handleAddToCart }) => {
  const { id } = useParams(); // Obtener el parámetro "id" de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id); // Usar el "id" obtenido de useParams
        setProduct(product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  return <ItemDetail product={product} handleAddToCart={handleAddToCart} />;
};

export default ItemDetailContainer;
