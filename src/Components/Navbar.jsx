import "../Styling/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Roam Reserve </span>
                <div className="navitems">
                    <button className="navbutton">Register</button>
                    <button className="navbutton">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
