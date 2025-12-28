document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  const shopToggle = document.getElementById('shopToggle');
  const shopMenu = document.getElementById('shopMenu');

  // ✅ Hamburger toggle for mobile menu
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // ✅ Ensure dropdown hidden on load
  shopMenu.classList.remove('show');

  // ✅ Shop dropdown toggle
  shopToggle.addEventListener('click', (e) => {
    e.preventDefault();
    shopMenu.classList.toggle('show');
  });

  // ✅ Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      shopMenu.classList.remove('show');
    }
  });
});


const currentImg = document.getElementById("currentImg");
const thumbs = document.querySelectorAll("#thumbs img");
const dotsBox = document.getElementById("dots");


const baseImg = currentImg.src;
const images = [baseImg, baseImg, baseImg, baseImg];

let index = 0;

// create dots
images.forEach((_, i) => {
  const d = document.createElement("span");
  d.className = i === 0 ? "dot active" : "dot";
  d.onclick = () => showImg(i);
  dotsBox.appendChild(d);
});

const dots = document.querySelectorAll(".dot");

function showImg(i) {
  index = i;
  currentImg.src = images[index];
  dots.forEach((d, n) => d.classList.toggle("active", n === index));
}

// arrows
document.querySelector(".next").onclick = () =>
  showImg((index + 1) % images.length);

document.querySelector(".prev").onclick = () =>
  showImg((index - 1 + images.length) % images.length);

// 👉 thumbnails sirf click pe main image change karein (optional)
thumbs.forEach((img) => {
  img.onclick = () => {
    currentImg.src = img.src;
  };
});

const subRadios = document.querySelectorAll("input[name='subType']");
const singleSub = document.getElementById("singleSub");
const doubleSub = document.getElementById("doubleSub");

function updateSubscriptionView() {
  const selected = document.querySelector("input[name='subType']:checked").value;

  if (selected === "single") {
    singleSub.classList.remove("hidden");
    doubleSub.classList.add("hidden");
  } else {
    singleSub.classList.add("hidden");
    doubleSub.classList.remove("hidden");
  }
}

// on change
subRadios.forEach(r => {
  r.addEventListener("change", updateSubscriptionView);
});

// ✅ run once on load
document.addEventListener("DOMContentLoaded", updateSubscriptionView);



// Collection Section

document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.icon').textContent = '+';
    });
    item.classList.add('active');
    item.querySelector('.icon').textContent = '−';
  });
});