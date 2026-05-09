import { useState } from "react";

function DeveloperForm(){
    const [name, setName] = useState("")
    const [role, setRole] = useState("")

    // form submit handler
    function handleSubmit(event){
        // preventDefault - stops browser automatic refresh behavior
        event.preventDefault()

        if(name.trim() == "" || role.trim() == ""){
            alert("Please fill all fields")
            return
        }

        //clear i/p after submitting
        setName("")
        setRole("")
    }

    return(
        <div className="form-container">

            <h2 className="form-title"> Add Developer</h2>

            <form className="developer-form" onSubmit={handleSubmit}>

                <input 
                className="form-ip"
                // controlled i/p - value comes from state
                type="text"
                placeholder="Enter developer name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
                <input
                className="form-ip"
                type="text"
                placeholder="Enter developer role"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                />

                <button className="submit-btn">
                    Add Developer
                </button>
            </form>
        </div>
    )
}

export default DeveloperForm