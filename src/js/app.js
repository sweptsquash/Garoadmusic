import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import rootReducer from './Reducers/rootReducer';
import AppNav from './Components/AppNav';

import Home from './Views/Home';
import About from './Views/About';
import Music from './Views/Music';
import Project from './Views/Project';
import Contact from './Views/Contact';

import '../scss/app.scss';

const year = new Date().getFullYear();
const ceateStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={ ceateStoreWithMiddleware(rootReducer) }>
		<Router>
			<AppNav />
			<main>
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/about" component={ About } />
					<Route exact path="/music" component={ Music } />
					<Route path="/music/:projectName" component={ Project } />
					<Route path="/contact" component={ Contact } />
				</Switch>
			</main>
			<footer className="text-center py-2">
				Copyright &copy; { year } Michael &quot;Garoad&quot; Kelly.
			</footer>
		</Router>
	</Provider>,
	document.getElementById('root'),
);