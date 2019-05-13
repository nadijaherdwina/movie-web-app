import React from 'react';
import '../App.css';
import request from "superagent";
import RelatedMovies from "./RelatedMovies";
import NavigationBar from "./NavigationBar";

class DetailMovie extends React.Component {
	constructor(props) {
		super(props);
		console.log("id from props: ", this.props.match.params.id);
		this.state = {
				id: this.props.match.params.id,
				title: '',
				poster: '',
				tagline:'',
				genres: [],
				releaseYear: '',
				description: '',
		}
	}
	componentDidMount() {
		var posterLink = "https://image.tmdb.org/t/p/w500/";
		var noPosterLink = "http://www.video2k.is/assets/images/my_videos/no_poster.png"
		request
		.post('http://localhost:5050/get-detail-movies')
		.send({id: this.state.id})
		.then((res) => {
			var movie = res.body.data;
			const gen = movie.genres.map(genre => ({
				id: genre.id,
				name: genre.name
			}));
			this.setState({
				genres: gen,
				title: movie.title,
				tagline: movie.tagline,
				poster: movie.poster_path ? posterLink + movie.poster_path : noPosterLink,
				releaseYear: movie.release_date ? movie.release_date.slice(0,4) : "Release year undefined.",
				description: movie.overview ? movie.overview : "No description.",
				
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
			<div>
				<NavigationBar className="m-2" current="false" ></NavigationBar>
				<div className="px-5  mx-5">					
					<div className="row mb-5">
						<div className="col-3 detailPoster"><img src={this.state.poster} alt={this.state.title}/> </div>
						<div className="col" id={this.state.id}> 
							<div className="row"><h1 className="subtitle" id="title"><b> {this.state.title}  ({this.state.releaseYear})</b></h1></div>
							<div className="row"><h5 className='text' id='tagline'> <em> {this.state.tagline} </em> </h5></div>
							
							<div className="row mt-4" id="descTitle"><h5 className="subtitle"><b>Description</b></h5></div>
							<div className="row" id="descContent"><h5 className="text">{this.state.description}</h5></div>
							
							<div className="row mt-4" id="genresTitle"><h5 className="subtitle"><b>Genres</b></h5></div>
							<div className="row" id="genresContent"> <h5 className="text">
							{this.state.genres.map((genre) => {
								return (
									`${genre.name}.  `
								)
							})}
							</h5>
							</div>
						</div>
					</div>
					<h2 className="subtitle"> Related movies</h2>
					<RelatedMovies id={this.state.id}></RelatedMovies>
				</div>

			</div>
			
		);
	}
}

export default DetailMovie;
