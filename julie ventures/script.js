// JULLIE VENTURES WEBSITE JAVASCRIPT

// WhatsApp business number
const PHONE = "2348107126769";

const BASE_MESSAGE =
  "Hello Jullie Ventures, I would like to place an order from your website!";

// Function to open WhatsApp with a product-specific message
function orderOnWhatsApp(product) {
  const message = product
    ? `Hello Jullie Ventures, I would like to order ${product}. Please share the available sizes and prices. Thank you!`
    : BASE_MESSAGE;

  const whatsappURL =
    `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );
}

// PRODUCT ORDER BUTTONS
// Each product button opens WhatsApp with the product name.
document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    orderOnWhatsApp(button.dataset.product);
  });
});

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Close the mobile menu after selecting a navigation link.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.textContent = "☰";
  });
});

// AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

// SCROLL REVEAL ANIMATIONS
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });

} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("visible");
  });
}