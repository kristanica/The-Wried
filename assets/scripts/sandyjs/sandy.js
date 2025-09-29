
const bgImages = [
  "https://via.placeholder.com/400x600?text=BG1",
  "https://via.placeholder.com/400x600?text=BG2",
  "https://via.placeholder.com/400x600?text=BG3",
  "https://via.placeholder.com/400x600?text=BG4"
];

const carousel = document.getElementById("image-carousel");
if(carousel){
  let i = 0;
  carousel.style.backgroundImage = `url(${bgImages[i]})`;
  setInterval(() => {
    i = (i + 1) % bgImages.length;
    carousel.style.opacity = 0;
    setTimeout(() => {
      carousel.style.backgroundImage = `url(${bgImages[i]})`;
      carousel.style.opacity = 1;
    }, 500);
  }, 4000);
}

const navButtons = document.querySelectorAll(".nav-link");
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

function typeHTML(element, speed = 50) {
  const html = element.innerHTML;  
  element.innerHTML = "";           
  let i = 0;
  let buffer = "";
  let inTag = false;

  function type() {
    if (i < html.length) {
      const char = html[i];

      if (char === "<") inTag = true;  

      if (inTag) {
        buffer += char;                
        if (char === ">") {            
          element.innerHTML += buffer; 
          buffer = "";
          inTag = false;
        }
      } else {
        element.innerHTML += char;  
      }

      i++;
      setTimeout(type, speed);
    }
  }

  type();
}


document.addEventListener("DOMContentLoaded", () => {
  const animatedIntro = document.getElementById("animated-intro");
  typeHTML(animatedIntro, 50); 
});

function createSparkle() {
  const sparkle = document.createElement("div");
  const size = Math.random() * 8 + 3;
  sparkle.style.width = sparkle.style.height = size + "px";
  sparkle.style.background = "white";
  sparkle.style.borderRadius = "50%";
  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  sparkle.style.opacity = 0.8 + Math.random() * 0.2;
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = 0;
  sparkle.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.transform = `translateY(-150px) scale(0)`;
    sparkle.style.opacity = 0;
  }, 50);

  setTimeout(() => sparkle.remove(), 1500);
}

setInterval(() => {
  for (let i = 0; i < 3; i++) createSparkle();
}, 300);


window.addEventListener("mousemove", (e) => {
  if(!carousel) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  carousel.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
});


const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const isActive = card.classList.contains('active');

 
    cards.forEach(c => {
      c.classList.remove('active','dimmed');
    });

    if (!isActive) {
    
      card.classList.add('active');
      cards.forEach(c => {
        if (c !== card) c.classList.add('dimmed');
      });
    }
  });
});
