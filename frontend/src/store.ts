import { ref, watch } from 'vue';
import { PostType, Status } from './types';

const globalState = ref({
  status: 'idle' as Status,
  activePage: '' as string,
  posts: [] as PostType[],
});

watch(
  () => globalState.value.activePage,
  () => {
    document.title = globalState.value.activePage;
  },
);

export { globalState };
