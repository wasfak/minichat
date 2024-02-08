// DataPage.js
"use client";
import SurveyChart from "@/components/SurveyChart";
import { useEffect, useState } from "react";

export default function DataPage() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setMounted(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/allData", {
        method: "GET",
      });

      const response = await res.json();
      setData(response.message || []); // Assuming the data is in response.message
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div className="mx-48 py-6">
        {data.map((survey) => (
          <div key={survey._id}>
            <h3>{survey.question}</h3>
            <SurveyChart answers={survey.answers} key={survey._id} />
          </div>
        ))}
      </div>
    </div>
  );
}
