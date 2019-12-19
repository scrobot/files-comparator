import React, {Component} from "react";
import "../compare_result/CompareResult.css"

type Result = {
    id: string,
    createdAt: number
    timeElapsed: number
    matchPersents: number
    tasksCount: number
    handledTasksCount: number
}

enum MatchStatus {
    RED = "red", ORANGE = "orange", GREEN = "green", UNDEFINED = ""
}

export class CompareTask extends Component<Result> {

    percentsClassName(): MatchStatus {
        if(this.props.matchPersents === undefined)
            return MatchStatus.UNDEFINED;

        const val = this.props.matchPersents;
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
                <p>Task handling completed on {(this.props.handledTasksCount / this.props.tasksCount * 100).toFixed(2)}%</p>
            </div>
            <ul>
                <li>task created at: <span>{new Date(this.props.createdAt).toISOString()}</span></li>
                <li>time elapsed: <span>{this.props.timeElapsed}ms</span></li>
                <li>tasks count: <span>{this.props.tasksCount}</span></li>
                <li>Tasks handled: <span>{this.props.handledTasksCount}</span></li>
            </ul>
            <p className="percents">Text matches on <span className={this.percentsClassName().toString()}>{this.props.matchPersents.toFixed(2)}%</span></p>
        </div>
    }

}

export default CompareTask;