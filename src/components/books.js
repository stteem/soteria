import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button,
		Nav, Navbar, NavbarBrand, NavItem  } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';

import { FiShoppingCart } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import bookImg from '../assets/book.png';



var BOOKS = [
  	{id: 1, category: 'Soteria Season 1', price: '$9.99', stocked: true, name: 'Lorem'},
  	{id: 2, category: 'Soteria Season 2', price: '$9.99', stocked: true, name: 'Ipsum'},
  	{id: 3, category: 'Soteria Season 3', price: '$9.99', stocked: false, name: 'Ipsum Lorem'},
  	{id: 4, category: 'Soteria Season 4', price: '$9.99', stocked: true, name: 'Lorem Ipsum'},
  	{id: 5, category: 'Soteria Season 5', price: '$9.99', stocked: false, name: 'Merol Muspi'},
  	{id: 6, category: 'Soteria Season 6', price: '$10', stocked: true, name: 'Muspi Merol'}
];


function RenderBooks({book, addToCart}) {
    return(
        <Card className="allbooks">
            <CardBody>
            <Link to="/" style={{textDecoration:'none', color:'black'}} >
              	<CardTitle><strong>{book.name}</strong></CardTitle>
              	<CardImg width="100%" src={bookImg} alt="book image" />
              	<CardText>{book.price}</CardText>
            </Link>
            	<form>
	              	<Button className="add-to-cart" style={{textDecoration:'none'}} color="link" 
	              		onClick={(e, id) => addToCart(e, book.id)}>
	              		Add to cart
	          		</Button>
          		</form>
            </CardBody>
        </Card>
    );   
}


class Books extends React.Component {

	constructor(props){
		super(props);

		this.addToCart = this.addToCart.bind(this);

		this.state = {
	      books: BOOKS,
	      cart: 0
	    };
	}

	addToCart(event, id) {

		if (event.target.textContent === 'Add to cart') {
			let target = event.target.textContent = 'Remove from cart';
			console.log('target ', target)
			console.log('id ', id)
			this.setState((prevState) => {
		      let count = prevState.cart + 1;
		      console.log('setting state', count)
		      return { cart: count };
		    },
		    () => {
		    	target;
		    });
		}
		else {
			let target = event.target.textContent = 'Add to cart';
			console.log('target ', target)
			console.log('id ', id)
			this.setState((prevState) => {
		      let count = prevState.cart - 1;
		      console.log('setting state', count)
		      return { cart: count };
		    },
		    () => {
		    	target;
		    });
		}
	}


    render() {

    	const cart = this.state.cart;
        const book = this.props.books.books.map((book, index) => {
            return ( 
                <div key={index} className="col-8 col-md-4 col-lg-3">
                    <RenderBooks book={book} addToCart={this.addToCart} />
                </div>     
            );
        });
        
        return (
        	<div>
	        	<Navbar dark expand="md" id="nav-books">
                    <div className="container">
                    	<Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/'>
                                    <BsArrowLeft style={{fontSize:'30px'}}/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarBrand className="mc-auto logo" href="/">Soteria</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/'>
                                    <FiShoppingCart style={{fontSize:'25px'}}/> {cart}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
	            <div className="container books">
	                <div className="row">
	                    {book}
	                </div>
	            </div>
            </div>
        );
    }   
}



export default Books;