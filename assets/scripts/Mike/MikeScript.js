//Palitan nyo ng sarili nyong image kung gusto nyo ikeep yung image carousel
const bgImages = [
  "../assets/image/Mike/AcIIMike.png",
  "../assets/image/Mike/ProfilePic.jpg",
  "../assets/image/Mike/AcIIMike.png",
];


//Eto yung nag loop na qutoes sa baba ng carousel
const quotes = [
  "StarBoy",
  "Die For you",
  "Out of Time",
  "After Hours",
];

const carousel = document.getElementById("image-carousel");
const continueButton = document.getElementById("js-continue-button");
const closeButton = document.getElementById("js-close-button");
const mainContainer = document.getElementById("js-main-container");
const showButton = document.getElementById("js-show-container");
const convoBox = document.querySelectorAll(".js-convo-box");
const carouselContainer = document.getElementById("js-carousel-container");

const containers = document.querySelectorAll(".js-tab");
const navButtons = document.querySelectorAll("li");
navButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (containers[index].classList.contains("flex")) {
      return;
    }
    containers.forEach((item, index) => {
      item.classList.remove("flex");
      item.classList.add("hidden");
    });

    containers[index].classList.remove("hidden");
    containers[index].classList.add("flex");
  });
});

containers.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("flex")) {
      return;
    }
  });
});

let i = 0;
carousel.style.backgroundImage = `url(${bgImages[i]})`;
setInterval(() => {
  setTimeout(() => {
    i = (i + 1) % bgImages.length;
    carousel.style.backgroundImage = `url(${bgImages[i]})`;
  }, 500);
}, 4000);

//eto yung nag gglitch na text, feel free to remove/change
const text = "Beyond the Wall";
const speed = 100;
let x = 0;

function typeWriter() {
  if (x < text.length) {   
    document.getElementById("typewriter").textContent += text.charAt(x);
    x++;
    setTimeout(typeWriter, speed);
  }
}


let y = 0;
setInterval(() => {
  y = (y + 1) % bgImages.length;

  document.getElementById("js-quotes").textContent = quotes[y];
}, 4000);

window.onload = () => {
  typeWriter();
};


document.addEventListener("DOMContentLoaded", () => {
  const text = `I am Mike, a 4th-year BSIT student at Tarlac State University,\n majoring in Web and Mobile Applications.`;
    const el = document.getElementById("typewriter-text"); // single element
  el.innerHTML = ""; // clear text
  let i = 0;

  function type() {
    if (i < text.length) {
      // add <br> instead of raw newline
      const char = text[i] === "\n" ? "<br>" : text[i];
      el.innerHTML += char;
      i++;
      setTimeout(type, 50); // adjust speed for long text
    }
  }

  type();
});

  function showCertificate(imageSrc) {
    const display = document.getElementById("displayPanel");
    display.style.backgroundImage = `url('${imageSrc}')`;
    display.innerHTML = ""; // clear text when image loads
  }