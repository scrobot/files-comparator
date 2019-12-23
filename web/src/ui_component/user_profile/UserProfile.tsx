import React, { Component } from 'react';
import './UserProfile.css'

const UserProfile: React.FC = () => {
return <div className="container">
    <div className="row user-header">
        <h1>User name</h1>
    </div>
    <div className="row user-form">
        <form>
        <div className="form-row">
            <div className="col-md-3 user-side">
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                     className="avatar img-thumbnail" alt="avatar" />
                <div className="form-group download-history ">
                    <label htmlFor="downloadHistory">Download history</label>
                    <select className="form-control" id="downloadHistory">
                        <option>Test 1</option>
                        <option>Test 2</option>
                        <option>Test 3</option>
                    </select>
                </div>
            </div>
            <div className="col-md-9 form-row user-body">
             <div className="form-group col-md-6">
                <label htmlFor="userFirstName">First Name</label>
                <input type="text" className="form-control" id="userFirstName" placeholder="First Name"  />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="userLastName">Last Name</label>
                <input type="text" className="form-control" id="userLastName" placeholder="Last Name"  />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="userEmail">Email</label>
                <input type="email" className="form-control" id="userEmail" placeholder="Email"  />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="userLogin">Login</label>
                <input type="text" className="form-control" id="userLogin" placeholder="Login"  />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="userAge">Age</label>
                <input type="text" className="form-control" id="userAge" placeholder="Age"  />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="userGender">Male or female</label>
                <input type="text" className="form-control" id="userGender" placeholder="Male or female"  />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="userCity">City</label>
                <input type="text" className="form-control" id="userCity" placeholder="City"  />
            </div>
            </div>
        </div>
            <a className="change-password" href="#">Change password</a>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </div>
};

export default UserProfile;