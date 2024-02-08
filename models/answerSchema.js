import { Schema, model, models } from "mongoose";

const answerSchema = new Schema({
  answer: {
    type: String,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const AnswerModel = models.Answer || model("Answer", answerSchema);

export default AnswerModel;
