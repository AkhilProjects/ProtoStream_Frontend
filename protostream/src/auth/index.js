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

export const allHackathons = async () =>{
  console.log("api:",API);
   await fetch(`${API}/hackathon/allHackathons`,{
    method:"GET",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    },
  
  })
  .then((response) =>{
    var a = response.json()
    console.log(a);
    return a;
  })
  .catch(err => console.error(err));
} 




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
export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/logout`, {
      method: "GET",
    })
      .then((response) => console.log("signout success"))
      .catch((err) => console.log(err));
  }
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
    console.log(JSON.parse(localStorage.getItem("jwt")));
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    console.log("inside false error!!");
    return false;
  }
};
