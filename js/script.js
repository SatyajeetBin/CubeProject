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

document.addEventListener("DOMContentLoaded", () => {

  const subRadios = document.querySelectorAll("input[name='subType']");
  const singleSub = document.getElementById("singleSub");
  const doubleSub = document.getElementById("doubleSub");
  const shopBtn = document.getElementById("shopNowBtn");

  // fragrance radios
  const singleFrags = document.querySelectorAll("input[name='singleFrag']");
  const doubleFrag1 = document.querySelectorAll("input[name='doubleFrag1']");
  const doubleFrag2 = document.querySelectorAll("input[name='doubleFrag2']");

  function getSelected(name) {
    const el = document.querySelector(`input[name='${name}']:checked`);
    return el ? el.value : "";
  }

  // 🔁 Toggle Single / Double UI
  function updateSubscriptionView() {
    const selected = getSelected("subType");

    if (selected === "single") {
      singleSub.classList.remove("hidden");
      doubleSub.classList.add("hidden");
    } else {
      singleSub.classList.add("hidden");
      doubleSub.classList.remove("hidden");
    }

    updateShopLink();
  }

  // 🔗 Update Shop Now link
  function updateShopLink() {
    const subType = getSelected("subType");

    let link = "#";

    if (subType === "single") {
      const frag = getSelected("singleFrag");
      link = `subscription.html?type=single&frag=${frag}`;
    } else {
      const frag1 = getSelected("doubleFrag1");
      const frag2 = getSelected("doubleFrag2");
      link = `subscription.html?type=double&frag1=${frag1}&frag2=${frag2}`;
    }

    shopBtn.href = link;
  }

  // 🧷 Event listeners
  subRadios.forEach(r => r.addEventListener("change", updateSubscriptionView));
  singleFrags.forEach(r => r.addEventListener("change", updateShopLink));
  doubleFrag1.forEach(r => r.addEventListener("change", updateShopLink));
  doubleFrag2.forEach(r => r.addEventListener("change", updateShopLink));

  // ▶ Init on load
  updateSubscriptionView();

  // 🛒 Click handler (demo page open)
  shopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(shopBtn.href, "_blank");
  });

});



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