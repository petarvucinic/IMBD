import React, { useEffect } from "react";
import { API_KEY } from "./constants";
import axios from "axios";
import { useState } from "react";

export const MovieContext = React.createContext();

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const fetchApi = async () => {
    try {
      const result = await axios.get(
        `https://imdb-api.com/en/API/Top250Movies/${API_KEY}`
      );
      const data = result.data.items;
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchMovieApi = async (query) => {
    try {
      const result = await axios.get(
        `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${query}`
      );
      setMovies(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        fetchApi,
        setSearchInput,
        searchInput,
        fetchSearchMovieApi,
        filtered,
        setFiltered,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
