import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MainContent from "./components/MainContent";
import { useState } from "react";
import SignInSignUpForm from "./components/SignInSignUpForm";

const Root = () => {
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
  const rightSideButtons = [
    { icon: <GrLanguage />, callback: () => {} },
    { icon: <FiSettings />, callback: () => {} },
    {
      icon: <FaRegCircleUser />,
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
