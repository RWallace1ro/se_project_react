import handleServerResponse from "../utils/utils";

const BASE_URL = "http://localhost:3001";

const signup = (name, avatar, email, password) => {
  return fetch(`${BASE_URL}/items/${_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleServerResponse);
};

const signin = (email, password) => {
  return fetch(`${BASE_URL}/items/${_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse);
};

const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export { signup, signin, checkToken };
