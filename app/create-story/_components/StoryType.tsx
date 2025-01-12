import { label } from "framer-motion/client";
import Image from "next/image";

function StoryType() {
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

  return (
    <div>
      <label className="font-bold text-4xl text-primary">2. Story Type</label>
      <div className="grid grid-cols-3 gap-5 mt-3">
        {OptionsList.map((item, index) => (
          <div key={index} className="relative">
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
