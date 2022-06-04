
  let knowob = JSON.parse(localStorage.getItem("know"));
  console.log(knowob);

  let appendknow = (data) => {
    //   document.getElementById("main").innerHTML = null;
    //   document.getElementById("content").innerHTML = null;
    let banner = document.createElement("div");
    banner.id = "banner";
    let duration = document.createElement("div");
    duration.id = "duration";
    let week = document.createElement("div");
    week.id = "week";
    let priceun = document.createElement("div");
    priceun.id = "price";
    let pricediv = document.createElement("div");
    pricediv.id = "pricediv";

    let image = document.createElement("img");
    image.src = data.banner;

    let dis = document.createElement("p");
    dis.innerText = data.dis;

    let title = document.createElement("h1");
    title.innerText = data.title;

    let du = document.createElement("p");
    du.innerText = "Duration";

    let we = document.createElement("h4");
    we.innerText = data.week;

    let cut = document.createElement("p");
    cut.innerText = `₹${data.cutprice}`;
    cut.style.textDecoration = "line-through";
    let price = document.createElement("h1");
    price.innerText = `₹${data.price}`;

    let or = document.createElement("p");
    or.innerText = "or";

    let button = document.createElement("button");
    button.id = "checkout";
    button.innerText = "ADD TO CART";
    let enrolbtn = document.createElement("button");
    enrolbtn.id = "enroll";
    enrolbtn.innerText = "ENROLL NOW";
    
    banner.append(image);
    week.append(du, we);
    priceun.append(price, cut);
    pricediv.append(priceun, button, or, enrolbtn);
    duration.append(week, pricediv);

    document.getElementById("main").append(banner, duration);
    document.getElementById("content").append(title, dis);
  };

  appendknow(knowob);


