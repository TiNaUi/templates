import { Contribution } from '@/apis';
import mitt from 'mitt';

type Events = {
  changeItem: {
    index: number
    item: Contribution.Item
  }
  bar?: number;
};

export const contributionEmitter = mitt<Events>(); // inferred as Emitter<Events>
