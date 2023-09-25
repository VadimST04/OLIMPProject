import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsList } from "../store/actions/postsActions";

function PostsPage() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.postsList);
  console.log(posts);

  useEffect(() => {
    dispatch(postsList());
  }, [dispatch]);

  return (
    <div className="flex-grow overflow-y-auto">
      <h1>Posts</h1>
      {posts &&
        posts.map((item) => (
          <div className="post" key={item.id}>
            {<img src={item.image} width="200px" />}
            <h6>{item.user.username}: </h6>
            <p>{item.content}</p>
            <p>likes: {item.likes}</p>
          </div>
        ))}
    </div>
  );
}

export default PostsPage;
