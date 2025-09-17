
// Grab form elements
const surveyForm   = document.getElementById("surveyForm");
const feedback     = document.getElementById("formFeedback"); // for validation messages
const resultsArea  = document.createElement("div");  


/ Add the results area to the page (after the form)
document.body.appendChild(resultsArea);

surveyForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading


// Collect values
  const name         = document.getElementById("name").value.trim();
  const email        = document.getElementById("email").value.trim();
  const satisfaction = document.getElementById("Satisfaction").value;
  const recommendation = document.querySelector(



// Build the summary HTML
  resultsArea.innerHTML = `
    <h2>Submitted Data</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Satisfaction:</strong> ${satisfaction}</p>
    <p><strong>Recommendation:</strong> ${recommendation}</p>
    <p><strong>Comments:</strong> ${comments}</p>
  `;