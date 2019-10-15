import React from 'react';
import "../css/Home.css"

const HomePage: React.FC = () => {
    return (
        <div className="welcome-board">
            <img className="icon" src={process.env.PUBLIC_URL + '/files.svg'}/>
            <div className="content">
                <h1>Welcome to 2FilesComparator</h1>
                <p>2FilesComparator is a diff tool to compare differences between two files. <br /> Enter the contents of two files and click Find Difference</p>
            </div>
        </div>
    );
};

export default HomePage;