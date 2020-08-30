import {comparatorStore, CompareTaskDetails, CompareTaskResult} from './comparator.store';
import Network from "../../models/Network";
import ResponseWrapper from "../../models/ResponseWrapper";
import {interval} from "rxjs";
import {flatMap, map} from "rxjs/operators";
import {Observable} from "@reactivex/rxjs/dist/package";

export class ComparatorService {

    private axios = require("axios").default

    sendRequest(source: string, target: string) {
        this.axios.post(Network.text_compare_url, {
            first_text: source,
            second_text: target
        })
            .then((response: ResponseWrapper<CompareTaskDetails>) => {
                console.log(response);

                if (!response.data) return;

                if (response.data.task_id) {
                    this.answerTaskServer(response.data.task_id)
                } else {
                    comparatorStore.partialUpdate(response.data)
                }
            })
            .catch((error: any) => {
                console.log(error);
                comparatorStore.setError(error)
            });
    }

    private answerTaskServer(taskId: string) {
        this.createTaskResultObservable(taskId)
            .subscribe(
                (result: CompareTaskResult) => {
                    console.log(result)
                    comparatorStore.partialUpdate(result)
                },
                (error: any) => {
                    console.error(error)
                })
    }

    private createTaskResultObservable(taskId: String): Observable<CompareTaskResult> {
        return new Observable<CompareTaskResult>((observer) => {
            const interval = setInterval(() => {
                this.axios
                    .get(Network.text_compare_task + taskId)
                    .then((response: ResponseWrapper<CompareTaskResult>) => {
                        const result = response.data
                        observer.next(result)

                        if (result!.tasks_count === result!.handled_tasks_count) {
                            clearInterval(interval)
                            observer.complete()
                        }
                    })
                    .catch((error: any) => observer.error(error));
            }, 500)
        })
    }

}

export const comparatorService = new ComparatorService();