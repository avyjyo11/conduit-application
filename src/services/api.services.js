import { API_BASE_URL } from "../constants/url.config";
import { getToken } from "./storage.services";
const token = getToken();

export function get(endPoint) {
  return fetch(API_BASE_URL + endPoint)
    .then(res => {
      if (!res.ok) throw res.json();
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function getwithauth(endPoint) {
  return fetch(API_BASE_URL + endPoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "appication/json",
      Authorization: `Token ${token}`
    }
  })
    .then(res => {
      if (!res.ok) throw res.json();
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function post(endPoint, data) {
  return fetch(API_BASE_URL + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "appication/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) throw res.json();
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function postwithoutAuth(endPoint, data) {
  return fetch(API_BASE_URL + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) throw res.json();
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function put(endPoint, data) {
  return fetch(API_BASE_URL + endPoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "appication/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) throw res.json();
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function del(endPoint) {
  return fetch(API_BASE_URL + endPoint, {
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
