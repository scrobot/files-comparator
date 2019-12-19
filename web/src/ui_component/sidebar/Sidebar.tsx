import React, { Component } from 'react';
import "./Sidebar.css"

type HistoryTasks = {
    size: number,
    tasks: Array<HistoryTask>
}

type HistoryTask = {
    id: string,
    name: string
}

export class Sidebar extends Component<HistoryTasks> {

    static defaultProps = {
        size: 1,
        tasks: [
            {
                id: '1',
                name: 'test'
            },
            {
                id: '2',
                name: 'test 2'
            },
            {
                id: '3',
                name: 'test 3'
            }
        ]
    };

    render() {
        return <aside className="Sidebar col-xs-12 col-md-2">
            <ul>
                { this.props.tasks.map((task: HistoryTask) => <li>
                            <a href={"/history/task-" + task.id}>{task.name}</a>
                        </li>
                    )}
            </ul>
        </aside>
    }

}