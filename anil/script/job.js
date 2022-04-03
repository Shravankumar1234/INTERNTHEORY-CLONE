
  const internships = [
    {
      internship_quality: "Normal",
      title: "Admin Executive",
      company_name: "Atma",
      location: "pune,mumbai",
      internship_type: "Full Time,Work From Home",
      category_name: "social service",
      stipend_type: "None",
      stipend: "Learn Industry-Demanded Skills",
      days_left: 29,
      slug: "social-service-internship-at-atma-mqlvp",
      logo: "https://assets.interntheory.com/uploads/company/companylogos/e1822db470e60d090affd0956d743cb0e7cdf113/f9d920bb5121b4f9bd050ef51143a49c83601f73com.png",
    },
    {
      internship_quality: "Normal",
      title: "React Native Application Developer",
      company_name: "Ishita Drugs & Industries Ltd",
      location: "ahmedabad",
      internship_type: "Full Time",
      category_name: "finance",
      stipend_type: "Fixed",
      stipend: "Salary: 50000 - 80000 per month",
      days_left: 29,
      slug: "finance-internship-at-ishita-drugs-industries-ltd-wjpcc",
      logo: "https://assets.interntheory.com/uploads/company/logos/6b8e334bf1906031541d509ea6d60db308db2c38.jpg",
    },

    {
      internship_quality: "Normal",
      title: "UI/ UX Designer",
      company_name: "Mpower2gether",
      location: "bangalore",
      internship_type: "Part Time,Work From Home",
      category_name: "digital marketing",
      stipend_type: "Incentive Based",
      stipend: "Salary: 40000 - 60000 per month",
      days_left: 28,
      slug: "digital-marketing-internship-at-mpower2gether-5p5lu",
      logo: "https://assets.interntheory.com/uploads/company/logos/82c6b2935e0523bcee710a495cb244bea3b6f3fc.jpg",
    },
    {
      internship_quality: "Normal",
      title: "Project Manager",
      company_name: "Mpower2gether",
      location: "bangalore",
      internship_type: "Part Time,Work From Home",
      category_name: "sales",
      stipend_type: "Incentive Based",
      stipend: "Salary: 60000 - 80000 per month",
      days_left: 28,
      slug: "sales-internship-at-mpower2gether-m33st",
      logo: "https://assets.interntheory.com/uploads/company/logos/82c6b2935e0523bcee710a495cb244bea3b6f3fc.jpg",
    },
    {
      internship_quality: "Normal",
      title: "Key Account Manager",
      company_name: "Tikona Capital",
      location: "mumbai,pune,surat,ahmedabad,indore,kolkata",
      internship_type: "Work From Home",
      category_name: "Research and Analysis",
      stipend_type: "Fixed",
      stipend: "Salary: 40000 - 60000 per month",
      days_left: 28,
      slug: "research-and-analysis-internship-at-tikona-capital-tentb",
      logo: "https://assets.interntheory.com/uploads/company/logos/fc63ce9160554e7f237dc988b0e01f72ac601e8a.jpg",
    },
  ];

  internships.map(function (el) {
    // let div = document.createElement('div')
    // div.id = "leftdiv";

    let maindiv = document.createElement("div");

    maindiv.id = "maindiv";

    let imgdiv = document.createElement("div");
    imgdiv.id = "imgdiv";

    let tagdiv = document.createElement("div");
    tagdiv.id = "tagdiv";

    let lastdiv = document.createElement("div");
    lastdiv.id = "lastdiv";

    let img = document.createElement("img");
    img.id = "internimg";

    img.setAttribute("src", el.logo);
    imgdiv.append(img);

    let title = document.createElement("p");
    title.innerText = el.title;
    title.id = "titid";

    let company_name = document.createElement("p");
    company_name.innerText = el.company_name;

    company_name.id = "companydiv";

    let internship_type = document.createElement("p");
    internship_type.innerText = el.internship_type;

    internship_type.id = "allcl";

    let category_name = document.createElement("p");
    category_name.innerText = el.category_name;

    category_name.id = "allcl";

    let location = document.createElement("p");
    location.innerText = el.location;

    location.id = "allcl";

    let stipend_type = document.createElement("h5");
    stipend_type.style = "color:black";
    stipend_type.innerText = el.stipend_type;

    let morediv = document.createElement("div");
    morediv.id = "morediv";

    let lastdivp = document.createElement("p");
    lastdivp.innerText = "4 weeks left";

    // let path = document.createElement("path")

    let shearimg = document.createElement("img");
    shearimg.id = "shearimg";
    shearimg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUkoIeDu9oUrf2zVtZ9TN3-TOK7D2rLsWbQ&usqp=CAU";
    // shearimg.addEventListener("click")

    let btn1 = document.createElement("button");
    btn1.id = "viewbtn";
    btn1.innerHTML = "VIEW AND APPLY";
    btn1.addEventListener("click", function () {
      window.location.href = "./onlinecourses.html";
    });
    lastdiv.append(lastdivp, shearimg, btn1);

    // stipend.className = "allcl"

    // morediv.append(btn)
    // let

    tagdiv.append(
      title,
      company_name,
      internship_type,
      category_name,
      location,
      stipend_type
    );

    maindiv.append(imgdiv, tagdiv, lastdiv);

    document.querySelector("#intermaindiv").append(maindiv);

    document.getElementById("btnfd").addEventListener("click", function () {
      window.location.href = "./onlinecourses.html";
    });
  });


