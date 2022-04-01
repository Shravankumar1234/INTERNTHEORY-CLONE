let res = document.getElementById("res");
import change from "./changepassword.js";
res.innerHTML = change();
let close_btn = document.getElementById("close-btn");
close_btn.addEventListener("click", () => {
    res.style.display = "none";
});
let oldPass = document.querySelector(".oldp")
let NewPass = document.querySelector(".newp")
let NewPass2 = document.querySelector(".newp2")
let formchapassw = document.getElementById('formchapassw')
formchapassw.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(oldPass.value)
    let currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
    let AllUsers = JSON.parse(localStorage.getItem("StudentLoginData"))
    if (currentUser.Password === oldPass.value) {
        if (NewPass.value === NewPass2.value) {
            let data = [];
            AllUsers.forEach((el) => {
                if (el.Email === currentUser.Email && el.Number === currentUser.Number && el.Password === currentUser.Password) {
                    let obj = {
                        City: el.City,
                        Email: el.Email,
                        FirstName: el.FirstName,
                        LastName: el.LastName,
                        Number: el.Number,
                        Password: NewPass.value,
                    }
                    data.push(obj)
                    localStorage.setItem("CurrentUser", JSON.stringify(obj))
                }
                else {
                    data.push(el)
                }
            })
            localStorage.setItem("StudentLoginData", JSON.stringify(data))
            res.style.display = "none";
        }
        else {
            console.log("Wrong")
        }
    }
    else {
        console.log("WrongPass")
    }
})