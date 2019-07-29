import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import Marker from './Marker';

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
					<Marker coordinates={[-122.324123, 47.616573]}
						style={{backgroundColor: 'rgba(100, 0, 100, 50%)', height: '25px', width: '25px', borderRadius: '50%'}}>
					</Marker>
		</Map>
	</div>
	)
}	

47.616573


export default Map;