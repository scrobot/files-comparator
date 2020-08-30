import React from 'react';
import "./Sign.css"

const LoginForm: React.FC = () => {
    return <div className="col-md-4 auth-form">
        <div className="auth-header">
            <img src={process.env.PUBLIC_URL + '/login_empty_avatar.png'} alt="avatar"/>
            <h2>Sing In</h2>
        </div>
        <form className="form-row">
            <input className="form-control" placeholder="enter your nickname" />
            <input type="password" className="form-control" placeholder="enter the password" />
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">
                    Remember me?
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <a className="sign_up_ling" href="/register">Sign Up</a>
    </div>
}

export default LoginForm;