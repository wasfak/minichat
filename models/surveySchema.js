import { Schema, model, models } from "mongoose";

const surveySchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answers: [
      {
        answerText: {
          type: String,
          required: true,
        },
        count: {
          type: Number,
          default: () => Math.floor(Math.random() * 101),
        },
      },
    ],
  },
  { timestamps: true }
);

// Create the model from the schema
const SurveyModel = models.Survey || model("Survey", surveySchema);

export default SurveyModel;
