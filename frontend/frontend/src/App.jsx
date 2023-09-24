import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignInSignUpForm from "./components/SignInSignUpForm";
import { GrLanguage } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
const Root = () => {
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
  const rightSideButtons = [
    { icon: <GrLanguage />, callback: () => {} },
    { icon: <FiSettings />, callback: () => {} },
    { icon: <FaRegCircleUser />, callback: () => { setSignInFormOpen(true); },
    },
  ];

  return (
    <div className="relative">
      <Navbar rightSideButtons={rightSideButtons} />
      {isSignInFormOpen && (
        <SignInSignUpForm
          closeFormCallback={() => {
            setSignInFormOpen(false);
          }}
        />
      )}
      <Outlet />
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
