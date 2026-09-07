/*
Movie Information

Create a movie card showing

Poster
Movie Name
Release Year
Genre
Duration
IMDb Rating
*/

import React from "react";
import "./MovieCard.css";

const MovieCard = () => {
  const movie = [
    {
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vyhj0UNi-dZH48MgzGzmgYESF8GPhU4_DcfYtjGetzor7idIE-dLrE-gQfljIKMjVAg6&s=10",
      movieName: "The Odyssey",
      releaseYear: 2026,
      genre: "Epic Fantasy / Adventure",
      duration: "2h 50m", // Expected (placeholder)
      imdbRating: 8.9, // Example rating
      bookMyShowLink : ""
    },
    {
        poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vyhj0UNi-dZH48MgzGzmgYESF8GPhU4_DcfYtjGetzor7idIE-dLrE-gQfljIKMjVAg6&s=10",
        movieName: "The Odyssey",
        releaseYear: 2026,
        genre: "Epic Fantasy / Adventure",
        duration: "2h 50m", // Expected (placeholder)
        imdbRating: 8.9, // Example rating
        bookMyShowLink : ""
    },
    {
        poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vyhj0UNi-dZH48MgzGzmgYESF8GPhU4_DcfYtjGetzor7idIE-dLrE-gQfljIKMjVAg6&s=10",
        movieName: "The Odyssey",
        releaseYear: 2026,
        genre: "Epic Fantasy / Adventure",
        duration: "2h 50m", // Expected (placeholder)
        imdbRating: 8.9, // Example rating
        bookMyShowLink : ""
    },
  ];

  return (
    <div className="box">
      {movie.map((m) => {
        return (
          <div className="movie-card" key={m.id}>
            <img src={m.poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">{m.movieName}</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Release Year : {m.releaseYear}
              </li>
              <li className="list-group-item">Genre : {m.genre}</li>
              <li className="list-group-item">Duration : {m.duration}</li>
              <li className="list-group-item">
                IMDB rating : {m.imdbRating}
              </li>
            </ul>
            <div className="card-body">
              <a href="https://in.bookmyshow.com/movies/ahmedabad/the-odyssey/buytickets/ET00480917/">
                <button className="btn btn-primary">Watch Now</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
