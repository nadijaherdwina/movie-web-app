import React from 'react';
import '../App.css';
import request from "superagent";
import RelatedMovies from "./RelatedMovies";

class DetailMovie extends React.Component {
	constructor(props) {
		super(props);
		console.log("id from props: ", this.props.match.params.id);
		this.state = {
				id: this.props.match.params.id,
				title: '',
				poster: '',
				releaseYear: '',
				description: '',
		}
	}
	componentDidMount() {
		var posterLink = "https://image.tmdb.org/t/p/w500/";
		request
		.post('http://localhost:5050/get-detail-movies')
		.send({id: this.state.id})
		.then((res) => {
			let movie = res.body.data;
			this.setState({
				title: movie.title,
				poster: posterLink + movie.poster_path,
				releaseYear: movie.release_date.slice(0,4),
				description: movie.overview
			});
		})
		.catch((err) => {
			this.setState({
				error: true,
				isLoading: false
			})
		})
	}

	render() {
		return (
			<div className="p-5 m-5">
				<div className="row">
					<div className="col-3"><img src={this.state.poster} alt={this.state.title}/> </div>
					<div className="col"> 
						<div className="row"><h1><b> {this.state.title} </b></h1></div>
						<div className="row"><h5><em> {this.state.releaseYear} </em></h5></div>
						<div className="row mt-4"><h4><b>Description</b></h4></div>
						<div className="row"><h4>{this.state.description}</h4></div>
					</div>
				</div>
				<RelatedMovies id={this.state.id}></RelatedMovies>
			</div>

		);
	}
}

export default DetailMovie;
