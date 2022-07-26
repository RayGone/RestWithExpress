const workoutService = require("../services/workoutServices");

const getAllWorkouts = (req,res) => {
    const workouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: workouts});
};

const getOneWorkout = (req,res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout from controller");
};

const createNewWorkout = (req,res) => {
    const createdWorkout = workoutService.createNewWorkout();
    res.send("Create a new workout in Controller");
};

const updateOneWorkout = (req,res) => {
    const updateOneWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
}

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}