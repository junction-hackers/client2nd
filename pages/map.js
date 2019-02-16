// Imports
import React, { Component } from 'react';
// Import Search Bar Components

import User from '../components/user.js'
// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';
import '../styles/main.scss'

import Router from 'next/router'

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
    this.loadNextPage = this.loadNextPage.bind(this)
    this.handleScriptLoad = this.handleScriptLoad.bind(this)
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
    this.foundLocation = this.foundLocation.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  defaultBounds
  options

  loadNextPage(){
    Router.push('/numberInput')
  }

  foundLocation(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    this.defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(lat-1,long-1),
      new google.maps.LatLng(lat+1,long+1)
    )
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
    navigator.geolocation.getCurrentPosition(this.foundLocation, this.noLocation);

    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      this.options,
    );
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handleInputChange(event) {
    this.setState({query: event.target.value});
  }

  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    if (address) {
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
        width: '100%',}}>
        <Script
          url={process.env.API_URL}
          onLoad={this.handleScriptLoad}
        />
        <User
          address={this.state.query} 
        />
        <h1 style={{color: 'black', margin: 0, position: 'absolute', top: 64, fontSize: 56}}>Trackr</h1>
        <input id="autocomplete" placeholder="Enter location" hintText="Search City" value={this.state.query} onChange={this.handleInputChange} />
        <a onClick={this.loadNextPage}>NEXT</a>


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
        `}</style>
      </div>
    );
  }
}

export default Search;
