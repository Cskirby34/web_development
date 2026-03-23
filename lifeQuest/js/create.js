function checkForm() {
   const username = document.getElementById("username");
   const email = document.getElementById("email");
   const password = document.getElementById("password");

   const errors = [];

   username.classList.remove("error");
   password.classList.remove("error");

   if (username.value.length < 1) {
      errors.push("Missing username.");
      username.classList.add("error");
   }

   if (password.value.length < 1) {
      errors.push("Missing password.");
      password.classList.add("error");
   }
   if (email.value.length < 1) {
      errors.push("Missing email.");
      password.classList.add("error");
   }

   if (errors.length > 0) {
      let errorDiv = document.getElementById("formErrors");

      if (!errorDiv) {
         errorDiv = document.createElement("div");
         errorDiv.id = "formErrors";
         errorDiv.style.color = "red";
         document.querySelector(".login-box").appendChild(errorDiv);
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
