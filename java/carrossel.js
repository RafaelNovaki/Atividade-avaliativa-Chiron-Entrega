    let slideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll('.carousel-images img');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
    }

    function prevSlide() {
        slideIndex--;
        if (slideIndex < 1) {
            slideIndex = document.querySelectorAll('.carousel-images img').length;
        }
        showSlides();
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex > document.querySelectorAll('.carousel-images img').length) {
            slideIndex = 1;
        }
        showSlides();
    }

    showSlides();