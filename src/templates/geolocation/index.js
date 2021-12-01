import React, { useEffect, useState } from "react";

import { useGeolocation } from "react-use";

import { Navigation } from "../../components";

var axios = require("axios");

const API_KEY = "AIzaSyBY5qvz-zYQyUih4cfdRWUkQHYolLnCZZ0";

const Geo = () => {
  const [restaurants, setRestaurants] = useState([]);
  const { latitude, longitude } = useGeolocation();

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=15000&type=restaurant&keyword=cruise&key=${API_KEY}`,
      headers: {},
    };

    if (latitude && longitude) {
      axios(config)
        .then((res) => setRestaurants(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [latitude, longitude]);

  return (
    <div style={geolocationWrapperStyle}>
      <Navigation />

      <h1 style={geolocationHeaderStyle}>Geolocation:</h1>
      <p style={geolocationTextStyle}>Latitude: {latitude}</p>
      <p style={geolocationTextStyle}>Longitude: {longitude}</p>
      {restaurants && (
        <div style={resultsWrapper}>
          {restaurants.map((place) => (
            <div style={cardWrapperStyle} key={place.place_id}>
              <h3 style={headerStyle}>
                {place.name}{" "}
                {place.opening_hours?.open_now ? (
                  <span style={openStyle}>Open</span>
                ) : (
                  <span style={closedStyle}>Closed</span>
                )}
              </h3>
              <p style={addressStyle}>{place.vicinity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Geo;

const cardWrapperStyle = {
  margin: "5px 0",
  padding: "5px",
};

const headerStyle = {};

const openStyle = {
  textTransform: "upperCase",
  color: "green",
  paddingLeft: "10px",
  fontSize: "10px",
};

const closedStyle = {
  textTransform: "upperCase",
  color: "red",
  paddingLeft: "10px",
  fontSize: "10px",
};

const addressStyle = {};

const resultsWrapper = {
  margin: "10px 0 5px",
  borderTop: "2px solid #303030",
  paddingTop: "10px",
};

const geolocationWrapperStyle = {
  backgroundColor: "#fae9d4",
  minHeight: "100vh",
};

const geolocationHeaderStyle = {
  textAlign: "center",
  fontWeight: "bold",
  letterSpacing: "1px",
  color: "#303030",
  margin: "7px 0",
};

const geolocationTextStyle = {
  fontWeight: "bold",
  color: "#303030",
  paddingLeft: "10px",
};
