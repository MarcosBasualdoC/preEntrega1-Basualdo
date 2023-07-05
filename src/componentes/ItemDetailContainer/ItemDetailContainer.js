import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../../api'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) {
    return <div>Cargando producto...</div>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
