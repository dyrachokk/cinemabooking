import React, { useState } from 'react';
import MovieList from './components/MovieList';
import movies from './data/movies';
import './index.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Фільтруємо фільми за назвою (незалежно від регістру)
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Now Showing</h1>
      
      {/* Поле пошуку */}
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

export default App;
