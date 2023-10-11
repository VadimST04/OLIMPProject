import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../store/actions/profileActions";
import { logout } from "../store/actions/userActions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { userProfile } = useSelector((state) => state.userProfile);
  console.log(userProfile);

  const logoutButtonHandler = () => {
    dispatch(logout());
    navigate("/");
  };

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
      <button
        type="button"
        class="mb-2 mr-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={logoutButtonHandler}
      >
        Loogout
      </button>
    </div>
  );
};

export default ProfilePage;
