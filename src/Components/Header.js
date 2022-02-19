import React from 'react'
import './Home.css'
import { Navbar , Container , FormControl , Dropdown , Nav  , Badge , Button} from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../Context/Context'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Header = () => {

  const { state: {cart} , dispatch, productDispatch} = CartContext()

  return (
    <Navbar bg="dark" variant='dark' style={{height: "80px"}} >
      <Container>
        <Navbar.Brand>
          <Link to='/' style={{color: "white", textDecoration: "none"}} >
            Shopping Cart 
          </Link>
        </Navbar.Brand>

        <Navbar.Text className='search' >
          <FormControl style={{width: 500}} placeholder='Search a product' className='m-auto' onChange={(e) => productDispatch({
            type: "FILTER_BY_SEARCH", payload: e.target.value
          })} />
        </Navbar.Text>

        <Nav>
          <Dropdown align="start">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 , marginLeft: "-300px"}} >
              {
                cart.length > 0 ? (
                  <>
                    {
                      cart.map((e) => (
                        <span className="cartitem" key={e.id}>
                          <img
                            src={e.image}
                            className="cartItemImg"
                            alt={e.name}
                          />
                          <div className="cartItemDetail">
                            <span>{e.name}</span>
                            <span>$ {e.price.split(".")[0]}</span>
                          </div>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: e,
                              })
                            }
                          />
                        </span>
                      ))
                    }
                    <Link to='/cart' >
                       <Button style={{width: "95%", margin: "0 10px"}} >Go To Cart</Button>
                    </Link>
                  </>
                ) : (<span style={{padding: 10}} >Cart is Empty</span>)
              }
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

      </Container>
    </Navbar>
  )
}

export default Header;