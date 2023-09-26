import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/actions/profileActions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.userProfile);
  console.log(userProfile);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div className="flex-grow overflow-y-auto">
      <h1>User Profile Page</h1>
      {userProfile &&
        userProfile.map((item, index) => (
          <div className="user_profile" key={index}>
            {
              <img
                src={item.image}
                width="200px"
                alt={`${item.user.username} - post`}
              />
            }
            <h6>{item.user.username}: </h6>
          </div>
        ))}
    </div>
  );
};

export default ProfilePage;
