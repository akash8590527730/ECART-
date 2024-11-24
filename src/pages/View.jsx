import React, { useEffect, useState } from 'react'
import Header  from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'



const View = () => {
const {id} = useParams()
console.log(id);
const [product,setProduct] = useState({})
const userCart = useSelector(state=>state.cartReducer)


const userWishlist = useSelector(state=>state.wishlistReducer)
const dispatch = useDispatch()
 
useEffect(()=>{
  if(sessionStorage.getItem("allProducts")){
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts?.find(item=>item.id==id))
  }
},[])
// console.log(product); 
const handleWishlist = (product)=>{
  const exisitingProduct = userWishlist?.find(item=>item.id==product.id)
  if(exisitingProduct){
    alert("Product already in your wishlist")
}else{
  dispatch(addToWishlist(product))
}
}
const handleCart = (product) =>{
  dispatch(addToCart(product))
  const exisitingProduct = userCart?.find(item=>item.id==product.id)
  if(exisitingProduct){ 
    alert("Product quantity is incrementing!!!")
}

}
  return (
    <>
      <Header/>
      <div style={{paddingTop:'70px'}} className='flex content-center items-center mx-5'>
      <div className='grid grid-cols-2 items-center'>
      <img width={'100%'}  height={'250px'} src={product?.thumbnail} alt="no img" />
      <div>
        <h3>PID: {product.id}</h3>
        <h1 className='text-5xl font-bold'>{product?.title}</h1>
        <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
        <p>
          <span className='font-bold'>Description</span> : {product?.description}
        </p>
        <h3 className='font-bold my-5'>Client Review</h3>
        {
          product?.reviews?.length>0 &&
          product?.reviews?.map(item=>(
            <div key={item?.date} className='shadow rounded p-2 my-2'>
          
                <h5>
                  <span className='font-bold'> {item?.reviewerName} :</span> {item?.comment}
              
              </h5>
              <p>Rating : {item?.rating}</p>
            </div>
          ))
        }
        <div className='flex justify-between mt-5'> 
          <button  onClick={()=>handleWishlist(product)} className='text-white bg-blue-500 rounded p-2'>ADD TO WISHLIST</button>
          <button onClick={()=>handleCart(product)} className='text-white bg-green-500 rounded p-2'>ADD TO CART</button>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default View
