import "./Archive.css"
import { logo, smotra, smotra2, smotra3, obuka, obuka2, intervencija, intervencija2 } from "../../utils/images";
import { useState } from "react";

const Archive = () => {
   const images = [logo, smotra, smotra2, smotra3, obuka, obuka2, intervencija, intervencija2]
   const [ desc, setDesc ] = useState("")

   return ( 
      <div className="archive-container">
         <div className="arc-desc">
            <h2 className="text-center text-4xl">Some title</h2>
            <p>Some desc Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quos sit deleniti ut voluptates esse, natus reiciendis obcaecati doloribus quibusdam corrupti doloremque illo quisquam animi, vero corporis quidem atque! Amet!</p>
            <div className="desc-creds">
               <p>Dejan Aksovic</p>
               <p>31.12.2021</p>
            </div>
         </div>
         <div className="arc-images">
            { images.map( (e, i) => <img src = {e} key = {i}/>) }
         </div>
      </div>
    );
}
 
export default Archive;