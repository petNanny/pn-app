import { Spinner } from "@chakra-ui/react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMapContainer } from "./StyledGoogleMap";
import React, { useRef, useEffect, useState } from "react";
import "./GoogleMap.css";
import markerPaw from "./assets/paw.png";
import recurringIcon from "./assets/recurring.svg";
import star from "./assets/star.svg";
import { petSitterData } from "../../interfaces/petSitterData";

interface GoogleMapProps {
  results: result[];
  centerPoint: number[];
}

interface result {
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
}

const petSitters: petSitterData[] = [
  {
    id: 1,
    avatar: "https://robohash.org/laboriosametdolor.png?size=50x50&set=set1",
    name: "winney",
    rating: 5,
    price: 615,
    suburb: "Sydney",
    field_address: {
      locality: "Sydney",
      postal_code: "2000",
      address_line1: "Bennelong Point",
      address_line2: "Sydney NSW",
      latitude: -33.85657,
      longitude: 151.21527,
    },
  },
  {
    id: 2,
    avatar: "https://apac.pawshakecdn.com/2023/01/31/bc97c780-35a0-40cb-a6f6-98c0de3cba30.jpg",
    name: "Ling",
    rating: 4,
    price: 300,
    suburb: "Sydney",
    field_address: {
      locality: "Sydney",
      postal_code: "2000",
      address_line1: "2A Macquarie St",
      address_line2: "Sydney NSW 2000",
      latitude: -33.85878,
      longitude: 151.21611,
    },
  },
  {
    id: 3,
    avatar:
      "https://static1.pawshakecdn.com/styles/square_thumbnail/sa/user_pictures/cropit_1553417292.jpeg",
    name: "Cathy",
    rating: 4,
    price: 500,
    suburb: "The Rocks",
    field_address: {
      locality: "The Rocks",
      postal_code: "2000",
      address_line1: "100 George St",
      address_line2: "The Rocks NSW",
      latitude: -33.85793,
      longitude: 151.20942,
    },
  },
  {
    id: 4,
    avatar: "https://apac.pawshakecdn.com/2022/07/11/b2293598-5a23-4544-95fa-5e987e010e13.jpg",
    name: "Nick",
    rating: 9,
    price: 359,
    suburb: "Balmain East",
    field_address: {
      locality: "Balmain East",
      postal_code: "2041",
      address_line1: "58 Darling St",
      address_line2: "Balmain East NSW",
      latitude: -33.85708,
      longitude: 151.19351,
    },
  },
  {
    id: 5,
    avatar: "https://apac.pawshakecdn.com/2022/12/19/6964a3c0-e0f3-49ab-8359-039938368350.jpg",
    name: "Thomas",
    rating: 6,
    price: 321,
    suburb: "Pyrmont",
    field_address: {
      locality: "Pyrmont",
      postal_code: "2009",
      address_line1: "117 Harris St",
      address_line2: "Pyrmont NSW",
      latitude: -33.86918,
      longitude: 151.19359,
    },
  },
  {
    id: 6,
    avatar: "https://apac.pawshakecdn.com/2023/01/11/976cc6fd-7618-4e1d-b13f-c4e6a019b035.jpg",
    name: "Jing",
    rating: 4,
    price: 987,
    suburb: "Sydney",
    field_address: {
      locality: "Sydney",
      postal_code: "2000",
      address_line1: "367 George St",
      address_line2: "Sydney NSW",
      latitude: -33.86873,
      longitude: 151.20667,
    },
  },
  {
    id: 7,
    avatar:
      "https://static1.pawshakecdn.com/styles/square_thumbnail/sa/user/image/2019/04/cropit_1554615169.jpeg",
    name: "Jeff",
    rating: 3,
    price: 134,
    suburb: "Sydney",
    field_address: {
      locality: "Sydney",
      postal_code: "2000",
      address_line1: "436 George St",
      address_line2: "Sydney NSW",
      latitude: -33.87128,
      longitude: 151.2085,
    },
  },
  {
    id: 8,
    avatar: "https://apac.pawshakecdn.com/2022/12/13/bcc1706b-6728-43b6-b73f-42fa94191e5e.jpg",
    name: "Steph",
    rating: 2,
    price: 289,
    suburb: "McMahons Point",
    field_address: {
      locality: "McMahons Point",
      postal_code: "2060",
      address_line1: "116 Blues Point Rd",
      address_line2: "McMahons Point NSW",
      latitude: -33.84541,
      longitude: 151.2039,
    },
  },
  {
    id: 9,
    avatar: "https://apac.pawshakecdn.com/2023/02/12/e54865b4-b2aa-4e4f-b6f2-191d3455a38e.jpg",
    name: "Brunte",
    rating: 4,
    price: 230,
    suburb: "Mosman",
    field_address: {
      locality: "Mosman",
      postal_code: "2088",
      address_line1: "5 Woolcott St",
      address_line2: "Mosman NSW",
      latitude: -33.83915,
      longitude: 151.19619,
    },
  },
  {
    id: 10,
    avatar: "https://apac.pawshakecdn.com/2022/09/09/9dd16cff-85cb-4309-9ca5-663a2eb016ba.jpg",
    name: "Di",
    rating: 4,
    price: 321,
    suburb: "Kirribilli",
    field_address: {
      locality: "Kirribilli",
      postal_code: "2061",
      address_line1: "85 Carabella St",
      address_line2: "Kirribilli NSW",
      latitude: -33.84676,
      longitude: 151.2166,
    },
  },
];

const MyMapComponent = ({ results, centerPoint }: GoogleMapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  //sydney opera house
  const defaultCenter: google.maps.LatLngLiteral = {
    lat: centerPoint[0],
    lng: centerPoint[1],
  };
  const defaultZoom = 12;
  const minZoom = 10;

  useEffect(() => {
    //map: google.maps.Map;
    const map = new google.maps.Map(ref.current as HTMLDivElement, {
      center: defaultCenter,
      zoom: defaultZoom,
      minZoom: minZoom,
    });

    const contentString = ``;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    results.map(
      ({
        geoCode: {
          coordinates: [longitude, latitude],
        },
        petOwner: { avatar, userName: name },
        address: { city: suburb },
        // rating,
        service: [{ Rate: price }],
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
          const distance = 10;
          const recurringTime = 2;
          const contentString =
            `
        <div class="Marker_InfoWindow">
          <div class="Avatar_Container">
            <img src=${avatar} alt="${name}'s service">
          </div>
          <p>${name}</p>
          <p class="Marker_Distance">${distance} km - ${suburb}</p>
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
      <Wrapper
        apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY ?? ""}
        render={MyRender}
        // libraries={["places"]}
      >
        <MyMapComponent results={results} centerPoint={centerPoint} />
      </Wrapper>
    </GoogleMapContainer>
  );
};

export default GoogleMap;
