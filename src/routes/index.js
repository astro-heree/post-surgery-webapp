import Admin from "../pages/Admin";
import ComingSoon from "../pages/ComingSoon";
import Logout from "../pages/Logout";
import Pages404 from "../pages/Pages404";
import AdminLogin from "../pages/registration/AdminLogin";
import Login from "../pages/registration/Login";
import RequestPage from "../pages/RequestPage";
import UserSelection from "../pages/UserSelection";

const publicRoutes = [
    { path: "/login", component: <Login/> },
    { path: "/logout", component: <Logout/>},
    { path: "*", component: <Pages404/> },
    { path: "/user-selection", component: <UserSelection/>},
    { path: "/", component: <UserSelection/>},
    { path: "/coming-soon", component: <ComingSoon/>},
    { path: "/admin-page", component: <Admin/>},
    { path: "/request-check", component: <RequestPage/> },
    { path: "/admin-login", component: <AdminLogin/>}
]

const authProtectedRoutes = [
    { path: "*", component: <Pages404/>}
]

export { publicRoutes, authProtectedRoutes}