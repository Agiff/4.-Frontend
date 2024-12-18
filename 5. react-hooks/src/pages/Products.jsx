import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  return (
    <div className='min-h-screen flex flex-col flex-wrap justify-center items-center gap-20'>
      {(
        products.map(product => 
          <div key={product.id} className='bg-slate-600 min-h-80 min-w-80'>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.price}</p>
            <Button onClick={() => navigate(`${product.id}`)}>View Product</Button>
          </div>
        )
      )}
    </div>
  )
}

export default Products
