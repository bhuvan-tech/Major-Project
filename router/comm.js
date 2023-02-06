import express from "express";
const comm = express.Router();
import {viewQuestion,addQuestion,addAnswer} from "../controller/comm.js"
comm.get("/", (req, res) => {
  res.send("This api is reserved for quora clone");
});

comm.post("/addQuestion",addQuestion)
comm.get("/viewQuestion", viewQuestion)
comm.post("/addAnswer", addAnswer)

export default comm;