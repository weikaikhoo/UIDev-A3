// const logo = document.querySelector("#logo");
// const navbar = document.querySelector("#navbar");

// logo.addEventListener("click", () => {
//   navbar.style.display = "none";
// });
// Hamburger menu toggle
function showNavbar() {
    navbar = document.getElementById("navbar");
    if (navbar.style.display == "flex"){
        navbar.style.display = "none";
        // navbar.anchor.addEventListener("click", () =>{
        //     navbar.style.display = "none";
        // })
    }

    else{
        navbar.style.display = "flex";
    }
  }

//   Scrolling effect for anchor points
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
            if (target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
    });
});
