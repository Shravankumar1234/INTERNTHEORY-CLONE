let HomeSearchCityInput = document.getElementById(
    "HomeSearchCityInput"
  );
  let icon1 = document.querySelector('#icon1')
  let HomeSearchCity2 = document.getElementById('HomeSearchCity2')
  HomeSearchCityInput.addEventListener("focus", (event) => {
    HomeSearchCity2.style.display="block";
    icon1.style.color="black"
});
HomeSearchCityInput.addEventListener("focusout", (event) => {
      icon1.style.color="#999999"
    // HomeSearchCity2.style.display="none";
  });
  import {citiesData} from "./CitiesData.js"
  let Citydata = citiesData()
  Citydata.forEach((el)=>{
      let div = document.createElement('div')
      div.innerText=el;
      div.addEventListener("click",()=>{
          HomeSearchCityInput.value = el;
          HomeSearchCity2.style.display="none";
      })
      HomeSearchCity2.append(div)
  });


  let TypeData = ["Full Time",
"Part Time",
"Work From Home/Campus"]
let HomeSearchType2 = document.getElementById('HomeSearchType2')
let HomeSearchTypeInput = document.getElementById('HomeSearchTypeInput')
let icon2 = document.querySelector('#icon2')
TypeData.forEach((el)=>{
    let div = document.createElement('div')
    div.innerText=el;
    div.addEventListener("click",()=>{
        HomeSearchTypeInput.value = el;
        HomeSearchType2.style.display="none";
    })
    HomeSearchType2.append(div)
});
HomeSearchTypeInput.addEventListener("focus", (event) => {
    HomeSearchType2.style.display="block";
    icon2.style.color="black"
});
HomeSearchTypeInput.addEventListener("focusout", (event) => {
      icon2.style.color="#999999"
    // HomeSearchType2.style.display="none";
  });


  let PreferencesData = ["Actuarial Science",
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
  "Operation",]
let HomeSearchPreferences2 = document.getElementById('HomeSearchPreferences2')
let HomeSearchPreferencesInput = document.getElementById('HomeSearchPreferencesInput')
let icon3 = document.querySelector('#icon3')
PreferencesData.forEach((el)=>{
    let div = document.createElement('div')
    div.innerText=el;
    div.addEventListener("click",()=>{
        HomeSearchPreferencesInput.value = el;
        HomeSearchPreferences2.style.display="none";
    })
    HomeSearchPreferences2.append(div)
});
HomeSearchPreferencesInput.addEventListener("focus", (event) => {
    HomeSearchPreferences2.style.display="block";
    icon3.style.color="black"
});
HomeSearchPreferencesInput.addEventListener("focusout", (event) => {
      icon3.style.color="#999999"
    // HomeSearchType2.style.display="none";
  });