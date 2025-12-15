const container = document.getElementById("staff-container");
//AU  – Australia
//BR  – Brazil
//CA  – Canada
//CH  – Switzerland
//DE  – Germany
//DK  – Denmark
//ES  – Spain
//FI  – Finland
//FR  – France
//GB  – Great Britain
//IE  – Ireland
//IN  – India
//IR  – Iran
//MX  – Mexico
//NL  – Netherlands
//NO  – Norway
//NZ  – New Zealand
//RS  – Serbia
//TR  – Turkey
//UA  – Ukraine
//US  – United States
const NATIONALITY = "TR";

const SEED = "company123";

const url = `https://randomuser.me/api/?results=6&nat=${NATIONALITY}&seed=${SEED}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(person => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${person.picture.large}" alt="${person.name.first}">
        <div class="name">${person.name.first} ${person.name.last}</div>
        <div class="email">${person.email}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("API error:", err));
