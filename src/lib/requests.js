const DOMAIN = 'localhost:3000';
const API_PREFIX = '/api/v1';
const BASE_URL = `http://${DOMAIN}${API_PREFIX}`;
const JWT = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjMsImZpcnN0X25hbWUiOiJKb24iLCJsYXN0X25hbWUiOiJTbm93IiwiZnVsbF9uYW1lIjoiSm9uIFNub3cifQ.wiMp0k9iaILq6aMVxOVc-X218ZPTW4keo2MWIkkTukQ';

// HTTP REQUESTS


const Question = {
  all () {
    return fetch(
      `${BASE_URL}/questions`,
      {
        headers: {
          'Authorization': JWT
        }
      }
    )
      .then(res => res.json());
  },
  one (id) {
    return fetch(
      `${BASE_URL}/questions/${id}`,
      {
        headers: {
          'Authorization': JWT
        }
      }
    )
      .then(res => res.json());
  },
  create (params) {
    return fetch(
      `${BASE_URL}/questions`,
      {
        headers: {
          'Authorization': JWT,
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
      .then(res => res.json())
  }
}

// export default Question;
// 👇 This named export. Unlike the default, it allows
// to export multiple variables which must import by their
// surround by braces.
// `import { Question, Token } from './lib/Question'`
export { Question };
