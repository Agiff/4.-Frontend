import React, { useEffect, useState } from 'react'
import Button from '../components/Button';

const Home = () => {
  const [products, setProducts] = useState(
    {
      id: 1,
      name: 'Laptop',
      price: 1000
    });
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Javascript Developer Class');
  }, [count])

  useEffect(() => {
    console.log(products);
  }, [products])
  
  const handleChangeProduct = (name, price) => {
    setProducts({
      ...products,
      name,
      price
    })
  }

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <h1>{count}</h1>
      <Button onClick={handleCount}>
        Increment
      </Button>
      <Button onClick={() => handleChangeProduct('Gorengan', 1000)} variant='secondary'>
        Change Product
      </Button>
    </div>
  )
}

export default Home
