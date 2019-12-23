import React from 'react';
import "../../ui_component/welcome_card/WelcomeCard.css"
import WelcomeCard from "../../ui_component/welcome_card/WelcomeCard";
import UrlCompareForm from "./UrlCompareForm";

const UrlPage: React.FC = () => {
    return (
        <div>
            <WelcomeCard
                title="Compare files by url"
                text={["Compare the difference between pictures or other files!", "Enter two urls and the difference will show up below."]}
            />
            <UrlCompareForm onFormSubmit={(t) => {}} />
        </div>
    );
};

export default UrlPage;