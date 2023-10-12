import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/userActions";
import Useritem from "../components/Useritem";

const UsersPage = () => {
  // const dispatch = useDispatch();

  // const { users } = useSelector((state) => state.users);
  // console.log(users);

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  const users = [
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius, dolorum excepturi hic reiciendis ipsam nobis. Tenetur nulla ratione commodi ex odio nobis debitis corporis. Quae cum maiores reiciendis earum.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius, dolorum excepturi hic reiciendis ipsam nobis. Tenetur nulla ratione commodi ex odio nobis debitis corporis. Quae cum maiores reiciendis earum.",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
    {
      img: "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      username: "username",
      description: "description",
    },
  ];

  return (
    <div className="flex h-full w-full flex-wrap gap-x-12 gap-y-5 overflow-y-auto">
      {users.map((item, index) => (
        <div key={index}>
          <Useritem {...item} />
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
