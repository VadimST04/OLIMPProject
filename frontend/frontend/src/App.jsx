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
import ContactsPage from "./pages/ContactsPage";
import SignInSignUp from "./components/SignInSignUpForm/SignInSignUp.jsx";

const Root = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div>
      <Navbar call={() => setModalState(true)} />
      {/* The ContactsPage should be to the right of the Outlet */}
      <ContactsPage />
      <SignInSignUp call={modalState} destroy={() => setModalState(false)} />
      {/* Outlet is our Application */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
