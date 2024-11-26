import ComingSoon from "../pages/ComingSoon";
import Logout from "../pages/Logout";
import Pages404 from "../pages/Pages404";
import Login from "../pages/registration/Login";
import UserSelection from "../pages/UserSelection";

const publicRoutes = [
    { path: "/login", component: <Login/> },
    { path: "/logout", component: <Logout/>},
    { path: "*", component: <Pages404/> },
    { path: "/user-selection", component: <UserSelection/>},
    { path: "/coming-soon", component: <ComingSoon/>},
]

const authProtectedRoutes = [
    { path: "*", component: <Pages404/>}
]

export { publicRoutes, authProtectedRoutes}