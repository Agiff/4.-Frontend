import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  )
}

export default ProductDetails
