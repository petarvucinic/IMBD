import React from "react";
import MovieCards from "../MovieCards/MovieCards";
import { NavbarMinimal } from "../NavMenu/NavbarMinimal.tsx";

const LandingPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div >
        <NavbarMinimal />
      </div>
      <div style={{ justifyContent: "space-evenly" }}>
        <MovieCards />
      </div>
    </div>
  );
};

export default LandingPage;
