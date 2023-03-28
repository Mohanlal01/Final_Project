import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Auth from "../utils/auth";
import Header from "../components/Header";
import running from "../images/running.gif"
import cycling from "../images/cycle.gif"
import swimming from "../images/swimming.gif"
import walking from "../images/walk.gif"
import hiking from "../images/hike.gif"
import resistanceIcon from "../images/pushup.gif"


export default function Exercise() {
  const loggedIn = Auth.loggedIn();
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage, setExercisesPerPage] = useState(4);

  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  // Get current exercises
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = [
    {
      label: "Running",
      image: running,
      path: "/exercise/cardio",
    },
    {
      label: "Cycling",
      image: cycling,
      path: "/exercise/Cycling",
    },
    {
      label: "Walk",
      image: walking,
      path: "/exercise/Walking",
    },
    {
      label: "Swimming",
      image: swimming,
      path: "/exercise/Swimming",
    },
    {
      label: "Hiking",
      image: hiking,
      path: "/exercise/Hiking",
    },
    {
      label: "Pushups",
      image: resistanceIcon,
      path: "/exercise/Pushup",
    },
  ].slice(indexOfFirstExercise, indexOfLastExercise);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <div className="exercise d-flex flex-column align-items-center">
        <h2 className='title'>Add Exercise</h2>
        <div className="exercise-buttons-container d-flex justify-content-center align-items-center flex-wrap">
          {currentExercises.map((exercise, index) => (
            <div key={index}>
              <button className='cardio-btn d-flex flex-column  align-items-center justify-content-center' onClick={() => navigate(exercise.path)}>
                <img alt={exercise.label} src={exercise.image} className="exercise-icon" />
                {exercise.label}
              </button>
            </div>
          ))}
        </div>
        <div className="pagination-container">
          {Array.from({ length: Math.ceil(6 / exercisesPerPage) }).map((_, index) => (
            <button key={index} className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
