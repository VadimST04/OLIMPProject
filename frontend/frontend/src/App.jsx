import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Header from './components/Header'
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import NewsPage from "./pages/NewsPage";

const Root = () => {
  return (
    <div>
      <Header />
      {/* The ContactsPage should be to the right of the Outlet */}
      <ContactsPage />
      {/* Outlet is our Application */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/news" element={<NewsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
