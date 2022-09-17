import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LangingPage";
import AdvancedSearch from "./components/SearchPage/AdvancedSearch";
import SearchPage from "./components/SearchPage/SearchPage";
import MovieProvider from "./MovieProvider";

function App() {
  return (
    <div>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/advanced_search" element={<AdvancedSearch />} />
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
