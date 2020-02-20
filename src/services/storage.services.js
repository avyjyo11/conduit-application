export function getToken() {
  return window.localStorage.getItem("token");
}

export function getTokenState() {
  return window.localStorage.getItem("token") ? true : false;
}

export function setToken(token) {
  window.localStorage.setItem("token", token);
  return window.localStorage.getItem("token") ? true : false;
}

export function getUserID() {
  return window.localStorage.getItem("token");
}

export function setUserID(userid) {
  window.localStorage.setItem("userid", userid);
  return window.localStorage.getItem("userid") ? true : false;
}
