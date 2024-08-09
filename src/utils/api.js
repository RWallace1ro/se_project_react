import handleServerResponse from "../utils/utils";

const BASE_URL = "http://localhost:3001";

const getToken = () => localStorage.getItem("jwt");

function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

const getItemList = () => {
  return request(`${BASE_URL}/items`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  // .then(handleServerResponse);
};

const addItem = ({ name, weather, imageUrl }) => {
  return request(`${BASE_URL}/items`, {
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
  });
  // .then(handleServerResponse);
};

const deleteItem = (_id) => {
  return request(`${BASE_URL}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  // .then(handleServerResponse);
};

const addCardLike = (id) => {
  return request(`${BASE_URL}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  // .then(handleServerResponse);
};

const removeCardLike = (id) => {
  return request(`${BASE_URL}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  // .then(handleServerResponse);
};

const updateUser = (data, token) => {
  return request(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  // .then(handleServerResponse);
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
