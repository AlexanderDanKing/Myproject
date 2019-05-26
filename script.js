// Modal

let consultBtn = document.querySelectorAll(".button-consultation"),
    consultPopup = document.querySelector(".popup-consultation"),
    designBtn = document.querySelectorAll(".button-design"),
    designPopup = document.querySelector(".popup-design"),
    giftBtn = document.querySelector(".fixed-gift"),
    giftPopup = document.querySelector(".popup-gift"),
    closeBtn = document.querySelectorAll(".popup-close");

    consultBtn.forEach((item) => {
        item.addEventListener("click", () =>{
            consultPopup.style.display = "block";
            consultPopup.classList.add("fadeIn");
            document.body.style.overflow = "hidden";
        });
    });

    designBtn.forEach((item) => {
        item.addEventListener("click", () =>{
            designPopup.style.display = "block";
            designPopup.classList.add("fadeIn");
            document.body.style.overflow = "hidden";
        });
    });

    giftBtn.addEventListener("click", () =>{
        giftPopup.style.display = "block";
        giftPopup.classList.add("fadeIn");
        document.body.style.overflow = "hidden";
    });
    
    closeBtn.forEach((item) =>{
        item.addEventListener("click", () =>{
            consultPopup.style.display = "none";
            designPopup.style.display = "none";
            giftPopup.style.display = "none";
            document.body.style.overflow = "";
        });
        
    });

// Slider

let slideIndex = 1,
    slides = document.querySelectorAll(".feedback-slider-item"),
    prev = document.querySelector(".main-prev-btn"),
    next = document.querySelector(".main-next-btn");

    showSlides(slideIndex);
    function showSlides(n) {
        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = "none");

        slides[slideIndex - 1].style.display = "block";
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener("click", () => {
        plusSlides(-1);
    });

    next.addEventListener("click", () => {
        plusSlides(1);
    });


        