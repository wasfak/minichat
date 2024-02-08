import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ase from "../public/ase.jpg";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const templatesData = [
  {
    image: ase,
    title: "Customer Satisfaction Template",
    description: "Let customers rate your product value and quality",
    type: "CT",
  },
  {
    image: ase,
    title: "Employee Engagement Template",
    description:
      "Learn how employees feel about their job and how you can help.",
    type: "ET",
  },
  {
    image: ase,
    title: "Employee Engagement Template",
    description:
      "Learn how employees feel about their job and how you can help.",
    type: "EET",
  },
];
export const surveys = [
  {
    type: "recommendation",
    question:
      "1. How likely is it that you would recommend this company to a friend or colleague?",
    options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  {
    question:
      "2. Overall, how satisfied or dissatisfied are you with our company?",
    options: [
      "Very satisfied",
      "Somewhat dissatisfied",
      "Somewhat satisfied",
      "Very dissatisfied",
      "Neither satisfied nor dissatisfied",
    ],
  },
  {
    question:
      "3. Which of the following words would you use to describe our products? Select all that apply",
    options: ["Poor", "Fair", "Good", "Very Good", "Excellent"],
  },
  {
    question:
      "3. Which of the following words would you use to describe our products? Select all that apply",
    options: ["Poor", "Fair", "Good", "Very Good", "Excellent"],
  },
  {
    question: "4. How well do our products meet your needs?",
    options: [
      "Extremely well",
      "Not so well",
      "Very well",
      "Not at all well",
      "Somewhat well",
    ],
  },
  {
    question: "5. How would you rate the quality of the product?",
    options: [
      "Very high quality",
      "Low quality",
      "High quality",
      "Very low quality",
      "Neither high nor low quality",
    ],
  },

  {
    question: "6. How would you rate the value for money of the product?",
    options: ["Excellent", "Above average", "Below average", "Average", "Poor"],
  },
  {
    question:
      "7. How responsive have we been to your questions about our services?",
    options: [
      "Extremely responsive",
      "Very responsive",
      "Somewhat responsive",
      "Not so responsive",
      "Not at all responsive",
      "Not applicable",
    ],
  },
  {
    question: "8. How long have you been a customer of our company?",
    options: [
      "This is my first purchase",
      "1 - 2 years",
      "Less than six months",
      "3 or more years",
      "Six months to a year",
      "I haven't made a purchase yet",
    ],
  },
  {
    question: "9. How likely are you to purchase any of our products again?",
    options: [
      "Extremely likely",
      "Very likely",
      "Not so likely",
      "Not at all likely",
      "Somewhat likely",
    ],
  },
];
