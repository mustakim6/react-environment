import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <li>
        <img
          src={movie.poster}
          height="100px"
          width="100px"
          alt={movie.title}
        />
        <p>
          {movie.title} by {movie.director} was released on {movie.year}.
          Runtime: {movie.runtime}
        </p>
        <p>Rating: {movie.rating}</p>
      </li>
    </div>
  );
};

export default Movie;
