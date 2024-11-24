import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    < >
      <Header/>
      <div style={{paddingTop:'100px',height:'80vh'}} className='flex justify-center items-center flex-col'>
        <h1 className='font-bold text-4xl mb-2'>404</h1>
        <img width={'300px'} src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg" alt="" />
        <h1 className='font-bold text-4xl mb-2'>Look like you're Lost!!!</h1>
        <p className='mb-2'>The Page you looking For is not found!!!!</p>
        <Link to={'/'} className='bg-blue-600 p-2 text-center rounded' >Home</Link>
      </div>
    </>
  )
}

export default Pnf
