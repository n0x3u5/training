var users = [
  {
    "email" : "nox@gmail.com",
    "password" : "nox123"
  },
  {
    "email" : "ayan@gmail.com",
    "password" : "ayan123"
  },
  {
    "email" : "prerna@gmail.com",
    "password" : "prerna123"
  }
];

var submitBtn = document.querySelector('#submit-team');
var loginBtn = document.querySelector('#login-btn');
var signupBtn = document.querySelector('#signup-btn');

window.onload = function() {
  if (checkLogin()) {
    createLogout();
  }
};

submitBtn.addEventListener("click", function onClick(event) {
  event.preventDefault();
  if (checkLogin()) {

  } else {
    createLogin();
  }
  // $(".card-panel").fadeOut();
});
loginBtn.addEventListener("click", function onClick(event) {
  event.preventDefault();
  var inputEmail = document.getElementById('loginEmail').value;
  var inputPass = document.getElementById('loginPassword').value;
  console.log(inputEmail + " , " + inputPass);
  if(isValidUser(inputEmail, inputPass)) {
    localStorage.setItem('userEmail', inputEmail);
    localStorage.setItem('isLoggedIn', true);
    createLogout();
    console.log("Is valid email and password!");
  } else {
    alert("Invalid user detected. You shall be exterminated.");
  }
});
signupBtn.addEventListener("click", function onClick(event) {
  event.preventDefault();
  var inputEmail = document.getElementById('signupEmail').value;
  var inputPass = document.getElementById('signupPassword').value;
  var inputPassConf = document.getElementById('signupPasswordConf').value;
});

var checkLogin = function() {
  console.log(localStorage.getItem("isLoggedIn"));
  if(localStorage.getItem("isLoggedIn") === "false") {
    console.log("No one is logged in.");
    return false;
  } else {
    console.log("Someone is logged in.");
    return true;
  }
};
var logoutUser = function() {
  event.preventDefault();
  localStorage.setItem('isLoggedIn', false);
  var logoutA = document.getElementById('logout-anchor');
  logoutA.parentNode.removeChild(logoutA);
  Materialize.toast("You have been logged out!", 4000);
};

var createLogout = function() {
  var navUl = document.getElementById('screen-nav');
  var newLi = document.createElement("li");
  var newA = document.createElement("a");
  newA.appendChild(document.createTextNode("Logout"));
  newA.setAttribute("href", "#");
  newA.setAttribute("id", "logout-anchor");
  newLi.appendChild(newA);
  navUl.appendChild(newLi);
  newA.addEventListener('click', logoutUser);
};
var createLogin = function() {
  $('#loginModal').openModal({
    ready: function() { $('ul.tabs').tabs('select_tab', 'login-tab'); }
  });
};

var isValidPassword = function(inputPass) {

};

var isValidUser = function(inputEmail, inputPass) {
  for (var user in users) {
    if (inputEmail === users[user].email && inputPass === users[user].password) {
      return true;
    } else if(user === users.length - 1) {
      return false;
    } else {
      return false;
    }
  }
};
