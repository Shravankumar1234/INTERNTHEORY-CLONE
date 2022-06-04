let Courses = document.getElementById("Courses");
  let Courses2 = document.getElementById("Courses2");
  let CoursesHiddenOption = document.getElementById("CoursesHiddenOption");

  Courses.addEventListener("click", (event) => {
    event.preventDefault();
    Courses.style.display = "none";
    Courses2.style.display = "flex";
    CoursesHiddenOption.style.display = "block";
  });
  Courses2.addEventListener("click", (event) => {
    event.preventDefault();
    Courses.style.display = "flex";
    Courses2.style.display = "none";
    CoursesHiddenOption.style.display = "none";
  });
  let Register = document.getElementById("Register");
  let Register2 = document.getElementById("Register2");
  let RegisterHiddenOption = document.getElementById("RegisterHiddenOption");

  Register.addEventListener("click", (event) => {
    event.preventDefault();
    Register.style.display = "none";
    Register2.style.display = "flex";
    RegisterHiddenOption.style.display = "block";
  });
  Register2.addEventListener("click", (event) => {
    event.preventDefault();
    Register.style.display = "flex";
    Register2.style.display = "none";
    RegisterHiddenOption.style.display = "none";
  });
  let Login = document.getElementById("Login");
  let Login2 = document.getElementById("Login2");
  let LoginHiddenOption = document.getElementById("LoginHiddenOption");

  Login.addEventListener("click", (event) => {
    event.preventDefault();
    Login.style.display = "none";
    Login2.style.display = "flex";
    LoginHiddenOption.style.display = "block";
  });
  Login2.addEventListener("click", (event) => {
    event.preventDefault();
    Login.style.display = "flex";
    Login2.style.display = "none";
    LoginHiddenOption.style.display = "none";
  });
  let MenuPassword = document.getElementById('MenuPassword')
  MenuPassword.addEventListener("click",()=>{
    document.getElementById("res").style.display = "flex";
  })