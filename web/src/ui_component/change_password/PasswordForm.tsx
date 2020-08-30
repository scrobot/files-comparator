import React from "react";
import './PasswordForm.css';

const PasswordForm: React.FC = () => {
  return <div className="col-md-6 passwordForm">
      <div className="password-header">
          <img src={process.env.PUBLIC_URL + '/password.png'} alt=""/>
          <h2>Change Password</h2>
      </div>
      <form className="password-row">
          <div className="form-group">
              <label htmlFor="new-password">New Password</label>
              <input type="text" className="form-control" id="new-password" />
          </div>
          <div className="form-group">
              <label htmlFor="password-confirmation">The new password confirmation</label>
              <input type="text" className="form-control" id="password-confirmation" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>
};

export default PasswordForm;