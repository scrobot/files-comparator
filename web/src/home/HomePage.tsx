import React, {Component} from 'react';
import WelcomeCard from "../base/WelcomeCard";
import {HomeForm} from "./HomeForm";

interface State {

}

class HomePage extends Component<{}, State> {

    render() {
        return (
            <div>
                <WelcomeCard
                    title="Welcome to 2FilesComparator"
                    text={["2FilesComparator is a diff tool to compare differences between two files.", "Enter the contents of two files and click Find Difference"]}
                />
                <HomeForm />
            </div>

        );
    }

}

export default HomePage;