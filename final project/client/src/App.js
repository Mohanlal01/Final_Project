import React from "react";
// rename browserRouter as router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages and components
import Home from "./pages/Home";
import History from "./pages/History";
import Exercise from "./pages/Exercise";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import SingleExercise from "./components/SingleExercise"
import Cardio from "./components/Cardio";
import Pushup from "./components/Pushup";
import Cycling from "./components/Cycling";
import Hiking from "./components/Hiking";
import Swimming from "./components/Swimming";
import Walking from "./components/Walking";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:type/:id" element={<SingleExercise />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise/cardio" element={<Cardio />} />
        <Route path="/exercise/Cycling" element={<Cycling />} />
        <Route path="/exercise/Hiking" element={<Hiking />} />
        <Route path="/exercise/Swimming" element={<Swimming />} />
        <Route path="/exercise/Walking" element={<Walking />} />
        <Route path="/exercise/Pushup" element={<Pushup />} />
        
        <Route path="*" element={<Error />} />
      </Routes>
    </Router >
  );
}

export default App;
