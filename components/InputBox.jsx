import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    }).then((document) => {
      if (imageToPost) {
        const storageRef = ref(storage, `posts/${document.id}`);
        uploadString(storageRef, imageToPost, "data_url").then((snapshot) => {
          getDownloadURL(snapshot.ref).then((URL) => {
            setDoc(
              doc(db, "posts", document.id),
              { postImage: URL },
              { merge: true }
            );
            console.log("File available at ", URL);
          });
          removeImage();
        });
      }
    });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center ">
        <Image
          alt={session.user.name}
          src={session.user.image}
          height={48}
          width={48}
          layout="fixed"
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-xl h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${
              session.user.name.split(" ")[0]
            }?`}
          />
          <button hidden type="submit" onClick={sendPost} />
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col pt-1 filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-10 object-contain rounded-xl"
              src={imageToPost}
              alt="upload"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            ref={filepickerRef}
            hidden
            onChange={addImageToPost}
          />
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
