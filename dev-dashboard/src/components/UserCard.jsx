import { useState } from "react"


function UserCard(props){
     const [followed, setfollowed] = useState(false)
    return(
        <div className="user-card">
            <h2 className="user-name">{props.name}</h2>
            <p className="user-role">{props.role}</p>

            {/* event handling */}
            <button className="follow-btn" onClick={() => setfollowed(!followed)}>
                {followed ? "Following" : "Follow"}
            </button>
        </div>
    )
}

export default UserCard