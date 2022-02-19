import React from 'react'
import { CartContext } from '../Context/Context'
import SingleProduct from './SingleProduct'
import Filter from './Filter'
import './Home.css'

const Home = () => {

  const { state : { products } , productState: {byStock, byFastDelivery, sort, byRating , searchQuery} } = CartContext();

  const transformProducts = () => {
    let sortedProducts = products;
    if(sort){
      sortedProducts = sortedProducts.sort((a,b) => 
        sort === 'lowToHigh' ? a.price-b.price : b.price-a.price
      )
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts;
  }

  return (
    <div className='home' >
      <Filter />
      <div className='product__container'>
        { 
          transformProducts().map((data,index) => (
            <SingleProduct data={data} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Home;