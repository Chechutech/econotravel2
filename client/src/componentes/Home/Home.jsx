import Hero from "./Hero.jsx";
import ExpDestacadas from "./ExpDestacadas";
import RegistrateHoy from "./RegistrateHoy";
import Contactanos from "./Contactanos.jsx";

function Home (){
    return ( 
        <>
            <Hero/>
            
            <ExpDestacadas id='2'   id2='4'  id3='6'/>
           <Contactanos/>
            <RegistrateHoy/>
        </>

     );
}
 
export default Home;