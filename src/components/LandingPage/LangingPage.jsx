import React from "react";
import MovieCards from "../MovieCards/MovieCards";
import { NavbarMinimal } from "../NavMenu/NavbarMinimal.tsx";
import Try from "../NavMenu/Try";

const LandingPage = () => {
  return (
    <div style={{ display: "inline", flexDirection: "column" }}>
      <div>
        {/* <NavbarMinimal /> */}
        <Try />
      </div>

      {/* <MovieCards /> */}
    </div>
  );
};

export default LandingPage;
