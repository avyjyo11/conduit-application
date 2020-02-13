const token = window.localStorage.getItem("token");

function get(url) {
  let data = fetch(url)
    .then(res => res.json())
    .catch(err => console.log("connection error > ", err));
}

function post(url, data) {
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "appication/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}
