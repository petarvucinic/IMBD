import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LangingPage";
import MovieProvider from "./MovieProvider";

function App() {
  return (
    <div>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
