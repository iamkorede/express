//import express library and initialize express app
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express()

//Middleware
app.use(express.json());

//connect to mongoDB
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI is not defined in the environment variables.");
} else {
  mongoose.connect(mongoUri)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.error("Database connection error:", err));
}

//Define the schema and a model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

//POST Route: Used to send new data to the server
app.post('/api/users', async (req, res) => {
  try {
    //create a new instance of user model
    const newUser = new User({
      name: req.body.name,
      email: req.body.email
    });

    //save to MongoDB
    const savedUser = await newUser.save();

    //send saved data to client with code 201
    res.status(201).json(savedUser);
  } catch (error) {
    //incase something goes wrong
    res.status(400).json({ error: error.message });
  }
});

//GET Route
app.get('/api/users', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server up and running at http://localhost:3000")
})