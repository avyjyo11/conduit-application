import { API_BASE_URL as baseUrl } from "../constants/url.config";
const token = window.localStorage.getItem("token");

export function get(endPoint) {
  return fetch(baseUrl + endPoint)
    .then(res => {
      if (!res.ok) throw res;
      return res.json();
    })
    .catch(err => {
      throw err;
    });
}

export function getwithauth(endPoint) {
  return fetch(baseUrl + endPoint, {
    method: "GET",
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

export function post(endPoint, data) {
  return fetch(baseUrl + endPoint, {
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

export function postwithoutAuth(endPoint, data) {
  return fetch(baseUrl+endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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

export function put(endPoint, data) {
  return fetch(baseUrl + endPoint, {
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

export function del(endPoint) {
  return fetch(baseUrl + endPoint, {
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
