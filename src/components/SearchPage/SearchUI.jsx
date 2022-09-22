import React, { useContext, useState } from "react";
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { MovieContext } from "../../MovieProvider";
import { useNavigate } from "react-router-dom";
import MovieCards from "../MovieCards/MovieCards";

function SearchUI() {
  const { fetchSearchMovieApi, fetchApi } = useContext(MovieContext);
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.trim();
      if (query === "") {
        fetchApi();
      } else {
        fetchSearchMovieApi(query);
      }
    }
  };

  return (
    <div style={{ width: "500px" }}>
      <div style={{ display: "flex" }}>
        <Input
          sx={{ width: "60%" }}
          icon={<IconSearch />}
          placeholder="Search"
          radius="xl"
          onKeyDown={(e) => onKeyUp(e)}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          radius="xl"
          sx={{ width: "130px", fontSize: "10px", marginLeft: "30px" }}
          onClick={() => navigate("/advanced_search")}
        >
          Advanced Search
        </Button>
      </div>
      <div style={{ width: "90%" }}>
        <MovieCards />
      </div>
    </div>
  );
}

export default SearchUI;
