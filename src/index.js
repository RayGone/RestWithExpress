const express = require("express");
// const v1Router = require("./v1/routes");
const v1RouterWorkout = require("./v1/routes/workoutRoutes");


const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.send("<h2>It's Working!</h2>");
});

// app.use("/api/v1",v1Router);
app.use("/api/v1",v1RouterWorkout);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});