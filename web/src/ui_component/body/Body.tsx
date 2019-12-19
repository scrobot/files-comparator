import React from "react";
import { Route, Switch } from 'react-router-dom'
import UploadPage from "../../pages/upload/UploadPage";
import UrlPage from "../../pages/url/UrlPage";
import TermsPage from "../../pages/terms/TermsPage";
import PrivacyPolicyPage from "../../pages/privacy/PrivacyPolicyPage";
import SignInPage from "../../pages/auth/sign_in/SignInPage";
import SignUpPage from "../../pages/auth/sign_up/SignUpPage";
import TextComparePage from "../../pages/text/TextComparePage";

const Body: React.FC = () => {
    return (
        <div className="col">
            <Switch>
                <Route exact path="/" component={TextComparePage} />
                <Route path="/upload" component={UploadPage} />
                <Route path="/url" component={UrlPage} />
                <Route path="/terms" component={TermsPage} />
                <Route path="/privacy" component={PrivacyPolicyPage} />
                <Route path="/auth" component={SignInPage} />
                <Route path="/register" component={SignUpPage} />
            </Switch>
        </div>
    );
};

export default Body;