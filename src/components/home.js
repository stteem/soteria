import React from 'react';
import banner from '../assets/banner1.png';
import NavBar from './navbar';
import { Link } from 'react-router-dom';


export default function Home() {

	return(
		<div>
			<NavBar />
			<div className="header-div">
				<div className="banner-div">
					<img className="banner" src={banner} alt="banner vector" />
				</div>
				<div className="veil">
				</div>
				
			</div>
		</div>
	);
}