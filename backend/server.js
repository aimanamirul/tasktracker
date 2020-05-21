const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//init
const app = express();
const port = process.env.port || 5000;

//middleware
app.use(cors());
app.use(express.json());

//db config
const uri = "mongodb://localhost:27017/tasktracker";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//routes
const TaskRoutes = require('./routers/tasks');

app.use('/tasks', TaskRoutes);

//server start
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
