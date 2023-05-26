window.onload = function(){

    // Hamburger menu toggle
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () =>{
        // hamburger.classList.toggle("active");
        navMenu.classList.toggle("active")
    })

    document.querySelectorAll(".nav-link").forEach(n => 
        n.addEventListener("click", () =>{
            // hamburger.classList.remove("active");
            navMenu.classList.remove("active");
    }))


    //   Scrolling effect for anchor points
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
        anchor.addEventListener("click", function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
                if (target){
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                // When the anchors are clicked upon
                // navbar.style.display ="none";
                // hamburger.classList.toggle("stick");
                // cart.classList.toggle("stick");
                }
        });
    });                
}










