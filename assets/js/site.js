const BASE = "https://raw.githubusercontent.com/sphamandlaFuweka/SpazaSure-Marketplace/main/";

const imgMap = {
  "img-nav-logo": ["Logo2026.png", "Logo1.png", "logo.png"],
  "img-footer-logo": ["Logo2026.png", "Logo1.png", "logo.png"]
};

function tryLoad(imgEl, names, idx) {
  if (idx >= names.length) {
    if (imgEl.id === "img-nav-logo" || imgEl.id === "img-footer-logo") {
      imgEl.style.display = "none";
    }
    return;
  }

  const name = names[idx];
  const url = name.includes("://") ? name : BASE + name;
  imgEl.src = url;
  imgEl.onerror = () => tryLoad(imgEl, names, idx + 1);
  imgEl.onload = () => {
    imgEl.onerror = null;
  };
}

document.addEventListener("DOMContentLoaded", () => {
  Object.entries(imgMap).forEach(([id, names]) => {
    const el = document.getElementById(id);
    if (el) tryLoad(el, names, 0);
  });
});

const ftData = {
  retailers: [
    { icon: "fa-boxes-stacked", cl: "g", t: "Product catalog", d: "Browse hundreds of products with live pricing, pack sizes, and real-time availability for your shop.", p: "Browse products" },
    { icon: "fa-cart-plus", cl: "y", t: "Easy ordering", d: "Place orders in minutes, track deliveries, download receipts, and view your full order history.", p: "Order now" },
    { icon: "fa-chart-line", cl: "b", t: "Spending analytics", d: "Know your monthly spend, top products, and exactly how much you have saved through pooling.", p: "View insights" },
    { icon: "fa-magnifying-glass", cl: "r", t: "Product verification", d: "Scan barcodes to verify authenticity, check expiry dates, and report counterfeit goods.", p: "Coming soon" }
  ],
  suppliers: [
    { icon: "fa-shop", cl: "g", t: "Supplier portal", d: "List your products, update stock in real time, and receive aggregated orders from township retailers.", p: "List products" },
    { icon: "fa-chart-line", cl: "y", t: "Sales analytics", d: "Track your sales performance, top-moving products, and revenue trends across all retailers.", p: "View reports" },
    { icon: "fa-inbox", cl: "b", t: "Order management", d: "Receive and fulfil bulk orders with automated notifications and status updates.", p: "Manage orders" },
    { icon: "fa-circle-check", cl: "r", t: "Verified supplier badge", d: "Build trust with township retailers through SpazaSure's supplier verification checks.", p: "Get verified" }
  ]
};

function swTab(btn, tab) {
  document.querySelectorAll(".ftab").forEach((t) => t.classList.remove("on"));
  btn.classList.add("on");

  const target = document.getElementById("ftcards");
  if (!target) return;

  target.innerHTML = ftData[tab]
    .map(
      (f) => `
        <div class="fc">
          <div class="fc-icon ${f.cl}"><i class="fas ${f.icon}"></i></div>
          <h3>${f.t}</h3>
          <p>${f.d}</p>
          <span class="fc-pill">${f.p}</span>
        </div>
      `
    )
    .join("");
}

function openLightbox(element) {
  const targetImg = element.querySelector(".gallery-img");
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");

  if (targetImg && modal && modalImg) {
    modalImg.src = targetImg.src;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const modal = document.getElementById("galleryModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
