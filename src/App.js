
import React from "react";
// import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Popular from "./Pages/Popular";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/popular" element={<Popular/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
