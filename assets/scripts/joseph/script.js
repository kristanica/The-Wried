const bgImages = [
  "../../assets/image/joseph/mugshot/mugShot-front.png",
  "../../assets/image/joseph/mugshot/mugShot-left.png",
  "../../assets/image/joseph/mugshot/mugShot-back.png",
  "../../assets/image/joseph/mugshot/mugShot-right.png",
];

const quotes = [
  "If the king doesn’t lead, the people will never follow.",
  "The world is not perfect. But it can be changed.",
  "The world can only change through those willing to challenge it.",
  "If strength is justice, then is powerlessness a crime?",
  "I will create a peaceful world, but only if I become a villain in the eyes of history.",
];

const carousel = document.getElementById("image-carousel");
const continueButton = document.getElementById("js-continue-button");
const closeButton = document.getElementById("js-close-button");
const mainContainer = document.getElementById("js-main-container");
const showButton = document.getElementById("js-show-container");
const convoBox = document.querySelectorAll(".js-convo-box");

// continue button
continueButton.addEventListener("click", () => {
  document.getElementById("js-connection-container").classList.add("hidden");
  document.getElementById("js-home-container").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("js-home-container").classList.add("opacity-100");
  }, 50);
});

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
    if (index === 3) {
      convoBox.forEach((c, i) => {
        setTimeout(() => {
          c.classList.remove("opacity-0");
          c.classList.add("opacity-100");
        }, 1000 * i);
      });
    }
  });
});

containers.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("flex")) {
      console.log("hello");
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

const text = "VOCTORIA ULTIMA";
const speed = 100;
let x = 0;

function typeWriter() {
  if (i < text.length) {
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

function openCert(img) {
  document.getElementById("certImage").src = img;
  document.getElementById("imageContainer").classList.remove("hidden");
  document.getElementById("imageContainer").classList.add("flex");
  document.getElementById("typewriter").classList.add("hidden");
  document.getElementById("certVideo").play();
}

function closeCert() {
  document.getElementById("imageContainer").classList.add("hidden");
  document.getElementById("imageContainer").classList.remove("flex");
  document.getElementById("typewriter").classList.remove("hidden");
  document.getElementById("certVideo").pause();
  document.getElementById("certVideo").currentTime = 0;
}
