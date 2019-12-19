import React from "react";
import {Nothing} from "../../models/Nothing";
import FileCompareTask from "../../models/FileCompareTask";
import MatchStatus from "../../models/MatchStatus";
import "../../ui_component/compare_result/CompareResult.css"

class FileCompareResult extends React.Component<FileCompareTask, Nothing> {

    percentsClassName(): MatchStatus {
        if(this.props.percents_match === undefined)
            return MatchStatus.UNDEFINED;

        const val = this.props.percents_match;
        let result;

        if(val < 30) {
            result = MatchStatus.RED
        } else if(val >= 30 && val <= 60) {
            result = MatchStatus.ORANGE
        } else {
            result = MatchStatus.GREEN
        }

        return result;
    }

    render() {
        return <div className="compare-result">
            <div className="compare-task-status">
                <p>Task handling completed on {(this.props.tasks_handled / this.props.tasks_count * 100).toFixed(2)}%</p>
            </div>
            <ul>
                {/*<li>task created at: <span>{new Date(this.props.created_at).toISOString()}</span></li>*/}
                <li>tasks count: <span>{this.props.tasks_count}</span></li>
                <li>Tasks handled: <span>{this.props.tasks_handled}</span></li>
            </ul>
            <p className="percents">File matches on <span className={this.percentsClassName().toString()}>{this.props.percents_match}%</span></p>
        </div>
    }
}

export default FileCompareResult