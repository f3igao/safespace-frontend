import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import './stylesheets/index.css';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
