import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript, LoadScript } from "@react-google-maps/api";
import Autocomplete from "react-google-autocomplete";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const center = {
  lat: -33.85657,
  lng: 151.21527,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const NewGoogleMap = () => {
  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY ?? ""}
        // libraries={libraries}
      >
        <div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
          />
        </div>
      </LoadScript>
    </>
  );
};

export default NewGoogleMap;
