"use server";

import db from "@/db";
import { surveys } from "@/lib/utils";
import SurveyModel from "@/models/surveySchema";

export const insertSurveyData = async () => {
  try {
    await db.connectDb(); // Connect to the MongoDB database

    for (const surveyData of surveys) {
      const newSurvey = new SurveyModel({
        question: surveyData.question,
        answers: surveyData.options.map((answerText) => ({ answerText })),
      });

      await newSurvey.save();
    }

    console.log("DONE");
  } catch (error) {
    console.error("Error inserting survey data:", error);
  } finally {
    await db.disconnectDb(); // Disconnect from the MongoDB database after insertion
  }
};
