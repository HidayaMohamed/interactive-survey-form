const submit = document.getElementById("submitBtn");
const form = document.querySelector("#surveyForm")
const formFeedBack = document.querySelector("#formFeedback");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameVal = e.target.name.value

    if (nameVal.trim() === "") {
      formFeedBack.innerHTML = "<p>Name is required.</p>";
    } else {
      formFeedBack.innerHTML = "";
    }

//   const nameField = document.getElementById("name");
//   nameField.addEventListener("input", () => {
    
//   });
  const emailField = document.getElementById("email");
  const emailPattern = /\s+@\s+\.\s+/;
  emailField.addEventListener("input", () => {
    if (!emailPattern.test(emailField.value.trim())) {
      formFeedBack, (textContent = "Please enter a valid email address.");
    } else {
      formFeedBack.textContent = "";
    }
  });
    
    console.log(nameVal)
});
