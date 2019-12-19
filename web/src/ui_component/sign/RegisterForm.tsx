import React, { Component } from 'react';
import "./Sign.css"

const RegisterForm: React.FC = () => {
    return <div className="col-md-4 auth-form">
        <div className="auth-header">
            <img src={process.env.PUBLIC_URL + '/login_empty_avatar.png'} alt="avatar"/>
            <h2>Sing Up</h2>
        </div>
        <form className="form-row">
            <input className="form-control" placeholder="enter your nickname" />
            <input className="form-control" placeholder="enter your e-mail" />
            <input type="password" className="form-control" placeholder="enter the password" />
            <input type="password" className="form-control" placeholder="repeat the password" />

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default RegisterForm;