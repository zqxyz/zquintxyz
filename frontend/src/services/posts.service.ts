import axios from 'axios';

const endpoint = 'http://localhost:8000';

class PostsService {
  getAllPosts() {
    return axios.get(endpoint + '/posts');
  }
}

export const postsService = new PostsService();
