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
    // --------------------------Home Page------------------------------------------
    // Carousel
    const carouselArrowLeft = document.querySelector("#carousel__left-arrow");
    const carouselArrowRight = document.querySelector("#carousel__right-arrow");
    if (carouselArrowLeft && carouselArrowRight){
        if (window.innerWidth <= 425){
            // Mob version of left arrow
            carouselArrowLeft.addEventListener("click", function(){
                // Mobile Page
                const mobActive = document.querySelectorAll(".carousel__active-mob");
                const mobNext = document.querySelectorAll(".carousel__next-mob");
                const mobPrev = document.querySelectorAll(".carousel__prev-mob");
    
                mobActive.forEach(function(mobItem){
                    mobItem.classList.replace("carousel__active-mob", "carousel__next-mob");
                    mobItem.classList.remove("carousel__item--active");
                });
                mobNext.forEach(function(mobItem){
                    mobItem.classList.replace("carousel__next-mob", "carousel__prev-mob");
                });
                setTimeout(function(){
                    mobPrev.forEach(function(mobItem){
                        mobItem.classList.replace("carousel__prev-mob", "carousel__active-mob");
                        mobItem.classList.add("carousel__item--active");
                    }); 
                }, 100)

            });
            // Mob version of right arrow
            carouselArrowRight.addEventListener("click", function(){
                // Mobile Page
                const mobActive = document.querySelectorAll(".carousel__active-mob");
                const mobNext = document.querySelectorAll(".carousel__next-mob");
                const mobPrev = document.querySelectorAll(".carousel__prev-mob");
    
                mobActive.forEach(function(mobItem){
                    mobItem.classList.replace("carousel__active-mob", "carousel__prev-mob");
                    mobItem.classList.remove("carousel__item--active");
                });
                setTimeout(function(){
                    mobNext.forEach(function(mobItem){
                        mobItem.classList.replace("carousel__next-mob", "carousel__active-mob");
                        mobItem.classList.add("carousel__item--active");
                    });
                }, 100)

                mobPrev.forEach(function(mobItem){
                    mobItem.classList.replace("carousel__prev-mob", "carousel__next-mob");
                }); 
            });
        }
        if(window.innerWidth > 425){
            // Left arrow functionality
            carouselArrowLeft.addEventListener("click", function(){
                // define menu items and rows
                // Active Page
                const activeOne = document.querySelectorAll(".carousel__active--1");
                const activeTwo = document.querySelectorAll(".carousel__active--2");
                const activeThree = document.querySelectorAll(".carousel__active--3");
                // Next page
                const nextOne = document.querySelectorAll(".carousel__next--1");
                const nextTwo = document.querySelectorAll(".carousel__next--2");
                const nextThree = document.querySelectorAll(".carousel__next--3");
                // Prev Page
                const prevOne = document.querySelectorAll(".carousel__prev--1");
                const prevTwo = document.querySelectorAll(".carousel__prev--2");
                const prevThree = document.querySelectorAll(".carousel__prev--3");

                // Change active page to new next page
                activeOne.forEach(function(item){
                    item.classList.replace("carousel__active--1", "carousel__next--1");
                    item.classList.remove("carousell__item--active");
                });
                activeTwo.forEach(function(item){
                    item.classList.replace("carousel__active--2", "carousel__next--2");
                    item.classList.remove("carousell__item--active");
                });
                activeThree.forEach(function(item){
                    item.classList.replace("carousel__active--3", "carousel__next--3");
                    item.classList.remove("carousell__item--active");
                })
                
                // Change prev next page to new previous page
                nextOne.forEach(function(item){
                    item.classList.replace("carousel__next--1", "carousel__prev--1");
                });
                nextTwo.forEach(function(item){
                    item.classList.replace("carousel__next--2", "carousel__prev--2");
                });
                nextThree.forEach(function(item){
                    item.classList.replace("carousel__next--3", "carousel__prev--3");
                })

                // Change prev previous page to new active page
                setTimeout(function(){
                    // Adding animation for next active page
                    prevOne.forEach(function(item){
                        item.classList.replace("carousel__prev--1", "carousel__active--1");
                        item.classList.add("carousel__item--active");
                    });
                    prevTwo.forEach(function(item){
                        item.classList.replace("carousel__prev--2", "carousel__active--2");
                        item.classList.add("carousel__item--active");
                    });
                    prevThree.forEach(function(item){
                        item.classList.replace("carousel__prev--3", "carousel__active--3");
                        item.classList.add("carousel__item--active");
                    });
                }, 100);


            });

            // Right arrow functionality
            carouselArrowRight.addEventListener("click", function(){
                // define menu items and rows
                // Active page
                const activeOne = document.querySelectorAll(".carousel__active--1");
                const activeTwo = document.querySelectorAll(".carousel__active--2");
                const activeThree = document.querySelectorAll(".carousel__active--3");
                // Next page
                const nextOne = document.querySelectorAll(".carousel__next--1");
                const nextTwo = document.querySelectorAll(".carousel__next--2");
                const nextThree = document.querySelectorAll(".carousel__next--3");
                // Prev Page
                const prevOne = document.querySelectorAll(".carousel__prev--1");
                const prevTwo = document.querySelectorAll(".carousel__prev--2");
                const prevThree = document.querySelectorAll(".carousel__prev--3");
                
                // Change active page to new prev page
                activeOne.forEach(function(item){
                    item.classList.replace("carousel__active--1", "carousel__prev--1");
                    item.classList.remove("carousell__item--active");
                });
                activeTwo.forEach(function(item){
                    item.classList.replace("carousel__active--2", "carousel__prev--2");
                    item.classList.remove("carousell__item--active");
                });
                activeThree.forEach(function(item){
                    item.classList.replace("carousel__active--3", "carousel__prev--3");
                    item.classList.remove("carousell__item--active");
                })
                
                // Change prev next page to new active page
                setTimeout(function(){
                    // Adding animation for next active page
                    nextOne.forEach(function(item){
                        item.classList.replace("carousel__next--1", "carousel__active--1");
                        item.classList.add("carousel__item--active");
                    });
                    nextTwo.forEach(function(item){
                        item.classList.replace("carousel__next--2", "carousel__active--2");
                        item.classList.add("carousel__item--active");
                    });
                    nextThree.forEach(function(item){
                        item.classList.replace("carousel__next--3", "carousel__active--3");
                        item.classList.add("carousel__item--active");
                    })
                },100);

                // Change prev previous page to new next page
                prevOne.forEach(function(item){
                    item.classList.replace("carousel__prev--1", "carousel__next--1");
                });
                prevTwo.forEach(function(item){
                    item.classList.replace("carousel__prev--2", "carousel__next--2");
                });
                prevThree.forEach(function(item){
                    item.classList.replace("carousel__prev--3", "carousel__next--3");
                });
            });
        } //end of if statement > 425

        // Carousell page transition when left arrow is clicked
        carouselArrowLeft.addEventListener("click", function(){
            // Carousel Pages
            const dotActive = document.querySelectorAll(".carousel__pages--active");
            const dotNext = document.querySelectorAll(".carousel__pages--next");
            const dotPrev = document.querySelectorAll(".carousel__pages--prev");
            // Traverse through pages via dots
            dotActive.forEach(function(dot){
                dot.classList.replace("carousel__pages--active", "carousel__pages--next");
            });
            dotNext.forEach(function(dot){
                dot.classList.replace("carousel__pages--next", "carousel__pages--prev");
            });
            dotPrev.forEach(function(dot){
                dot.classList.replace("carousel__pages--prev", "carousel__pages--active");
            });
        });

        // Carousell page transition when right arrow is clicked
        carouselArrowRight.addEventListener("click", function(){
            // Carousel Pages
            const dotActive = document.querySelectorAll(".carousel__pages--active");
            const dotNext = document.querySelectorAll(".carousel__pages--next");
            const dotPrev = document.querySelectorAll(".carousel__pages--prev");
            // Traverse through pages via dots
            dotActive.forEach(function(dot){
                dot.classList.replace("carousel__pages--active", "carousel__pages--prev");
            });
            dotNext.forEach(function(dot){
                dot.classList.replace("carousel__pages--next", "carousel__pages--active");
            });
            dotPrev.forEach(function(dot){
                dot.classList.replace("carousel__pages--prev", "carousel__pages--next");
            });
        });
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
            if (filterSnacks.classList.contains("btn--secondary")){
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
            if (filterMains.classList.contains("btn--secondary")){
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
            if (filterLunch.classList.contains("btn--secondary")){
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

    // Extra pork qty counter
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

    // Extra spam qty counter
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
                textboxAddress.forEach(function(textbox){
                    textbox.classList.remove("form-disabled");
                });
                // when toggleDelivery is on the error messages shouldn't be needed
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

    // Function validate form
    const form = document.querySelector("#form--order");
    if (form){
        form.addEventListener("submit", function(event){
            event.preventDefault();
            if (validateForm()){
                window.location.href = "confirm.html";
            }
            else{
                // Form is invalid
            }
        })
    }

    const btnCheckout = document.querySelector("#btn--checkout");
    if (btnCheckout){
        btnCheckout.addEventListener("click", validateForm);
    }
    
    function validateForm(){
        // name
        const inputName = document.querySelector("#input-name");
        const errorName = document.querySelector("#name__error");
        if (inputName.value == "" || inputName.value == null){
            inputName.classList.add("error");
            errorName.innerText = "Please enter a valid name";
            return false;
        }
        else{
            inputName.classList.remove("error");
            errorName.innerText ="";
        }
        // Telephone
        const inputTel = document.querySelector("#input-tel");
        const errorTel = document.querySelector("#tel__error");
        var validRegexTel = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
        if (inputTel.value.match(validRegexTel)){
            // valid telephone input
            inputTel.classList.remove("error");
            errorTel.innerText ="";
        }
        else{
            inputTel.classList.add("error");
            errorTel.innerText = "Please enter only digits, brackets, hyphen";
            return false;
        }

        // Email
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const inputEmail = document.querySelector("#input-email");
        const errorEmail = document.querySelector("#email__error");
        if (inputEmail.value.match(validRegex) ){
            // valid email input  
            inputEmail.classList.remove("error");
            errorEmail.innerText ="";  
        }
        else{
            inputEmail.classList.add("error");
            errorEmail.innerText = "Please enter a valid email";
            return false;
        }

        // Address Street line 1 validity
        const inputAddress = document.querySelector("#input-address");
        const errorAddress = document.querySelector("#address__error");
        const toggleTakeaway = document.querySelector("#toggle--takeaway");
        let addressValue = inputAddress.value.trim();

        if (toggleTakeaway.classList.contains("btn--primary")){
            // Disable address field when toggleDelivery is active
            inputAddress.disabled = true;
            inputAddress.classList.remove("error");
            errorAddress.innerText="";
            inputAddress.removeAttribute("required");
        }
        else{
            inputAddress.disabled = false;
            inputAddress.setAttribute("required", "required");
        }    
        if ((!toggleTakeaway.classList.contains("btn--primary")) && addressValue.length=== 0){
            inputAddress.classList.add("error");
            errorAddress.innerText = "Address is required"; 
        }

        else{
            inputAddress.classList.remove("error");
            errorAddress.innerText="";
        }

        // City Validity
        const inputCity = document.querySelector("#input-city");
        const errorCity = document.querySelector("#city__error");
        if (toggleTakeaway.classList.contains("btn--primary")){
            // Disable address field when toggleDelivery is active
            inputCity.disabled = true;
            inputCity.classList.remove("error");
            errorCity.innerText="";
            inputCity.removeAttribute("required");
        }
        else{
            inputCity.disabled = false;
            inputCity.setAttribute("required", "required");
        }   
        if ((!toggleTakeaway.classList.contains("btn--primary")) && (inputCity.value == "" || inputCity.value == null)){
            inputCity.classList.add("error");
            errorCity.innerText = "Please enter a valid city";
            return false;
        }
        else{
            inputCity.classList.remove("error");
            errorCity.innerText ="";
        }
        
        // State Validity
        const inputState = document.querySelector("#input-state");
        const errorState = document.querySelector("#state__error");
        if (toggleTakeaway.classList.contains("btn--primary")){
            // Disable address field when toggleDelivery is active
            inputState.disabled = true;
            inputState.classList.remove("error");
            errorState.innerText="";
            inputState.removeAttribute("required");
        }
        else{
            inputState.disabled = false;
            inputState.setAttribute("required", "required");
        }  
        if ((!toggleTakeaway.classList.contains("btn--primary")) && (inputState.value == "" || inputState.value == null)){
            inputState.classList.add("error");
            errorState.innerText = "Enter a valid state"; 
            return false;
        }
        else{
            inputState.classList.remove("error");
            errorState.innerText ="";
        }

        // Postcode
        const inputPostcode = document.querySelector("#input-postcode");
        const errorPostcode = document.querySelector("#postcode__error");
        if (toggleTakeaway.classList.contains("btn--primary")){
            // Disable address field when toggleDelivery is active
            inputPostcode.disabled = true;
            inputPostcode.classList.remove("error");
            errorPostcode.innerText="";
            inputPostcode.removeAttribute("required");
        }
        else{
            inputPostcode.disabled = false;
            inputPostcode.setAttribute("required", "required");
        }  
        if ((!toggleTakeaway.classList.contains("btn--primary")) && (inputPostcode.value == "" || inputPostcode.value == null)){
            inputPostcode.classList.add("error");
            errorPostcode.innerText = "Please enter a valid postcode";
            return false;
        }
        else{
            inputPostcode.classList.remove("error");
            errorPostcode.innerText ="";
        }

        // Check that user's date is in the future
        const inputDate = document.querySelector("#input-date");
        const errorDate = document.querySelector("#date__error");
        let parsedDate = Date.parse(inputDate.value);
        if (parsedDate < Date.now()){
            inputDate.classList.add("error");
            errorDate.innerText = "Please enter a date in the future";
            return false;
        }
        else{
            inputDate.classList.remove("error");
            errorDate.innerText ="";
        }
        // Validity of Time
        const inputTime = document.querySelector("#input-time");
        var timeValue = inputTime.value;
        const errorTime = document.querySelector("#time__error");
        const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;
        const isValidTime = timeRegex.test(timeValue);
        const isWithinLunch = timeValue >= "11:00" && timeValue <= "14:59";
        const isWithinDinner = timeValue >= "18:00" && timeValue <= "23:00";
        
        if (isValidTime && (isWithinLunch || isWithinDinner)) {
            // Time is valid
            inputTime.classList.remove("error");
            errorTime.innerText ="";
        } 
        else {
            // Time is invalid
            inputTime.classList.add("error");
            errorTime.innerText = "Please enter a valid time";
            return false;
        }

        // Payment validity
        // cardholder's name
        const inputCardHolder = document.querySelector("#input-cardholder");
        const errorCardHolder = document.querySelector("#card-holder__error");
        if (inputCardHolder.value == "" || inputCardHolder.value == null){
            inputCardHolder.classList.add("error");
            errorCardHolder.innerText = "Please enter a valid name";
            return false;
        }
        else{
            inputCardHolder.classList.remove("error");
            errorCardHolder.innerText ="";
        }        

        // card number
        const inputCardNumber = document.querySelector("#input-cardnumber");
        const errorCardNumber = document.querySelector("#card-number__error");
        var cardNumber = inputCardNumber.value.replace(/\s/g, "").replace(/-/g, "");
        if (inputCardNumber.value == "" || inputCardNumber.value == null || !/^\d{16}$/.test(cardNumber)){
            inputCardNumber.classList.add("error");
            errorCardNumber.innerText = "Please enter a credit card number";
            return false;
        }
        else{
            inputCardNumber.classList.remove("error");
            errorCardNumber.innerText ="";
        }
          // Perform the Luhn algorithm check ~ algorithm to check legitimacy of credit card numbers
        let sum = 0;
        let shouldDouble = false;
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i));
            if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        if (sum % 10 !== 0) {
            inputCardNumber.classList.add("error");
            errorCardNumber.innerText = "Please enter a valid credit card number";
            return false;
        }

        // expiry date
        // Check that user's date is in the future
        const inputExpiry = document.querySelector("#input-expiry");
        const errorExpiry = document.querySelector("#expiry__error");
        let parsedExpiry = Date.parse(inputExpiry.value);
        if (parsedExpiry < Date.now()){
            inputExpiry.classList.add("error");
            errorExpiry.innerText = "Please enter a date in the future";
            return false;
        }
        else{
            inputExpiry.classList.remove("error");
            errorExpiry.innerText ="";
        }

        // cvc validity
        const inputCVC = document.querySelector("#input-cvc");
        const errorCVC = document.querySelector("#cvc__error");
        var cvc = inputCVC.value;
        if (cvc == "" || cvc == null || cvc.length > 3){
            inputCVC.classList.add("error");
            errorCVC.innerText = "Please enter a valid CVC";
            return false;
        }
        else{
            inputCVC.classList.remove("error");
            errorCVC.innerText ="";
        }

        return true
    }




} //end of window.onload










