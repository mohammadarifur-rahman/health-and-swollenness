import React, { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";


// ------------- view workout function -------------
function ViewWorkout() {
  const [workout, setWorkout] = useState("");
  const [editWorkout, setEditWorkout] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [workoutActivityName, setWorkoutActivityName] = useState("");
  const { token } = useToken();
  // ---------------------------------------------

  // ------------- get request for workout -------------
  const getWorkout = async (e) => {
      // do not hardcode id
    const workoutUrl = `${process.env.REACT_APP_API_HOST}/api/workouts/3/`;
    const response = await fetch(workoutUrl, { credentials: "include" });
    const workout = await response.json();
    setWorkout(workout);
    setWorkoutName(workout.name);
    setWorkoutDuration(workout.duration);
    setWorkoutDescription(workout.description);
    setWorkoutActivityName(workout.activity_name);
  };
  useEffect(() => {
    getWorkout();
  }, []);
  // ---------------------------------------------

  // ------------- put request to workout -------------
  const handleEditWorkout = async (e) => {
    e.preventDefault();
    const data = {};
    data.name = workoutName;
    data.duration = workoutDuration;
    data.description = workoutDescription;
    data.activity_name = workoutActivityName;
    data.account = workout.account;

    const url = `${process.env.REACT_APP_API_HOST}/api/workouts/${workout.id}/`;
    console.log(data);
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
      console.log(response);
      setEditWorkout(false);
    }
  };
  // ---------------------------------------------

  return (
    <>
    {/* ------ if edit workout is true ------ */}
    {/* onMouseEnter={() => setEditWorkout(true)} onMouseLeave={() => setEditWorkout(false)}  */}
        <div className="mx-5 mb-4 mt-4">
          {/* ------ edit workout name------ */}
          <form className="border border-secondary rounded-5 w-50 pt-3 px-3">
          <div className="input-group">
            { editWorkout ?
            <>
            <input type="text" className="ms-5 form-control text-center text-dark fs-3 bg-secondary bg-opacity-25 rounded-5"
            placeholder={workout.name} onChange={(e) => setWorkoutName(e.target.value)}
            value={workoutName} id="workoutName" />
            <div className="input-group-append">
              <span onClick={(e) => handleEditWorkout(e)}
              className="bi bi-check-circle fs-2 ms-2 text-success"></span>
              <i onClick={() => setEditWorkout(false)}
              className="bi bi-x-circle fs-2 ms-2 text-danger"></i>
            </div>
            </>
            :
            <>
            <input type="text" className="ms-5 form-control text-center bg-white rounded-5 fs-3"
            placeholder={workout.name} onChange={(e) => setWorkoutName(e.target.value)}
            value={workoutName} id="workoutName" disabled/>
            <div className="input-group-append">
              <i onClick={() => setEditWorkout(true)} className="bi bi-pencil fs-2 ms-2"></i>
              <i className="bi bi-pencil fs-2 ms-2 opacity-0"></i>
            </div>
            </>
            }
          </div>
          {/* ------ edit workout activity name and duration ------ */}
          <div className="input-group">
            { editWorkout ?
            <>
            <input type="text" className="form-control text-center text-dark fs-4 bg-secondary bg-opacity-25 rounded-5 me-4"
            placeholder={workout.activity_name} onChange={(e) => setWorkoutActivityName(e.target.value)}
            value={workoutActivityName} id="workoutActivityName" />
            <input type="text" className="form-control text-center text-dark fs-4 bg-secondary bg-opacity-25 rounded-5"
            placeholder={workout.duration} onChange={(e) => setWorkoutDuration(e.target.value)}
            value={workoutDuration} id="workoutDuration" />
            </>
            :
            <>
            <input type="text" className="form-control text-center bg-white rounded-5 fs-4 me-4"
            placeholder={workout.activity_name} onChange={(e) => setWorkoutActivityName(e.target.value)}
            value={workoutActivityName} id="workoutActivityName" disabled/>
            <input type="text" className="form-control text-center bg-white rounded-5 fs-4"
            placeholder={workout.duration} onChange={(e) => setWorkoutDuration(e.target.value)}
            value={workoutDuration} id="workoutDuration" disabled/>
            </>
            }
          </div>
          {/* ------ edit workout description ------ */}
          <div className="input-group">
            { editWorkout ?
            <>
            <textarea type="text" className="form-control text-center text-dark fs-5 bg-secondary bg-opacity-25 rounded-5 h-100"
            placeholder={workout.description} onChange={(e) => setWorkoutDescription(e.target.value)} rows="3"
            value={workoutDescription} id="workoutDescription"></textarea>
            </>
            :
            <>
            <textarea type="text" className="form-control text-center bg-white rounded-5 fs-5 h-100"
            placeholder={workout.description} onChange={(e) => setWorkoutDescription(e.target.value)}
            value={workoutDescription} id="workoutDescription" rows="3" disabled></textarea>
            </>
            }
          </div>
        </form>
        </div>

    </>
  );
}

export default ViewWorkout;
