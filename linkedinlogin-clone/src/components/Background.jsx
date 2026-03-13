function Background({children}){
    return(
        <div className="background">{}
        <div className="logo"></div>{}
        <h1 className="title">
            Make the most of your professional life    
        </h1>{}

        {children}
        </div>

    );
}

//export the component - can be used in other files - app.jsx
export default Background;