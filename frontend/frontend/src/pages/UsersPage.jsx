import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/userActions";
import Useritem from "../components/Useritem";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersList);
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="flex h-full w-full flex-wrap gap-x-12 gap-y-5 overflow-y-auto">
      {users?.map((item, index) => (
        <div key={index}>
          <Useritem
            image={`data:image/jpeg;base64,${item.image_data}`}
            description={item.description}
            username={item.user.username}
          />
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
