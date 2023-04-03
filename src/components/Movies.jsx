import React from 'react';
import "./Movies.css";
import Navbar from './Navbar';
// import "./main.css";
import {useNavigate} from "react-router-dom";
import { useState,useEffect } from 'react';

function Movies() {
    const Navigate = useNavigate();
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=d903bcdae97d41411a8e54f49fb3b5d0');
        const data = await res.json();
        setMovies(data.results);
        Navigate("/movies");
      }
      fetchData();
    }, []);
    return (
    <>
    <Navbar/>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3">
            <div className="Movies position-relative shadow-lg rounded">
              <div className="rate position-absolute end-0 top-0">
                <span>{movie.vote_average}</span>
              </div>
              <img className="card-img-top w-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            </div>
          </div>
        ))}
      </div>
      </>
    );
  }
  
  export default Movies;
// export default function Movies() {
//     return(
//         <> 
        
//         </>
//     )
// }
