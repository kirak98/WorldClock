function updateSeconds() {
//Barcelona
let barcelonaElement = document.querySelector("#barcelona");
let barcelonaDateElement = barcelonaElement.querySelector(".date");
let barcelonaTimeElement = barcelonaElement.querySelector(".time");
let barcelonaTime = moment().tz("Europe/Madrid");

barcelonaDateElement.innerHTML = moment().format("Do MMMM YYYY");
barcelonaTimeElement.innerHTML = barcelonaTime.format("HH:mm:ss [<small>]A[</small>]");

//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = moment().format("Do MMMM YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss [<small>]A[</small>]");

}
updateSeconds();
setInterval(updateSeconds, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `<div class="city">
<div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("Do MMMM YYYY")} </div>
    </div>
<div class="time"> ${cityTime.format("HH:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);