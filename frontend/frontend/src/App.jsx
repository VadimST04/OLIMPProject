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
import { useState } from "react";
import SignInSignUpForm from "./components/SignInSignUpForm";

const Root = () => {
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
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
          closeFormCallback={() => {
            setSignInFormOpen(false);
          }}
        />
      )}
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
