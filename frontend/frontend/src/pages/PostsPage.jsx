import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsList } from "../store/actions/postsActions";

import PostItem from "../components/PostItem";

import { MdCreate } from "react-icons/md";
import { PiGridFour } from "react-icons/pi";
import { BiImage } from "react-icons/bi";
import PostCreation from "../components/PostCreation";
import { useNavigate } from "react-router";
import PostsNavbar from "../components/PostsNavbar";

function PostsPage() {
  const dispatch = useDispatch();
  const [postCreation, setPostCreation] = useState(false);
  const { posts } = useSelector((state) => state.postsList);

  const testPosts = [
    {
      liked: false,
      images: [
        "https://images.unsplash.com/photo-1682695794816-7b9da18ed470",
        "https://images.unsplash.com/photo-1700748881202-3c6e94c3b1ce",
        "https://images.unsplash.com/photo-1681008570032-abdfcb23f875",
      ],
      username: "John Wick",
      userImage: "https://images.unsplash.com/photo-1560354508-468e7201bbc2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis accusantium officiis officia corrupti dignissimos maxime distinctio, sequi, ipsum eius mollitia expedita rem eum vero. Eveniet blanditiis sapiente accusantium voluptas?",
      likes: 155,
      comments: {},
      commentDate: "Aug 10, 2023",
    },
    {
      liked: false,
      images: [
        "https://images.unsplash.com/photo-1682695794816-7b9da18ed470",
        "https://images.unsplash.com/photo-1700748881202-3c6e94c3b1ce",
        "https://images.unsplash.com/photo-1681008570032-abdfcb23f875",
      ],
      username: "John Wick",
      userImage: "https://images.unsplash.com/photo-1560354508-468e7201bbc2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis accusantium officiis officia corrupti dignissimos maxime distinctio, sequi, ipsum eius mollitia expedita rem eum vero. Eveniet blanditiis sapiente accusantium voluptas?",
      likes: 155,
      comments: {},
      commentDate: "Aug 10, 2023",
    },
  ];

  useEffect(() => {
    dispatch(postsList());
  }, [dispatch]);

  return (
    <div className="grid h-full grid-rows-[auto,1fr]">
      <PostsNavbar />
      <div className="flex h-full flex-col items-center gap-5 pt-5">
        {testPosts &&
          testPosts.map((item, index) => (
            <PostItem
              liked={false}
              images={[...item.images]}
              key={index}
              username={item.username}
              content={item.content}
              likes={item.likes}
              comments={item.comments}
              commentDate={item.created_at}
              userImage={item.userImage}
            />
          ))}
      </div>
      {postCreation && (
        <PostCreation closeForm={() => setPostCreation(false)} />
      )}
    </div>
  );
}

export default PostsPage;
