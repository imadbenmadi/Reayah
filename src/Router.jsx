import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import Not_Finished from "./Components/Not_Finished";
import Not_Found from "./Components/Not_Found";
import Register from "./Components/Auth/Register/Register";
import Login from "./Components/Auth/Login/Login";
import AboutUs from "./Components/AboutUs/AboutUs";
import FAQ from "./Components/FAQ/FAQ";
import ContactUs from "./Components/ContactUs/ContactUs";
import Search from "./Components/Search/Search";
import Patient from "./Components/Profile/Patient/Patient";
import Doctore from "./Components/Profile/Doctore/Doctore";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                // path: "/",
                index: true,
                element: <Home />,
            },
            {
                path: "/Blogs",
                element: <Not_Finished />,
            },
            {
                path: "/Contact",
                element: <ContactUs />,
            },
            {
                path: "/About",
                element: <AboutUs />,
            },
            {
                path: "/FAQ",
                element: <FAQ />,
            },

            {
                path: "/Register",
                element: <Register />,
            },
            {
                path: "/Login",
                element: <Login />,
            },
            {
                path: "/Search",
                element: <Search />,
            },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },

    {
        path: "/Patients/:id",
        element: <Patient />,
        children: [
            { path: "/Patients/:id/Profile", element: <Not_Finished /> },
            { path: "/Patients/:id/Notifications", element: <Not_Finished /> },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
    {
        path: "/Doctores/:id",
        element: <Doctore />,
        children: [
            { path: "/Doctores/:id/Profile", element: <Not_Finished /> },
            { path: "/Doctores/:id/Notifications", element: <Not_Finished /> },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
    {
        path: "*",
        element: <Not_Found />,
    },
]);
export default routes;
