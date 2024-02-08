"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { surveys } from "../lib/utils";
import { useRouter } from "next/navigation";
import SurveyChart from "./SurveyChart";
import { insertSurveyData } from "@/app/insertSurveyData";

export default function Survey() {
  const [answers, setAnswers] = useState({});
  const router = useRouter();
  const [answeredQuestionsCount, setAnsweredQuestionsCount] = useState(0);

  const handleOptionChange = (questionIndex, option) => {
    if (!answers.hasOwnProperty(questionIndex)) {
      // If the question is not answered yet, increment the count
      setAnsweredQuestionsCount((prevCount) => prevCount + 1);
    }

    // Update the answers object
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionIndex]: option }));
  };

  const handleSubmit = async () => {
    // You can save the `answers` object to your backend or perform further actions
    console.log("Survey Answers:", answers);
    console.log("Number of Answered Questions:", answeredQuestionsCount);
    await insertSurveyData();
  };

  const totalQuestions = surveys.length;

  return (
    <div className="px-32 py-12">
      <div className="mt-4">
        <p>Total Questions: {totalQuestions}</p>
        <p>Answered Questions: {answeredQuestionsCount}</p>
        <div className="mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-4 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center"
            style={{ width: `${answeredQuestionsCount * 10}%` }}
          >
            {answeredQuestionsCount * 10}%
          </div>
        </div>
      </div>
      {surveys.map((survey, index) => (
        <div key={index} className="flex flex-col items-left mt-8">
          <span className="text-xl font-bold">{survey.question}</span>
          <div className="flex items-center justify-between mt-4"></div>
          <div className="flex items-center">
            {survey.options.map((option, optionIndex) => (
              <span
                key={optionIndex}
                className={`cursor-pointer ${
                  answers[index] === option
                    ? "text-white font-bold border-2 border-black p-4 bg-black text-sm"
                    : "border-2 border-gray-600 hover:bg-blue-500 p-4 text-sm"
                }`}
                onClick={() => handleOptionChange(index, option)}
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      ))}

      <Button onClick={handleSubmit} className="mt-4">
        Submit
      </Button>
      <Button onClick={() => router.push("/")} className="mt-4">
        Home
      </Button>
    </div>
  );
}
