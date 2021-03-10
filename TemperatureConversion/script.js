"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var initialTemperature = document.getElementById("initial_temperature");
    var kelvin = document.getElementById("kelvin");
    var fahrenheit = document.getElementById("fahrenheit");
    var errorMessage = document.getElementById("errorMessage");

    var resultKelvin = document.createElement("span");
    var resultFahrenheit = document.createElement("span");

    document.getElementById("convert_button").addEventListener("click", function () {
        var initialValue = parseFloat(initialTemperature.value);

        if (isNaN(initialValue)) {
            errorMessage.textContent = "Введите число!";

            resultKelvin.textContent = "";
            resultFahrenheit.textContent = "";

            return;
        }

        errorMessage.textContent = "";

        function getTemperatureInKelvin() {
            return (initialValue + 273.15).toFixed(2);
        }

        function getTemperatureInFahrenheit() {
            return (9 / 5 * initialValue + 32).toFixed(2);
        }

        resultKelvin.textContent = ": " + getTemperatureInKelvin(initialTemperature);
        kelvin.appendChild(resultKelvin);

        resultFahrenheit.textContent = ": " + getTemperatureInFahrenheit(initialTemperature);
        fahrenheit.appendChild(resultFahrenheit);
    });
});