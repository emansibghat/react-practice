import './meme.css';
import React from 'react';
//import Navbars from './component/navbar2';
//import Hero from './component/hero';
//import Card from './component/card';
//import Contact from './component/contact';
//import airbnbImage from './component/boy.png';
import Header from "./component/meme"
import Meme from "./component/new"


function App() {
  return (
    <>
     <Header />
     <Meme/>
     </>
         
    //<div className="grid">
      //<div className="contacts">
      //<Contact
       // image={airbnbImage}
       // name="Mr. Whiskerson"
       // phone="(212) 555-1234"
       // email="mr.whiskaz@catnap.meow"
      ///>
     // <Contact
      //  image={airbnbImage}
       // name="Fluffykins"
      //  phone="(212) 555-2345"
       // email="fluff@me.com"
      // />
      //<Contact
       // image={airbnbImage}
       // name="Felix"
       // phone="(212) 555-4567"
       // email="thecat@hotmail.com"
      ///>
      //<Contact
       // image={airbnbImage}
      //  name="Pumpkin"
       // phone="(0800) CAT KING"
        //email="pumpkin@scrimba.com"
      ///>
   // </div>
   // </div>
    
  );
}

export default App;