function change(){
  
    window.location.href="dashboard.html";
  }
  
  function danger1(){
    window.location.href="#";
  }
  function danger2(){
    window.location.href="#";
  }

  var upload=document.querySelector("#prodiv3");
  function uploadimage(){
    event.preventDefault();
    let div1=document.createElement("div");
    div1.setAttribute("id","imageupload1")
    let div=document.createElement("div");
    div.setAttribute("id","imageupload")
    let input=document.createElement("input");
    input.setAttribute("type","file");
    input.setAttribute("id","file");
    let button=document.createElement("button");
    button.setAttribute("id","imagebutton")
    button.innerText="UPLOAD"
    let cancel=document.createElement("h3")
    cancel.setAttribute("id","cancelimage")
    cancel.innerHTML="cancel";
    cancel.addEventListener("click",function(){
      window.location.reload();
    })
    let para=document.createElement("p");
     para.innerText="Upload Your Profile Picture";
    para.setAttribute("id","sentence")
    div.append(para,input,button,cancel);
    div1.append(div)
    upload.append(div1);
  }
  
  function enterdetails(){
    
    let div=document.createElement("div")
    div.setAttribute("id","divdetails")
    let para=document.createElement("p");
    para.innerText="Update Personal Details";
    para.setAttribute("id","details")
     let label=document.createElement("label");
     label.innerText="Name*"
     label.setAttribute("class","label")
    let name=document.createElement("input")
    name.setAttribute("type","text");
    name.setAttribute("id","name")
    let br=document.createElement("br");
    let label1=document.createElement("label");
    label1.innerText="Gender*"
    label1.setAttribute("class","label1")
    let gender=document.createElement("select")
    gender.setAttribute("id","gender")
    let option1=document.createElement("option");
    option1.innerText="Male";
    let option2=document.createElement("option");
    option2.innerText="Female";
    gender.append(option1,option2);
    let br1=document.createElement("br");
    let label3=document.createElement("label");
    label3.innerText="Date Of Birth*"
    label3.setAttribute("class","label3")
    let dateofbirth=document.createElement("input")
    dateofbirth.setAttribute("type","date");
    dateofbirth.setAttribute("id","date")
    let br3=document.createElement("br");
    let label4=document.createElement("label");
    label4.innerText="Languages*"
    label4.setAttribute("class","label4")
    let languages=document.createElement("input")
    languages.setAttribute("type","text");
    languages.setAttribute("id","languages")
    let br4=document.createElement("br");
    let label5=document.createElement("label");
    label5.innerText="Hobbies*"
    label5.setAttribute("class","label5")
    let hobbies=document.createElement("input")
    hobbies.setAttribute("type","text");
    hobbies.setAttribute("id","hobbies")
    let br5=document.createElement("br");
    let label6=document.createElement("label");
    label6.innerText="Achievements*"
    label6.setAttribute("class","label6")
    
    let Achievements=document.createElement("input")
    Achievements.setAttribute("type","text");
    let br6=document.createElement("br");
    let label7=document.createElement("label");
    label7.innerText="Skills*"
    label7.setAttribute("class","label7")
    Achievements.setAttribute("id","achievements")
    
    let Skills=document.createElement("input")
    Skills.setAttribute("type","text");
    Skills.setAttribute("id","Skills")
    let br7=document.createElement("br");
    let label8=document.createElement("label");
    label8.innerText="Preferences*"
    label8.setAttribute("class","label8")
    let Preferences=document.createElement("input")
    Preferences.setAttribute("type","text");
    Preferences.setAttribute("id","preferences")
    let br8=document.createElement("br");
    let label9=document.createElement("label");
    label9.innerText="About*"
    label9.setAttribute("class","label9")
    let br9=document.createElement("br");
    let About=document.createElement("input")
    About.setAttribute("type","text");
    About.setAttribute("id","about")
    let br0=document.createElement("br");
    let button=document.createElement("button");
       button.setAttribute("id","button10")
       button.innerText="Update"
       button.addEventListener("click",function(){
         updateinfo();
       })
    let cancel=document.createElement("p");
    cancel.innerText="cancel";
    cancel.setAttribute("id","cancel10");
    cancel.addEventListener("click",function(){
      window.location.reload();
    })
    div.append(para,label,name,br0,label1,gender,br1,label3,dateofbirth,br3,label4,languages,br4,label5,hobbies,br5,label6,Achievements,br6,label7,Skills,br7,label8,Preferences,br8,label9,About,br9,button,cancel)
    document.querySelector("#dashboard").append(div)
  }


  function facebooklogin(){
    window.location.href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQ4Nzk3NzM0LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D";
  }
  
  function googlelogin(){
    window.location.href="https://accounts.google.com/ServiceLogin/signinchooser?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
  }

  function changepassword(){
    window.location.href="#"
  }