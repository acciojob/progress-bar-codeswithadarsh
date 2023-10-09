document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentStep = 1;

    nextButton.addEventListener('click', function () {
        if (currentStep < circles.length) {
            circles[currentStep - 1].classList.remove('active');
            circles[currentStep].classList.add('active');
            currentStep++;
            updateButtonState();
        }
    });

    prevButton.addEventListener('click', function () {
        if (currentStep > 1) {
            currentStep--;
            circles[currentStep].classList.remove('active');
            circles[currentStep - 1].classList.add('active');
            updateButtonState();
        }
    });

    function updateButtonState() {
        prevButton.disabled = currentStep === 1;
        nextButton.disabled = currentStep === circles.length;
    }
});
