import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{ height: '300px' }} className=' mt-8 bg-yellow-300 w-100 p-5 '>
      <div className='flex justify-between'>
        <div style={{ width: '400px' }} className='size-1/4'>
          <h5><i>eCart</i></h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contribution.</p>
          <p>Code licensed Luminar, docs CC BY 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className='flex flex-col'>
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'dark' }}>Home</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'dark' }}>wishlist</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'dark' }}>View Cart</Link>

        </div>
        <div className='flex flex-col'>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'>React Router</a>

        </div>
        <div className='flex flex-col justify-between mt-3'>
          <h5>Contact Us</h5>
          <div className='flex'>
          <input placeholder='Enter your email here' type="text" className='form-control' />
          <button className='btn btn-info ms-2'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='icons flex justify-between mt-3'>
            <a href="" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'dark' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-8'> Copyright &copy; June 2024 Batch, Media Player. Built with React.</p>
    </div>
  )
}

export default Footer
