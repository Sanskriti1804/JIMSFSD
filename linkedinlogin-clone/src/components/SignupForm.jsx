function SignupForm(){
    return(
        <div className="form-container">

            <label>Email or phone number</label>
            <input type = "text"/>

            <label>Password</label>
            <div className="password-field">
                <input type = "password"/>
                <span className="show">Show</span>
            </div>

            <div className="checkbox-row">
                <input type = "checkbox" defaultChecked/>
                <span>Keep me logged in</span>
            </div>

            <p className="terms">
                By clicking Agree & Join or Continue, you agree to the LinkedIn
                <span className = "blue-term">User Agreement</span>,
                <span className="blue-term">Privacy Policy</span>
                and
                <span className="blue-term">Cookie Policy</span>.
            </p>

            <button className="join-btn">Agree & Join</button>

            <div className="divider">
                <span>or</span>
            </div>

            <SocialLogin/>
        </div>
    );
}

export default SignupForm;