import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import IMDB from "../assets/icons/IMDB.svg";
import tomato from "../assets/icons/tomato.png";
import Favorite from "../assets/icons/Favorite.svg";

// flex flex-wrap flex-row gap-[calc((100vw-1192px)/3)]
// https://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg

const API_Read_Access_Token = import.meta.env.VITE_API_Read_Access_Token;
const API_Key = import.meta.env.VITE_API_KEY;
// const API_Key='d621dfcc13fc45bdde4b0f2b76515c9d'
// const API_Read_Access_Token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjIxZGZjYzEzZmM0NWJkZGU0YjBmMmI3NjUxNWM5ZCIsInN1YiI6IjY1MDE1MTc1NmEyMjI3MDBmZDIwYjQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YIc6T2B_Ft0u24gFaMgg0ZROW26qFJURr6Hh37VTlcY'

const TopMovies = () => {
  const [topTenMovies, setTopTenMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchTopMovies = async () => {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${API_Read_Access_Token}`,
    };
    try {
      setIsLoading(true);
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_Key}`,
        { headers }
      );

      const topMovieData = (await response).data;
      const top_ten_movie = topMovieData.results.slice(0, 10);

      setTopTenMovies(top_ten_movie);
      setIsLoading(false);
      console.log(top_ten_movie);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect( () => {
    setIsLoading(true);
    fetchTopMovies();
    setIsLoading(false);
  }, []);

  return (
    <section className="mx-auto px-5 md:px-24 pt-[70px]">
      <h2 className="mb-11 text-4xl font-bold">Top Movies</h2>
      {isLoading ? (
        <p className="text-xl font-[500] text-center">Loading....</p>
      ) : (
        <div className="">
          <div className="w-sceen mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-y-10 xl:gap-y-[99px] justify-between xl:gap-x-[calc((100vw-1192px)/3)]">
            {topTenMovies.map((movie, i) => (
              <Link
                to={`/movies/${movie.id}`}
                data-testid="movie-card"
                state={{
                  title: movie.title,
                  date: movie.release_date,
                  runtime: movie.runtime,
                  overview: movie.overview,
                }}
                key={i}
                className="w-full sm:w-[250px]"
              >
                <div
                  data-testid="movie-poster"
                  className="bg-black md:h-[370px]"
                >
                  <img
                    className=""
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>

                <div className="bg-white">
                  <p
                    data-testid="movie-release-date"
                    className="text-xs font-bold text-[#9CA3AF] my-3"
                  >
                    USA, {movie.release_date.toLocaleString("en-GB")} - Current
                  </p>
                  <h3
                    data-testid="movie-title"
                    className="text-lg font-bold text-[#111827]"
                  >
                    {movie.title}
                  </h3>
                  <div className="text-xs my-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img src={IMDB} alt="IMDB Svg" />
                      <p className="">{movie.vote_average * 10}.0 / 100</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <img src={tomato} alt="Tomato" />
                      <p className="">{movie.vote_average * 10}%</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-[#9CA3AF]">
                    Action, Adventure, Horror
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TopMovies;
