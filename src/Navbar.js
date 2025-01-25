const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                nightOFcode
            </div>
            <div className="searchBar">
                <input className="search" type="text" placeholder="search here"/>
                <button className="searchBtn" type="button">search</button>
            </div>
            <div className="navigation">
                <a href="">Blog</a>
                <a href="">Home</a>
                <a href="">About</a>
            </div>
        </div>
    );
}

export default Navbar;
