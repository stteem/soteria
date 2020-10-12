import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './home';
import Books from './books';
import Cart from './cart';
import { fetchBooks, addToCart, subtractFromCart, fetchCart, addQty } from '../redux/ActionCreators';



const mapStateToProps = state => {
    return {
      books: state.books,
      cartcount: state.cartcount
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchBooks: () => {dispatch(fetchBooks())},
    addToCart: (id) => {dispatch(addToCart(id))},
    subtractFromCart: (id) => {dispatch(subtractFromCart(id))},
    fetchCart: () => {dispatch(fetchCart())},
    addQty: (id, price) => dispatch(addQty(id, price))
});



class Main extends Component {


  componentDidMount(){

    this.getParamAndFetchBooks();
    this.getParamAndFetchCart();
    console.log('Component DID MOUNT!')

  }

  
  //On page reload, this function supplys image ID to the endpoint
  async getParamAndFetchBooks() {

    const match = matchPath(this.props.history.location.pathname, {
      path: '/books',
      exact: true,
      strict: false
    }) 

    if (match != null) {

     await this.props.fetchBooks();
      console.log('Got books param!')
    }
  }

   async getParamAndFetchCart() {

    const match = matchPath(this.props.history.location.pathname, {
      path: '/cart',
      exact: true,
      strict: false
    }) 

    if (match != null) {

     await this.props.fetchCart();
      console.log('Got cart param!')
    }
  }


	render() {
		return(
			<div>
				<Switch>
					<Route path="/home" component={() =>  <Home fetchBooks={this.props.fetchBooks} /> } />
          <Route path="/books" component={() =>  <Books books={this.props.books} itemids={this.props.books.itemids} addToCart={this.props.addToCart} 
                                                        subtractFromCart={this.props.subtractFromCart} fetchCart={this.props.fetchCart} /> } />
					<Route path="/cart" component={() =>  <Cart cart={this.props.books} books={this.props.books} addQty={this.props.addQty} /> } />
          <Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));