import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";
const Posts = () => {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          email={post.data().email}
          message={post.data().message}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
};

export default Posts;
