import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/icons/Logo.svg";
import search from "../assets/icons/Search.svg";
import menu from "../assets/icons/Menu.svg";
import IMDB from "../assets/icons/IMDB.svg";
import tomato from "../assets/icons/tomato.png";
import play from "../assets/icons/Play.svg";
import Poster from "../assets/images/Poster.png";

const API_Read_Access_Token = import.meta.env.VITE_API_Read_Access_Token;
const API_Key = import.meta.env.VITE_API_KEY;

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getmovieSearchResults();
  }, [searchQuery]);
  const getmovieSearchResults = async () => {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${API_Read_Access_Token}`,
    };
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_Key}&include_adult=false&language=en-US&page=1`, headers
      );
      const data = (await response).data;
      if (searchQuery === "") return;
      console.log(data.results.slice(0, 10));
      setUpcomingMovies(data.results.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const searchInputHandler = (e) => {
    e.preventDefault();
    let value = e.target[0].value;
    // console.log(typeof(searchQuery), searchQuery)
    setSearchQuery(e.target[0].value);
    if (searchQuery === "") {
      console.log("search empty");
      return;
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${Poster})` }}
      className="bg-cover bg-no-repeat px-5 md:px-24 pt-4 h-[600px] w-full bg-slate-500"
    >
      {/* header */}
      <div className=" flex items-center justify-between">
        <div className="w-[120px] md:w-auto">
          <img src={logo} alt="Logo" />
        </div>
        {/* <form action=""></form> */}
        <form
          //   action="submit"
          onSubmit={searchInputHandler}
          className="hidden w-max relative lg:flex items-center"
        >
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="outline-none text-white text-base w-[525px] placeholder-white border-2 border-[#D1D5DB] bg-transparent rounded-md px-2.5 py-1.5"
          />
          <img className="absolute right-2.5" src={search} alt="Search Svg" />
        </form>
        <div className="text-white flex items-center gap-7">
          <a className="text-sm md:text-base" href="">
            Sign in
          </a>
          <img src={menu} alt="Menu-bar Svg" />
        </div>
      </div>

      <form
        //   action="submit"
        onSubmit={searchInputHandler}
        className="mt-5 mx-auto w-[100%] relative flex lg:hidden items-center self-center"
      >
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="outline-none text-white text-base w-[100%] placeholder-white border-2 border-[#D1D5DB] bg-transparent rounded-md px-2.5 py-1.5"
        />
        <img className="absolute right-2.5" src={search} alt="Search Svg" />
      </form>

      <div className="text-white mt-[93px] md:w-[400px]">
        <h1 className="text-white font-bold text-4xl md:text-5xl ">
          John Wick 3 : Parabellum
        </h1>
        <div className="text-xs my-4 flex items-center gap-[34px]">
          <div className="flex items-center gap-2.5">
            <img src={IMDB} alt="IMDB Svg" />
            <p className="">86.0 / 100</p>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={tomato} alt="Tomato" />
            <p className="">97%</p>
          </div>
        </div>
        <p className="w-[300px] mb-4 font-[500] text-sm">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

        <button className="text-sm font-bold flex items-center gap-2 px-4 py-1.5 bg-[#BE123C] rounded-md">
          <img src={play} alt="Play Svg" />
          Watch trailer
        </button>
      </div>
    </section>
  );
};

export default Hero;
