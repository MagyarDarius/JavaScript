const cimkep = document.getElementById("cimkep");

cimkep.onmouseover = function(){
     cimkep.src = "hatterkocka.png"
};
cimkep.onmouseout = function(){
    cimkep.src = "sematikus.png"
};
//2.feladat
const erdekesseg = document.getElementsByClassName("erdekesseg");

erdekesseg.onclick = function(){
    erdekesseg.classList.add("nagyobb");
    erdekesseg.classList.remove("erdekesseg");
};
//3. feladat
function submit(){
    let szul_ev = document.getElementById("szul_ev").value;
    if(szul_ev > 1975){
        let hany_eve = szul_ev-1975;
        
    }
}