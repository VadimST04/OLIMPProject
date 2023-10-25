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

  return (
    <div className="flex h-full flex-col items-center gap-5 overflow-y-auto p-5">
      {posts &&
        posts.map((item) => (
          <PostItem
            liked={false}
            images={[...item.image_post]}
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
