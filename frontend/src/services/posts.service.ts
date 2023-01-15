import axios from 'axios';

const endpoint = 'http://localhost:8000';

class PostsService {
  getAllPosts() {
    return axios.get(endpoint + '/posts');
  }
}

interface Response {
  data: Record<string, string | number>[];
}

const postsService = new PostsService();

export { postsService, Response };
