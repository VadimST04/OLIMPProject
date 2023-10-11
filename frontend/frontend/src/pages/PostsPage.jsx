import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsList } from "../store/actions/postsActions";

import PostItem from "../components/PostItem";

function PostsPage() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.postsList);

  useEffect(() => {
    dispatch(postsList());
  }, [dispatch]);

  const testPosts = [
    {
      id: 1,
      liked: false,
      images: [
        "https://images.unsplash.com/photo-1695754189866-f2f8eae7328d",
        "https://images.unsplash.com/photo-1675703236969-e4ce4d298618",
      ],
      username: "user1",
      content:
        "Exploring the beauty and history of museum today. This piece caught my eye with its stunning colors and intricate details🎨 #art #museum #culture",
      likes: 984,
      comments: 132,
    },
    {
      id: 2,
      liked: false,
      images: [
        "https://images.unsplash.com/photo-1695754189866-f2f8eae7328d",
        "https://images.unsplash.com/photo-1675703236969-e4ce4d298618",
      ],
      username: "user1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias veritatis nam doloribus perspiciatis, modi, atque quasi minus deleniti ipsa optio sit autem maxime ut ex voluptates excepturi repudiandae beatae dolorum mollitia dignissimos a iusto! Inventore aut cupiditate perspiciatis aliquam placeat omnis non obcaecati debitis, id quaerat commodi sequi. Ratione sapiente enim praesentium, corporis maxime voluptatum ab quam, nihil natus officia totam alias sequi laudantium. Odit voluptatum corrupti esse autem aut impedit, vel sunt quidem qui maiores debitis libero eaque, quis culpa harum quisquam possimus. Eaque perferendis reiciendis magni corrupti earum aliquam adipisci. Fugit sequi fugiat eveniet non, cumque laudantium?",
      likes: 984,
      comments: 132,
    },
    {
      id: 3,
      liked: false,
      images: ["https://images.unsplash.com/photo-1695754189866-f2f8eae7328d"],
      username: "user1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, minus.",
      likes: 984,
      comments: 132,
    },
  ];

  return (
    <div className="flex h-full flex-col items-center gap-5 overflow-y-auto p-5">
      {posts &&
        posts.map((item) => (
          <PostItem
            liked={false}
            images={[item.image]}
            key={item.id}
            username={item.user.username}
            content={item.content}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
    </div>
  );
}

export default PostsPage;
