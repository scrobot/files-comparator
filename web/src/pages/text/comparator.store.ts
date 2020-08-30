import { Store, StoreConfig } from '@datorama/akita';

export interface ComparatorState {
  key: String,
  details?: CompareTaskDetails;
  result?: CompareTaskResult;
}

export interface CompareTaskResult {
  key: String,
  id: string;
  created_at: number;
  time_elapsed: number;
  match: number;
  tasks_count: number;
  handled_tasks_count: number;
}

export interface CompareTaskDetails {
  target_incoming_length: number;
  subject_incoming_length: number;
  symbols_match: number;
  percents_match: number;
  task_id?: string;
}

export function createInitialState(): ComparatorState {
  return {
    key: ""
  };
}

@StoreConfig({ name: 'comparator' })
export class ComparatorStore extends Store<ComparatorState> {

  constructor() {
    super(createInitialState());
  }

  partialUpdate(body: CompareTaskDetails | CompareTaskResult) {
    if("target_incoming_length" in body) {
      this.update({
        details: body,
        result: undefined
      })
    } else {
      this.update({
        details: undefined,
        result: body
      })
    }
    console.log(this.getValue())
  }

}

export const comparatorStore = new ComparatorStore();

