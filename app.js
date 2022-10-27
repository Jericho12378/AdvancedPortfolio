// service_d942sxl
// template_9n7zpa9
// WIO3U1HomMPbkgG2n

function contact(event){
    event.preventDefault();
    const loading = document.querySelector(".modal_loading_state");
    const success = document.querySelector(".modal_success_state");

    loading.classList += " modal_overlay_visible";
    emailjs
        .sendForm(
            "service_d942sxl",
            "template_9n7zpa9",
            event.target,
            "WIO3U1HomMPbkgG2n"
        ).then(() => {
            loading.classList.remove("modal_overlay_visible")
            success.classList += " modal_overlay_visible";
        }).catch(() => {
            loading.classList.remove("modal_overlay_visible");
            alert(
              "The email service is temporarily unavailable. Please contact me directly on email@email.com"
            );
          });
}


let isModalOpen = false;

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
       return document.body.classList.remove("modal_opened")
    }
    isModalOpen = true;
    document.body.classList += " modal_opened";
}


let isDarkOpen = false
function darkMode(){
    isDarkOpen = !isDarkOpen;
  if (isDarkOpen) {
    document.body.classList += " darkMode"
  }
  else {
    document.body.classList.remove("darkMode")
  }
}

const scaleFactor = 1 / 20;
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}
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