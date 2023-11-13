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
  useEffect(() => {
    dispatch(postsList());
  }, [dispatch]);

  return (
    <div className="flex h-full flex-col items-center gap-5 overflow-y-auto">
      <PostsNavbar />
      {posts &&
        posts.map((item) => (
          <PostItem
            liked={false}
            images={[...item.image_post]}
            key={item.id}
            username={item.user}
            content={item.content}
            likes={item.likes}
            comments={item.comments}
            commentDate={item.created_at}
          />
        ))}
      {postCreation && (
        <PostCreation closeForm={() => setPostCreation(false)} />
      )}
    </div>
  );
}

export default PostsPage;
