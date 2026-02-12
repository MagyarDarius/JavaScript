let ipcim = "";

fetch("https://api.ipify.org/?format=json")
.then(res => res.json())
.then(data => {
    ipcim = data.ip;

    document.getElementById("data").innerHTML =
        `<p><strong>Saját IP cím:</strong> ${ipcim}</p>`;

    return fetch(`https://ipinfo.io/${ipcim}/geo`);
})
.then(response => response.json())
.then(data => {
    document.getElementById("data").innerHTML += `
        <h2>Eredmény:</h2>
        <p><strong>IP:</strong> ${data.ip}</p>
        <p><strong>Hostname:</strong><br>${data.hostname}</p>
        <p><strong>Város:</strong> ${data.city}</p>
        <p><strong>Régió:</strong> ${data.region}</p>
        <p><strong>Ország:</strong> ${data.country}</p>
        <p><strong>Helyzet:</strong> ${data.loc}</p>
        <p><strong>Szolgáltató:</strong><br>${data.org}</p>
        <p><strong>Irányítószám:</strong> ${data.postal}</p>
    `;
})