function checkForm() {
   const username = document.getElementById("username");
   const email = document.getElementById("email");
   const password = document.getElementById("password");
   const confirmPassword = document.getElementById("confirmPassword");

   const errors = [];

   username.classList.remove("error");
   email.classList.remove("error");
   password.classList.remove("error");
   confirmPassword.classList.remove("error");

   if (username.value.length < 1) {
      errors.push("Missing username.");
      username.classList.add("error");
   }

   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!emailRegex.test(email.value)) {
      errors.push("Invalid or missing email address.");
      email.classList.add("error");  // fixed: was adding error to password
   }

   if (password.value.length < 10) {
      errors.push("Password must be at least 10 characters long.");
      password.classList.add("error");
   }

   if (password.value !== confirmPassword.value) {
      errors.push("Passwords don't match.");
      password.classList.add("error");
      confirmPassword.classList.add("error");
   }

   if (errors.length > 0) {
      let errorDiv = document.getElementById("formErrors");

      if (!errorDiv) {
         errorDiv = document.createElement("div");
         errorDiv.id = "formErrors";
         errorDiv.style.color = "red";
         document.querySelector(".create-box").appendChild(errorDiv);  
      }

      const listItems = errors.map(e => `<li>${e}</li>`).join("");
      errorDiv.innerHTML = `<ul>${listItems}</ul>`;
   } else {
      const errorDiv = document.getElementById("formErrors");
      if (errorDiv) errorDiv.innerHTML = "";
   }
}

document.querySelector("button[type='submit']").addEventListener("click", function(event) {
   event.preventDefault();
   checkForm();
});

function button1(){
   const password = document.getElementById("password");
   password.type = password.type === "password" ? "text" : "password";
}

function button2(){
   const confirmPassword = document.getElementById("confirmPassword");
   confirmPassword.type = confirmPassword.type === "password" ? "text" : "password";
}