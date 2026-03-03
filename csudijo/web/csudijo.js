fetch("/api/legnepszerubb")
.then(data => data.json())
.then(data => {
    document.getElementById("legnepszerubb").innerText = data.etelNev
})

function vendegkonyv(){
    const bejegyzes = document.getElementById("bejegyzes").value;
    fetch("/api/vendegkonyv",{
        method: "post",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({ bejegyzes: bejegyzes})
    })
    .then(response =>{
        if(response.ok)
        {
            document.getElementById("bejegyzes").value="";
            alert("Köszönjük a bejegyzését!");
        }
    })
}