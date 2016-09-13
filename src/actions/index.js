import axios from 'axios';

export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

function payload(type, request) {
  return {
    type,
    payload: request,
  };
}

export function submitUserInfo(data) {
  const request = axios({
    method: 'POST',
    url: 'http://localhost:8080/api/users',
    data: data,
  });

  return request
    .then(response => {
      payload(SUBMIT_USER_INFO, response.data);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.status);
        //update view with error message - email in use
      }
    });
}

