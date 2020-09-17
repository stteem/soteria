import React from 'react';





class Cart extends React.Component {

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
        const book = this.state.books.map((book, index) => {
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



export default Cart;