const cimkep = document.getElementById("cimkep");

cimkep.onmouseover = function(){
     cimkep.src = "hatterkocka.png"
};
cimkep.onmouseout = function(){
    cimkep.src = "sematikus.png"
};
//2.feladat
const erdekessegek = document.querySelectorAll(".erdekesseg");
erdekessegek.forEach((erdekesseg) => {
    erdekesseg.onclick = ()=> {
        erdekesseg.classList.toggle("nagyobb");
    }
});

//3. feladat
const urlap = document.getElementById("urlap");
const szulEv = document.getElementById("szul_ev").value;
const evekSzama = document.getElementById("evek_szama");
urlap.onsubmit = () => {
    event.preventDefault();
    let kulonbseg = szulEv - 1975;
    evekSzama.innerText = 'Már '+ kulonbseg +  'éve létezett a Rubik kocka, amikor megszülettél'

};