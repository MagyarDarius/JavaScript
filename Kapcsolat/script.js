const container = document.getElementById("staff-container");

const url = "https://randomuser.me/api/?results=6&nat=gb&seed=company123";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const workers = data.results;

        workers.forEach(person => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${person.picture.large}" alt="${person.name.first}">
                <div class="name">${person.name.title} ${person.name.first} ${person.name.last}</div>
                <div class="email">${person.email}</div>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Hiba:", error));
