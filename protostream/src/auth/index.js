const { API } = require("../backend");

export const signup = (user) => {
  console.log(user);
  return fetch(`${API}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signin = (user) => {
  console.log("inside signin route");

  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("error>>>>>>>", error);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    console.log("jwt not found");
    return false;
  }

  if (localStorage.getItem("jwt")) {
    console.log("inside jwt");
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    console.log("inside false error!!");
    return false;
  }
};
