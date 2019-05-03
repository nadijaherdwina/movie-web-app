import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../App.css';


class RelatedMovies extends React.Component {
	constructor() {
		super();
		this.state = {
				id: '',
				poster: '',
				items: []
		}
	}
	componentDidMount() {
		let states = [];
		let release = '2002-11-13'

		states.push({
			id: '1',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
		});
		states.push({
			id: '1',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
		});
		states.push({
			id: '1',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
		});
		states.push({
			id: '1',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
		});
		states.push({
			id: '1',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
		});
		states.push({
			id: '1',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
		});
		states.push({
			id: '1',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
		});
		this.setState({
			items: states
		});
	}

	render() {
		return (
			<div>
				
			</div>
		);
	}
}

export default RelatedMovies;
