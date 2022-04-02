//   --------------------- First Name Start -----------------------------------------------
let RegisterFirstNameInput = document.getElementById(
  "RegisterFirstNameInput"
);
let RegisterFirstNameAlert = document.getElementById(
  "RegisterFirstNameAlert"
);
let RegisterFirstNameRequired = document.getElementById(
  "RegisterFirstNameRequired"
);
let RegisterFirstNameFlag = false;
RegisterFirstNameInput.addEventListener("focus", (event) => {
  RegisterFirstNameInput.placeholder = "Enter First Name";
  if (RegisterFirstNameFlag === false) {
    RegisterFirstNameAlert.style.color = "#087cdd";
    RegisterFirstNameInput.style.borderBottom = "#087cdd solid";
  }
  RegisterFirstNameFlag = true;
  RegisterFirstNameAlert.style.visibility = "visible";
});
RegisterFirstNameInput.addEventListener("focusout", (event) => {
  if (RegisterFirstNameFlag && RegisterFirstNameInput.value === "") {
    RegisterFirstNameInput.style.borderBottom = "#f44336 solid";
    RegisterFirstNameAlert.style.color = "#f44336";
    RegisterFirstNameRequired.style.visibility = "visible";
    RegisterFirstNameRequired.style.color = "#f44336";
  } else {
    RegisterFirstNameInput.style.borderBottom = "black solid";
    RegisterFirstNameInput.style.color = "black";
  }
  RegisterFirstNameInput.placeholder = "First Name*";
});
RegisterFirstNameInput.addEventListener("keypress", (event) => {
  if (RegisterFirstNameFlag && RegisterFirstNameInput.value.length < 0) {
    RegisterFirstNameInput.style.borderBottom = "#f44336 solid";
    RegisterFirstNameInput.style.color = "#f44336";
    RegisterFirstNameAlert.style.color = "#f44336";
  } else {
    RegisterFirstNameAlert.style.color = "#087cdd";
    RegisterFirstNameInput.style.color = "black";
    RegisterFirstNameInput.style.borderBottom = "black solid";
    RegisterFirstNameRequired.style.visibility = "hidden";
  }
});
//   ---------------------------First Name End------------------------------------
//   --------------------- Last Name Start -----------------------------------------------
let RegisterLastNameInput = document.getElementById("RegisterLastNameInput");
let RegisterLastNameAlert = document.getElementById("RegisterLastNameAlert");
let RegisterLastNameRequired = document.getElementById(
  "RegisterLastNameRequired"
);
let RegisterLastNameFlag = false;
RegisterLastNameInput.addEventListener("focus", (event) => {
  RegisterLastNameInput.placeholder = "Enter Last Name";
  if (RegisterLastNameFlag === false) {
    RegisterLastNameAlert.style.color = "#087cdd";
    RegisterLastNameInput.style.borderBottom = "#087cdd solid";
  }
  RegisterLastNameFlag = true;
  RegisterLastNameAlert.style.visibility = "visible";
});
RegisterLastNameInput.addEventListener("focusout", (event) => {
  if (RegisterLastNameFlag && RegisterLastNameInput.value === "") {
    RegisterLastNameInput.style.borderBottom = "#f44336 solid";
    RegisterLastNameInput.style.webkitInputPlaceholder = "#f44336";
    RegisterLastNameAlert.style.color = "#f44336";
    RegisterLastNameRequired.style.visibility = "visible";
    RegisterLastNameRequired.style.color = "#f44336";
  } else {
    RegisterLastNameInput.style.borderBottom = "black solid";
    RegisterLastNameInput.style.color = "black";
  }
  RegisterLastNameInput.placeholder = "Last Name*";
});
RegisterLastNameInput.addEventListener("keypress", (event) => {
  if (RegisterFirstNameFlag && RegisterLastNameInput.value.length < 0) {
    RegisterLastNameInput.style.borderBottom = "#f44336 solid";
    RegisterLastNameInput.style.color = "#f44336";
    RegisterLastNameAlert.style.color = "#f44336";
  } else {
    RegisterLastNameAlert.style.color = "#087cdd";
    RegisterLastNameInput.style.color = "black";
    RegisterLastNameInput.style.borderBottom = "black solid";
    RegisterLastNameRequired.style.visibility = "hidden";
  }
});
//   ---------------------------Last Name End------------------------------------
//   --------------------- Email Start -----------------------------------------------
let RegisterEmailInput = document.getElementById("RegisterEmailInput");
let RegisterEmailAlert = document.getElementById("RegisterEmailAlert");
let RegisterEmailRequired = document.getElementById("RegisterEmailRequired");
let RegisterEmailFlag = false;
RegisterEmailInput.addEventListener("focus", (event) => {
  RegisterEmailInput.placeholder = "Enter Email";
  if (RegisterEmailFlag === false) {
    RegisterEmailAlert.style.color = "#087cdd";
    RegisterEmailInput.style.borderBottom = "#087cdd solid";
  }
  RegisterEmailFlag = true;
  RegisterEmailAlert.style.visibility = "visible";
});
RegisterEmailInput.addEventListener("focusout", (event) => {
  if (RegisterEmailFlag && RegisterEmailInput.value === "") {
    RegisterEmailInput.style.borderBottom = "#f44336 solid";
    RegisterEmailInput.style.webkitInputPlaceholder = "#f44336";
    RegisterEmailAlert.style.color = "#f44336";
    RegisterEmailRequired.style.visibility = "visible";
    RegisterEmailRequired.style.color = "#f44336";
  } else {
    RegisterEmailInput.style.borderBottom = "black solid";
    RegisterEmailInput.style.color = "black";
  }
  RegisterEmailInput.placeholder = "Email*";
});
RegisterEmailInput.addEventListener("keypress", (event) => {
  if (RegisterEmailFlag && RegisterEmailInput.value.length < 0) {
    RegisterEmailInput.style.borderBottom = "#f44336 solid";
    RegisterEmailInput.style.color = "#f44336";
    RegisterEmailAlert.style.color = "#f44336";
  } else {
    RegisterEmailAlert.style.color = "#087cdd";
    RegisterEmailInput.style.color = "black";
    RegisterEmailInput.style.borderBottom = "black solid";
    RegisterEmailRequired.style.visibility = "hidden";
  }
});
//   ---------------------------Email End------------------------------------
//   --------------------- Password Start -----------------------------------------------
let RegisterPasswordInput = document.getElementById("RegisterPasswordInput");
let RegisterPasswordAlert = document.getElementById("RegisterPasswordAlert");
let RegisterPasswordRequired = document.getElementById(
  "RegisterPasswordRequired"
);
let RegisterPasswordFlag = false;
RegisterPasswordInput.addEventListener("focus", (event) => {
  RegisterPasswordInput.placeholder = "Enter Password";
  if (RegisterPasswordFlag === false) {
    RegisterPasswordAlert.style.color = "#087cdd";
    RegisterPasswordInput.style.borderBottom = "#087cdd solid";
  }
  RegisterPasswordFlag = true;
  RegisterPasswordAlert.style.visibility = "visible";
});
RegisterPasswordInput.addEventListener("focusout", (event) => {
  if (RegisterPasswordFlag && RegisterPasswordInput.value === "") {
    RegisterPasswordInput.style.borderBottom = "#f44336 solid";
    RegisterPasswordInput.style.webkitInputPlaceholder = "#f44336";
    RegisterPasswordAlert.style.color = "#f44336";
    RegisterPasswordRequired.style.visibility = "visible";
    RegisterPasswordRequired.style.color = "#f44336";
  } else {
    RegisterPasswordInput.style.borderBottom = "black solid";
    RegisterPasswordInput.style.color = "black";
  }
  RegisterPasswordInput.placeholder = "Password*";
});
RegisterPasswordInput.addEventListener("keypress", (event) => {
  if (RegisterPasswordFlag && RegisterPasswordInput.value.length < 0) {
    RegisterPasswordInput.style.borderBottom = "#f44336 solid";
    RegisterPasswordInput.style.color = "#f44336";
    RegisterPasswordAlert.style.color = "#f44336";
  } else {
    RegisterPasswordAlert.style.color = "#087cdd";
    RegisterPasswordInput.style.color = "black";
    RegisterPasswordInput.style.borderBottom = "black solid";
    RegisterPasswordRequired.style.visibility = "hidden";
  }
});
//   ---------------------------Password End------------------------------------
//   --------------------- Number Start -----------------------------------------------
let RegisterNumberInput = document.getElementById("RegisterNumberInput");
let RegisterNumberAlert = document.getElementById("RegisterNumberAlert");
let RegisterNumberRequired = document.getElementById(
  "RegisterNumberRequired"
);
let RegisterNumberFlag = false;
RegisterNumberInput.addEventListener("focus", (event) => {
  RegisterNumberInput.placeholder = "Enter Password";
  if (RegisterNumberFlag === false) {
    RegisterNumberAlert.style.color = "#087cdd";
    RegisterNumberInput.style.borderBottom = "#087cdd solid";
  }
  RegisterNumberFlag = true;
  RegisterNumberAlert.style.visibility = "visible";
});
RegisterNumberInput.addEventListener("focusout", (event) => {
  if (RegisterNumberFlag && RegisterNumberInput.value === "") {
    RegisterNumberInput.style.borderBottom = "#f44336 solid";
    RegisterNumberInput.style.webkitInputPlaceholder = "#f44336";
    RegisterNumberAlert.style.color = "#f44336";
    RegisterNumberRequired.style.visibility = "visible";
    RegisterNumberRequired.style.color = "#f44336";
  } else {
    RegisterNumberInput.style.borderBottom = "black solid";
    RegisterNumberInput.style.color = "black";
  }
  RegisterNumberInput.placeholder = "Password*";
});
RegisterNumberInput.addEventListener("keypress", (event) => {
  if (RegisterNumberFlag && RegisterNumberInput.value.length < 0) {
    RegisterNumberInput.style.borderBottom = "#f44336 solid";
    RegisterNumberInput.style.color = "#f44336";
    RegisterNumberAlert.style.color = "#f44336";
  } else {
    RegisterNumberAlert.style.color = "#087cdd";
    RegisterNumberInput.style.color = "black";
    RegisterNumberInput.style.borderBottom = "black solid";
    RegisterNumberRequired.style.visibility = "hidden";
  }
});
//   ---------------------------Number End------------------------------------
//   --------------------- City Start -----------------------------------------------
let RegisterCityInput = document.getElementById("RegisterCityInput");
let RegisterCityDiv = document.getElementById("RegisterCityDiv");
let RegisterCityRequired = document.getElementById("RegisterCityRequired");
let RegisterCityName = document.getElementById("RegisterCityName");
//   let RegisterCityNameHiddenDiv = document.querySelector(
//     "#RegisterCityName>div"
//   );
//   RegisterCityNameHiddenDiv.addEventListener("click", (event) => {
//     console.log(RegisterCityNameHiddenDiv);
//   });
let RegisterCityFlag = false;
RegisterCityInput.addEventListener("focus", (event) => {
  RegisterCityName.style.display = "block";
  RegisterCityDiv.style.borderBottom = "#087cdd solid";
  RegisterCityFlag = true;
});
RegisterCityInput.addEventListener("focusout", (event) => {
  if (RegisterCityFlag && RegisterCityInput.value === "") {
    RegisterCityRequired.style.visibility = "visible";
    RegisterCityRequired.style.color = "#f44336";
  } else {
    RegisterCityDiv.style.color = "black";
  }
  RegisterCityDiv.style.borderBottom = "black solid";
  // RegisterCityName.style.display = "none";
});
RegisterCityInput.addEventListener("keypress", (event) => {
  if (RegisterCityFlag && RegisterCityInput.value.length < 0) {
    RegisterCityInput.style.color = "#f44336";
  } else {
    RegisterCityInput.style.color = "black";
    RegisterCityDiv.style.borderBottom = "black solid";
    RegisterCityRequired.style.visibility = "hidden";
  }
});
import { citiesData } from "./CitiesData.js"
let RegisterCityData = citiesData()
RegisterCityData.forEach((el) => {
  let div = document.createElement("div");
  div.addEventListener("click", (event) => {
    event.preventDefault();
    RegisterCityInput.value = el;
    RegisterCityRequired.style.visibility = "hidden";
    RegisterCityName.style.display = "none";
    RegisterCityDiv.style.borderBottom = "2px black solid";
  });
  div.innerText = el;
  RegisterCityName.append(div);
});
//   ---------------------------City End------------------------------------
//   --------------------- Preference Start -----------------------------------------------
let RegisterPreferenceInput = document.getElementById(
  "RegisterPreferenceInput"
);
let RegisterPreferenceDiv = document.getElementById("RegisterPreferenceDiv");
let RegisterPreferenceRequired = document.getElementById(
  "RegisterPreferenceRequired"
);
let RegisterPreference = document.getElementById("RegisterPreference");
let RegisterPreferenceData = [
  "Actuarial Science",
  "Admin",
  "Advertising",
  "Animation",
  "App Design and Development",
  "Architecture",
  "Boitech ans Medicine",
  "Branding",
  "Bussiness Development",
  "Ca Articalship",
  "Civil Engineering",
  "Client Servicing",
  "Consulting",
  "Content Writing",
  "Customer Relationship Management",
  "Digital Marketing",
  "Electrical Engineering",
  "Electronics Engineering",
  "Engineering",
  "Event Management",
  "Excel",
  "Fashion Designing",
  "Flim Making And Production",
  "Finance",
  "General Management",
  "Graphic Designing",
  "Human Resources",
  "Insurance",
  "Interior Designing",
  "IT And Computers",
  "Jewellery Designs",
  "Journalism",
  "Law",
  "Logistics",
  "Market Research",
  "Markrting",
  "Mechanical Engineering",
  "Operation",
  "Others",
];
RegisterPreferenceData.forEach((el) => {
  let div = document.createElement("div");
  div.addEventListener("click", (event) => {
    event.preventDefault();
    RegisterPreferenceInput.value = el;
    RegisterPreferenceRequired.style.visibility = "hidden";
    RegisterPreference.style.display = "none";
    RegisterPreferenceDiv.style.borderBottom = "2px black solid";
  });
  div.innerText = el;
  RegisterPreference.append(div);
});
let RegisterPreferenceFlag = false;
RegisterPreferenceInput.addEventListener("focus", (event) => {
  RegisterPreference.style.display = "block";
  RegisterPreferenceDiv.style.borderBottom = "#087cdd solid";
  RegisterPreferenceFlag = true;
});
RegisterPreferenceInput.addEventListener("focusout", (event) => {
  if (RegisterPreferenceFlag && RegisterPreferenceInput.value === "") {
    RegisterPreferenceRequired.style.visibility = "visible";
    RegisterPreferenceRequired.style.color = "#f44336";
  } else {
    RegisterPreferenceDiv.style.color = "black";
    //   RegisterPreferenceDiv.style.borderBottom = "black solid";
  }
  // RegisterPreference.style.display = "none";
});
RegisterPreferenceInput.addEventListener("keypress", (event) => {
  if (RegisterPreferenceFlag && RegisterPreferenceInput.value.length < 0) {
    RegisterPreferenceInput.style.color = "#f44336";
  } else {
    RegisterPreferenceInput.style.color = "black";
    RegisterPreferenceDiv.style.borderBottom = "black solid";
    RegisterPreferenceRequired.style.visibility = "hidden";
  }
});
//   ---------------------------Preference End------------------------------------
//   --------------------- FindUs Start -----------------------------------------------
let RegisterFindUsInput = document.getElementById("RegisterFindUsInput");
let RegisterFindUsDiv = document.getElementById("RegisterFindUsDiv");
let RegisterFindUsRequired = document.getElementById(
  "RegisterFindUsRequired"
);
let RegisterFindUs = document.getElementById("RegisterFindUs");
let RegisterFindUsData = [
  "From A Friend",
  "Google Search Result",
  "Google Ads",
  "Bing/Yahoo Search Result",
  "Social Media",
  "Others",
];
RegisterFindUsData.forEach((el) => {
  let div = document.createElement("div");
  div.addEventListener("click", (event) => {
    event.preventDefault();
    RegisterFindUsInput.value = el;
    RegisterFindUsRequired.style.visibility = "hidden";
    RegisterFindUs.style.display = "none";
    RegisterFindUsDiv.style.borderBottom = "2px black solid";
  });
  div.innerText = el;
  RegisterFindUs.append(div);
});
let RegisterFindUsFlag = false;
RegisterFindUsInput.addEventListener("focus", (event) => {
  RegisterFindUs.style.display = "block";
  RegisterFindUsDiv.style.borderBottom = "#087cdd solid";
  RegisterFindUsFlag = true;
});
RegisterFindUsInput.addEventListener("focusout", (event) => {
  if (RegisterFindUsFlag && RegisterFindUsInput.value === "") {
    RegisterFindUsRequired.style.visibility = "visible";
    RegisterFindUsRequired.style.color = "#f44336";
    RegisterFindUsDiv.style.borderBottom = "#f44336 solid";
  } else {
    RegisterFindUsDiv.style.borderBottom = "#087cdd solid";
    RegisterFindUsDiv.style.color = "black";
    RegisterFindUsRequired.style.visibility = "hidden";
  }
  // RegisterFindUsDiv.style.borderBottom = "black solid";
  // RegisterFindUs.style.display = "none";
});
RegisterFindUsInput.addEventListener("keypress", (event) => {
  if (RegisterFindUsFlag && RegisterFindUsInput.value.length < 0) {
    RegisterFindUsInput.style.color = "#f44336";
  } else {
    RegisterFindUsInput.style.color = "black";
    RegisterFindUsDiv.style.borderBottom = "black solid";
    RegisterFindUsRequired.style.visibility = "hidden";
  }
});
//   --------------------- FindUs End -----------------------------------------------
//   ---------------------------LookingFor Start------------------------------------
let RegisterLookingForInput = document.getElementById(
  "RegisterLookingForInput"
);
let RegisterLookingForDiv = document.getElementById("RegisterLookingForDiv");
let RegisterLookingForRequired = document.getElementById(
  "RegisterLookingForRequired"
);
let RegisterLookingFor = document.getElementById("RegisterLookingFor");
let RegisterLookingForData = ["Internships", "Jobs", "Both"];
RegisterLookingForData.forEach((el) => {
  let div = document.createElement("div");
  div.addEventListener("click", (event) => {
    event.preventDefault();
    RegisterLookingForInput.value = el;
    RegisterLookingForRequired.style.visibility = "hidden";
    RegisterLookingFor.style.display = "none";
    RegisterFindUsDiv.style.borderBottom = "2px black solid";
  });
  div.innerText = el;
  RegisterLookingFor.append(div);
});
let RegisterLookingForFlag = false;
RegisterLookingForInput.addEventListener("focus", (event) => {
  RegisterLookingFor.style.display = "block";
  RegisterLookingForDiv.style.borderBottom = "#087cdd solid";
  RegisterLookingForFlag = true;
});
RegisterLookingForInput.addEventListener("focusout", (event) => {
  if (RegisterLookingForFlag && RegisterLookingForInput.value === "") {
    RegisterLookingForRequired.style.visibility = "visible";
    RegisterLookingForDiv.style.borderBottom = "#f44336 solid";
    RegisterLookingForRequired.style.color = "#f44336";
  } else {
    RegisterLookingForDiv.style.borderBottom = "2px black solid";
    RegisterLookingForDiv.style.color = "black";
  }
  // RegisterLookingForDiv.style.borderBottom = "black solid";
  // RegisterLookingFor.style.display = "none";
});
RegisterLookingForInput.addEventListener("keypress", (event) => {
  if (RegisterLookingForFlag && RegisterLookingForInput.value.length < 0) {
    RegisterLookingForInput.style.color = "#f44336";
  } else {
    RegisterLookingForInput.style.color = "black";
    RegisterLookingForDiv.style.borderBottom = "black solid";
    RegisterLookingForRequired.style.visibility = "hidden";
  }
});
//   ---------------------------LookingFor End------------------------------------
let StudentLoginForm = document.getElementById("StudentLoginForm");
StudentLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let callData = JSON.parse(localStorage.getItem("StudentLoginData")) || [];
  console.log(callData);
  let data = {
    FirstName: RegisterFirstNameInput.value,
    LastName: RegisterLastNameInput.value,
    Email: RegisterEmailInput.value,
    Password: RegisterPasswordInput.value,
    Number: RegisterNumberInput.value,
    City: RegisterCityInput.value,
  };
  callData.push(data);
  localStorage.setItem("StudentLoginData", JSON.stringify(callData));
  window.location.href = "./LoginStudent.html"
});