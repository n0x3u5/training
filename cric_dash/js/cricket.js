// var users = [
//   {
//     "email" : "nox@gmail.com",
//     "password" : "nox123"
//   },
//   {
//     "email" : "ayan@gmail.com",
//     "password" : "ayan123"
//   },
//   {
//     "email" : "prerna@gmail.com",
//     "password" : "prerna123"
//   }
// ];

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
  var emailField = document.getElementById('loginEmail');
  var inputEmail = emailField.value;
  var passwordField = document.getElementById('loginPassword');
  var inputPass = passwordField.value;
  var passwordRow = document.getElementById("passwordField");
  var emailRow = document.getElementById("emailField");
  var errorP = document.getElementsByClassName("error");
  console.log(inputEmail + " , " + inputPass);
  if(inputEmail !== "" && inputPass !== "") {
    if(inputEmail.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi)) {
      if(isValidUser(inputEmail, inputPass)) {
        localStorage.setItem('userEmail', inputEmail);
        localStorage.setItem('isLoggedIn', true);
        createLogout();
        $("#loginModal").closeModal();
        Materialize.toast("You're logged in!", 4000);
      } else {
        createValidationError(passwordRow, "Username and password combination is invalid.");
      }
    } else {
      removeValidationError(emailRow);
      createValidationError(emailRow, "Please enter a valid email");
      console.log("Not a valid email ID.");
      emailField.addEventListener("keydown", function onkeydown(event) {
        removeValidationError(emailRow);
      });
    }
  } else {
    createValidationError(passwordRow, "Both the username and the password fields are required.");
  }
});
signupBtn.addEventListener("click", function onClick(event) {
  event.preventDefault();
  var inputEmail = document.getElementById('signupEmail').value;
  var inputPass = document.getElementById('signupPassword').value;
  var inputPassConf = document.getElementById('signupPasswordConf').value;
  if (inputPass.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)) {
    if (inputPass === inputPassConf) {
      var user = new User(inputEmail, inputPass);
      createParsedUsers();
      parsedUsers.push(user);
      localStorage.setItem("users", JSON.stringify(parsedUsers));
    } else {
      alert("Password mismatch!");
    }
  } else {
    alert("The password must contain a minimum of 8 characters, a letter and a number!");
  }
});

var User = function(email, password) {
  this.email = email;
  this.password = password;
};

var checkLogin = function() {
  console.log(localStorage.getItem("isLoggedIn"));
  if(localStorage.getItem("isLoggedIn") === "false" || !localStorage.getItem("isLoggedIn")) {
    console.log("No one is logged in.");
    return false;
  } else {
    console.log("Someone is logged in.");
    return true;
  }
};

var createValidationError = function(field, message) {
  if(field.contains(document.getElementsByClassName("error")[0])) {
    removeValidationError(field);
  }
  var newP = document.createElement("p");
  newP.appendChild(document.createTextNode(message));
  newP.setAttribute("class", "error");
  field.appendChild(newP);
};
var removeValidationError = function(field) {
  var errors = document.getElementsByClassName('error');
  console.log(errors);
  if (errors[0]) {
    try {
      field.removeChild(errors[0]);
    } catch(e) {}
  }
}

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
  var loginForm = document.getElementById('login-form');
  var signupForm = document.getElementById('signup-form');
  loginForm.reset();
  signupForm.reset();
  $('#loginModal').openModal({
    ready: function() { $('ul.tabs').tabs('select_tab', 'login-tab'); }
  });
};

var logoutUser = function() {
  event.preventDefault();
  localStorage.setItem('isLoggedIn', false);
  localStorage.setItem('userEmail', "");
  var logoutA = document.getElementById('logout-anchor');
  logoutA.parentNode.removeChild(logoutA);
  Materialize.toast("You have been logged out!", 4000);
};

var isValidUser = function(inputEmail, inputPass) {
  createParsedUsers();
  for (var parsedUser in parsedUsers) {
    if (inputEmail === parsedUsers[parsedUser].email && inputPass === parsedUsers[parsedUser].password) {
      return true;
    } else if(parsedUser === parsedUsers.length - 1) {
      return false;
    }
  }
};

var createParsedUsers = function() {
  parsedUsers = JSON.parse(localStorage.getItem("users"));
  if (parsedUsers === null) {
    var users=[];
    localStorage.setItem("users", JSON.stringify(users));
    parsedUsers = JSON.parse(localStorage.getItem("users"));
  }
};

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}
