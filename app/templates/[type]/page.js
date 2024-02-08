"use client";

import Survey from "@/components/Survey";
import { useParams } from "next/navigation";

export default function TemplatePreview({}) {
  const params = useParams();

  return (
    <div>
      <Survey />
    </div>
  );
}
