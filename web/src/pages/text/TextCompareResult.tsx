import React from "react";
import CompareResult from "../../ui_component/compare_result/CompareResult";
import {Nothing} from "../../models/Nothing";
import {CompareTaskDetails} from "./comparator.store";
import {comparatorQuery} from "./comparator.query";

type State = {
    details?: CompareTaskDetails
}

class TextCompareResult extends React.Component<Nothing, State> {

    componentDidMount() {
        comparatorQuery.select()
            .subscribe(state => {
                console.log(state)

                this.setState({
                    details: state.details
                });
            })
    }

    render() {
        if(this.state == undefined) return null

        const details = this.state.details
        console.log(details)

        if(details == undefined) return null

        return (
            <div className={"visible"}>
                <CompareResult
                    sourceLength={details.target_incoming_length}
                    targetLength={details.subject_incoming_length}
                    symbolsMatch={details.symbols_match}
                    percentsMatch={details.percents_match}
                />
            </div>
        );
    }

}

export default TextCompareResult