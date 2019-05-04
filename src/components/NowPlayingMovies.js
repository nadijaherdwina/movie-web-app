import React from 'react';
import '../App.css';
import request from "superagent";
import {Link} from "react-router-dom";


class NowPlayingMovies extends React.Component {
	constructor() {
		super();
		this.state = {
				id: '',
				poster: '',
				page: 1,
				totalPages: 0,
				error: false,
				hasMore: true,
				isLoading: false,
				items: []
		}
		this.onScroll = this.onScroll.bind(this);
		this.reachBottom = this.reachBottom.bind(this);
		this.loadMovies = this.loadMovies.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillMount() {
		this.loadMovies();
	}

	onScroll() {
		if (this.state.isLoading || this.state.error || !this.state.hasMore) {
			return;
		}

		if (this.reachBottom()) {
			this.loadMovies();
		}

	}

	reachBottom() {
		return (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight);
	}

	loadMovies() {
		var posterLink = "https://image.tmdb.org/t/p/w500/";
		this.setState({
			isLoading: true
		})
		console.log("Page: " + this.state.page );
		request
		.post('http://localhost:5050/get-now-playing-movies')
		.send({page: this.state.page})
		.then((res) => {
			// console.log(res);
			const newMovies = res.body.data.results.map(movie => ({
				id: movie.id,
				poster: posterLink + movie.poster_path
			}));
			this.setState({
				totalPages: res.body.total_pages,
				isLoading: false,
				hasmore: (this.state.page <= this.state.totalPages),
				items: this.state.items.concat(newMovies),
				page: this.state.page + 1
			});
			console.log("items:")
			console.log(this.state.items)
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
				<div className="align-items-center text-center justify-content-center vh-100 d-flex flex-column">
					<h1 className='display-3'>Movie List</h1>
					<div className='row movieDiv'>
						{this.state.items.map((item) => {
							return (
								<Link to={`/detail/${item.id}`}>
									<div className="col-md-2 col-sm-4 col-xs-6" > 
									<img className="moviePosterList my-2" id={item.id} src={item.poster} alt=""/>
									</div>
								</Link>
							)
						})}
						{this.state.isLoading &&
							<div> <h1> Loading... </h1> </div>
						}
						{!this.state.hasMore && 
							<div><h1> All movies loaded. </h1></div>
						}
					</div>
				</div>

		);
	}
}

export default NowPlayingMovies;
