import React from "react";
import Template from "./components/Template";

import { templatesData } from "../../lib/utils";
export default function TemplatesPage() {
  return (
    <>
      <h1 className="text-2xl">Explore templates</h1>
      <div className="p-16">
        <div className="grid grid-cols-3 gap-4">
          {templatesData.map((template, index) => (
            <Template key={index} template={template} />
          ))}
        </div>
      </div>
    </>
  );
}
