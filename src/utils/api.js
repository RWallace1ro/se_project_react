import handleServerResponse from "../utils/utils";

const BASE_URL = "http://localhost:3001";

const getItemList = () => {
  return fetch(`${BASE_URL}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
};

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${BASE_URL}/items`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
};

const deleteItem = (_id) => {
  return fetch(`${BASE_URL}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
};

// const createItem = (_id) => {
//   return fetch(`${BASE_URL}/items/${_id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, avatar, email, password }),
//   }).then(handleServerResponse);
// };

// const login = (_id) => {
//   return fetch(`${BASE_URL}/items/${_id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(handleServerResponse);
// };

const api = {
  getItemList,
  addItem,
  deleteItem,
  // createItem,
  // login,
};

export default api;
