import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import PostsPage from "./pages/PostsPage";
import MusicPage from "./pages/MusicPage";
import UsersPage from "./pages/UsersPage";
import BooksPage from "./pages/BooksPage";
import ProfilePage from "./pages/ProfilePage";
import NewsPage from "./pages/NewsPage";
import PostCreation from "./components/PostCreation";
import ChatsPage from "./pages/ChatsPage";

const Root = () => {
  return (
    <div className="grid h-[100dvh] grid-rows-[4rem,1fr]">
      <Navbar />
      <MainContent />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<NewsPage />} />

      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/my-posts" element={<PostsPage showMyPosts />} />
      <Route path="/posts/post-creation" element={<PostCreation />} />

      <Route path="/books" element={<BooksPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/chats/:id" element={<ChatsPage />} />
      <Route path="/user/profile" element={<ProfilePage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
