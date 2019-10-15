import React from 'react';
import "../css/Home.css"

const UploadPage: React.FC = () => {
    return (
        <div className="welcome-board">
            <img className="icon" src={process.env.PUBLIC_URL + '/files.svg'}/>
            <div className="content">
                <h1>Upload and compare files</h1>
                <p>Compare the difference between pictures or other files! <br/>Enter two images and the difference will show up below.</p>
            </div>
        </div>
    );
};

export default UploadPage;