import React, {Component} from "react";
import "../css/CompareResult.css"

type Result = {
    sourceLength?: number,
    targetLength?: number,
    symbolsMatch?: number,
    percentsMatch?: number
}

enum MatchStatus {
    RED = "red", ORANGE = "orange", GREEN = "green", UNDEFINED = ""
}

export class CompareResult extends Component<Result> {

    percentsClassName(): MatchStatus {
        if(this.props.percentsMatch === undefined)
            return MatchStatus.UNDEFINED;

        const val = this.props.percentsMatch;
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
            <ul>
                <li>source text length: <span>{this.props.sourceLength}</span></li>
                <li>target text length: <span>{this.props.targetLength}</span></li>
                <li>symbols matches: <span>{this.props.symbolsMatch}</span></li>
            </ul>
            <p className="percents">Text matches on <span className={this.percentsClassName().toString()}>{this.props.percentsMatch}%</span></p>
        </div>
    }

}

export default CompareResult;