import { ref } from 'vue';

type Post = {
  id: number;
  title: string;
  body: string;
  timestamp: string;
};

type Status = 'loading' | 'ready' | 'error' | 'idle';

const globalState = ref({
  status: 'idle' as Status,
  posts: [] as Post[],
});

export { globalState };
