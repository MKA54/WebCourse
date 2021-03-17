"use strict";

(function () {
    var countriesArray = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Omsk",
                    population: 1154507
                },
                {
                    name: "Tomsk",
                    population: 597819
                },
                {
                    name: "Novosibirsk",
                    population: 1625631
                },
                {
                    name: "Krasnoyarsk",
                    population: 1093771
                }
            ]
        },
        {
            name: "Czech Republic",
            cities: [
                {
                    name: "Prague",
                    population: 1285977
                },
                {
                    name: "Brno",
                    population: 368533
                },
                {
                    name: "Ostrava",
                    population: 314257
                },
                {
                    name: "Liberec",
                    population: 103997
                }
            ]
        },
        {
            name: "United States of America",
            cities: [
                {
                    name: "Chicago",
                    population: 2722389
                },
                {
                    name: "Phoenix",
                    population: 1537058
                },
                {
                    name: "Dallas",
                    population: 1281047
                }
            ]
        }
    ];

    console.log("Список стран:");

    countriesArray.forEach(function (country) {
        console.log(country);
    });

    function getCountriesWithMaxCountCities(countriesArray) {
        var maxCitiesCount = 0;

        countriesArray.forEach(function (country) {
            if (country.cities.length > maxCitiesCount) {
                maxCitiesCount = country.cities.length;
            }
        });

        return countriesArray.filter(function (element) {
            return element.cities.length === maxCitiesCount
        });
    }

    var countriesWithMaxCountCities = getCountriesWithMaxCountCities(countriesArray);

    console.log("Страна(ы) с максимальным количеством городов:");

    countriesWithMaxCountCities.forEach(function (country) {
        console.log(country);
    });

    console.log("Список стран с численностью населения:");

    function getInformationByCountries(countriesArray) {
        var informationByCountries = {};

        countriesArray.forEach(function (country) {
            informationByCountries[country.name] = country.cities.reduce(function (sum, element) {
                return sum + element.population;
            }, 0);
        });

        return informationByCountries;
    }

    console.log(getInformationByCountries(countriesArray));
})();