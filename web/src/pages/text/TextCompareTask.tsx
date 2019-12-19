import React from "react";
import CompareTask from "../../ui_component/compare_task/CompareTask";
import {Nothing} from "../../models/Nothing";

type Result = {
    id: string,
    created_at: number,
    time_elapsed: number,
    match: number,
    tasks_count: number,
    handled_tasks_count: number
}

class TextCompareTask extends React.Component<Result, Nothing> {

    render() {
        return (
            <div className={this.props != null ? "visible" : "hidden"}>
                <CompareTask
                    id={this.props.id}
                    createdAt={this.props.created_at}
                    timeElapsed={this.props.time_elapsed}
                    matchPersents={this.props.match}
                    tasksCount={this.props.tasks_count}
                    handledTasksCount={this.props.handled_tasks_count}
                />
            </div>
        );
    }

}

export default TextCompareTask