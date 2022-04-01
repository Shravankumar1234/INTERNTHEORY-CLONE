var data = {
    status: "Success",
    coursesEnrolled: [],
    internships: [],
    recommendedCourses: {
        id: 9,
        name: "Android App Development Using Kotlin Course",
        about: null,
        actual_price: 3999,
        banner: "https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png",
        benefits: null,
        betteru_sku: "IT-CRS-007",
        combo_ids: "9",
        created_at: "2019-04-04 13:07:24",
        deleted_at: null,
        demo_url: "https://player.vimeo.com/video/287786617",
        description: "Learn the art of android app design and web development. Join this online android app development course and learn how to build an android app from scratch. Learn kotlin how to use kotlin for app development.",
        duration: "4-6 Weeks",
        faqs: null,
        free_access_days: 0,
        hide: 0,
        id: 9,
        is_free: 0,
        is_offline: 0,
        keyfeatures: "Certified_$_certified.png_$$_Study At Your Own Time_$_study-at-your-own-time.png_$$_Learn from Industry Professionals_$_learn-from-professional.png_$$_More Practice, Less Theory_$_study-more.png",
        name: "Android App Development Using Kotlin Course",
        original_price: 7999,
        slug: "android-app-development-kotlin-course",
        testimonials: null,
        thumbnail: "/creative/courses/thumbnails/android-app-development-kotlin-course.png",
        tutor_desc: "",
        tutor_image: "",
        tutor_name: "",
        tutor_title: "",
        updated_at: "2019-04-04 13:07:24",
        whatstudentget: "Certificate to upgrade your resume_$_certificate-to-upgrade.png_$$_Internship Assistance_$_internships.png",
        whoshould: null
    }
}

let arr = [];
arr.push(data);

board2show(arr);
board4show(arr);
board5show(arr);
function board2show(arr) {
    let div2 = document.querySelector("#board2");
    arr.forEach(element => {
        let head1 = document.createElement("h1")
        head1.setAttribute("class", "head1")
        head1.innerText = element.recommendedCourses.name;
        let des = document.createElement("p");
        des.setAttribute("class", "des")
        des.innerText = element.recommendedCourses.description;
        div2.append(head1, des);
    });
}
function board4show(arr) {
    let div3 = document.querySelector("#board4");
    arr.forEach(element => {
        let iframe = document.createElement("iframe");
        iframe.src = element.recommendedCourses.demo_url;
        iframe.style.height = "200px";

        div3.append(iframe)

    });
}

function board5show(arr) {
    let div4 = document.querySelector("#board5");
    arr.forEach(element => {
        let para2 = document.createElement("p");
        para2.innerText = "Duration:" + " " + element.recommendedCourses.duration
        para2.setAttribute("class", "para2")
        let line = document.createElement("hr");
        line.setAttribute("class", "line")
        let price = document.createElement("h2");
        price.innerText = "₹" + " " + element.recommendedCourses.actual_price;
        price.setAttribute("class", "price")

        let price2 = document.createElement("p")
        price2.innerText = "₹" + " " + element.recommendedCourses.original_price;
        price2.setAttribute("class", "price2")
        let button = document.createElement("button");
        button.innerText = "ADD TO CART";
        button.setAttribute("class", "button")
        button.addEventListener("click", function (element) {
            button.innerText = "Proceed to Checkout";
            button.addEventListener("click", function () {
                window.location.href = "#";
            })

        });
        let para3 = document.createElement("p");
        para3.innerText = "or"
        para3.setAttribute("class", "para3")
        let button1 = document.createElement("button");
        button1.innerText = "ENROLL NOW"
        button1.setAttribute("class", "button1")
        button1.addEventListener("click", function () {
            window.location.href = "#";
        })

        div4.append(para2, line, price, price2, button, para3, button1)
    });
}


