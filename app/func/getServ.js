"use server";

import db from "@/db";
import SurveyModel from "@/models/surveySchema";

export async function getServices() {
  await db.connectDb();
  const surveys = await SurveyModel.find();

  return surveys;
}
