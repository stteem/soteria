import React from 'react';
import NavBar from './navbar';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';

import banner from '../assets/banner5.jpg';
import book from '../assets/book.png';
import audio from '../assets/audio.jpg';


export default function Home(props) {

	return(
		<div>
			<NavBar />
			<div className="header-div">
				<div className="banner-div">
					<img className="banner" src={banner} alt="banner" />
					
				</div>
				<div className="featured container">
					<div id="banner-msg">
						<h5>Find Books and Audio Messages by Dr Abel Damina of the Power City International Ministry</h5>
					</div>
					<Card className="book-div">
						<Link to="/books" style={{ textDecoration: 'none', color:'black' }}>
							<CardBody onClick={async () => await props.fetchBooks()} >
								<CardTitle><h5>Books</h5></CardTitle>
									<CardImg className="book" src={book} alt="books" />
									<CardSubtitle>Books by Dr Abel Damina</CardSubtitle>
							</CardBody>
						</Link>
					</Card>

					<Card className="audio-div">
						<CardBody>
							<CardTitle><h5>Audio Messages</h5></CardTitle>
							<Link to="/" style={{ textDecoration: 'none', color:'black' }} >
								<CardImg className="audio" src={audio} alt="audio messages" />
								<CardSubtitle>Audio messages by Dr Abel Damina <span id="coming-soon">coming soon</span></CardSubtitle>
							</Link>
						</CardBody>
					</Card>
				</div>
				<div id="copyright">A @UwemUke production &#169;2020</div>
			</div>
		</div>
	);
}