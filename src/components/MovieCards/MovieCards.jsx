import React from "react";
import { Button, Grid } from "@mantine/core";
import { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../../MovieProvider";

const MovieCards = () => {
  const { movies, fetchTvs, fetchApi, setMoviesOrSeries } =
    useContext(MovieContext);
  const btnStyles = {
    width: "100px",
    fontSize: "10px",
    marginBottom: "20px",
    background: "#f2f2f5",
  };

  const handleFetchMovie = () => {
    fetchApi();
    setMoviesOrSeries(false);
  };

  const hadnleFetchSeries = () => {
    fetchTvs();
    setMoviesOrSeries(true);
  };

  return (
    <>
      <div>
        <Button
          size="xs"
          radius="xl"
          style={btnStyles}
          onClick={hadnleFetchSeries}
        >
          Series
        </Button>
        <Button
          sx={{ marginLeft: "10px" }}
          radius="xl"
          size="xs"
          style={btnStyles}
          onClick={handleFetchMovie}
        >
          Movies
        </Button>
      </div>
      <Grid>
        {movies.length > 0
          ? movies.map((movie, index) => {
              return (
                <Grid.Col key={index} md={6} lg={3}>
                  <Movie movie={movie} />
                </Grid.Col>
              );
            })
          : ""}
      </Grid>
    </>
  );
};

export default MovieCards;
