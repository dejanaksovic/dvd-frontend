import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
   return ( 
      <div className="h-screen align-stretch">
         <Navbar/>
         <Outlet/>
      </div>
    );
}
 
export default MainLayout;