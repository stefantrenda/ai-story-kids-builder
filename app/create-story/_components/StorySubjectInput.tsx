import {Textarea} from "@nextui-org/react";
import React from "react";

const StorySubjectInput = ({ userSelection }: any) => {
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
        className="mt-3 max-w-lg"
        onChange={(e) => userSelection({ fieldValue: e.target.value, fieldName: "storySubject" })}
      />
    </div>
  );
};

export default StorySubjectInput;
