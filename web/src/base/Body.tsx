import React from "react";
import { Route, Switch } from 'react-router-dom'
import UploadPage from "../upload/UploadPage";
import UrlPage from "../url/UrlPage";
import TermsPage from "../terms/TermsPage";
import PrivacyPolicyPage from "../privacy/PrivacyPolicyPage";
import HomePage from "../home/HomePage";

const Body: React.FC = () => {
    return (
        <div className="col">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/upload" component={UploadPage} />
                <Route path="/url" component={UrlPage} />
                <Route path="/terms" component={TermsPage} />
                <Route path="/privacy" component={PrivacyPolicyPage} />
            </Switch>
        </div>
    );
};

export default Body;