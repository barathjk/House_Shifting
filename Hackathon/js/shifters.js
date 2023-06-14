function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if(email == "" || !validEmail) {
        document.getElementById("emailerror").innerText = "Enter a valid E-mail";
    } else if(password == "") {
        document.getElementById("passworderror").innerHTML = "Enter a valid password";
    } else {
        document.getElementById("container").style.display = "none";
        document.body.style.background = "#FFFFFF";
        document.getElementById("loader").style.display = "block";
        setTimeout(function(){
            window.open("cityInfo.html", "_self");
        }, 3000);
    }
}

function validateCityInfo() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    jQuery(".error").text("");
    if (name == "") {
        document.getElementById("nameerror").innerText = "Provide a name"
    } else if (email == "" || !validEmail) {
        document.getElementById("emailerror").innerText = "Enter a valid E-mail";
    } else if (phone == "" || phone.length != 10) {
        document.getElementById("phoneerror").innerText = "Enter a valid E-mail";
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("origin", origin);
        localStorage.setItem("destination", destination);
        window.open("addressInfo.html", "_self");
    }
}

function validateSecondaryInfo() {
    const originAddress = document.getElementById("originaddress").value;
    const destinationAddress = document.getElementById("destaddress").value;
    const originfloor = document.getElementById("originfloor").value;
    const destfloor = document.getElementById("destfloor").value;
    const originlift = document.getElementById("originlift").checked;
    const destlift = document.getElementById("destlift").checked;
    const configuration = document.getElementById("configuration").value;

    jQuery(".error").text("");
    if (originAddress == "") {
        document.getElementById("originaddresserror").innerText = "Enter address";
    } else if (destinationAddress == "") {
        document.getElementById("destaddresserror").innerText = "Enter address";
    } else if (!originlift && originfloor == "") {
        document.getElementById("originfloorerror").innerText = "Enter floor no";
    } else if (!destlift && destfloor == "") {
        document.getElementById("destfloorerror").innerText = "Enter floor no";
    } else {
        localStorage.setItem("originAddress", originAddress);
        localStorage.setItem("destinationAddress", destinationAddress);
        localStorage.setItem("originfloor", originfloor);
        localStorage.setItem("destfloor", destfloor);
        localStorage.setItem("originlift", originlift);
        localStorage.setItem("destlift", destlift);
        localStorage.setItem("configuration", configuration);
        window.open("furnitureInfo.html", "_self");
    }
}

function validateFinalInfo() {
    const date = new Date();

    let currentDay = String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    let currentYear = date.getFullYear();

    // we will display the date as DD-MM-YYYY 

    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

    const sofa = document.getElementById("sofa").value || 0;
    const tv = document.getElementById("tv").value || 0;
    const washing = document.getElementById("tv").washing || 0;

    

    var source = jQuery("#finalInvoice").html();
    var template = Handlebars.compile(source);
    config = {
        name: localStorage.getItem("name"),
        date: currentDate,
        originAddress: localStorage.getItem("originAddress"),
        destinationAddress: localStorage.getItem("destinationAddress")
    }
    localStorage.setItem("template", template(config));
    window.open("final.html", "_target");
}