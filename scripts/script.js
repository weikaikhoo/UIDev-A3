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
                }
        });
    }); 
    
    // Expanding the payment option
    const radioPayment = document.querySelectorAll(".payment-option__radio");
    const radioCreditCard = document.querySelector("#radio--creditcard");
    const paymentDetailsCredit = document.querySelector("#creditcard-details");
    const paymentHeaderCredit = document.querySelector("#option__header-creditcard");

    radioPayment.forEach(function(radio){
        radio.addEventListener("click", function(){
            if(radioCreditCard.checked){
                paymentDetailsCredit.classList.add("active");
                paymentHeaderCredit.classList.add("active");
            }
            else{
                paymentDetailsCredit.classList.remove("active");
                paymentHeaderCredit.classList.remove("active");
            }
        });
    });
}










