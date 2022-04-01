let OpenRegistrationPage = document.getElementById("OpenRegistrationPage");
  OpenRegistrationPage.addEventListener("click", () => {
    window.location.href = "./RegisterCandidate.html";
  });
  let LoginStudentHeading = document.getElementById("LoginStudentHeading");
  LoginStudentHeading.addEventListener("click", () => {
    window.location.href = "./LoginStudent.html";
  });
  let LoginCompanyHeading = document.getElementById("LoginCompanyHeading");
  LoginCompanyHeading.addEventListener("click", () => {
    window.location.href = "./LoginCompany.html";
  });
  //------------------------------------------------
  let EmailDiv = document.getElementById("EmailDiv");
  let EmailInput = document.getElementById("EmailInput");
  let EmailAlert = document.getElementById("EmailAlert");
  let EmailRequired = document.getElementById("EmailRequired");
  let EmailFlag = false;
  EmailInput.addEventListener("focus", (event) => {
    if (EmailFlag === false) {
      EmailAlert.style.color = "#087cdd";
      EmailInput.style.borderBottom = "#087cdd solid";
    }
    EmailFlag = true;
    EmailAlert.style.visibility = "visible";
  });
  EmailInput.addEventListener("focusout", (event) => {
    if (EmailFlag && EmailInput.value === "") {
      EmailInput.style.borderBottom = "#f44336 solid";
      EmailAlert.style.color = "#f44336";
      EmailRequired.style.visibility = "visible";
      EmailRequired.style.color = "#f44336";
    } else {
      EmailInput.style.borderBottom = "black solid";
      EmailInput.style.color = "black";
      EmailAlert.style.color = "#087cdd";
    }
  });
  EmailInput.addEventListener("keypress", (event) => {
    if (EmailFlag && EmailInput.value.length < 0) {
      EmailInput.style.borderBottom = "#f44336 solid";
      EmailInput.style.color = "#f44336";
      EmailAlert.style.color = "#f44336";
    } else {
      EmailInput.style.color = "black";
      EmailInput.style.borderBottom = "black solid";
      EmailRequired.style.visibility = "hidden";
      EmailAlert.style.color = "#087cdd";
    }
  });
  let PasswordDiv = document.getElementById("PasswordDiv");
  let PasswordInput = document.getElementById("PasswordInput");
  let PasswordAlert = document.getElementById("PasswordAlert");
  let PasswordRequired = document.getElementById("PasswordRequired");
  let PasswordFlag = false;
  PasswordInput.addEventListener("focus", (event) => {
    if (PasswordFlag === false) {
      PasswordAlert.style.color = "#087cdd";
      PasswordInput.style.borderBottom = "#087cdd solid";
    }
    PasswordFlag = true;
    PasswordAlert.style.visibility = "visible";
  });
  PasswordInput.addEventListener("focusout", (event) => {
    if (PasswordFlag && PasswordInput.value === "") {
      PasswordInput.style.borderBottom = "#f44336 solid";
      PasswordAlert.style.color = "#f44336";
      PasswordRequired.style.visibility = "visible";
      PasswordRequired.style.color = "#f44336";
    } else {
      PasswordInput.style.borderBottom = "black solid";
      PasswordInput.style.color = "black";
    }
  });
  PasswordInput.addEventListener("keypress", (event) => {
    if (PasswordFlag && PasswordInput.value.length < 0) {
      PasswordInput.style.borderBottom = "#f44336 solid";
      PasswordInput.style.color = "#f44336";
      PasswordAlert.style.color = "#f44336";
    } else {
      PasswordAlert.style.color = "#087cdd";
      PasswordInput.style.color = "black";
      PasswordInput.style.borderBottom = "black solid";
      PasswordRequired.style.visibility = "hidden";
    }
  });
  //------------------------------------------------
  let StudentLoginForm = document.getElementById("StudentLoginForm");
  StudentLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("StudentLoginData"));
    let CheckDataFlag = true;
    localStorage.setItem("Work", "ygiu");
    data.forEach((el) => {
      if (el.Email === EmailInput.value) {
        CheckDataFlag = false;
        if (el.Password === PasswordInput.value) {
          localStorage.setItem("SignInStatus", "Successful");
          localStorage.setItem("CurrentUser", JSON.stringify(el));
          window.location.href = "./index.html";
        } else {
          PasswordAlert.style.color = "#f44336";
          PasswordInput.style.borderBottom = "#f44336 solid";
        }
      } else if (el.Number === EmailInput.value) {
        CheckDataFlag = false;
        if (el.Password === PasswordInput.value) {
          localStorage.setItem("SignInStatus", "Successful");
          localStorage.setItem("CurrentUser", JSON.stringify(el));
          window.location.href = "./index.html";
        } else {
          PasswordAlert.style.color = "#f44336";
          PasswordInput.style.borderBottom = "#f44336 solid";
        }
      }
    });
    if (CheckDataFlag) {
      EmailInput.style.borderBottom = "#f44336 solid";
      EmailAlert.style.color = "#f44336";
    }
  });