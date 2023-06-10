import "./styles.css";

import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import CharactersList from "./components/CharactersList";
import Movies from "./components/Movies";

export default function App() {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const api = `https://swapi.dev/api/films/`;

  const loadMovies = () => {
    fetchMovies().then((data) => {
      setMovieInfo(data.results);
    });
  };

  const fetchMovies = () => {
    return fetch(api)
      .then((data) => data.json())
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Movies movies={movieInfo} />;
          }}
        />
        {movieInfo.map((movie, idx) => (
          <Route
            path={`/${idx}/chars`}
            render={() => {
              return <CharactersList movieInfo={movie} />;
            }}
            key={movie.episode_id}
          />
        ))}
      </Switch>
    </>
  );
}
