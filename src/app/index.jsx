import React from 'react';
import Routing from 'pages';
import Header from './header';
import Footer from './footer';
import { withProviders } from './providers';
import './index.css';

const App = () => {
	return (
		<div>
			<Header />
			<div className='app'>
				<Routing />
			</div>
			<Footer />
		</div>
	);
};

export default withProviders(App);
