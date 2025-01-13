"use client";
import React from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageType from "./_components/ImageType";
import { Button } from "@nextui-org/button";

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  ageGroup: string;
  imageType: string;
}

function CreateStoryPage() {
  const [formData, setFormData] = React.useState<formDataType>();
  console.log("CreateStoryPage  formData", formData)

  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: formDataType | any ) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
  };

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="font-extrabold  text-[70px] text-primary text-center">
        CREATE YOUR STORY
      </h2>
      <p className="text-2xl text-primary text-center">
        Unlock your creativity with with AI: Craft stories like never before!
        Let our AI bring your imagination to life, one story at a time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {/* Story Subject */}
        <StorySubjectInput userSelection={onHandleUserSelection} />

        {/* Story Type */}
        <StoryType userSelection={onHandleUserSelection} />

        {/* Age group */}
        <AgeGroup userSelection={onHandleUserSelection} />

        {/* Image Style */}
        <ImageType userSelection={onHandleUserSelection} />
      </div>

      <div className="flex justify-end my-10">
        <Button color="primary" className="p-10 text-2xl">
          Generete Stroy
        </Button>
      </div>
    </div>
  );
}

export default CreateStoryPage;
