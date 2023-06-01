window.onload = function(){

    // Hamburger menu toggle
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () =>{
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => 
        n.addEventListener("click", () =>{
            navMenu.classList.remove("active");
    })) //end of hamburger toggle


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
    }); //end of Scrolling effects
    
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
    }); //end of radioPayment.forEach

    // See more button in menu
    // Mains
    const gridMains = document.querySelector("#mains-grid-container");
    const seeMoreMenuMains = document.querySelector("#see-more--mains");
    const moreMains = document.querySelectorAll(".more--mains");
    
    // When see more is clicked
    seeMoreMenuMains.addEventListener("click", function(){
        // toggle the extra menu items
        moreMains.forEach(function(item){
            item.classList.toggle("active");
            // If the class is active change the btn to say see less and give more grid space
            if(item.classList.contains("active")){
                seeMoreMenuMains.innerText = "See less";
                gridMains.classList.replace("grid-container--2r", "grid-container--3r");
            }
            // If not reset to default
            else{
                seeMoreMenuMains.innerText = "See more";
                gridMains.classList.replace("grid-container--3r", "grid-container--2r");
            }
        });
    }); //end of seeMoreMenuMains function

    // Beverages See more
    const seeMoreMenuBeverages = document.querySelector("#see-more--beverages");
    const moreBeverages = document.querySelectorAll(".more--beverages");
    const gridBeverages = document.querySelector("#beverages-grid-container");
    
    // When see more is clicked
    seeMoreMenuBeverages.addEventListener("click", function(){
        // toggle the extra menu items
        moreBeverages.forEach(function(item){
            item.classList.toggle("active");
            // If the class is active change the btn to say see less and give more grid space
            if(item.classList.contains("active")){
                seeMoreMenuBeverages.innerText = "See less";
                gridBeverages.classList.replace("grid-container--2r", "grid-container--5r");
            }
            // If not reset to default
            else{
                seeMoreMenuBeverages.innerText = "See more";
                gridBeverages.classList.replace("grid-container--5r", "grid-container--2r");
            }
        }); //end of moreBeverages.forEach
    }); //end of seeMoreMenuBeverages

    // Add on list expand
    // const addonList = document.querySelector("#add-on__option-list");
    const addonOptions = document.querySelectorAll(".add-on__option");
    const addonToggle = document.querySelector("#add-on-toggle");

    addonToggle.addEventListener("click", function(){
        // toggle the list with forEach and If statement
        // addonList.classList.toggle("active");
        addonToggle.classList.toggle("active")
    });

} //end of window.onload










