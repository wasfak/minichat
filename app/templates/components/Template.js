"use client";
import Image from "next/image";

import ase from "../../../public/ase.jpg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Template({ template }) {
  const router = useRouter();
  return (
    <>
      <div className="flex items-left justify-center flex-col p-4 rounded-2xl  gap-y-2 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <Image src={ase} alt="customer" priority />
        <h1 className="font-bold">{template.title}</h1>
        <h4>{template.description}</h4>
        <span>
          <Button onClick={() => router.push(`/templates/${template.type}`)}>
            preview
          </Button>
        </span>
      </div>
    </>
  );
}
