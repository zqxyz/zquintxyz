import { ref } from 'vue';
import { PostType, Status, DarkMode } from './types';

interface GlobalState {
  status: Status;
  activePage: string | null;
  posts: PostType[];
  darkMode: DarkMode;
}

const globalState = ref<GlobalState>({
  status: 'idle',
  activePage: '',
  posts: [],
  darkMode: 'light',
});

export { globalState };
