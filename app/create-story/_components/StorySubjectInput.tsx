import { Textarea } from "@nextui-org/input";
import React from "react";

const StorySubjectInput = () => {
  return (
    <div>
      <label className="font-bold text-4xl text-primary">
        Subject of the story
      </label>
      <Textarea
        placeholder="Enter the subject of the story"
        size="lg"
        classNames={{
            input: "resize-y min-h-[230px] text-2xl p-5",
        }}

        
        />
    </div>
  );
};

export default StorySubjectInput;
