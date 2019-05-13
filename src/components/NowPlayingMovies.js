import React from 'react';
import '../App.css';
import request from "superagent";
import {Link} from "react-router-dom";
import NavigationBar from "./NavigationBar";


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
		var noPosterLink = "http://www.video2k.is/assets/images/my_videos/no_poster.png"
		this.setState({
			isLoading: true
		})
		console.log("Page: " + this.state.page );
		request
		.post('http://localhost:5050/get-now-playing-movies')
		.send({page: this.state.page})
		.then((res) => {
			// console.log(res);
			var newMovies = res.body.data.results.map(movie => ({
				id: movie.id,
				title: movie.title,
				poster: movie.poster_path ? posterLink + movie.poster_path : noPosterLink
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
				<div>	
					<NavigationBar className="m-2" current="false"></NavigationBar>
					<h2 className=' movieDiv header center'>Now Playing Movies</h2>
					<div className='row movieDiv d-flex justify-content-center'>
						{this.state.items.map((item) => {
							return (
								<Link to={`/detail/${item.id}`}  key={item.id}  className="col-lg-2 col-md-4 col-xs-6 d-flex align-items-center flex-column m-3">
									<div >
										<img className="moviePosterList my-2" id={item.id} src={item.poster} alt=""/>
									</div>
									<div className="movieTitle">
										<h5>{item.title}</h5>
									</div>
								</Link>
							)
						})}
						{this.state.isLoading &&
							<div className="loader"> </div>
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
