import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import playBtn from "../assets/icons/PlayBtn.svg";
import Star from "../assets/icons/Star.svg";
import ExpandArrow from "../assets/icons/ExpandArrow.svg";
// import art from '../assets/icons/P'
import axios from "axios";

const API_Read_Access_Token = import.meta.env.VITE_API_Read_Access_Token;
const API_Key = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
  const [ID, setID] = useState("");
  const [movieData, setMovieData] = useState("");
  const location = useLocation();
  const movieId = location.pathname.split("/")[2];

  const getMovieDetails = async (ID) => {
    setID(movieId.toString());
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${API_Read_Access_Token}`,
    };

    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/${ID}&api_key=${API_Key}`,
        { headers }
      );
      const data = (await response).data;
      setMovieData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setID(ID);

    getMovieDetails(ID);
    console.log(ID);
  }, [ID]);

  return (
    <section className="py-[38px] px-5 md:px-12">
      <div
        style={{
          background: `url(http://image.tmdb.org/t/p/w1280/${movieData.backdrop_path})`,
        }}
        className="bg-cover mb-8 pt-[132px] bg-slate-300 flex flex-col items-center h-[450px] rounded-[20px]"
      >
        <div className="cursor-pointer flex items-center justify-center w-[110px] h-[110px] rounded-full bg-white bg-opacity-[0.35]">
          <img className="" src={playBtn} alt="Play Svg" />
        </div>
        <p className="mt-2 font-[500] text-lg md:text-2xl text-[#e8e8e8]">Watch Trailer</p>
      </div>

      <div className="mb-6 xl:flex items-center justify-between">
        <div className="xl:flex items-center gap-4">
          <div className="gap-1.5 md:gap-3 sm:flex items-center text-[#404040] lg:text-2xl">
            <p data-testid="movie-title">{movieData.title}</p>
            <p>•</p>
            <p data-testid="movie-release-date">
              {new Date(movieData.release_date).toUTCString()}
              {/* {new Date(movieData.release_date).toUTCString()} */}
            </p>
            <p>•</p>
            <p>PG-13</p>
            <p>•</p>
            <p data-testid="movie-runtime">{movieData.runtime}m</p>
          </div>
          <div className="mt-3 flex items-center gap-2.5">
            <div className="rounded-[15px] py-0.5 md:py-1 px-2 md:px-4 text-[#B91C1C] border border-[#F8E7EB]">
              Action
            </div>
            <div className="rounded-[15px] py-0.5 md:py-1 px-2 md:px-4 text-[#B91C1C] border border-[#F8E7EB]">
              Drama
            </div>
          </div>
        </div>

        <div className="mt-3 md:mt-0 flex items-center gap-2">
          <img className="w-5 md:w-auto" src={Star} alt="Star Svg" />
          <div className=" flex items-center gap-2">
            <p className="font-[500] md:text-2xl text-[#E8E8E8]">
              {movieData.vote_average}
            </p>
            <p className="font-[500] md:text-xl text-[#666]">|</p>
            <p className="font-[500] md:text-xl text-[#666]">350k</p>
          </div>
        </div>
      </div>

      <div className="lg:w-[775px]">
        <p data-testid="movie-overview" className="mb-9 lg:text-xl text-[#333]">
          {movieData.overview}
        </p>
        <p className="text-[#333] md:text-xl">
          Director : <span className="text-[#BE123C]">Joseph Kosinski</span>
        </p>
        <p className="my-8 text-[#333] md:text-xl">
          Writers :{" "}
          <span className="text-[#BE123C]">
            Jim Cash, Jack Epps Jr, Peter Craig
          </span>
        </p>
        <p className="text-[#333] md:text-xl">
          Stars :{" "}
          <span className="text-[#BE123C]">
            Tom Cruise, Jennifer Connelly, Miles Teller
          </span>
        </p>

        <div className="mt-[30px] relative h-[55px] w-full md:w-[775px] flex items-center">
          <div className="absolute px-2 md:px-5 py-3 rounded-[10px] bg-[#BE123C] md:text-xl text-white">
            Top rated movie #65
          </div>
          <img
            src={ExpandArrow}
            alt="Expand Arrow Svg"
            className="w-5 md:w-auto absolute right-2 md:right-[26px]"
          />
          <div className="w-full md:w-[775px] text-center md:text-xl font-[500]  border border-[#C7C7C7] rounded-[10px] py-3">
            Awards 9 nominations
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
