import React from "react";
import corporateImg from "../assets/corporate.png";
import enterImg from "../assets/movies.png";
import hospitalImg from "../assets/hospital.png";
import educationImg from "../assets/education.png";
import homeImg from "../assets/home.png";

export const data = [
  {
    title: "Important Distances",
    imgSource: homeImg,

    locations: [
      "06 Km from Bellandur",
      "08 Km from HSR Layout",
      "10 Km from Koramangala",
      "12 Km from Whitefield",
      "15 Km from Indiranagar",
      "17 Km from MG Road",
    ],
  },
  {
    title: "IT Parks",
    imgSource: corporateImg,
    locations: [
      "900 m - RGA Tech Park",
      "02 Km - Wipro Limited SEZ",
      "04 Km - Embassy Tech Village",
      "05 Km - Cessna Tech Park",
      "06 Km - Global Technology Park",
    ],
  },
  {
    title: "Retail & Entertainment",
    imgSource: enterImg,
    locations: [
      "220 m - DMart, Sarjapura Main Road",
      "01 Km  - Decathlon, Sarjapura Road",
      "03 Km - Zudio, Sarjapura Road",
      "05 Km - Market Square Mall, Sarjapura  Road",
      "03 Km - Sarjapura Social, Marathahalli Road",
    ],
  },
  {
    title: "Hospitals",
    imgSource: hospitalImg,
    locations: [
      "06 Km - Cloud Nine Hospital, Bellandur",
      "05 Km - Sakra World Hospital, Marathahalli",
      "05 Km - Manipal Hospital, Sarjapur Road",
      "04 Km - Motherhood Hospital, Sarjapur",
      "02 Km - Narayana Multispeciality Clinic, Sarjapur Road",
    ],
  },
  {
    title: "Educational Institutions",
    imgSource: educationImg,
    locations: [
      "02 Km - Kidzee Carmelaram - Marathahalli Road",
      "08 Km - NIFT College, HSR Layout",
      "04 Km  - Delhi Public School, Dommasandra",
      "06 Km - Silver Oaks International School, Sarjapur Road",
      "07 Km - The International School, Sarjapur Road",
      "07 Km -  DMM High School, Dommasandra",
    ],
  },
];

export default function LocationsImp() {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        padding: "3rem 1.5rem",
        background: "grey",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "black",
        }}
      >
        Nearby Locations
      </h1>
      <div
        className="locations"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.1rem",
          marginTop: "3rem",
        }}
      >
        {data.map((item, index) => (
          <LocationCard
            key={index}
            imgSource={item.imgSource}
            title={item.title}
            locations={item.locations}
          />
        ))}
      </div>
    </div>
  );
}

export const LocationCard = ({ imgSource, title, locations }) => {
  return (
    <>
      <div
        className="location-card"
        style={{
          minWidth: "289px",
          width: "2rem",
          height: "60rem",
          background: "white",
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "2rem 3rem 2rem 3rem",
          borderRadius: "0.3rem",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          {title}
        </h3>
        <img
          src={imgSource}
          alt={title}
          style={{
            width: "6rem",
            height: "6rem",
          }}
        />
        <div
          className="location-card-items"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {locations.map((element, index) => (
            <h6
              key={index}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: "1",
              }}
            >
              {element}
            </h6>
          ))}
        </div>
      </div>
    </>
  );
};
