function validateForm() {
    let isValid = true;
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("courseError").textContent = "";

  const name = document.getElementById("name").value;
 
  const email = document.getElementById("email").value;
 
  const password = document.getElementById("password").value;
 
  const course = document.getElementById("course").value;
  
  if (!name) {
    document.getElementById("nameError").textContent = "Your name can't be empty.";
    isValid = false;
  } else if (/\d/.test(name)) {
    document.getElementById("nameError").textContent = "Your name can't contain numbers.";
    isValid = false;
  }
  if (!email) {
    document.getElementById("emailError").textContent = "Your email can't be empty.";
    isValid = false;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Your email can't has to contain '@'.";
    isValid = false;
  }
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Your password has to be at least 6 characters.";
    isValid = false;
  }
  if (!course) {
    document.getElementById("courseError").textContent = "Your have to select a course.";
    isValid = false;
  }

  if (isValid) {
    alert("The form is submitted!");
  }
}