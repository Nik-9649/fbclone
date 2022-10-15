import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  EllipsisHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Contact from "./Contact";
const contacts = [
  { src: "https://links.papareact.com/f0p", id: 1, name: "Jeff Bezoz" },
  { src: "https://links.papareact.com/kxk", id: 2, name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", id: 3, name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", id: 4, name: "Mark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", id: 5, name: "Harry Potter" },
  { src: "https://links.papareact.com/6gg", id: 6, name: "The Queen" },
  { src: "https://links.papareact.com/r57", id: 7, name: "James Bond" },
];

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col h-auto overflow-x-auto flex-grow w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
