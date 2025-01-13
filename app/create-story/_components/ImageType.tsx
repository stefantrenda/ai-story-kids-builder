"use client";
import { select } from "@nextui-org/theme";
import { label } from "framer-motion/client";
import Image from "next/image";
import { useState } from "react";
import { OptionField } from "./StoryType";

function ImageType({ userSelection }: any) {
  const OptionsList = [
    {
      label: "3D Cartoon",
      imageURL: "/3D.png",
      isFree: true,
    },
    {
      label: "Paper Cut",
      imageURL: "/paperCut.png",
      isFree: true,
    },
    {
      label: "Water Color",
      imageURL: "/waterColor.png",
      isFree: true,
    },
    {
      label: "Pixel Style",
      imageURL: "/pixel.png",
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("");

  const onUserSelet = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldName: "ImageType",
      fieldValue: item.label,
    });
  };

  return (
    <div>
      <label className="font-bold text-4xl text-primary">3. Image Style</label>
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
              className="object-cover h-[120px] rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ImageType;
