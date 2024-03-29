import mongoose from "mongoose";
//Schema for answer queries
const AnswerSchema = new mongoose.Schema({
  answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

const answerDetails =  mongoose.model('answer', AnswerSchema)
export default answerDetails;