window.onload = function(){
    // Hamburger menu toggle
    const hamburger = document.querySelector("#hamburger");
    const navbar = document.querySelector("#navbar");
    const cart = document.querySelector("#cart");

    if(window.innerWidth < 768){
        // document.write("blashkjhdskfs");
        hamburger.addEventListener("click", function() {
            if (navbar.style.display == "flex"){
                navbar.style.display = "none";
                hamburger.classList.remove("stick");
                cart.classList.remove("stick");
            }
            else{
                navbar.style.display = "flex";
                // In order to stick the cart to the sidebar
                hamburger.classList.toggle("stick");
                cart.classList.toggle("stick");
            }
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
                    // When the anchors are clicked upon
                    navbar.style.display ="none";
                    hamburger.classList.toggle("stick");
                    cart.classList.toggle("stick");
                    }
            });
        });                
    }


if (window.innerWidth > 768){
    // document.write("blashkjhdskfs");
    navbar.style.display ="flex";
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
                // navbar.style.display ="flex";
                // hamburger.classList.toggle("stick");
                // cart.classList.toggle("stick");
                }
        });
    });    
}

}





