import axios from 'axios';

export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

function payload(type, request) {
  return {
    type,
    payload: request,
  };
}

export function submitUserInfo(data) {
  console.log("data", data)
  const request = axios({
    method: 'POST',
    url: 'http://localhost:8080/api/users',
    data: data,
  });

  return request
    .then((response) => {
      console.log(response);
      return payload(SUBMIT_USER_INFO, response.data);
    });
}

