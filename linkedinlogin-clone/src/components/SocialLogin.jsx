function SocialLogin(){
    return (
        <div className="social-login">

            <div className="google-login">
                <div className="user-icon"></div>
                <div>
                    <div>Continue as Sanskriti</div>
                    <small>sanskriti@gmail.com</small>
                </div>
                <div className="google-icon"></div>
            </div>

            <div className="microsoft-login">
                <div className="microsoft-icon"></div>
                <div> Continue with Microsoft</div>
            </div>
        </div>
    )
}

export default SocialLogin;