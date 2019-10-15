import React from 'react';
import WelcomeCard from "../base/WelcomeCard";

const UploadPage: React.FC = () => {
    return (
        <div>
            <WelcomeCard
                title="Upload and compare files"
                text={["Compare the difference between pictures or other files!", "Enter two images and the difference will show up below."]}
            />
        </div>
    );
};

export default UploadPage;