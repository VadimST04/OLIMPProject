import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { MdLanguage } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MainContent from "./components/MainContent";
import SignInSignUpForm from "./components/SignInSignUpForm";
import RegistrationForm from "./components/RegistrationForm";
import PostsPage from "./pages/PostsPage";
import MusicPage from "./pages/MusicPage";
import UsersPage from "./pages/UsersPage";
import BooksPage from "./pages/BooksPage";

const Root = () => {
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);

  const rightSideButtons = [
    { icon: <MdLanguage />, callback: () => {} },
    { icon: <MdSettings />, callback: () => {} },
    {
      icon: <HiOutlineUserCircle />,
      callback: () => {
        setSignInFormOpen(true);
      },
    },
  ];

  return (
    <div className="flex h-screen flex-col">
      <Navbar rightSideButtons={rightSideButtons} />
      <MainContent />
      {isSignInFormOpen && (
        <SignInSignUpForm
          closeFormCallback={() => setSignInFormOpen(false)}
          registrationFormOpen={() => setRegistrationFormOpen(true)}
        />
      )}
      {isRegistrationFormOpen && (
        <RegistrationForm
          closeFormCallback={() => setRegistrationFormOpen(false)}
        />
      )}
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/music" element={<MusicPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
