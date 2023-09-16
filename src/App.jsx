import Hero from "./components/Hero";
import TopMovies from "./components/TopMovies";
import MovieDetails from './components/MovieDetails'
import HomePage from "./components/HomePage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movies/:id" element={<MovieDetails />}></Route>
      {/* <Route path="/top" element={<TopMovies />}></Route> */}
      
    </Routes>
  );
}

export default App;
