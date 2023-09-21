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

const Root = () => {
  return (
    <div>
      <Navbar />
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
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
