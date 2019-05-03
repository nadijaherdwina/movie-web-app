import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import RelatedMovies from "./RelatedMovies";

class DetailMovie extends React.Component {
	constructor() {
		super();
		this.state = {
				id: '',
				title: '',
				poster: '',
				releaseYear: '',
				description: '',
				items: []
		}
	}
	componentDidMount() {
		let states = [];
		let release = '2002-11-13'

		states.push({
			id: '1',
			title: 'Harry Potter and the Chamber of Secrets',
			poster: 'https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
			releaseYear: release.slice(0,4),
			description: 'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
		});
		this.setState({
			items: states
		});
	}

	render() {
		return (
			<div className="p-5 m-5">
				{this.state.items.map((item) => {
					return (
						<div className="row">
							<div className="col-3"><img src={item.poster}/> </div>
							<div className="col"> 
								<div className="row"><h1><b> {item.title} </b></h1></div>
								<div className="row"><h5><em> {item.releaseYear} </em></h5></div>
								<div className="row mt-4"><h4><b>Description</b></h4></div>
								<div className="row"><h4>{item.description}</h4></div>
							</div>
						</div>
					)
				})}
				<RelatedMovies></RelatedMovies>
			</div>

		);
	}
}

export default DetailMovie;
