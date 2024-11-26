import Logout from "../pages/Logout";
import Pages404 from "../pages/Pages404";
import Login from "../pages/registration/Login";

const publicRoutes = [
    { path: "/login", component: <Login/> },
    { path: "/logout", component: <Logout/>},
    { path: "*", component: <Pages404 /> }
]

const authProtectedRoutes = [
    { path: "*", component: <Pages404 />}
]

export { publicRoutes, authProtectedRoutes}