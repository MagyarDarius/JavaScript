document.getElementById("fillRandom").addEventListener("click", async () => {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        document.getElementById("fullname").value =
            `${user.name.first} ${user.name.last}`;
        document.getElementById("gender").value =
            user.gender === "male" ? "male" : "female";
        document.getElementById("birthdate").value =
            user.dob.date.split("T")[0];
        document.getElementById("country").value = user.location.country;
        document.getElementById("city").value = user.location.city;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone;
        document.getElementById("username").value = user.login.username;
        document.getElementById("password").value = user.login.password;
        document.getElementById("profilePreview").src = user.picture.large;

});