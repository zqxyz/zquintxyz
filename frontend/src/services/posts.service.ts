import axios from 'axios';
import { PostType } from '../types';

const endpoint = 'http://localhost:8000';

class PostsService {
  getAllPosts() {
    return axios.get(endpoint + '/posts');
  }

  getPost(id: number) {
    return axios.get(endpoint + '/posts/' + id);
  }
}

interface Response {
  data: PostType[];
}

const postsService = new PostsService();

export { postsService, Response };
