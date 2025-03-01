
// =============================Register ===============================================
let buttonRegister = document.getElementById("buttonRegister");
let users = JSON.parse(localStorage.getItem("users")) || [];
function register(event) {
    if (event) {
        event.preventDefault(); // Prevent form submission
    }

    
    let name = document.getElementById("nameRegister").value.trim();
    let email = document.getElementById("emailRegister").value.trim();
    let password = document.getElementById("passwordRegister").value;
    let confirmPassword = document.getElementById("confirmRegister").value;

    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;


    let error = document.getElementById("erorrRegister");
    let errorReg = document.getElementsByClassName("error");

    for (let i = 0; i < errorReg.length; i++) {
        errorReg[i].innerHTML = "";
    }

    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
        error.innerHTML = "Please fill in all fields.";
        return;
    }

    // name
    if (name.length < 3) {
        errorReg[0].innerHTML = "Name must be at least 3 characters long.";
        return;
    }

    // email
    if (!emailRegex.test(email)) {
        errorReg[1].innerHTML = "Invalid email format. Example: user@example.com";
        return;
    }

    //password 
    if (!passwordRegex.test(password)) {
        errorReg[2].innerHTML = "Password must be at least 8 characters, contain 1 uppercase letter, 1 number, and 1 special character.";
        return;
    }

    // Password Match
    if (password !== confirmPassword) {
        errorReg[3].innerHTML = "Passwords do not match.";
        return;
    }

    //
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        // alert("Email already registered. Try logging in.");
        error.innerHTML = "Email already registered. Try logging in.";
        return;
    }

    // Save new user
    let newUser = { name, email, password ,isLogin:false};
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // Save to localStorage

    // Show success message
    alert("Registration successful! You can now log in.");

    // Clear input fields
    document.getElementById("nameRegister").value = "";
    document.getElementById("emailRegister").value = "";
    document.getElementById("passwordRegister").value = "";
    document.getElementById("confirmRegister").value = "";

    // Redirect to login page
    setTimeout(() => {
        window.location.href = "./login.html"; 
    }, 500);
}

buttonRegister.addEventListener("click", register);

// =======================login ====================================

let loginButton = document.querySelector("#pills-login button[type='submit']");
function login(event) {
    event.preventDefault(); 
    // Get inputs
    let emailInput = document.querySelector("#pills-login input[type='email']").value.trim();
    let passwordInput = document.querySelector("#pills-login input[type='password']").value;
    let errorLogin = document.getElementsByClassName("errorLogin")
    // ======================== localStorage ===== =====================
    let users = JSON.parse(localStorage.getItem("users")) || [];
     // Clear previous error messages
     for (let i = 0; i < errorLogin.length; i++) {
        errorLogin[i].innerHTML = "";
    }

    // Find user
    let user = users.find(user => user.email === emailInput && user.password === passwordInput);
         console.log(user)
           
        
    if (!emailInput || !passwordInput) {
        errorLogin[0].innerHTML="Please enter your email and password."
        errorLogin[1].innerHTML="Please enter your email and password."
        return;
    }

    if (user) {
       user.isLogin = true;
       localStorage.setItem("users", JSON.stringify(users));
        alert("Login successful! Redirecting...");
        setTimeout(() => {
            window.location.href = "./index.html"; // Change to your dashboard page
        }, 500);
    } else {
         errorLogin[2].innerHTML="Invalid email or password. Please try again."
        // alert("Invalid email or password. Please try again.");
    }
}

// Attach event listener to Login button
loginButton.addEventListener("click", login);
