// SurveyChart.js
"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SurveyChart = ({ answers }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Array of colors for each dataset
    const colors = generateColors(answers.length);

    const highestCountAnswer = answers.reduce((maxCountAnswer, currentAnswer) =>
      currentAnswer.count > maxCountAnswer.count
        ? currentAnswer
        : maxCountAnswer
    );

    // Create a new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: answers.map((answer) => answer.answerText),
        datasets: [
          {
            label: [highestCountAnswer.answerText],
            data: answers.map((answer) => answer.count),
            backgroundColor: colors,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false, // Disable y-axis grid lines
            },
          },
          x: {
            grid: {
              display: false, // Disable y-axis grid lines
            },
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [answers]);

  // Function to generate an array of random colors
  const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.2)`;
      colors.push(color);
    }
    return colors;
  };

  return <canvas ref={canvasRef} width="400" height="200"></canvas>;
};

export default SurveyChart;
