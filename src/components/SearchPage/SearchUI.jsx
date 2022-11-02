import React, { useContext, useState } from "react";
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { MovieContext } from "../../MovieProvider";
import { useNavigate } from "react-router-dom";
import MovieCards from "../MovieCards/MovieCards";

function SearchUI() {
  const { fetchSearchMovieApi, fetchApi, moviesOrSeries, fetchSearchTvs } =
    useContext(MovieContext);
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.trim();
      if (query === "") {
        fetchApi();
      } else if (moviesOrSeries == false) {
        fetchSearchMovieApi(query);
      } else if (moviesOrSeries == true) {
        fetchSearchTvs(query);
      }
    }
  };

  return (
    <div style={{}}>
      <div style={{ display: "flex" }}>
        <Input
          sx={{ margin: "20px auto 50px auto" }}
          icon={<IconSearch />}
          placeholder="Search"
          radius="xl"
          onKeyDown={(e) => onKeyUp(e)}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          radius="xl"
          sx={{
            width: "130px",
            fontSize: "10px",
            margin: "20px auto 50px auto",
            marginLeft: "20px",
          }}
          onClick={() => navigate("/advanced_search")}
        >
          Advanced Search
        </Button>
      </div>
      <div style={{ width: "90%", marginLeft: 160 }}>
        <MovieCards />
      </div>
    </div>
  );
}

export default SearchUI;
