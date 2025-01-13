"use client";
import { select } from "@nextui-org/theme";
import { i, label } from "framer-motion/client";
import Image from "next/image";
import { useState } from "react";

export interface OptionField {
  label: string;
  imageURL: string;
  isFree: boolean;
}

function StoryType({ userSelection }: any) {
  const OptionsList = [
    {
      label: "Story Book",
      imageURL: "/story.png",
      isFree: true,
    },
    {
      label: "Bed Book",
      imageURL: "/bedstory.png",
      isFree: true,
    },
    {
      label: "Educational",
      imageURL: "/educational.png",
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("");

  const onUserSelet = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldName: "storyType",
      fieldValue: item.label,
    });
  };

  return (
    <div>
      <label className="font-bold text-4xl text-primary">2. Story Type</label>
      <div className="grid grid-cols-3 gap-5 mt-3 ">
        {OptionsList.map((item: OptionField, index) => (
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
export default StoryType;
