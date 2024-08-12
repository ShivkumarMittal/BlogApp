// authenticate or isLogged in or not
// if in local storage token available => loggedIn true otherwise false
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data == null) {
    // data null means user is not logged in
    return false;
  } else {
    return true;
  }
};

// **********************************************************************************************

// do login
// store data to localstorage
export const doLogin = (data, next) => {
  // localstorage me string data store hota hai
  localStorage.setItem("data", JSON.stringify(data));
  // use callback because of after login what to do
  next();
};

// ************************************************************************************************

// do logout
// romove from localstorage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  // use for redirect
  next();
};

// **********************************************************************************************

// get currentuser
export const getCurrentUser = () => {
  if (isLoggedIn()) {
    // convert to object
    // .user use because no need to return token
    return JSON.parse(localStorage.getItem("data")).user;
  } else {
    return undefined;
  }
};

// **********************************************************************************************
// get current user id
export const getCurrentUserId = () => {
  if (getCurrentUser()) {
    return JSON.parse(localStorage.getItem("data")).user.id;
  } else {
    return -100;
  }
};

// **********************************Method to get token**********************************

export const getToken = () => {
  if (isLoggedIn) {
    return JSON.parse(localStorage.getItem("data")).token;
  } else {
    return null;
  }
};

// **********************************Method to check token expire or not****************************
export const isTokenExpire = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const expirationTimeString = data ? data.expirationTime : null;
  if (expirationTimeString) {
    // Convert the expiration time string to a Date object
    const expirationTime = new Date(expirationTimeString);

    // Get current time in milliseconds
    const currentTime = new Date().getTime();

    // Get expiration time in milliseconds
    const expirationTimeMillis = expirationTime.getTime();

    // Check if the token is expired
    if (currentTime > expirationTimeMillis) {
      console.log("Token has expired.");
      return true;
    } else {
      console.log("Token is still valid.");
      return false;
    }
  } else {
    console.log("No expiration time found in localStorage.");
  }
};
