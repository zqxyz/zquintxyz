import { ref } from 'vue';

type Status = 'loading' | 'ready' | 'error' | 'idle';

const globalState = ref({
  status: 'idle' as Status,
  posts: [] as Record<string, string>[],
});

export { globalState };
