import db from "@/db";
import SurveyModel from "@/models/surveySchema";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await db.connectDb();
  try {
    const surveys = await SurveyModel.find();

    if (!surveys) {
      console.log("no surveys");
      return NextResponse.json({ status: 405, message: "no surveys found" });
    }
    return NextResponse.json({ status: 200, message: surveys });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 404, message: error });
  } finally {
    await db.disconnectDb();
  }
};
