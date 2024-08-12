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
export const getCurrentUserId = ()=>{
  if(getCurrentUser()){
    return JSON.parse(localStorage.getItem("data")).user.id;
  }
  else{
    return -100;
  }
}

// **********************************Method to get token**********************************

export const getToken = () => {
  if (isLoggedIn) {
    return JSON.parse(localStorage.getItem("data")).token;
  } else {
    return null;
  }
};
