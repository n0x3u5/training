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
submitBtn.addEventListener("click", function onClick(event) {
  event.preventDefault();
  checkLogin();
  // $(".card-panel").fadeOut();
});
loginBtn.addEventListener("click", function onClick(event) {
  event.preventDefault();
  var inputEmail = document.getElementById('email').value;
  var inputPass = document.getElementById('password').value;
    if(isValidPassword(inputPass) && isValidUser(inputEmail, inputPass)) {
      localStorage.setItem('userEmail', inputEmail);
      localStorage.setItem('isLoggedIn', true);
      checkLogin();
      console.log("Is valid email and password!");
    } else {
      alert("Invalid user detected. You shall be exterminated.");
    }
});
var checkLogin = function() {
  if(!localStorage.getItem("isLoggedIn")) {
    console.log("No one is logged in.");
    $('#loginModal').openModal({
      ready: function() { $('ul.tabs').tabs('select_tab', 'login-tab'); }
    });
  } else {
    alert("Now you'll see the magic!");
  }
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
