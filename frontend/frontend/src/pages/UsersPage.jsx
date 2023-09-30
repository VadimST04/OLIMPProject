import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/userActions";

const UsersPage = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>UsersPage</h1>
      {users &&
        users.map((item, index) => (
          <p key={index}>username: {item.username}</p>
        ))}
    </div>
  );
};

export default UsersPage;
