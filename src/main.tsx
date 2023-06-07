import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Authentication from "./components/Authentication.tsx";
import Document from "./components/Document.tsx";
import About from "./pages/About.tsx";
import Navigation from "./components/atom/Navigation.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index path="/" element={<Authentication />} />
      <Route path="/document" element={<Document />} />
      <Route
        path="/about"
        element={
          <>
            <Navigation />
            <About />
          </>
        }
      />
      <Route
        path="/store"
        element={
          <>
            <Navigation />
            <h1>Store</h1>
          </>
        }
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
