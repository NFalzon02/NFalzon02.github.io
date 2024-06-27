document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelectorAll('#logo path');
    console.log(logo);
    for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }
});

window.addEventListener('load', () => {
    const logo = document.querySelectorAll('#logo path');
    let animationsCompleted = 0;
    const preload = document.querySelector('.preload');
    const mainContent = document.querySelector('.main-content');

    logo.forEach((path, index) => {
        path.addEventListener('animationend', () => {
            animationsCompleted++;
            if (animationsCompleted === logo.length) {
                preload.classList.add('preload-finish');
                mainContent.classList.add('show');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    });
});