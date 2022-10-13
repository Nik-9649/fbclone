import { useSession } from "next-auth/react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
    id: 1,
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
    id: 2,
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
    id: 3,
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
    id: 4,
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
    id: 5,
  },
];

const Stories = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      <StoryCard
        name={session.user.name}
        key={session.user.email}
        src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F205%2F309%2F1d3.jpg"
        profile={session.user.image}
      />
      {stories.map(story => (
        <StoryCard
          name={story.name}
          key={story.id}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
