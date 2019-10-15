import React from 'react';
import "../css/WelcomeCard.css"
import WelcomeCard from "../base/WelcomeCard";

const UrlPage: React.FC = () => {
    return (
        <div>
            <WelcomeCard
                title="Compare files by url"
                text={["Compare the difference between pictures or other files!", "Enter two urls and the difference will show up below."]}
            />
        </div>
    );
};

export default UrlPage;