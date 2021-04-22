import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';


const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [{latitude: 40.6305, longitude: -73.9521, name: 'Brooklyn College'},
                  {latitude: 40.8200, longitude: -73.9493, name: 'City College of New York'},
                  {latitude: 40.7678, longitude: -73.9645, name: 'Hunter College'},
                  {latitude: 40.7366, longitude: -73.8201, name: 'Queens College'},
                  {latitude: 40.7404, longitude: -73.9832, name: 'Baruch'},
                  {latitude: 40.7707, longitude: -73.9892, name: 'John Jay College of Criminal Justice'},
                  {latitude: 40.8749, longitude: -73.8932, name: 'Lehman College'},
                  {latitude: 40.7189, longitude: -74.0118, name: 'Borough of Manhattan Community College'},
                  {latitude: 40.6021, longitude: -74.1504, name: 'College of Staten Island'},
                  {latitude: 40.5787, longitude: -73.9351, name: 'KingsBorough Community College'},
                  {latitude: 40.7486, longitude: -73.9840, name: 'Cuny Graduate Center'}]
    }
  }

  displayMarkers = () => {
    return this.state.locations.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log(store.name)} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40.128, lng: -74.006}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.APIKey
})(MapContainer);
