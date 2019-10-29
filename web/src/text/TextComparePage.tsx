import React, {Component} from 'react';
import WelcomeCard from "../base/WelcomeCard";
import TextCompareForm from "./TextCompareForm";
import TextCompareResult from "./TextCompareResult";
import TextCompareTask from "./TextCompareTask";
import Network from "../base/Network";

type TextCompareData = {
    result?: CompareResult,
    task?: CompareTask
}

type CompareResult = {
    target_incoming_length: number,
    subject_incoming_length: number,
    symbols_match: number,
    percents_match: number,
    task_id?: string
}

type CompareTask = {
    id: string
    created_at: number
    time_elapsed: number
    match: number
    tasks_count: number
    handled_tasks_count: number
}

type TextCompareResponse<T> = {
    data: T,
    status: number,
    statusText: string
}

class TextComparePage extends Component<{}, TextCompareData> {

    private axios = require("axios").default

    sendRequest(source: string, target: string) {
        this.axios.post(Network.text_compare_url, {
            first_text: source,
            second_text: target
        })
            .then((response: TextCompareResponse<CompareResult>) => {
                console.log(response);

                if(response.data.task_id) {
                    this.answerTaskServer(response.data.task_id)
                } else {
                    this.setState({
                        result: {
                            target_incoming_length: response.data.target_incoming_length,
                            subject_incoming_length: response.data.subject_incoming_length,
                            symbols_match: response.data.symbols_match,
                            percents_match: response.data.percents_match,
                            task_id: response.data.task_id
                        }
                    });
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    answerTaskServer(taskId: string) {
        const interval = setInterval(() => {
            this.axios.get(Network.text_compare_task + "/" + taskId)
                .then((response: TextCompareResponse<CompareTask>) => {
                    console.log(response.data);
                    const result = response.data

                    this.setState({
                        result: undefined,
                        task: {
                            id: result.id,
                            created_at: result.created_at,
                            time_elapsed: result.time_elapsed,
                            match: result.match,
                            tasks_count: result.tasks_count,
                            handled_tasks_count: result.handled_tasks_count
                        }
                    });

                    if(result.tasks_count === result.handled_tasks_count) {
                        clearInterval(interval)
                    }
                })
                .catch((error: any) => {
                    console.log(error);
                });
        }, 500)
    }

    render() {
        return (
            <div>
                <WelcomeCard
                    title="Welcome to 2FilesComparator"
                    text={["2FilesComparator is a diff tool to compare differences between two files.", "Enter the contents of two files and click Find Difference"]}
                />
                <TextCompareForm onFormSubmit={(t) => this.sendRequest(t.sourceText, t.targetText)} />
                { this.state && this.state.result ? <TextCompareResult
                    target_incoming_length={this.state.result.target_incoming_length}
                    subject_incoming_length={this.state.result.subject_incoming_length}
                    task_id={this.state.result.task_id}
                    percents_match={this.state.result.percents_match}
                    symbols_match={this.state.result.symbols_match} /> : ""
                }
                { this.state && this.state.task ? <TextCompareTask
                    id={this.state.task.id}
                    created_at={this.state.task.created_at}
                    handled_tasks_count={this.state.task.handled_tasks_count}
                    match={this.state.task.match}
                    tasks_count={this.state.task.tasks_count}
                    time_elapsed={this.state.task.time_elapsed} /> : ""}
            </div>

        );
    }

}

export default TextComparePage;