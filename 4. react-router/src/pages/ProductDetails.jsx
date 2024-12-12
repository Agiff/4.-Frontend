import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(data);
    })()
  }, [])
  

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="" />
    </div>
  )
}

export default ProductDetails
