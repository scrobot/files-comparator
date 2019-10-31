import React, {Component} from 'react';
import WelcomeCard from "../base/WelcomeCard";
import {Nothing} from "../models/Nothing";
import FileCompareForm from "./FileCompareForm";
import Network from "../base/Network";
import ResponseWrapper from "../models/ResponseWrapper";
import FileCompareTask from "../models/FileCompareTask";
import FileCompareResult from "./FileCompareResult";

class UploadPage extends Component<Nothing, FileCompareTask> {

    private axios = require("axios").default

    sendRequest(source: FileList, target: FileList) {
        const data = new FormData();
        data.append("source", source[0]);
        data.append("target", target[0]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        this.axios.post(Network.file_compare_url, data, config)
            .then((response: ResponseWrapper<FileCompareTask>) => {
                console.log(response);
                if(!response.data) return;

                const task = response.data;

                const event = new EventSource(Network.file_compare_url + "/" + task.task_id);
                event.onmessage = (ev => {
                    const task = JSON.parse(ev.data);

                    this.setState({
                        task_id: task.task_id,
                        created_at: task.created_at,
                        tasks_count: task.tasks_count,
                        tasks_handled: task.tasks_handled,
                        percents_match: task.percents_match
                    });

                    if(task.tasks_count === task.tasks_handled) {
                        event.close()
                    }
                });
                event.onerror = (ev => {
                    console.log(ev)
                });
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    render() {
        return <div>
            <WelcomeCard
                title="Upload and compare files"
                text={["Compare the difference between pictures or other files!", "Enter two images and the difference will show up below."]}
            />
            <FileCompareForm onFormSubmit={(t) => this.sendRequest(t.sourceFile, t.targetFile)} />
            { this.state ? <FileCompareResult
                task_id={this.state.task_id}
                created_at={this.state.created_at}
                percents_match={this.state.percents_match}
                tasks_count={this.state.tasks_count}
                tasks_handled={this.state.tasks_handled} /> : "" }
        </div>
    }

}

export default UploadPage;