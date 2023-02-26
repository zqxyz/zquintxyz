import axios from 'axios';
import { PostType } from './types';
import { globalState as state } from '../../store';

const globalState = state.value;
const endpoint = window.location.origin + '/api';

class PostsService {
  loadAllPosts() {
    globalState.status = 'loading';
    axios
      .get(endpoint + '/posts')
      .then((response: Response) => {
        if (response.data.length === 0) {
          throw new Error('No posts found');
        }
        globalState.posts = response.data;
        globalState.status = 'ready';
      })
      .catch((error) => {
        console.error(error.message);
        globalState.status = 'error';
      });
  }

  getPost(id: number) {
    globalState.status = 'loading';
    const data = axios
      .get(endpoint + '/posts/' + id)
      .then((response: { data: PostType }) => {
        globalState.status = 'ready';
        return response.data;
      })
      .catch((error) => {
        console.error('AW SHIT:', error.message);
        globalState.status = 'error';
        return null;
      });
    return data;
  }
}

interface Response {
  data: PostType[];
}

const postsService = new PostsService();

export { postsService, Response };
