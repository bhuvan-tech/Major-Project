import mongoose from 'mongoose';
//schema for Question
const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "answers",
  },
  user: Object,
});

const questionDetails =  mongoose.model('question', QuestionSchema)
export default questionDetails;