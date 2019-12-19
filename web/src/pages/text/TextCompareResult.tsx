import React from "react";
import CompareResult from "../../ui_component/compare_result/CompareResult";
import {Nothing} from "../../models/Nothing";

type Result = {
    target_incoming_length: number,
    subject_incoming_length: number,
    symbols_match: number,
    percents_match: number,
    task_id?: string
}

class TextCompareResult extends React.Component<Result, Nothing> {

    render() {
        return (
            <div className={this.props.task_id ? "hidden" : "visible"}>
                <CompareResult
                    sourceLength={this.props.target_incoming_length}
                    targetLength={this.props.subject_incoming_length}
                    symbolsMatch={this.props.symbols_match}
                    percentsMatch={this.props.percents_match}
                />
            </div>
        );
    }

}

export default TextCompareResult