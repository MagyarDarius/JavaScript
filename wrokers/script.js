state = {
  workers: [
    {
      name: "Miss Madelen Årdal",
      city: "Eggkleiva",
      email: "madelen.ardal@example.com",
      picture: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    {
      name: "Miss Nila Rugland",
      city: "Sommarøy",
      email: "nila.rugland@example.com",
      picture: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Mr Diego Aanestad",
      city: "Fuglevik",
      email: "diego.aanestad@example.com",
      picture: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    {
      name: "Mr Nikolai Lidal",
      city: "Liland",
      email: "nikolai.lidal@example.com",
      picture: "https://randomuser.me/api/portraits/men/82.jpg",
    },
    {
      name: "Ms Goda Skinnes",
      city: "Bjørkelangen",
      email: "goda.skinnes@example.com",
      picture: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
      name: "Ms Mari Abdirahman",
      city: "Øyenkilen",
      email: "mari.abdirahman@example.com",
      picture: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
      name: "Mr Stanislaw Sørheim",
      city: "Porsgrunn",
      email: "stanislaw.sorheim@example.com",
      picture: "https://randomuser.me/api/portraits/men/87.jpg",
    },
    {
      name: "Ms Thelma Hope",
      city: "Skre",
      email: "thelma.hope@example.com",
      picture: "https://randomuser.me/api/portraits/women/19.jpg",
    },
  ],
};

function render() {
    let workers = document.getElementById("workers")
    workerHtml = '<div class="row">';
    for (const worker of state.workers) {
        workerHtml += `
        <div class="col-md-3 mb-4">
         <div class="card">
                    <img src="${worker.picture}" alt="">
                    <h3> ${worker.city}</h3>
                    <p>${worker.name}</p>
                    <p id="email">${worker.email}</p>    
                </div>
            </div>`
            }
            workerHtml+= "</div>";
            workers.innerHTML = workerHtml;
        }
window.onload = render;