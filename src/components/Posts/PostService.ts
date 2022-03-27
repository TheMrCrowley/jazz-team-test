import { IPost } from './postTypes';
import axios from 'axios';

export const getPosts = async (page = '1'): Promise<IPost[]> => {
  const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _limit: 10,
      _page: page,
    },
  });
  return response.data;
};
