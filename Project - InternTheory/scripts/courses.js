
  let coursesappend = (data,parent,num,cartno) =>{

    data.forEach((el,index)=>{
    let downdiv = document.createElement("div")
    downdiv.id = "downdiv"
    let maindiv = document.createElement("div")
    let btndiv = document.createElement("div")
    btndiv.id = "cartbtn"
    let pricediv = document.createElement("div")
    pricediv.id = "price"
    let emidiv = document.createElement("div")
    emidiv.id = "emi"
    let titlediv = document.createElement("div")
    titlediv.id = "title"
  
    let image = document.createElement("img")
    image.src = el.image
  
    let dis = document.createElement("p")
    dis.innerText = el.descp
  
    let title = document.createElement("h4")
    title.innerText = el.title
  
    let emi = document.createElement("p")
    emi.innerText = el.emi
  
    let cut  = document.createElement("p")
    cut.innerText = `₹${el.cutprice}`
    cut.style.textDecoration = "line-through"
    let price = document.createElement("h3")
    price.innerText = `₹${el.price}`
  
    let know = document.createElement("p")
    know.innerText = "KNOW MORE"
    know.id="know"
    know.addEventListener("click",()=>{
   localStorage.setItem("know",JSON.stringify(el))
     window.location.href = "./know.html"
    })
  
    let button = document.createElement("button")
    button.innerText = "ADD TO CART"
    button.id = "add"
    button.addEventListener("click",()=>{
      let arr = JSON.parse(localStorage.getItem("courseArr"))||[];
      arr.push(el)
      
      localStorage.setItem("courseArr",JSON.stringify(arr))
      num.innerText = arr.length
      cartno.style.visibility = "visible"
      cartno.style.background = "red"
      
    })
    button.addEventListener("click",()=>{
     button.innerText = "CHECKOUT>>"
    })
    let im = document.createElement("i")
    im.setAttribute("class","fa-regular fa-circle-question")
  
    btndiv.append(know,button)
    titlediv.append(title,dis)
    pricediv.append(cut,price)
    emidiv.append(emi,im)
    downdiv.append(pricediv,emidiv,btndiv)
    maindiv.append(image,titlediv,downdiv)
  
    parent.append(maindiv)
    })
    }

   export {coursesappend}