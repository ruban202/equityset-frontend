import axios from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_PROXY_API,
  headers: {
    'Content-type': 'application/json',
  },
});
