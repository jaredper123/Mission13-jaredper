import { useState } from 'react';
import data from '../MovieData.json';
import './Movies.css';

const fullList = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(fullList);

  const addMovie = () => {
    setListOMovies([
      ...fullList,
      {
        MovieID: 6,
        Category: 'Action/Adventure',
        Title: 'Avengers, The',
        Year: 2012,
        Director: 'Joss Whedon',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <div className="movies">
      <h1>Joel Hilton's Movie Collection</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {listOMovies.map((m) => (
            <tr key={m.MovieID}>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addMovie}>
        Add
      </button>
    </div>
  );
}

export default MovieList;
