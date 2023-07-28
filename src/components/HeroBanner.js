import React from "react";
import heroImage from "../assets/images/hero-image.jpg";

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
        <h1
          style={{
            fontSize: "4.7rem",
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: "800",
          }}
        >
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
            bottom: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            textAlign: "center",
            padding: "8px 16px",
            color: "white",
            borderRadius: "4px",
            fontSize: "6rem",
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: "800",
          }}
        >
          INSIDE <br /> AND OUT.
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          fontFamily: "Roboto Condensed, sans-serif",
          background: "grey",
          color: "white",
          padding: "10px 20px",
          borderRadius: "4px",
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.background = "darkgrey";
        }}
        onMouseDown={(e) => {
          e.target.style.background = "black";
        }}
        onMouseUp={(e) => {
          e.target.style.background = "grey";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "grey";
        }}
        onClick={() => {
          const exercisesSection = document.getElementById("exercises");
          exercisesSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Explore
      </button>
    </div>
  );
};

export default HeroBanner;
