// import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import NavHeader from "./NavHeader";
import PokeList from "./PokeList";
import FavList from "./FavList";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <NavHeader />
        <Container>
          <Routes>
            <Route path="/" element={<PokeList />} />
            <Route path="/fav" element={<FavList />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Container>
  );
}

export default App;
