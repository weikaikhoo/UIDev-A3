window.onload = function(){
    // Hamburger menu toggle
    const hamburger = document.querySelector("#hamburger");
    const navbar = document.querySelector("#navbar");
    const key = document.querySelector("navbtn");

    hamburger.addEventListener("click", function() {
        if (navbar.style.display == "flex"){
            navbar.style.display = "none";
        }
        else{
            navbar.style.display = "flex";
        }
        });

        key.addEventListener("click", function(){
            navbar.style.display = "none";
        });

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
}





