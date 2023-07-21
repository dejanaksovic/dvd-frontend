import "./Navbar.css"
import { logo } from "../../utils/images";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return ( 
      <nav>
         <div className="nav-container">
            <NavLink to={'/'}><div className="nav-logo"
               style={{
                  backgroundImage: `url(${logo})`,
               }}/></NavLink>
            <div className="links">
               <NavLink to={'/'}>Početna</NavLink>
               <NavLink to={'/archive'}>Arhiva</NavLink>
               <NavLink to={'/events'}>Događanja</NavLink>
               <NavLink to={'/contact'}>Kontakti</NavLink>
            </div>
         </div>
      </nav>
    );
}
 
export default Navbar;