window.onload = function(){
    // --------------------------Navbar------------------------------------------
    // Hamburger menu toggle
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () =>{
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => 
        n.addEventListener("click", () =>{
            navMenu.classList.remove("active");
    }));


    // cart menu toggle
    const cart = document.querySelector("#cart");
    const cartMenu = document.querySelector(".cart-menu");

    cart.addEventListener("click", () =>{
        cartMenu.classList.toggle("active");
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
    }); //end of Scrolling effects
    

    // --------------------------Product Page------------------------------------------
    // Add on list expand
    const addonList = document.querySelector("#add-on__option-list");
    const addonToggle = document.querySelector("#add-on-toggle");

    if(addonToggle){
        addonToggle.addEventListener("click", function(){
            // toggle the list with forEach and If statement
            addonList.classList.toggle("active");
            addonToggle.classList.toggle("active");
        });
    }

    // List of add-on counters
    // Sauce aside qty counter
    const minusSauceAside = document.querySelector("#counter__minus--sauce-aside");
    const plusSauceAside = document.querySelector("#counter__plus--sauce-aside");
    let qtySauceAside = document.querySelector("#qty--sauce-aside");
    // Increase with the click of the plus button
    if(plusSauceAside){
        plusSauceAside.addEventListener("click", function(){
            if (qtySauceAside.value < 10){
                qtySauceAside.value = parseInt(qtySauceAside.value) + 1;
            }
        });
        // Decrease with the click of the plus button
        minusSauceAside.addEventListener("click", function(){
            if (qtySauceAside.value <= 0){
                qtySauceAside.value = 0;
            }
            else{
                qtySauceAside.value = parseInt(qtySauceAside.value) - 1;
            }
        });
    }


    // Half Rice qty counter
    const minusHalfRice = document.querySelector("#counter__minus--half-rice");
    const plusHalfRice = document.querySelector("#counter__plus--half-rice");
    let qtyHalfRice = document.querySelector("#qty--half-rice");
    // Increase with the click of the plus button
    if (plusHalfRice){
        plusHalfRice.addEventListener("click", function(){
            if (qtyHalfRice.value < 10){
                qtyHalfRice.value = parseInt(qtyHalfRice.value) + 1;
            }
        });
        // Decrease with the click of the plus button
        minusHalfRice.addEventListener("click", function(){
            if (qtyHalfRice.value <= 0){
                qtyHalfRice.value = 0;
            }
            else{
                qtyHalfRice.value = parseInt(qtyHalfRice.value) - 1;
            }
        });
    }


    // Extra rice qty counter
    const minusExtraRice = document.querySelector("#counter__minus--extra-rice");
    const plusExtraRice = document.querySelector("#counter__plus--extra-rice");
    let qtyExtraRice = document.querySelector("#qty--extra-rice");
    // Increase with the click of the plus button
    if (plusExtraRice){
        plusExtraRice.addEventListener("click", function(){
            if (qtyExtraRice.value < 10){
                qtyExtraRice.value = parseInt(qtyExtraRice.value) + 1;
            }
        });
        // Decrease with the click of the plus button
        minusExtraRice.addEventListener("click", function(){
            if (qtyExtraRice.value <= 0){
                qtyExtraRice.value = 0;
            }
            else{
                qtyExtraRice.value = parseInt(qtyExtraRice.value) - 1;
            }
        });
    }


    // Extra egg qty counter
    const minusExtraEgg = document.querySelector("#counter__minus--extra-egg");
    const plusExtraEgg = document.querySelector("#counter__plus--extra-egg");
    let qtyExtraEgg = document.querySelector("#qty--extra-egg");
    // Increase with the click of the plus button
    if (plusExtraEgg){
        plusExtraEgg.addEventListener("click", function(){
            if (qtyExtraEgg.value < 10){
                qtyExtraEgg.value = parseInt(qtyExtraEgg.value) + 1;
            }
        });
        // Decrease with the click of the plus button
        minusExtraEgg.addEventListener("click", function(){
            if (qtyExtraEgg.value <= 0){
                qtyExtraEgg.value = 0;
            }
            else{
                qtyExtraEgg.value = parseInt(qtyExtraEgg.value) - 1;
            }
        });
    }


    // Sauce aside qty counter
    const minusExtraPork = document.querySelector("#counter__minus--extra-pork");
    const plusExtraPork = document.querySelector("#counter__plus--extra-pork");
    let qtyExtraPork = document.querySelector("#qty--extra-pork");
    // Increase with the click of the plus button
    if (plusExtraPork){
        plusExtraPork.addEventListener("click", function(){
            if (qtyExtraPork.value < 10){
                qtyExtraPork.value = parseInt(qtyExtraPork.value) + 1;
            }
        });
        // Decrease with the click of the plus button
        minusExtraPork.addEventListener("click", function(){
            if (qtyExtraPork.value <= 0){
                qtyExtraPork.value = 0;
            }
            else{
                qtyExtraPork.value = parseInt(qtyExtraPork.value) - 1;
            }
        });
    }


    // Extra chicken qty counter
    const minusExtraChicken = document.querySelector("#counter__minus--extra-chicken");
    const plusExtraChicken = document.querySelector("#counter__plus--extra-chicken");
    let qtyExtraChicken = document.querySelector("#qty--extra-chicken");
    // Increase with the click of the plus button
    if (plusExtraChicken){
        plusExtraChicken.addEventListener("click", function(){
            if (qtyExtraChicken.value < 10){
                qtyExtraChicken.value = parseInt(qtyExtraChicken.value) + 1;
            }
        });
        // Decrease with the click of the plus button
        minusExtraChicken.addEventListener("click", function(){
            if (qtyExtraChicken.value <= 0){
                qtyExtraChicken.value = 0;
            }
            else{
                qtyExtraChicken.value = parseInt(qtyExtraChicken.value) - 1;
            }
        });
    }


    // Sauce aside qty counter
    const minusExtraSpam = document.querySelector("#counter__minus--extra-spam");
    const plusExtraSpam = document.querySelector("#counter__plus--extra-spam");
    let qtyExtraSpam = document.querySelector("#qty--extra-spam");
    // Increase with the click of the plus button
    if (plusExtraSpam){
        plusExtraSpam.addEventListener("click", function(){
            if (qtyExtraSpam.value < 10){
                qtyExtraSpam.value = parseInt(qtyExtraSpam.value) + 1;
            }
        });
        // Decrease with the click of the plus button
        minusExtraSpam.addEventListener("click", function(){
            if (qtyExtraSpam.value <= 0){
                qtyExtraSpam.value = 0;
            }
            else{
                qtyExtraSpam.value = parseInt(qtyExtraSpam.value) - 1;
            }
        });
    }


    // Item quantity counter
    const minusItemQty = document.querySelector("#counter__minus--item__qty");
    const plusItemQty = document.querySelector("#counter__plus--item__qty");
    let itemQty = document.querySelector("#item__qty");
    // Increase with the click of the plus button
    if (plusItemQty){
        plusItemQty.addEventListener("click", function(){
            if (itemQty.value < 10){
                itemQty.value = parseInt(itemQty.value) + 1;
            }
        });
        // Decrease with the click of the plus button
        minusItemQty.addEventListener("click", function(){
            if (itemQty.value <= 0){
                itemQty.value = 0;
            }
            else{
                itemQty.value = parseInt(itemQty.value) - 1;
            }
        });
    }
    // Toggling button transitions
    const btnSecondary = document.querySelectorAll(".btn--secondary");
    if (btnSecondary){
        btnSecondary.forEach(function(button){
            button.addEventListener("click", function(){
                if (button.classList.contains("btn--secondary")){
                    button.classList.replace("btn--secondary", "btn--primary");
                }
                else{
                    button.classList.replace("btn--primary", "btn--secondary");
                }
            }); 
        }); //End of btn transition from secondary to primary
    }


    // --------------------------Order Page------------------------------------------
    // Takeaway button
    const toggleTakeaway = document.querySelector("#toggle--takeaway");
    // Delivery button
    const toggleDelivery = document.querySelector("#toggle--delivery");
    const chargeDelivery = document.querySelector("#delivery-charge");
    // Address section of form
    const textboxAddress = document.querySelectorAll(".textbox-address");


    if (toggleTakeaway && toggleDelivery){
        toggleTakeaway.addEventListener("click", function(){
            if (!toggleTakeaway.classList.contains("disabled")){
                toggleTakeaway.classList.remove("disabled");
                toggleTakeaway.classList.add("btn--primary");
                toggleDelivery.classList.remove("btn--primary");
                toggleDelivery.classList.add("disabled");
                textboxAddress.forEach(function(textbox){
                    textbox.classList.add("form-disabled");
                });
                
            }
            if (toggleTakeaway.classList.contains("disabled")){
                toggleTakeaway.classList.replace("disabled", "btn--primary");
                toggleDelivery.classList.replace("btn--primary", "disabled");
                chargeDelivery.classList.add("display-none");
                textboxAddress.forEach(function(textbox){
                    textbox.classList.add("form-disabled");
                });
            }
        })
        toggleDelivery.addEventListener("click", function(){
            if (!toggleDelivery.classList.contains("disabled")){
                toggleDelivery.classList.remove("disabled");
                toggleDelivery.classList.add("btn--primary");
                toggleTakeaway.classList.remove("btn--primary");
                toggleTakeaway.classList.add("disabled");
                chargeDelivery.classList.remove("display-none");
            }
            if (toggleDelivery.classList.contains("disabled")){
                toggleDelivery.classList.replace("disabled", "btn--primary");
                toggleTakeaway.classList.replace("btn--primary", "disabled");
                chargeDelivery.classList.remove("display-none");
            }
        })
    }

    
    // Expanding the payment option
    const radioPayment = document.querySelectorAll(".payment-option__radio");
    const radioCreditCard = document.querySelector("#radio--creditcard");
    const paymentDetailsCredit = document.querySelector("#creditcard-details");
    const paymentHeaderCredit = document.querySelector("#option__header-creditcard");

    if(radioPayment){
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
    }



    
    // --------------------------Menu Page------------------------------------------
    // See more button in menu
    // Mains
    const gridMains = document.querySelector("#mains-grid-container");
    const seeMoreMenuMains = document.querySelector("#see-more--mains");
    const moreMains = document.querySelectorAll(".more--mains");
    
    // When see more is clicked
    if (seeMoreMenuMains){
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
        })
        //end of seeMoreMenuMains function
    }

    
    // Beverages See more
    const seeMoreMenuBeverages = document.querySelector("#see-more--beverages");
    const moreBeverages = document.querySelectorAll(".more--beverages");
    const gridBeverages = document.querySelector("#beverages-grid-container");
    
    // When see more is clicked
    if (seeMoreMenuBeverages){
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
    }


    // Menu page filter
    const filter = document.querySelector("#filter");
    const filterBar = document.querySelector("#filter-bar");
    const titleBar = document.querySelector(".title-bar");
    
    if(filter){
        filter.addEventListener("click", function(){
            filterBar.classList.toggle("active");
            titleBar.classList.toggle("active");
        });
    }

    // Filter options
    
    const filterLunch = document.querySelector("#filter-option--lunch");
    const menuDinner = document.querySelectorAll(".menu-item--dinner");
    const filterSnacks = document.querySelector("#filter-option--snacks");
    const filterMains = document.querySelector("#filter-option--mains");
    const sectionSnacks = document.querySelector("#snacks");
    const sectionAppetizers = document.querySelector("#appetizers");
    const sectionMains = document.querySelector("#mains");
    const sectionDesserts = document.querySelector("#desserts");
    const sectionBeverages = document.querySelector("#beverages");

    // Filter snacks
    if (filterSnacks){
        filterSnacks.addEventListener("click", function(){
            if (filterSnacks.classList.contains("btn--primary")){
                sectionAppetizers.classList.add("display-none");
                sectionMains.classList.add("display-none");
                sectionDesserts.classList.add("display-none");
                sectionBeverages.classList.add("display-none");
            }
            else{
                sectionAppetizers.classList.remove("display-none");
                sectionMains.classList.remove("display-none");
                sectionDesserts.classList.remove("display-none");
                sectionBeverages.classList.remove("display-none");
            }
        }); //end of filter snacks
    }


    // Mains snacks
    if (filterMains){
        filterMains.addEventListener("click", function(){
            if (filterMains.classList.contains("btn--primary")){
                sectionAppetizers.classList.add("display-none");
                sectionSnacks.classList.add("display-none");
                sectionDesserts.classList.add("display-none");
                sectionBeverages.classList.add("display-none");
            }
            else{
                sectionAppetizers.classList.remove("display-none");
                sectionSnacks.classList.remove("display-none");
                sectionDesserts.classList.remove("display-none");
                sectionBeverages.classList.remove("display-none");
            }
        }); //end of Mains snacks
    }

    
    //  Only hides when lunch option is active
    if (filterLunch){
        filterLunch.addEventListener("click", function(){
            if (filterLunch.classList.contains("btn--primary")){
    
                    menuDinner.forEach(function(item){
                        item.classList.add("hidden");
                    })
                    sectionAppetizers.classList.add("display-none");
                    seeMoreMenuMains.classList.add("display-none");
            }
            else{
                // Restore to default
                menuDinner.forEach(function(item){
                    item.classList.remove("hidden");
                })
                sectionAppetizers.classList.remove("display-none");
                seeMoreMenuMains.classList.remove("display-none");
            }
        })
    }


} //end of window.onload










