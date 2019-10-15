import React from "react";
import { Route, Switch } from 'react-router-dom'
import HomePage from "../home/HomePage";
import UploadPage from "../upload/UploadPage";

const Body: React.FC = () => {
    return (
        <div className="col">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/upload" component={UploadPage} />
            </Switch>
        </div>
    );
};

export default Body;