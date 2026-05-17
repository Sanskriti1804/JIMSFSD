import { useState } from "react"


function UserCard(props){
     const [followed, setfollowed] = useState(false)
    return(
        <div className="user-card">
            <div className="status-container">
                <span className={props.online ? "status-dot online" : "status-dot offline"}></span>
                <p className="status">{props.online ? "Online" : "Offline"}</p>
            </div>
            <h3 className="user-domain">{props.domain}</h3>
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