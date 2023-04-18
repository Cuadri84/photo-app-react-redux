import React from "react";
import { Search } from "../features/search/Search";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { FavoritePhotos } from "../features/favoritePhotos/FavoritePhotos";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/favorite" element={<FavoritePhotos />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
