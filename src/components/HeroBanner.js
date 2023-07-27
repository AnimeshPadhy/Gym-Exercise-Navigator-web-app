import React from "react";
import heroImage from "../assets/images/hero-image.jpg"

const HeroBanner = () => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "40%",
          width: "100%",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4.7rem" ,fontFamily: 'Roboto Condensed, sans-serif', fontWeight: '800'}}>
          FIND YOUR <br /> STRENGTH
        </h1>
      </div>
      <div
        style={{
          height: "60%",
          width: "98%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "20px",
        }}
      >
        <img
          // src={require("../assets/images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg").default}
          src={heroImage}
          alt="img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "22%",
            right: "37%",
            textAlign: "center",
            padding: "8px 16px",
            color: "white",
            borderRadius: "4px",
          }}
        >
          <h1 style={{ fontSize: "5.8rem", margin: "0", fontFamily: 'Roboto Condensed, sans-serif', fontWeight:'800'}}>
            INSIDE <br /> AND OUT.
          </h1>
        </div>
      </div>
      <button
  style={{
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    fontFamily: 'Roboto Condensed, sans-serif',
    background: 'grey',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease', // Add smooth transition on background change
  }}
  // Hover Style
  onMouseOver={(e) => {
    e.target.style.background = 'darkgrey';
  }}
  // Press (Active) Style
  onMouseDown={(e) => {
    e.target.style.background = 'black';
  }}
  // Reset Style on Mouse Up (when press is released)
  onMouseUp={(e) => {
    e.target.style.background = 'grey';
  }}
  // Reset Style on Mouse Leave (when mouse moves away from the button)
  onMouseLeave={(e) => {
    e.target.style.background = 'grey';
  }}
  onClick={() => {
    // Add your onclick functionality here
    // For example, you can navigate to the "exercises" section using smooth scroll
    const exercisesSection = document.getElementById('exercises');
    exercisesSection.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Explore
</button>

    </div>
  );
};

export default HeroBanner;
