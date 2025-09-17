const submit = document.getElementById("submitBtn");
const form = document.querySelector("#surveyForm");
const formFeedBackP1 = document.getElementById("p1");
const formFeedBackP2 = document.getElementById("p2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = e.target.name.value;
  {
    if (nameVal.trim() === "") {
      formFeedBackP1.innerHTML = "Name is required.";
    } else {
      formFeedBackP1.innerHTML = "";
    }
  }

  const emailField = document.getElementById("email");
  const emailPattern = /\S+@\S+\.\S+/;

  if (!emailPattern.test(emailField.value.trim())) {
    formFeedBackP2.textContent = "Please enter a valid email address.";
  } else {
    formFeedBackP2.textContent = "";
  }

  const resultsDiv = document.getElementById("results");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const satisfaction = document.getElementById("Satisfaction").value;
  const recommend =
    document.querySelector('input[name="recommend"]:checked')?.value ||
    "Not specified";
  const comments = document.getElementById("Comments").value;

  resultsDiv.innerHTML = `
<h3> Submision summary</h3>
<P> <strong>Name:</strong>${name}</p>
<P> <strong>Email:</strong>${email}</p>
<P> <strong>Satisfaction:</strong>${satisfaction}</p>
<P> <strong>Recommendation:</strong>${recommend}</p>
<P> <strong>Comments:</strong>${comments}</p>
`;

  form.reset();
});
