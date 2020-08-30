import React, {Component} from 'react';
import WelcomeCard from "../../ui_component/welcome_card/WelcomeCard";
import TextCompareForm from "./TextCompareForm";
import TextCompareResult from "./TextCompareResult";
import TextCompareTask from "./TextCompareTask";
import {Nothing} from "../../models/Nothing";
import {CompareTaskDetails, CompareTaskResult} from "./comparator.store";
import {comparatorQuery} from "./comparator.query";
import {comparatorService} from "./comparator.service";


type TextCompareData = {
    result?: CompareTaskResult,
    task?: CompareTaskDetails
}

class TextComparePage extends Component<Nothing, TextCompareData> {

    render() {
        return (
            <div>
                <WelcomeCard
                    title="Welcome to 2FilesComparator"
                    text={["2FilesComparator is a diff tool to compare differences between two files.", "Enter the contents of two files and click Find Difference"]}
                />
                <TextCompareForm onFormSubmit={(t) => comparatorService.sendRequest(t.sourceText, t.targetText)} />
                <TextCompareResult />
                <TextCompareTask />
            </div>

        );
    }

}

export default TextComparePage;