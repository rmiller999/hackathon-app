import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = (props) => {
		const Map = new ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibWNkdWRsZXk4NyIsImEiOiJjanhlejR5YWIwdWFwM25tcHNubDdpejIwIn0.n-RmlJrsycjQ76M82M_02Q',
			container: 'map',
			minZoom: 12,
			maxZoom: 16
		});



	return (
		<div className="mapboxBox">
		<Map
			center={[-122.3352, 47.6079]}
			style="mapbox://styles/mapbox/streets-v9"
			containerStyle={{
				height: '50vh',
				width: '50vw'
			}}>
			
		</Map>
	</div>
	)
}	

export default Map;