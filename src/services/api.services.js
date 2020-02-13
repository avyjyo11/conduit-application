import { API_BASE_URL as baseUrl } from "../constants/url.config";
const token = window.localStorage.getItem("token");

export function get(url) {
  return fetch(baseUrl + url)
    .then(res => {
      if (!res.ok) throw res;
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "appication/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) throw res;
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function put(url, data) {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "appication/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) throw res;
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function del(url) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "appication/json",
      Authorization: `Token ${token}`
    }
  })
    .then(res => {
      if (!res.ok) throw res;
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}
