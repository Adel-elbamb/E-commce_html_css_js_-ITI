// Change name and logout of user
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let userName = document.getElementById("userName");

var users = JSON.parse(localStorage.getItem("users")) || [];
var loggedInUser = users.find(user => user.isLogin === true);

if (loggedInUser) {
    loginButton.style.display = "none"; // Hide login button
    logoutButton.style.display = "block"; // Show logout button
    userName.innerHTML = `${loggedInUser.name}`; // Display user's name
}

function logout(event) {
    event.preventDefault(); // Prevent default anchor behavior
    if (loggedInUser) {
        loggedInUser.isLogin = false;
        localStorage.setItem("users", JSON.stringify(users));
        logoutButton.style.display = "none";
        loginButton.style.display = "block"; // Show login button
        userName.innerHTML = ""; // Clear user's name
        alert("Logged out successfully!");
        window.location.reload(); // Refresh the page
    }
}

logoutButton.addEventListener("click", logout);
