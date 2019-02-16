// Imports
import React, { Component } from 'react';
// Import Search Bar Components

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class Search extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.foundLocation = this.foundLocation.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)


  }

    defaultBounds
    options
   foundLocation(position)
    {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(lat-1,long-1),
        new google.maps.LatLng(lat+1,long+1)
      )
      console.log(position)
      this.options = {
        bounds:this.defaultBounds 
      };

    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      this.options,
    );
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }
    noLocation()
    {
      options = {}
    }
  handleScriptLoad() {
    // Declare Options For Autocomplete
    console.log(this.props.router)


    navigator.geolocation.getCurrentPosition(this.foundLocation, this.noLocation);


    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      this.options,
    );
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors

    // Fire Event when a suggested name is selected
  }
  
  handleInputChange(event) {
    this.setState({query: event.target.value});
  }
  handlePlaceSelect() {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Script
          url={process.env.API_URL}
          onLoad={this.handleScriptLoad}
        />

        <input id="autocomplete" placeholder="" hintText="Search City" value={this.state.query} onChange={this.handleInputChange}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </div>
    );
  }
}

export default Search;
