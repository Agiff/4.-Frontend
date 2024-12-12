import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import Button from '../components/Button'
import { useNavigate } from 'react-router'
import axios from 'axios';

const Dashboard = () => {
  /*
    Using useNavigate
  */

  const navigate = useNavigate();

  const homeHandler = () => {
    console.log('Going to home');
    navigate('/');
  }

  const checkProductsHandler = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log(data);
  }

  return (
    <DefaultLayout>
      <h1 className='text-3xl'>Dashboard</h1>
      <Button variant='secondary' onClick={homeHandler}>Home</Button>
      <Button onClick={checkProductsHandler}>Check Products</Button>
    </DefaultLayout>
  )
}

export default Dashboard
