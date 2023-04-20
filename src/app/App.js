import React, { useState } from "react";
import { Search } from "../features/search/Search";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { FavoritePhotos } from "../features/favoritePhotos/FavoritePhotos";
import { HomeContext } from "../contexts/homeContext";

function App() {
  const [home, setHome] = useState(true);

  return (
    <HomeContext.Provider value={{ home, setHome }}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/favorite" element={<FavoritePhotos />} />
        </Routes>
      </HashRouter>
    </HomeContext.Provider>
  );
}

export default App;
