



function register(event) {
    // event.preventDefault(); // Prevent form submission

    const registerForm = document.querySelector("form");
    const nameInput = document.getElementById("nameRegister");
    const emailInput = document.getElementById("emailRegister");
    const passwordInput = document.getElementById("passwordRegister");
    const confirmPasswordInput = document.getElementById("confirmRegister");
    const termsCheckbox = document.getElementById("terms");
    const errorSpan = document.getElementById("erorrRegister");

    // Clear previous errors
    errorSpan.innerText = "";

    // Get user input
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
        errorSpan.innerText = "All fields are required.";
        return;
    }

    if (password.length < 6) {
        errorSpan.innerText = "Password must be at least 6 characters.";
        return;
    }

    if (password !== confirmPassword) {
        errorSpan.innerText = "Passwords do not match.";
        return;
    }

    if (!termsCheckbox.checked) {
        errorSpan.innerText = "You must agree to the terms.";
        return;
    }

    // Save user data to local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        errorSpan.innerText = "Email already registered.";
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to login page
    window.location.href = "./../index.html"; // Adjust the path as needed
}

// Add event listener to the form
const registerForm = document.querySelector("form");
registerForm.addEventListener("submit", register);
