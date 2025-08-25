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
heroSection.innerHTML = `
<div class="hero-content">
<img src="${hero.image}" alt="Hero image">
      <div class="hero-text">
        <h1>${hero.headline}</h1>
        <p>${hero.copy}</p>
        <img src="${hero.icon}" alt="icon">
      </div>
    </div>
  `;
}

function handleServices() {
const servicesSection = document.querySelector(".services");
servicesSection.innerHTML = services.map(service => `
    <div class="service">
      <img src="${service.img}" alt="${service.name}">
      <h3>${service.headline}</h3>
      <p>${service.text}</p>
    </div>
  `).join('');
}

function handleFacilities() {
const facilitiesSection = document.querySelector(".facilities");
facilitiesSection.innerHTML = `
    <h2>${facilities.headline}</h2>
    <div class="facility-options">
      ${facilities.options.map(option => `
        <div class="facility-option">
          <img src="${option.icon}" alt="${option.headline}">
          <h3>${option.headline}</h3>
          <p>${option.text}</p>
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
footerSection.innerHTML = `
    <div class="footer-content">
      <p>${footer.brand}</p>
      <h2>${footer.headline}</h2>
      <div class="social-icons">
        ${footer.functions.map(functions => `
            <p>${functions.links}</p>
          <a href="${footer.links}">
            <img src="${footer.icon}" alt="Social icon">
          </a>
        `).join('')}
      </div>
    </div>
  `;
}
//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))
