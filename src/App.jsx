import React, { Suspense } from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {

  const MovieDetails = React.lazy(() => import('./components/MovieDetails'))
  const HomePage = React.lazy(() => import('./components/HomePage'))
  return (
    // <>
    <Suspense
      fallback={
        <div className="loading">
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}></Route>
        {/* <Route path="/top" element={<TopMovies />}></Route> */}
      </Routes>
    </Suspense>
    // </>
  );
}

export default App;
