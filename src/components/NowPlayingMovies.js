import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class NowPlayingMovies extends React.Component {
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
		states.push({
			id: '1',
			title: 'Harry Potter and the Chamber of Secrets',
			poster: 'https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
			releaseDate: '2002-11-13',
			description: 'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
		});
		states.push({
			id: '2',
			title: 'Mamma Mia!',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
			releaseDate: '2008-07-02',
			description: 'An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she\'s raised alone. But, the daughter has secretly invited three of her mother\'s ex-lovers in the hopes of finding her biological father.',
		});
		states.push({
			id: '3',
			title: 'Harry Potter and the Chamber of Secrets',
			poster: 'https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
			releaseDate: '2002-11-13',
			description: 'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
		});
		states.push({
			id: '4',
			title: 'Mamma Mia!',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
			releaseDate: '2008-07-02',
			description: 'An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she\'s raised alone. But, the daughter has secretly invited three of her mother\'s ex-lovers in the hopes of finding her biological father.',
		});
		states.push({
			id: '3',
			title: 'Harry Potter and the Chamber of Secrets',
			poster: 'https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
			releaseDate: '2002-11-13',
			description: 'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
		});
		states.push({
			id: '4',
			title: 'Mamma Mia!',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
			releaseDate: '2008-07-02',
			description: 'An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she\'s raised alone. But, the daughter has secretly invited three of her mother\'s ex-lovers in the hopes of finding her biological father.',
		});
		states.push({
			id: '3',
			title: 'Harry Potter and the Chamber of Secrets',
			poster: 'https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
			releaseDate: '2002-11-13',
			description: 'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
		});
		states.push({
			id: '4',
			title: 'Mamma Mia!',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
			releaseDate: '2008-07-02',
			description: 'An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she\'s raised alone. But, the daughter has secretly invited three of her mother\'s ex-lovers in the hopes of finding her biological father.',
		});
		states.push({
			id: '3',
			title: 'Harry Potter and the Chamber of Secrets',
			poster: 'https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
			releaseDate: '2002-11-13',
			description: 'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
		});
		states.push({
			id: '4',
			title: 'Mamma Mia!',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
			releaseDate: '2008-07-02',
			description: 'An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she\'s raised alone. But, the daughter has secretly invited three of her mother\'s ex-lovers in the hopes of finding her biological father.',
		});
		states.push({
			id: '3',
			title: 'Harry Potter and the Chamber of Secrets',
			poster: 'https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
			releaseDate: '2002-11-13',
			description: 'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
		});
		states.push({
			id: '4',
			title: 'Mamma Mia!',
			poster: 'https://image.tmdb.org/t/p/w500/gOm2iMMbC6EonrFzmSQ8xvCa4Ei.jpg',
			releaseDate: '2008-07-02',
			description: 'An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she\'s raised alone. But, the daughter has secretly invited three of her mother\'s ex-lovers in the hopes of finding her biological father.',
		});
		
		this.setState({
			items: states
		});
	}

	render() {
		return (
				<div className="align-items-center text-center justify-content-center vh-100 d-flex flex-column">
					<h1 className='display-3'>Movie List</h1>
					<div className='row movieDiv'>
						{this.state.items.map((item) => {
							return (
								<div className="col-md-2 col-sm-4 col-xs-6" > <img className="moviePosterList my-2" src={item.poster}/> </div>
							)
						})}
					</div>
				</div>

		);
	}
}

export default NowPlayingMovies;
