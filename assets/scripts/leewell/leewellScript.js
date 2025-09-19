const bgImages = [
  "../../assets/image/background-image-one.jpg",
  "../../assets/image/background-image-two.jpg",
  "../../assets/image/background-image-three.jpg",
  "../../assets/image/background-image-four.jpg",
];

const quotes = [
  "No boundaries between self and signal.",
  "Reality hums, distorted by static.",
  "Are you connected, or are you alone?",
  "Identity is just another protocol.",
  "Even silence leaves data behind.",
];

const carousel = document.getElementById("image-carousel");
const containers = document.querySelectorAll(".js-tab");

const navButtons = document.querySelectorAll("li");
navButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (containers[index].classList.contains("flex")) {
      console.log("hello - already active tab clicked");
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
    carousel.style.opacity = 1;
  }, 500);
}, 4000);

const text = "SERIAL EXPERIMENTS";
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
