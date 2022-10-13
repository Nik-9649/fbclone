import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-44 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={48}
        height={48}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl hover:animate-pulse"
        src={src}
        layout="fill"
      />
    </div>
  );
};

export default StoryCard;
