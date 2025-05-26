import { useState } from 'react';
import MovieList from '../components/MovieList';
import movies from '../data/movies';
import '../index.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Now Showing</h1>
      
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;
