import React from "react";
import { useState } from "react";
import Menu_Toogler from "./Menu_Toogler";
import Mobile_Nav_Items from "./Mobile_Nav_Items";
import { Link } from "react-router-dom";
// import Logo from "../../../public/Logo.svg";
import Logo from "../../../../../../public/Logo.svg";
// import user from "../../../public/user.svg";
import { FaRegUser } from "react-icons/fa";
import { useEffect } from "react";
function Mobile_Nav() {
    const [MobileNav_Open, set_MobileNav_Open] = useState(false);
    function Toogle_Menu_Bar() {
        set_MobileNav_Open(!MobileNav_Open);
    }
    const [Active_nav, setActive_nav] = useState("Profile");
    useEffect(() => {
        setActive_nav(location.pathname.split("/")[4]);
    }, [location.pathname]);
    const [LogoutClicked, setLogoutClicked] = useState(false);
    const handleLogout = async () => {
        setLogoutClicked(true);
        try {
            // Send a request to the logout endpoint on the server
            const response = await axios.post(
                "http://localhost:3000/logout",
                {},
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            console.log("response from Logout : ", response);
            if (response.status == 204) {
                set_Auth(false);
                Swal.fire("Success!", `Logged Out Successfully`, "success");
                Navigate("/Login");
            } else {
                Swal.fire("Error!", `Something Went Wrong ,`, "error");
            }
        } catch (error) {
            Swal.fire("Error!", `Something Went Wrong `, "error");
        }
        setLogoutClicked(false);
    };
    const patientId = window.localStorage.getItem("patientId");
    const doctorId = window.localStorage.getItem("doctorId");
    return (
        <>
            <div className=" flex gap-5 items-center justify-between px-3 md:hidden h-full bg-perpol_b">
                <Menu_Toogler
                    MobileNav_Open={MobileNav_Open}
                    set_MobileNav_Open={set_MobileNav_Open}
                    Toogle_Menu_Bar={Toogle_Menu_Bar}
                />
                <div>
                    <Link to={"/"} className="select-none">
                        <img
                            src={Logo}
                            alt="Logo"
                            className=" w-[100px] lg:w-[145px] "
                        />
                    </Link>
                </div>

                <div className=" w-8 h-8"></div>
            </div>
            <Mobile_Nav_Items
                Active_nav={Active_nav}
                MobileNav_Open={MobileNav_Open}
                Toogle_Menu_Bar={Toogle_Menu_Bar}
                Logout={handleLogout}
                LogoutClicked={LogoutClicked}
            />
        </>
    );
}

export default Mobile_Nav;
