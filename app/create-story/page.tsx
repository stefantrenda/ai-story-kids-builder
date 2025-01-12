'use client';
import React from "react";
import StorySubjectInput from "./_components/StorySubjectInput";

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}



function CreateStoryPage() {


  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
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
        {/* <StorySubjectInput userSelection={onHandleUserSelection} /> */}

        {/* Story Type */}

        {/* Age group */}

        {/* Image Style */}
      </div>
    </div>
  );
}

export default CreateStoryPage;
