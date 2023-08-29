import React, { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import ViewExercise from "./ViewExcercise";
import { useNavigate } from "react-router-dom";
import NavLogIn from "./NavLogIn";

function ViewWorkout({currentWorkout}) {
  const [workout, setWorkout] = useState("");
  const [editWorkout, setEditWorkout] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [workoutActivityName, setWorkoutActivityName] = useState("");
  const navigate = useNavigate();
  const { token } = useToken();

  // ------------- START OF GET workout function -------------
  useEffect(() => {
    setWorkout(currentWorkout);
    setWorkoutName(currentWorkout.name);
    setWorkoutDuration(currentWorkout.duration);
    setWorkoutDescription(currentWorkout.description);
    setWorkoutActivityName(currentWorkout.activity_name);
  }, [currentWorkout]);
  // ------------- END OF GET workout function -------------

  // ------------- START OF PUT workout function -------------
  const handleEditWorkout = async (e) => {
    e.preventDefault();
    const data = {};
    data.name = workoutName;
    data.duration = workoutDuration;
    data.description = workoutDescription;
    data.activity_name = workoutActivityName;
    data.account = workout.account;

    const url = `${process.env.REACT_APP_API_HOST}/api/workouts/${workout.id}/`;
    const fetchOptions = {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchOptions);
    if (response.ok) {
      setEditWorkout(false);
    }
  };
  // ------------- END OF PUT workout function -------------

  // ------------- START OF setEditWorkoutFalse function -------------
  function setEditWorkoutFalse() {
    setEditWorkout(false);
    setWorkout(workout);
    setWorkoutName(workout.name);
    setWorkoutDuration(workout.duration);
    setWorkoutDescription(workout.description);
    setWorkoutActivityName(workout.activity_name);
  }
  // ------------- END OF setEditWorkoutFalse function -------------

  async function handleDeleteWorkout() {
    const workoutUrl = `${process.env.REACT_APP_API_HOST}/api/workouts/${currentWorkout.id}/`;
    const fetchOptions = {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
    const workoutResponse = await fetch(workoutUrl, fetchOptions);
    if (workoutResponse.ok) {
      navigate("/workouts");
    }
  };

  return (
    <>
      <NavLogIn />
      <div className="container">
        <div className="row">
          <div className="col"></div>
          {/* ------------- START OF edit workout name ------------- */}
          <div className="col-10 border border-dark rounded-5 p-4 my-5">
            <div className="input-group input-group-lg mb-3">
              <i className="bi bi-check-circle invisible d-flex align-self-center fs-1 me-2"></i>
              <i className="bi bi-x-circle invisible d-flex align-self-center fs-1 me-3"></i>
              { editWorkout ?
              <input type="text" className="form-control text-center fs-1 rounded-5 bg-secondary bg-opacity-25" placeholder={workout.name} onChange={(e) => setWorkoutName(e.target.value)} value={workoutName} id="workoutName"/>
              :
              <input type="text" className="form-control text-center fs-1 rounded-5 bg-white border-0" placeholder={workout.name} onChange={(e) => setWorkoutName(e.target.value)} value={workoutName} id="workoutName" disabled/>
              }
              { editWorkout ?
              <>
              <i onClick={(e) => handleEditWorkout(e)} className="bi bi-check-circle text-success d-flex align-self-center fs-1 ms-3"></i>
              <i onClick={(e) => setEditWorkoutFalse(e)} className="bi bi-x-circle text-danger d-flex align-self-center fs-1 ms-2"></i>
              </>
              :
              <>
              <i className="bi bi-check-circle invisible d-flex align-self-center fs-1 ms-3"></i>
              <i onClick={() => setEditWorkout(true)} className="bi bi-pencil text-dark d-flex align-self-center fs-1 ms-2"></i>
              </>
              }
            </div>
            {/* ------------- START OF edit workout activity name ------------- */}
            <div className="input-group input-group-md mb-3">
              { editWorkout ?
              <input type="text" className="form-control text-center fs-2 rounded-5 bg-secondary bg-opacity-25" placeholder={workout.activity_name} onChange={(e) => setWorkoutActivityName(e.target.value)} value={workoutActivityName} id="workoutActivityName" />
              :
              <input type="text" className="form-control text-center fs-2 rounded-5 bg-white border-0" placeholder={workout.activity_name} onChange={(e) => setWorkoutActivityName(e.target.value)} value={workoutActivityName} id="workoutActivityName" disabled />
              }
            </div>
            {/* ------------- START OF edit workout duration ------------- */}
            <div className="input-group input-group-md mb-3">
              { editWorkout ?
              <input type="text" className="form-control text-center fs-2 rounded-5 bg-secondary bg-opacity-25" placeholder={workout.duration} onChange={(e) => setWorkoutDuration(e.target.value)} value={workoutDuration} id="workoutDuration" />
              :
              <input type="text" className="form-control text-center fs-2 rounded-5 bg-white border-0" placeholder={workout.duration} onChange={(e) => setWorkoutDuration(e.target.value)} value={workoutDuration} id="workoutDuration" disabled />
              }
            </div>
            {/* ------------- START OF edit workout description ------------- */}
            <div className="input-group input-group-sm">
              { editWorkout ?
              <textarea type="text" className="form-control text-center fs-4 rounded-5 bg-secondary bg-opacity-25" placeholder={workout.description} onChange={(e) => setWorkoutDescription(e.target.value)} rows="1" value={workoutDescription} id="workoutDescription" />
              :
              <textarea type="text" className="form-control text-center fs-4 rounded-5 bg-white border-0" placeholder={workout.description} onChange={(e) => setWorkoutDescription(e.target.value)} value={workoutDescription} id="workoutDescription" rows="1" disabled />
              }
            </div>
            {/* ------------- START OF edit workout description ------------- */}
            <div className="">
              <button className="btn btn-outline-danger fw-bold" onClick={() => handleDeleteWorkout()} type="button">Delete Workout</button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <ViewExercise currentWorkout={currentWorkout}/>
    </>
  );
}

export default ViewWorkout;
