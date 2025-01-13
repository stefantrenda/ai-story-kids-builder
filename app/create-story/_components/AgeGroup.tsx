"use client";
import { select } from "@nextui-org/theme";
import { label } from "framer-motion/client";
import Image from "next/image";
import { useState } from "react";
import { OptionField } from "./StoryType";

function AgeGroup({userSelection}: any) {
  const OptionsList = [
    {
      label: "0-2 Years",
      imageURL: "/02Years.png",
      isFree: true,
    },
    {
      label: "3-5 Years",
      imageURL: "/35Years.png",
      isFree: true,
    },
    {
      label: "5-8 Years",
      imageURL: "/58Years.png",
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("");

    const onUserSelet = (item: OptionField) => {
      setSelectedOption(item.label);
      userSelection({
        fieldName: "StoryType",
        fieldValue: item.label,
      });
    };
  

  return (
    <div>
      <label className="font-bold text-4xl text-primary">3. Age Group</label>
      <div className="grid grid-cols-3 gap-5 mt-3 ">
        {OptionsList.map((item, index) => (
          <div
            key={index}
            className={`relative cursor-pointer grayscale hover:grayscale-0 p-1 ${
              selectedOption === item.label
                ? "grayscale-0 border-2 rounded-3xl border-primary"
                : "grayscale"
            }`}
            onClick={() => onUserSelet(item)}
          >
            <h2 className="absolute bottom-5 text-white text-center w-full text-2xl">
              {item.label}
            </h2>
            <Image
              src={item.imageURL}
              alt={item.label}
              width={300}
              height={500}
              className="object-cover h-[260px] rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default AgeGroup;
