import mitt from 'mitt';

type PageName = 'Index'

type Events = {
  pageScroll: {
    page: PageName
    scrollTop: number
  }
};

export const appEvent = mitt<Events>(); // inferred as Emitter<Events>
