"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var initialTemperature = document.getElementById("initial_temperature");

    var kelvin = document.getElementById("kelvin");

    var fahrenheit = document.getElementById("fahrenheit");

    var errorMessage = document.getElementById("error_message");

    var resultKelvin = document.createElement("span");

    var resultFahrenheit = document.createElement("span");

    document.getElementById("convert_button").addEventListener("click", function () {
        var initialValue = initialTemperature.value;

        if (isNaN(initialValue) || initialValue === "") {
            errorMessage.textContent = "Введите число!";
            return;
        }

        errorMessage.textContent = "";

        resultKelvin.textContent = ": " + (Number(initialValue) + 273.15).toFixed(2);
        kelvin.appendChild(resultKelvin);

        resultFahrenheit.textContent = ": " + (9 / 5 * initialValue + 32).toFixed(2);
        fahrenheit.appendChild(resultFahrenheit);

        initialTemperature.value = "";
    });
});