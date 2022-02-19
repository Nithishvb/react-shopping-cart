import React from 'react'
import { Card , Button} from 'react-bootstrap'
import Rating from './Rating'
import { CartContext } from '../Context/Context'

const SingleProduct = ({ data }) => {

  const {
    state: { cart }, 
    dispatch,
    } = CartContext();


  return (  
    <div className='SingleProduct' >
      <Card>
        <Card.Img variant='top' src={data.image} alt={data.name} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }} >
            <span>$ {data.price.split(".")[0]}</span>
            {
              data.fastDelivery ? (
                  <div>Fast Delivery</div>
              ) : (
                  <div>4 days Delivery</div>
              )
            }
            <Rating rating={data.ratings} />
          </Card.Subtitle>
          {
            cart.some(p => p.id === data.id) ? (
              <Button onClick={() => dispatch({type: "REMOVE_FROM_CART",payload: data})} variant='danger' >Remove from cart</Button>
            ) : (
              <Button onClick={() => dispatch({type: "ADD_TO_CART",payload: data})} disabled={!data.inStock} >
                {!data.inStock ? "Out of stock" : "Add To cart"}
              </Button>
            )
          }
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct;