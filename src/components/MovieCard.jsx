import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Time:</strong> {movie.time}</p>
      </div>
    </div>
  );
};

export default MovieCard;
