// const hamburger = document.querySelector("#hamburger");
// const navbar = document.querySelector("#navbar");

// hamburger.addEventListener("click", () =>{
//     // hamburger.classlist.toggle("active");
//     navbar.classList.toggle("show-nav");
//     // document.getElementById("navbar").style.display ="block"
// })

function showNavbar() {
    navbar = document.getElementById("navbar");
    if (navbar.style.display == "flex"){
        navbar.style.display = "none";
    }
    else{
        navbar.style.display = "flex";
    }
  }
