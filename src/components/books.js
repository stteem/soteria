import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button,
		Nav, Navbar, NavbarBrand, NavItem  } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { Loading } from './loading';

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




function RenderBooks({book, itemids, updateCart}) {
    return(
        <Card className="allbooks">
            <CardBody>
            <Link to="/" style={{textDecoration:'none', color:'black'}} >
              	<CardTitle><strong>{book.name}</strong></CardTitle>
              	<CardImg width="100%" src={bookImg} alt="book image" />
              	<CardText>{book.price}</CardText>
            </Link>
            		{
            			itemids.length != 0 ?
            				itemids.includes(book._id) ?
            					<Button className="add-to-cart" style={{textDecoration:'none'}} color="link" 
					          		onClick={(e, id) => updateCart(e, book._id)}
					      		>
					          		Remove from cart
					      		</Button>
            				:
        					<Button className="add-to-cart" style={{textDecoration:'none'}} color="link" 
				          		onClick={(e, id) => updateCart(e, book._id)}
				      		>
				          		Add to cart
				      		</Button>
            			:
            			
    					<Button className="add-to-cart" style={{textDecoration:'none'}} color="link" 
			          		onClick={(e, id) => updateCart(e, book._id)}
			      		>
			          		Add to cart
			      		</Button>	
			      		
            		}
            </CardBody>
        </Card>
    );   
}


class Books extends React.Component {

	constructor(props){
		super(props);

		this.updateCart = this.updateCart.bind(this);
		this.state = {
	      books: BOOKS,
	      cartcount: 0
	    };
	}


	updateCart(event, id) {

		let target = event.target.textContent;

		if (target === 'Add to cart') {
						
			this.props.addToCart(id)

		}
		else {
			
		    this.props.subtractFromCart(id);
		}
	}



    render() {

    	const count = this.props.books.cartcount;
        const book = this.props.books.books.map((book, index) => {
            return ( 
                <div key={index} className="col-8 col-md-4 col-lg-3">
                    <RenderBooks book={book} itemids={this.props.itemids} updateCart={this.updateCart} />
                </div>     
            );
        });


        if (this.props.books.isLoading) {
            return(
                <div className="container spinner">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.books.errMess) {
            return(
                <div className="container">
                    <div className="row centreItem">
                        <h5>{this.props.books.errMess}</h5>
                    </div>
                    <div className="centreItem"><Button className="tryagain" onClick={() => this.props.fetchBooks()}>Try again</Button></div>
                </div>
            );
        }

        else
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
                            <NavItem onClick={this.props.fetchCart}>
                                <NavLink className="nav-link" to='/cart'>
                                    <FiShoppingCart style={{fontSize:'25px'}}/> {count}
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