import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './home';
import Books from './books';

import { fetchBooks } from '../redux/ActionCreators';



const mapStateToProps = state => {
    return {
      books: state.books,
      cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchBooks: () => {dispatch(fetchBooks())}
});



class Main extends Component {


  componentDidMount(){

    this.getParamAndFetchBooks();

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
      console.log('Got param!')
    }
  }


	render() {
		return(
			<div>
				<Switch>
					<Route path="/home" component={() =>  <Home fetchBooks={this.props.fetchBooks} /> } />
          <Route path="/books" component={() =>  <Books books={this.props.books} /> } />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));