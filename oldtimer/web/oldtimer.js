document.addEventListener("DOMContentLoaded", function () {
    fetch("api/nemelerheto", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        const p = document.querySelector("#nem-elerheto");
        p.textContent = data.nemElerhetoAutok;
    })
    .catch(error => {
        const p = document.querySelector("#nem-elerheto");
        p.textContent = "Jelenleg minden autó elérhető!";
    });
});
function velemenyKuldes() {
    const velemeny = document.getElementById("velemenyInput").value;

    fetch("/api/velemeny", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ velemeny: velemeny })
    })
    .then(response => {
        if (response.status === 200) {
            document.getElementById("velemenyInput").value = "";
            alert("Véleménye fontos számunkra!");
        }
        return response.json();
    })
    .catch(error => console.error("Hiba:", error));
}