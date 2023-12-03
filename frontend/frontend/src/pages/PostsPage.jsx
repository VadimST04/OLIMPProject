import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myPostsList, postsList } from "../store/actions/postsActions";

import PostItem from "../components/PostItem";
import PostCreation from "../components/PostCreation";
import PostsNavbar from "../components/PostsNavbar";

function PostsPage({ showMyPosts = false }) {
  const dispatch = useDispatch();
  const [postCreation, setPostCreation] = useState(false);

  const { posts } = useSelector((state) => state.postsList);
  console.log(posts);
  const { myPosts } = useSelector((state) => state.myPostsList);

  const postsToDisplay = showMyPosts ? myPosts : posts;

  useEffect(() => {
    dispatch(showMyPosts ? myPostsList() : postsList());
  }, []);

  return (
    <div className="grid h-full grid-rows-[auto,1fr] gap-5">
      <PostsNavbar />
      <div className="space-y-5 overflow-y-auto">
        {postsToDisplay &&
          postsToDisplay?.map((item, index) => (
            <PostItem
              liked={false}
              images={item.image_post.map(
                (item) => `data:image/jpeg;base64,${item.image_data}`,
              )}
              key={index}
              username={item.user}
              content={item.content}
              likes={item.likes}
              comments={item.comments}
              commentDate={item.created_at}
              userImage={`data:image/jpeg;base64,${item.user_image}`}
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
