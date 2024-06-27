function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function validateForm() {
    var fullName = document.forms["contactUsForm"]["fname"].value;
    var contactEmail = document.forms["contactUsForm"]["email"].value;
    var contactNum = document.forms["contactUsForm"]["pNumber"].value;
    var contactComment = document.forms["contactUsForm"]["message"].value;
        if (fullName == "") {
              alert("Note: Fill in the Full name section");
              return false;

        } else if (contactEmail == ""){
              alert("Note: Fill in the email section");
              return false;

        } else if (contactNum == ""){
              alert("Note: Fill in the contact number section");
              return false;

        } else if (contactComment == ""){
              alert("Note: Fill in the message section");
              return false;

        } else{
          return true;
        }
}



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


