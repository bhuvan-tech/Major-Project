import { successResponse } from '../interceptor/success.js';
import { errorResponse } from '../interceptor/error.js';
import questionDetails from '../model/question.js';
import answerDetails from '../model/answer.js';
const addQuestion = async (req, res) => {
    try {
      await questionDetails
        .create({
          questionName: req.body.questionName,
          questionUrl: req.body.questionUrl,
          user: req.body.user,
        })
        .then(
            successResponse(res,200,"Question added successfully")
        )
        .catch((err) => {
          errorResponse(res,400,"bad format");
          });
    } catch (err) {
        errorResponse(res,404,err);
    }
  };
const viewQuestion = async (req, res) => {
    try {
      await questionDetails
        .aggregate([
          {
            $lookup: {
              from: "answers", //collection to join
              localField: "_id", //field from input document
              foreignField: "questionId",
              as: "allAnswers", //output array field
            },
          },
        ])
        .exec()
        .then((doc) => {
          successResponse(res,200,doc);
        })
        .catch((err)=>{
            errorResponse(res,404,"bad format");
        });
        
        
    } catch (err) {
      errorResponse(res,500,err);
    }
  };
  const addAnswer = async (req, res) => {
    try {
      await answerDetails
        .create({
          answer: req.body.answer,
          questionId: req.body.questionId,
          user: req.body.user,
        })
        .then(
          successResponse(res,201,"Answer added successfully")
        )
        
    } catch (err) {
        errorResponse(res,500,"Error while adding answer ");
      }
    };
  
  export {viewQuestion,addQuestion,addAnswer};

  