import React from 'react';
import '../App.css';
import request from "superagent";
import {Link} from "react-router-dom";

class RelatedMovies extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				idMovie: this.props.id,
				items: [],
				error: '',
				currentPosterIndex: 0,
		}
		this.nextSlide = this.nextSlide.bind(this);
		this.prevSlide = this.prevSlide.bind(this);
	}
	componentDidMount() {
		var posterLink = "https://image.tmdb.org/t/p/w500/";
		request
		.post('http://localhost:5050/get-related-movies')
		.send({id: this.state.idMovie})
		.then((res) => {
			// console.log(res);
			const newMovies = res.body.data.results.map(movie => ({
				id: movie.id,
				title: movie.title,
				poster: posterLink + movie.poster_path
			}));
			this.setState({
				items: newMovies
			});
		})
		.catch((err) => {
			this.setState({
				error: err.message
			})
		})
	}

	prevSlide() {
		const lastIndex = this.state.items.length - 1;
		const resetIndex = this.state.currentPosterIndex === 0;
		const index = resetIndex ? lastIndex : this.state.currentPosterIndex - 1;
		this.setState({
			currentPosterIndex: index
	   })
	}

	nextSlide() {
		const lastIndex = this.state.items.length -1;
		const resetIndex = this.state.currentPosterIndex === lastIndex;
		const index = resetIndex ? 0 : this.state.currentPosterIndex + 1;
		this.setState({
			currentPosterIndex: index
		})
	}

	render() {
		const index = this.state.currentPosterIndex;
		let firstEightMovies = this.state.items.slice(index, index+8);
		if (firstEightMovies.length < 8) {
			firstEightMovies = firstEightMovies.concat(this.state.items.slice(0, 8- firstEightMovies.length));
		}
		return (
			<div>
				<div className='row relatedDiv align-items-center'>
					<div className="col-1">
						<Link to={`#`} className="prevNextButton" onClick = {this.prevSlide}> <h1> &#8249; </h1></Link>
					</div>
					<div className="col-10 flex-column">
						<div className="row  justify-content-around">
							{firstEightMovies.map((item) => {
								return (
									<div className="col" key={`/${item.id}`}>
										<Link to={`/detail/${item.id}`} onClick={window.location.reload}>
											<img className="relatedPosterList" id={item.id} src={item.poster} alt=""/>
										</Link>
									</div>
								)
							})}
						</div>
					</div>
					<div className="col-1">
						<Link to={`#`}className="prevNextButton" onClick = {this.nextSlide}><h1> &#8250; </h1></Link>	
					</div>
				</div>
			</div>
		);
	}
}

export default RelatedMovies;
