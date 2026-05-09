import Navbar from "./Navbar";

// paasing props
function Header({darkmode, setDarkMode}){
    return(
        <header>
            <Navbar darkmode={darkmode} setDarkMode={setDarkMode}/>

            <div className="hero-section">
                <h1>Developer Dashboard</h1>
                <p>Learning React step by step</p>
            </div>
        </header>
    )
}

export default Header;