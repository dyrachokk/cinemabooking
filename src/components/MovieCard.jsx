import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.genre}</p>
      <Link to={`/booking/${movie.id}`}>
        <button>Забронювати</button>
      </Link>
    </div>
  );
};

export default MovieCard;
