import React, { Component } from 'react';
import { KEY } from '../apiToken';
import StoryMap from '../components/StoryMap';
import '../stylesheets/map.css';

export default class StoryContainer extends Component {
	state = { stories: [] };

	componentDidMount = () => {
		fetch('http://localhost:3000/stories')
			.then(res => res.json())
			.then(stories => this.setState({ stories }));
	};

	render() {
		return (
			<StoryMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div id="loading-element" />}
				containerElement={<div id="map-container" />}
				mapElement={<div id="map-element" />}
				stories={this.state.stories}
			/>
		);
	}
}
