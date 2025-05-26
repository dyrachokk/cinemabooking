import MovieList from '../components/MovieList';
import movies from '../data/movies';

const Home = () => {
  return (
    <div className="container">
      <h1>Now Showing</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
