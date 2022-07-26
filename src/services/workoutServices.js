const workoutDB = require("../database/Workout");

const getAllWorkouts = () => {
    const allworkouts = workoutDB.getAllWorkouts();
    return allworkouts;
}

const getOneWorkout = () => {
    return;
}

const createNewWorkout = () => {
    return;
}

const updateOneWorkout = () => {
    return;
};

const deleteOneWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}