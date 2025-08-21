const userIdInput = document.getElementById('userId');
const userIdSVG = document.getElementById('lock');

userIdInput.addEventListener('input', function() {
  if (userIdInput.value.trim() === "") {
    userIdSVG.classList.remove('green');
    userIdSVG.classList.add('red');
  } else {
    userIdSVG.classList.remove('red');
    userIdSVG.classList.add('green');
  }
});

function validateFirstName() {
  const firstNameInput = document.getElementById("firstName");
  const firstName = firstNameInput.value.trim();
  const nameRegex = /^[A-Za-z]+$/;
      
  if (firstName === "" || !nameRegex.test(firstName)) {
    firstNameInput.classList.add("invalid");
  } else {
    firstNameInput.classList.remove("invalid");
  }
}

function validateLastName() {
  const lastNameInput = document.getElementById("lastName");
  const lastName = lastNameInput.value.trim();
  const nameRegex = /^[A-Za-z]+$/;

  if (lastName === "" || !nameRegex.test(lastName)) {
    lastNameInput.classList.add("invalid");
  } else {
    lastNameInput.classList.remove("invalid");
  }
}

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

firstNameInput.addEventListener("blur", validateFirstName);
lastNameInput.addEventListener("blur", validateLastName);

const input = document.querySelector(".email-input");
const emailIcon = document.querySelector(".email-icon");

input.addEventListener("keyup", () => {
  const pattern = /^[^ ]+@[^ ]+\.[a-zA-Z]{2,3}$/; 
  if (input.value === "") {
    emailIcon.classList.replace("uil-check-circle-check", "uil-envelope-alt");
    emailIcon.style.color = "#b4b4b4";
  } else if (input.value.match(pattern)) {
    emailIcon.classList.replace("uil-envelope-alt", "uil-check-circle-check");
    emailIcon.style.color = "#4bb543";
  } else {
    emailIcon.classList.replace("uil-check-circle-check", "uil-envelope-alt");
    emailIcon.style.color = "#de0611";
  }
});

const phoneNumberInput = document.getElementById('phoneNumber');
const phoneSVG = document.getElementById('Layer_1');

phoneNumberInput.addEventListener('input', function() {
  const phoneNumber = phoneNumberInput.value;

  if (/^0\d{9}$/.test(phoneNumber)) {
    phoneSVG.classList.remove('red');
    phoneSVG.classList.add('green');
  } else {
    phoneSVG.classList.remove('green');
    phoneSVG.classList.add('red');
  }
});

function validateForm(event) {
  event.preventDefault();

  validateFirstName();
  validateLastName();


        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert("First name and last name must contain letters only.");
    return;
  }


  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const emailRegex = /^[^ ]+@[^ ]+\.[a-zA-Z]{2,3}$/; 
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const phoneNumber = phoneNumberInput.value;
  const phoneRegex = /^0\d{9}$/;
  if (!phoneRegex.test(phoneNumber)) {
    alert("Please enter a valid phone number starting with 0 and containing only 10 digits.");
    return;
  }


  const summary = `
    First Name: ${firstNameInput.value}
    Last Name: ${lastNameInput.value}
    Email: ${email}
    User ID: ${userIdInput.value}
    Country: ${document.getElementById("country").value}
    State: ${document.getElementById("state").value}
    City: ${document.getElementById("city").value}
    Phone Number: ${phoneNumber}
    Reference Code: ${document.getElementById("referenceCode").value}
  `;
  alert(summary);
}

document.getElementById("registrationForm").addEventListener("submit", validateForm);

const inputElements = document.querySelectorAll(".container input");

inputElements.forEach((input) => {
  const label = input.parentElement.querySelector("label");

  input.addEventListener("focus", () => {
    label.classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      label.classList.remove("active");
    }
  });
});

function resetForm() {
  document.getElementById("registrationForm").reset();
}

function handleFileInput(event) {
  const file = event.target.files[0];

  if (file) {
    const fileSize = file.size;
    const fileSizeInKB = fileSize / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
      <p>File Name: ${file.name}</p>
      <p>File Size: ${fileSizeInKB.toFixed(2)} KB</p>
      <p>File Size: ${fileSizeInMB.toFixed(2)} MB</p>
    `;
  } else {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '<p>No file selected.</p>';
  }
}
  document.getElementById("registrationForm").addEventListener("submit", validateForm);