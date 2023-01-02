import React, { useState, createContext, useEffect } from "react";
import { getMovies } from "./api/movie-api";

export const MoviesContext = createContext(null);

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState( [] );
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then((result) => {
      setMovies(result)
    });
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setAuthenticated,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
