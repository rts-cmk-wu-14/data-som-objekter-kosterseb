// slå dig løs her... 

const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");

handleHero();
handleServices();
handleFacilities();
handleSites();
handleAdvantages();
handleFooter();

function handleHero() {
  const heroSection = document.querySelector(".hero");
  const highlightedHeadline = hero.headline.replace(
    "save your time",
    `<span class="highlight">${"save your time"}</span>`
  );

  heroSection.innerHTML = `
<div class="hero-content">
<img src="${hero.image}" alt="Hero image">
      <div class="hero-text">
        <h1>${highlightedHeadline}</h1>
        <p>${hero.copy}</p>
        </div>
        <div class="hero-icon">
        <img src="${hero.icon}" alt="icon">
        <p>Explore</p>
        </div>
    </div>
  `;
}

function handleServices() {
  const servicesSection = document.querySelector(".services");
  servicesSection.innerHTML = services.map(service => `
    <div class="service">
      <img src="${service.illustration}" alt="${service.name}">
      <h3>${service.headline}</h3>
      <p>${service.text}</p>
      <a href="#">${service.linktext}</a>
    </div>
  `).join('');
}

function handleFacilities() {
  const facilitiesSection = document.querySelector(".facilities");
  facilitiesSection.innerHTML = `
    <h2 class="facility-headline">${facilities.headline}</h2>
    <div class="facility-options">
      ${facilities.options.map(option => `
        <div class="facility-option">
          <img src="${option.icon}" alt="${option.headline}">
          <h3>${option.headline}</h3>
          <p>${option.text}</p>
          <a href="#">Show me more</a>
        </div>
      `).join('')}
    </div>
  `;
}

function handleSites() {
  const sitesSection = document.querySelector(".sites");
  sitesSection.innerHTML = `
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>
    <div class="site-places">
      ${sites.places.map(place => `
        <div class="site-place">
          <img src="${place.img}" alt="${place.name}">
          <h3>${place.name}</h3>
          <p>${place.city}</p>
        </div>
      `).join('')}
    </div>
    <button class="site-btn">
      Explore all sites
      <img src="${sites.btnicon}" alt="arrow icon">
    </button>
  `;
}

function handleAdvantages() {
  const advantagesSection = document.querySelector(".advantages");
  advantagesSection.innerHTML = advantages.map(advantage => `
    <div class="advantage">
      <img src="${advantage.icon}" alt="${advantage.headline}">
      <h3>${advantage.headline}</h3>
      <p>${advantage.text}</p>`)


}

function handleFooter() {
  const footerSection = document.querySelector(".footer");
  footerSection.innerHTML =
    `
      <div class="footer-content">
      <p>${footer.brand}</p>
      <h2>${footer.headline}</h2>
      <div class="footer-links">
        ${footer.functions.map(section => `
          <div class="footer-column">
            <h3>${section.title}</h3>
            <ul>
              ${Object.values(section.links).map(link => `
                <li><a href="#">${link}</a></li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <p class="copyright">${footer.copyright}</p>
      
      <div class="footer-quicklinks">
        <ul>
          ${footer.quickLinks.map(link => `
            <li><a href="#">${link}</a></li>
          `).join('')}
        </ul>
      </div>

    </div>
  `;
}

console.log(footer);
//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))
