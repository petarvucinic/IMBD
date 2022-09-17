import React from "react";
import { NavbarMinimal } from "../NavMenu/NavbarMinimal.tsx";
import AdvancedSearchUI from "./AdvancedSearchUI";

function AdvancedSearch() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <NavbarMinimal />
      </div>
      <div style={{ display: "flex", margin: "60px auto 0px auto" }}>
        <AdvancedSearchUI />
      </div>
    </div>
  );
}

export default AdvancedSearch;
