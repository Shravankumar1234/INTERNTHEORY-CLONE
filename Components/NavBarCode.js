let NavBarcontainer = document.getElementById("NavBar");
  import { NavBar, Menu } from "./NavBarScript.js";
  NavBarcontainer.innerHTML = NavBar();
  let MenuContainer = document.getElementById("MenuContainer");
  MenuContainer.innerHTML = Menu();
  let MenuButton = document.getElementById("MenuButton");
  MenuButton.addEventListener("click", (event) => {
    event.preventDefault();
    MenuContainer.style.transform = "translateX(0px)";
  });
  let MenuButton2 = document.getElementById("MenuButton2");
  MenuButton2.addEventListener("click", (event) => {
    event.preventDefault();
    MenuContainer.style.transform = "translateX(-300px)";
  });
  let NavBarSignIN = document.getElementById('NavBarSignIN');
  NavBarSignIN.addEventListener("click", () => {
    window.location.href = "./LoginStudent.html";
  });
// -------------------------- Catch Div Start -----------------------------
let NavBarBell = document.getElementById('NavBarBell');
let NavBarProfile = document.getElementById('NavBarProfile');
let MenuProfile = document.getElementById('MenuProfile')
let MenuDashboard = document.getElementById('MenuDashboard')
let MenuProfile2 = document.getElementById('MenuProfile2')
let MenuHome = document.getElementById('MenuHome')
let MenuPostInternship = document.getElementById('MenuPostInternship')
let MenuTransactions = document.getElementById('MenuTransactions')
let MenuBussiness = document.getElementById('MenuBussiness')
let MenuPassword = document.getElementById('MenuPassword')
let MenuLogout = document.getElementById('MenuLogout')
let Register = document.getElementById('Register')
let Login = document.getElementById('Login')
let MenuProfileName = document.getElementById('MenuProfileName')
let MenuProfileNumber = document.getElementById('MenuProfileNumber')
// -------------------------- Catch Div End -----------------------------
MenuLogout.addEventListener("click",(event)=>{
  event.preventDefault();
  localStorage.setItem("SignInStatus","Logout")
  window.location.href="./LoginStudent.html"
})
  let status = localStorage.getItem("SignInStatus");
 if(status==="Successful"){
   NavBarSignIN.style.display="none"
   NavBarBell.style.display="block"
   NavBarProfile.style.display="block"
   
   MenuProfile.style.display="flex"
   MenuDashboard.style.display="flex"
   MenuProfile2.style.display="flex"
   MenuHome.style.display="none"
   MenuPostInternship.style.display="none"
   MenuTransactions.style.display="flex"
   MenuBussiness.style.display="flex"
   MenuPassword.style.display="flex"
   MenuLogout.style.display="flex"
   Register.style.display="none"
   Login.style.display="none"
  let data = JSON.parse(localStorage.getItem("CurrentUser"));
  MenuProfileName.innerText=`${data.FirstName} ${data.LastName}`
  MenuProfileNumber.innerText=`+91 ${data.Number}`
  }
  else{
   NavBarSignIN.style.display="block"
   NavBarBell.style.display="none"
   NavBarProfile.style.display="none"

   MenuProfile.style.display="none"
   MenuDashboard.style.display="none"
   MenuProfile2.style.display="none"
   MenuHome.style.display="flex"
   MenuPostInternship.style.display="flex"
   MenuTransactions.style.display="none"
   MenuBussiness.style.display="none"
   MenuPassword.style.display="none"
   MenuLogout.style.display="none"
   Register.style.display="flex"
   Login.style.display="flex"
 }