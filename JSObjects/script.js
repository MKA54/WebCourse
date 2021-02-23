"use strict";

(function () {
    var countriesArray = [
        {
            name: "Russia",
            citiesList: [
                {name: "Omsk", population: 1154507},
                {name: "Tomsk", population: 597819},
                {name: "Novosibirsk", population: 1625631}]
        },
        {
            name: "Czech Republic",
            citiesList: [
                {name: "Prague", population: 1285977},
                {name: "Brno", population: 368533},
                {name: "Ostrava", population: 314257},
                {name: "Liberec", population: 103997}]
        },
        {
            name: "United States of America",
            citiesList: [
                {name: "Chicago", population: 2722389},
                {name: "Phoenix", population: 1537058},
                {name: "Dallas", population: 1281047}],
        }
    ]

    console.log(countriesArray);

    function getCountryWithMaxCountCities(array) {
        var maxCitiesCount = 0;

        for (var country in array) {
            if (array[country].citiesList.length > maxCitiesCount) {
                maxCitiesCount = array[country].citiesList.length;
            }
        }

        var result = [];

        for (var country in array) {
            if (array[country].citiesList.length === maxCitiesCount) {
                result.push(array[country].name);
            }
        }

        return result;
    }

    console.log(getCountryWithMaxCountCities(countriesArray))

    var countries = {};

    for (var country in countriesArray) {
        countries[countriesArray[country].name] = countriesArray[country].citiesList.reduce(function (sum, element) {
            return sum + element.population;
        }, 0);
    }

    console.log(countries);
})();