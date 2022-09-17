import React, { useContext } from "react";
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { MovieContext } from "../../MovieProvider";
import { useNavigate } from "react-router-dom";

function SearchUI() {
  const { setSearchInput, fetchApi } = useContext(MovieContext);
  const navigate = useNavigate()
  const handleSearchInput = (e) => {
    console.log(e.target.value)
    setSearchInput(e)
    fetchApi()
  };
  return (
    <div style={{ width: "500px" }}>
      <div style={{ display: "flex" }}>
        <Input
          sx={{ width: "60%" }}
          icon={<IconSearch />}
          placeholder="Search"
          radius="xl"
          onChange={(e) => handleSearchInput(e)}
        />
        <Button
          radius="xl"
          sx={{ width: "130px", fontSize: "10px", marginLeft: "30px" }}
          onClick={() => navigate("/advanced_search")}
        >
          Advanced Search
        </Button>
      </div>
    </div>
  );
}

export default SearchUI;
