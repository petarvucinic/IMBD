import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LangingPage";
import AdvancedSearch from "./components/SearchPage/AdvancedSearch";
import SearchPage from "./components/SearchPage/SearchPage";
import MovieProvider from "./MovieProvider";
import AboutMovie from "./components/AboutMovie/AboutMovie";

function App() {
  return (
    <div>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/advancedSearch" element={<AdvancedSearch />} />
          <Route path="/aboutMovie" element={<AboutMovie />} />
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
