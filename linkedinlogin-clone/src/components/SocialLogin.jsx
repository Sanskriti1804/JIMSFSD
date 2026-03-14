import googleIcon from "../assets/google-ic.png";
import microsoftIcon from "../assets/microsoft-ic.png";
import userIcon from "../assets/user-icon.png";

function SocialLogin(){
    return (
        <div className="social-login">

            <div className="google-login">
                <div className="user-icon">
                    <img src = {userIcon} alt="user-icon" className="user-icon"/>
                </div>
                <div>
                    <div className="google-login-label">Continue as User1</div>
                    <small>user1@gmail.com</small>
                </div>
                <div className="google-icon">
                    <img src = {googleIcon} alt="google-icon" className="google-icon"/>
                </div>
            </div>

            <div className="microsoft-login">
                <div className="microsoft-icon">
                    <img src = {microsoftIcon} alt="microsoft-icon" className="microsoft-icon"/>
                </div>
                <div> Continue with Microsoft</div>
            </div>
        </div>
    )
}

export default SocialLogin;