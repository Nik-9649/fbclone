import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Post = ({ name, email, message, timestamp, image, postImage }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-full"
            src={image}
            alt={name}
            height={40}
            width={40}
            loading="lazy"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-500">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:96 bg-white cursor-pointer">
          <Image src={postImage} alt="post" objectFit="contain" layout="fill" />
        </div>
      )}
      {/* Post footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon hover:text-blue-500">
          <HandThumbUpIcon className="h-4 rounded-none" />
          <p className="text-xs sm:text-base active:bg-blue-500 active:text-blue-500">
            Like
          </p>
        </div>
        <div className="inputIcon hover:text-blue-500">
          <ChatBubbleBottomCenterIcon className="h-4 rounded-none" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon hover:text-blue-500">
          <ShareIcon className="h-4 rounded-none" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
