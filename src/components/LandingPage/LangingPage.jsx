import React, { useEffect, useContext } from "react";
import MovieCards from "../MovieCards/MovieCards";
import { NavbarMinimal } from "../NavMenu/NavbarMinimal.tsx";
import { MovieContext } from "../../MovieProvider";

const LandingPage = () => {
  const { fetchApi } = useContext(MovieContext);
  
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <NavbarMinimal />
      </div>
      <div style={{ width: "90%", marginLeft: 160, marginTop: 60 }}>
        <MovieCards />
      </div>
    </div>
  );
};

export default LandingPage;
