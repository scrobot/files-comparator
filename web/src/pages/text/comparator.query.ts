import { Query } from '@datorama/akita';
import { ComparatorStore, ComparatorState, comparatorStore } from './comparator.store';

export class ComparatorQuery extends Query<ComparatorState> {

  constructor(protected store: ComparatorStore) {
    super(store);
  }

}

export const comparatorQuery = new ComparatorQuery(comparatorStore);