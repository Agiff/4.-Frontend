import React from 'react'
import Button from '../components/Button'
import DefaultLayout from '../layouts/DefaultLayout'
import { NavLink } from 'react-router'

const NotFound = () => {
  /*
    Using NavLink
  */

  return (
    <DefaultLayout>
      <h1 className='text-5xl font-semibold mb-10'>Page not found..</h1>
      <NavLink to={'/'}>
        <Button>Back to Home</Button>
      </NavLink>
    </DefaultLayout>
  )
}

export default NotFound
