const currentDateEl = document.getElementById("currentDate");
const requestTimeEl = document.getElementById("requestTime");
const ratesTableEl = document.getElementById("ratesTable");

const now = new Date();
currentDateEl.textContent = `Jelenlegi időpont: ${now.toISOString().split("T")[0]}`;

fetch("https://api.coingecko.com/api/v3/exchange_rates")
    .then(res => res.json())
    .then(data => {
        const fetchedTime = new Date();
        requestTimeEl.textContent = `Adatlekérés időpontja: ${fetchedTime.toLocaleTimeString()}`;

         const rates = data.rates;
          const hufValue = rates.huf.value;

        const currencies = [
            { key: "eur", label: "euró" },
            { key: "usd", label: "amerikai dollár" },
            { key: "gbp", label: "angol font" },
            { key: "chf", label: "svájci frank" },
            { key: "jpy", label: "japán jen" },
            { key: "czk", label: "cseh korona" },
            { key: "pln", label: "lengyel zloty" }
        ];
      currencies.forEach(currency => {

            const currencyValue = rates[currency.key].value;

            const valueInHuf = hufValue / currencyValue;

            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${currency.label}</td>
                <td>${valueInHuf.toFixed(4)} Ft</td>
            `;

            ratesTableEl.appendChild(tr);
        });
    })
    .catch(error => {
        console.error("Hiba történt:", error);
    });