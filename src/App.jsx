import React from "react";
import { Home } from "./components/Home.jsx";
import { Login } from "./login/Login.jsx";
import Quiz from "./quiz/Quiz.jsx";
import { Signup } from "./login/Signup.jsx";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
