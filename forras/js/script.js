document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const galleryData = [
    { title: "Balaton", text: "Magyarország legnagyobb tava.", img: "kepek/balaton.jpg" },
    { title: "Dunakanyar", text: "A Duna egyik legszebb szakasza.", img: "kepek/dunakanyar.jpg" },
    { title: "Rába", text: "Nyugat-magyarországi folyó.", img: "kepek/raba.jpg" },
    { title: "Tisza", text: "Magyarország egyik fő folyója.", img: "kepek/tisza.jpg" },
    { title: "Tisza-tó", text: "Mesterséges tó a Tiszán.", img: "kepek/tiszato.jpg" },
    { title: "Zala", text: "A Balaton egyik legfontosabb vízfolyása.", img: "kepek/zala.jpg" },
    { title: "Velencei-tó", text: "Magyarország harmadik legnagyobb tava.", img: "kepek/velenceito.jpg" },
    { title: "Hévízi-tó", text: "Európa legnagyobb gyógyhatású melegvizes tava.", img: "kepek/hevizito.jpg" }
];


    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    const modalTitle = document.querySelector(".modal-title");
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");

    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", function () {

            const data = galleryData[index];

            if (data) {
                modalTitle.textContent = data.title;
                modalImage.src = data.img;
                modalText.textContent = data.text;
                modal.show();
            }
        });
    });

});