import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button,
		Nav, Navbar, NavbarBrand, NavItem, Form, Input, Label  } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';

import { MdDeleteForever } from 'react-icons/md';

import { FiShoppingCart } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import bookImg from '../assets/book.png';


function RenderCart({cart, removeFromCart, addQty, qty, subtractQty}) {
    return(
        <Card className="allbooks cartcard">
        <div className="cartcard-div">
            <CardBody>
            <Link to="/" style={{textDecoration:'none', color:'black'}} >
              	<CardTitle><strong>{cart.name}</strong></CardTitle>
              	<CardImg width="100%" src={bookImg} alt="book image" />
              	<CardText>{cart.price}</CardText>
            </Link>	
            </CardBody>
        </div>
        <div className="ml-auto qty-div">
        	<div className="qty-div-card">
	        		<Button onClick={(e) => subtractQty(e)} className="qty-div-sub-btn">-</Button>
	        		<div className="qty-div-txt">
	        		   	<label htmlFor="qty"></label>
	        			<input type="text" name="qty" className="qty" id={cart.id} readOnly defaultValue="1" ref={qty} />
	        		</div>
	        		<Button onClick={() => addQty(e)} className="qty-div-add-btn">+</Button>
    		</div>
    		<div className="del-btn">
		        <Button className="delete" style={{textDecoration:'none'}} color="link" 
		      		onClick={(e, id) => removeFromCart(e, cart.id)}
		  		>
		      		<MdDeleteForever className="del-icon" />
		  		</Button>
	  		</div>
        </div>
        
        </Card>
    );   
}


class Cart extends React.Component {

	constructor(props){
		super(props);

		this.qty = React.createRef();
		this.removeFromCart = this.removeFromCart.bind(this);
		this.addQty = this.addQty.bind(this);
	}

	removeFromCart(event, id) {

		
	}

	addQty(e, price) {
		
	}

    render() {

    	const cartcount = this.props.books.cartcount;
    	console.log('cartcount ', cartcount)
        const cart = this.props.books.cart.map((cart, index) => {
            return ( 
        		<li key={index} className="col-12 col-lg-8">
	                <RenderCart cart={cart[0]} removeFromCart={this.removeFromCart} qty={this.qty} addQty={this.addQty} />
        		</li>     
            );
        });
        
        return (
        	<div>
	        	<Navbar dark expand="md" id="nav-books">
                    <div className="container">
                    	<Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/books">
                                    <BsArrowLeft style={{fontSize:'30px'}}/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarBrand className="mc-auto logo" href="/">Soteria</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/'>
                                    <FiShoppingCart style={{fontSize:'25px'}}/> {cartcount}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
	            <div className="container books">
	                <div className="column">
	                <h4 id="mycart">My Cart</h4>
	                {
	                	cartcount == 0 ? 
						    <div>Your cart is empty, let's go shopping, shall we?</div>
						:
						<ul className="list-unstyled">
		                    {cart}
	                    </ul>
					}
	                
	                </div>
	            </div>
            </div>
        );
    }   
}



export default Cart;