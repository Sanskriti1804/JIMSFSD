import logo from "../assets/linkedin-logo.png";

function Background({children}){
    return(
        <div className="background">
        <div className="logo">
            {/* <img src = "../linkedinRes/linkedin.png" alt="linkedin-logo" className="linkedin-logo"/> */}
        </div>
        <h1 className="title">
            Make the most of your professional life    
        </h1>{}

        {children}
        </div>

    );
}

//export the component - can be used in other files - app.jsx
export default Background;