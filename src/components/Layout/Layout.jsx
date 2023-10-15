import { Outlet } from "react-router-dom";
import Header from "../Header";


const Layout = () => {
    return (
        <div>
            <div className="gap-5">
            <Header ></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;