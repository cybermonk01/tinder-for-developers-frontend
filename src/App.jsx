import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Navbar />
      <Auth />
    </>
  );
}

export default App;
