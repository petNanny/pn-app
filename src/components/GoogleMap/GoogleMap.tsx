import { Spinner } from "@chakra-ui/react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMapContainer } from "./StyledGoogleMap";
import React, { useRef, useEffect } from "react";
import "./GoogleMap.css";
import markerPaw from "./assets/paw.png";
import recurringIcon from "./assets/recurring.svg";
import star from "./assets/star.svg";

interface GoogleMapProps {
  results: result[];
  centerPoint: number[];
}

interface result {
  _id: string;
  geoCode: {
    coordinates: [longitude: number, latitude: number];
  };
  petOwner: {
    avatar: string;
    userName: string;
  };
  address: {
    city: string;
  };
  service: [
    {
      Rate: number;
    }
  ];
  distance: string;
}

const MyMapComponent = ({ results, centerPoint }: GoogleMapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  //sydney opera house
  const defaultCenter: google.maps.LatLngLiteral = {
    lat: centerPoint[0] || -33.8567844,
    lng: centerPoint[1] || 151.2152967,
  };
  const defaultZoom = 12;
  const minZoom = 10;
  const gestureHandling = "cooperative";

  useEffect(() => {
    //map: google.maps.Map;
    const map = new google.maps.Map(ref.current as HTMLDivElement, {
      center: defaultCenter,
      zoom: defaultZoom,
      minZoom: minZoom,
      gestureHandling: gestureHandling,
    });

    const contentString = ``;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    results.map(
      ({
        _id,
        geoCode: {
          coordinates: [longitude, latitude],
        },
        petOwner: { avatar, userName: name },
        address: { city: suburb },
        // rating,
        service: [{ Rate: price }],
        distance,
      }) => {
        const marker = new google.maps.Marker({
          position: {
            lat: latitude,
            lng: longitude,
          },
          map: map,
          icon: markerPaw,
        });

        marker.addListener("click", () => {
          //dummy distance: 10km
          const recurringTime = 2;
          const contentString =
            `
      <a href="/petSitter/${_id}">    
        <div class="Marker_InfoWindow">
          <div class="Avatar_Container">
            <img src=${avatar} alt="${name}'s service">
          </div>
          <p>${name}</p>
          <p class="Marker_Distance">${distance} - ${suburb}</p>
          <div class="Marker_Star">` +
            `${Array(5)
              .fill('<img alt="star" src=' + star + ">")
              .join("")}` +
            `<span></span>
          </div>
          <div class="Marker_Recurring">
            <img alt="recurring order" src=${recurringIcon}>
            <span>${recurringTime} recurring guest</span>
          </div>
          <p>${price} AUD / night</p>
        </div>
      </a>
        `;
          infowindow.setContent(contentString);

          infowindow.open({
            anchor: marker,
            map,
          });
        });
      }
    );
  });

  return <div ref={ref} id="map" className="map" />;
};

const MyRender = (status: Status): React.ReactElement => {
  if (status === Status.FAILURE) return <div>Failed to load the map</div>;
  return <Spinner />;
};

const GoogleMap = ({ results, centerPoint }: GoogleMapProps) => {
  return (
    <GoogleMapContainer>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY ?? ""} render={MyRender}>
        <MyMapComponent results={results} centerPoint={centerPoint} />
      </Wrapper>
    </GoogleMapContainer>
  );
};

export default GoogleMap;
