import React from "react";
import "../css/App.css"

export const HomeForm: React.FC = () => {

    return (
        <form className="home-form">
            <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                    <label className="label">First text</label>
                    <textarea className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label className="label">Second text</label>
                    <textarea className="form-control" />
                </div>
            </div>
            <div className="home-button-container">
                <button type="button" className="btn btn-primary home-button">Find difference</button>
            </div>
        </form>
    );
}