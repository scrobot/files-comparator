import React, {Component} from 'react';
import WelcomeCard from "../base/WelcomeCard";
import HomeForm from "./HomeForm";
import {Nothing} from "../base/Nothing";
import Network from "../base/Network";
import CompareResult from "../base/CompareResult";
import CompareTask from "../base/CompareTask";

interface Result {}

class TextCompareResult implements Result {

    constructor(target_incoming_length: number, subject_incoming_length: number, symbols_match: number, percents_match: number, task_id: string) {
        this.target_incoming_length = target_incoming_length;
        this.subject_incoming_length = subject_incoming_length;
        this.symbols_match = symbols_match;
        this.percents_match = percents_match;
        this.task_id = task_id;
    }

    readonly target_incoming_length: number;
    readonly subject_incoming_length: number;
    readonly symbols_match: number;
    readonly percents_match: number;
    readonly task_id?: string;
}

class TextCompareTask implements Result {

    constructor(id: string, created_at: number, time_elapsed: number, match: number, tasks_count: number, handled_tasks_count: number) {
        this.id = id;
        this.created_at = created_at;
        this.time_elapsed = time_elapsed;
        this.match = match;
        this.tasks_count = tasks_count;
        this.handled_tasks_count = handled_tasks_count;
    }

    readonly id: string;
    readonly created_at: number;
    readonly time_elapsed: number;
    readonly match: number;
    readonly tasks_count: number;
    readonly handled_tasks_count: number;
}

type TextCompareResponse = {
    data: TextCompareResult,
    status: number,
    statusText: string
}

class HomePage extends Component<{}, Result> {

    private axios = require("axios").default

    sendRequest(source: string, target: string) {
        this.axios.post(Network.text_compare_url, {
            first_text: source,
            second_text: target
        })
        .then((response: TextCompareResponse) => {
            console.log(response);

            if(response.data.task_id == null) {
                this.setState(new TextCompareResult(
                    response.data.target_incoming_length,
                    response.data.subject_incoming_length,
                    response.data.symbols_match,
                    response.data.percents_match,
                    ""
                ))
            } else {
                this.answerTaskServer(response.data.task_id)
            }
        })
        .catch((error: any) => {
            console.log(error);
        });
    }

    answerTaskServer(taskId: string) {
        setInterval(() => {
            this.axios.get(Network.text_compare_task + "/" + taskId)
                .then((response: TextCompareTask) => {
                    console.log(response);

                    this.setState(new TextCompareTask(
                        response.id,
                        response.created_at,
                        response.time_elapsed,
                        response.match,
                        response.tasks_count,
                        response.handled_tasks_count
                    ))
                })
                .catch((error: any) => {
                    console.log(error);
                });
        }, 500)
    }

    renderResult() {
        console.log(typeof this.state)

        if(this.state == null) {
            return <div/>
        } else if(this.state === TextCompareResult) {
            const result = this.state as TextCompareResult;
            return <CompareResult
                sourceLength={result.target_incoming_length}
                targetLength={result.subject_incoming_length}
                symbolsMatch={result.symbols_match}
                percentsMatch={result.percents_match}
            />
        } else if(this.state === TextCompareTask) {
            const task = this.state as TextCompareTask;
            return <CompareTask
                id={task.id}
                createdAt={task.created_at}
                timeElapsed={task.time_elapsed}
                matchPersents={task.match}
                tasksCount={task.tasks_count}
                handledTasksCount={task.handled_tasks_count}
            />
        } else {
            console.log("undefined type of Result -> " + this.state)
            return <div/>
        }
    }

    render() {
        return (
            <div>
                <WelcomeCard
                    title="Welcome to 2FilesComparator"
                    text={["2FilesComparator is a diff tool to compare differences between two files.", "Enter the contents of two files and click Find Difference"]}
                />
                <HomeForm onCommentSubmit={(t) => this.sendRequest(t.sourceText, t.targetText)} />
                { this.renderResult() }
            </div>

        );
    }

}

export default HomePage;