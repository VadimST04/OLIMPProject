import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsList } from "../store/actions/postsActions";

function PostsPage() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.postsList);

  useEffect(() => {
    dispatch(postsList());
  }, [dispatch]);

  return (
    <div className="">
      <h1>PostsPage</h1>
      {posts &&
        posts.map((item) => (
          <div className="post" key={item.id}>
            {
              <img
                src={item.image}
                width="200px"
                alt={`${item.user.username} - post`}
              />
            }
            <h6>{item.user.username}: </h6>
            <p>{item.content}</p>
            <p>likes: {item.likes}</p>
          </div>
        ))}
    </div>
  );
}

export default PostsPage;
