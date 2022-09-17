import React from "react";
import { NavbarMinimal } from "../NavMenu/NavbarMinimal.tsx";
import SearchUI from "./SearchUI";

function SearchPage() {
  return (
    <div style={{ display: "flex"}}>
      <div>
        <NavbarMinimal />
      </div>
      <div style={{display: "flex", margin: "60px auto 0px auto"}}>
        <SearchUI />
      </div>
    </div>
  );
}

export default SearchPage;
