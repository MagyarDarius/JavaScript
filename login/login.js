function validalas() {
      const nev = document.getElementById("nev").value.trim();
      const kor = parseInt(document.getElementById("kor").value);
      const szabalyzat = document.getElementById("szabalyzat").checked;

      document.getElementById("nevHiba").innerText = "";
      document.getElementById("korHiba").innerText = "";
      document.getElementById("szabalyzatHiba").innerText = "";

      let valid = true;

      if (!nev) {
        document.getElementById("nevHiba").innerText = "A név megadása kötelező!";
        valid = false;
      } else if (nev.length > 30) {
        document.getElementById("nevHiba").innerText = "A név legfeljebb 30 karakter lehet!";
        valid = false;
      }

      if (!kor){
        document.getElementById("korHiba").innerText = "A kor megadása kötelező!";
        valid = false;
      } else if (kor < 18) {
            document.getElementById("korHiba").innerText = "Csak 18 éven felüliek regisztrálhatnak!";
            valid = false;
    }
      
      

      if (!szabalyzat) {
        document.getElementById("szabalyzatHiba").innerText = "A szabályzat elfogadása kötelező!";
        valid = false;
      }

      if (valid) {
        console.log("Valid");
        console.log("Név:", nev);
        console.log("Kor:", kor);
        console.log("Szabályzat elfogadva:", szabalyzat);
      } else {
        console.log("Invalid");
        console.log("Név:", nev);
        console.log("Kor:", kor);
        console.log("Szabályzat elfogadva:", szabalyzat);
      }
    }