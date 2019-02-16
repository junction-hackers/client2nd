// Imports
import React, { Component } from 'react';
// Import Search Bar Components

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';
import '../styles/main.scss'

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
      <div style={{justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        background: '#fafafa',
        width: '100%',
        background: "url('/static/bg.gif')"}}>
        <img src='/static/Trackr.png' style={{position: 'absolute',
        top: 70,
        left: '50%',
        width: 270,
        transform: 'translateX(-50%)'
        }} />
        <Script
          url={process.env.API_URL}
          onLoad={this.handleScriptLoad}
        />

        <input id="autocomplete" placeholder="Enter location" hintText="Search City" value={this.state.query} onChange={this.handleInputChange} />
        <a>NEXT</a>

        <img src='/static/globe.gif' style={{position: 'absolute', bottom: 24, right: 24, width: 70}} />
        <img src='/static/animation2.gif' style={{position: 'absolute', bottom: 24, left: 24, width: 100}} />

        <style jsx>{`
        input {
          margin: 0;
          height: 64px;
          color: black;
          height: 64px;
          width: 90%;
          padding: 0;
          border: 1px solid black;
          border: 1px solid rgba(0,0,0,.23);
          border-radius: 12px;
          margin-bottom: 30px;
          padding: 14px 20px;
          max-width: 500px;
          font-size: 18px;
          outline: none;
          font-size: 17px;
        }
        input:hover {
          border: 1px solid rgba(0,0,0,.5);
        }
        input:focus {
          border: 1px solid rgba(0,0,0,.5);
        }
        a {
          color: black;
          background-color: white;
          margin: 0;
          box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
          border-radius: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          padding: 0;
          height: 64px;
          width: 90%;
          margin-bottom: 24px;
          max-width: 500px;
          font-size: 16px;
          cursor: pointer;
        }
        a:hover {
          background: #f5f5f5;
        }
        p {
          margin: 0;
        }
        a {
          color: #1200f4 !important;
          text-transform: uppercase;
          padding: .7em;
          text-decoration: underline;
          cursor: pointer;
          font-size: 17px;
          border-color: #cbcbcb #4e474e #4e474e #cbcbcb;
          border-style: solid;
          border-width: 5px;
          background: #adadad;
          font-weight: 700;
          text-decoration: underline !important;
        }
        a:hover {
          color: #fdf500 !important;
          outline-color: #fdf500;
          background: #adadad;
        }
        input {
          border-radius: 0;
          border-left: 1px solid gray;
          border-right: 1px solid #dfdfdf;
          border-bottom: 1px solid #dfdfdf;
          box-shadow: inset 1px 1px #000, 1px 0 #fff, 0 1px #fff, 1px 1px #fff;
          font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
        }
        `}</style>
      </div>
    );
  }
}

export default Search;
