import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SignInSignUpForm from "./components/SignInSignUpForm";
import RegistrationForm from "./components/RegistrationForm";
import PostsPage from "./pages/PostsPage";
import MusicPage from "./pages/MusicPage";
import UsersPage from "./pages/UsersPage";
import BooksPage from "./pages/BooksPage";
import ProfilePage from "./pages/ProfilePage";
import NewsPage from "./pages/NewsPage";

const Root = () => {
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);
  const { userToken } = useSelector((state) => state.userToken);

  return (
    <div className="flex h-screen flex-col">
      <Navbar
        isLoggedIn={userToken}
        signInClick={() => setSignInFormOpen(true)}
        profileClick={() => setSignInFormOpen(true)}
      />
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
      <Route index element={<NewsPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
