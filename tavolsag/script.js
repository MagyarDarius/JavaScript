async function getDistance() {
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();

    if (!from || !to) {
        alert("Kérlek add meg mindkét települést!");
        return;
    }

    const url = `https://api.infojegyzet.hu/tavolsag/?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        const distance = data.tavolsag || "N/A";
        const airDistance = data.legvonal || "N/A";
        const time = data.ido || "N/A";

        document.getElementById("distance").innerText = distance + " km";
        document.getElementById("airDistance").innerText = airDistance + " km";
        document.getElementById("time").innerText = time;

        const mapUrl = `https://www.google.com/maps/dir/${encodeURIComponent(from)}/${encodeURIComponent(to)}`;
        const mapLink = document.getElementById("mapLink");
        mapLink.href = mapUrl;

        document.getElementById("result").classList.remove("hidden");

    } catch (error) {
        console.error("Hiba történt:", error);
        alert("Nem sikerült lekérni az adatokat!");
    }
}