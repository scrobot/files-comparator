import React from "react";
import CompareTask from "../../ui_component/compare_task/CompareTask";
import {Nothing} from "../../models/Nothing";
import {CompareTaskResult} from "./comparator.store";
import {comparatorQuery} from "./comparator.query";

type State = {
    result?: CompareTaskResult
}

class TextCompareTask extends React.Component<Nothing, State> {

    componentDidMount() {
        comparatorQuery.select()
            .subscribe(state => {
                this.setState({
                    result: state.result
                });
            })
    }

    render() {
        if(this.state == undefined) return null

        const result = this.state.result
        console.log(result)

        if(result == undefined) return null


        return (
            <div className={"visible"}>
                <CompareTask
                    id={result.id}
                    createdAt={result.created_at}
                    timeElapsed={result.time_elapsed}
                    matchPersents={result.match}
                    tasksCount={result.tasks_count}
                    handledTasksCount={result.handled_tasks_count}
                />
            </div>
        );
    }

}

export default TextCompareTask