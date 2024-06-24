import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "login", component: Login },
  { path: "profile", component: Signup },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
