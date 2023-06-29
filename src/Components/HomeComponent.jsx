import "../Styling/Homepage.css";
import Featured from "./Featured";
import Header from "./Header";
import Navbar from "./Navbar";
const HomeComponent = ()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">

            <Featured/>
            </div>
        </div>
    )
}

export default HomeComponent;