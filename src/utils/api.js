import handleServerResponse from "../utils/utils";

const BASE_URL = "http://localhost:3001";

const getToken = () => localStorage.getItem("jwt");

const getItemList = () => {
  return fetch(`${BASE_URL}/items`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
};

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${BASE_URL}/items`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
};

const addCardLike = (id) => {
  return fetch(`${BASE_URL}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
};

const removeCardLike = (id) => {
  return fetch(`${BASE_URL}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(handleServerResponse);
};

const updateUser = (data, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
};

const api = {
  getItemList,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
  updateUser,
};

export default api;
