import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          src={session.user.image}
          height={48}
          width={48}
          layout="fixed"
          className="rounded-full cursor-pointer"
        />
        <p className="hidden xl:inline-flex text-sm whitespace-nowrap font-semibold pr-3 ">
          {session.user.name}
        </p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleOvalLeftIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
