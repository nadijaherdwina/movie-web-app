import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from "react-router-dom";

import NowPlayingMovies from "./components/NowPlayingMovies";
import DetailMovie from "./components/DetailMovie";

const routing = (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={NowPlayingMovies} />
        <Route path="/movie/1" component={DetailMovie} />
      </div>
    </BrowserRouter>
  )
  ReactDOM.render(routing, document.getElementById('root'))
  