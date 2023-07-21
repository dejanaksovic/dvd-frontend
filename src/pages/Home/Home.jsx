import "./Home.css"
import { dvdThin, dvdWide } from "../../utils/images";

const Home = () => {
   return ( 
      <div className="home-wrapper">
         <div className="hero-text">
            <h1 className="text-center text-7xl">Dobrovoljno vatrogasno društvo</h1>
            <h1 className="text-center text-9xl">Novi Pazar</h1>
         </div>
         <div className="hero-image" 
         style={{
            backgroundImage: `url(${dvdWide})`
         }}/>
      </div>
      
    );
}
 
export default Home;