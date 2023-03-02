const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username and password are correct
  if (username === ("myusername","Lakshitha") && password === ("mypassword","Sandaru680")) {
    
    // Redirect to the home page
    window.location.href = "home.html";
  } 
  
  else {
    alert("Incorrect username or password");
  }
});
