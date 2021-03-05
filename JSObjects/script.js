"use strict";

(function () {
    var countriesArray = [
        {
            name: "Russia",
            citiesList: [
                {
                    name: "Omsk", population: 1154507
                },
                {
                    name: "Tomsk", population: 597819
                },
                {
                    name: "Novosibirsk", population: 1625631
                },
                {
                    name: "Krasnoyarsk", population: 1093771
                },
            ]
        },
        {
            name: "Czech Republic",
            citiesList: [
                {
                    name: "Prague", population: 1285977
                },
                {
                    name: "Brno", population: 368533
                },
                {
                    name: "Ostrava", population: 314257
                },
                {
                    name: "Liberec", population: 103997
                }
            ]
        },
        {
            name: "United States of America",
            citiesList: [
                {
                    name: "Chicago", population: 2722389
                },
                {
                    name: "Phoenix", population: 1537058
                },
                {
                    name: "Dallas", population: 1281047
                }
            ],
        }
    ]

    console.log("Список стран:");

    countriesArray.forEach((country) => {
        console.log(country);
    });

    function getCountriesWithMaxCountCities(array) {
        var maxCitiesCount = 0;

        array.forEach((element) => {
            if (element.citiesList.length > maxCitiesCount) {
                maxCitiesCount = element.citiesList.length;
            }
        })

        return array.filter(element => element.citiesList.length === maxCitiesCount);
    }

    var countriesWithMaxCountCities = getCountriesWithMaxCountCities(countriesArray);

    console.log("Страна(ы) с максимальным количеством городов:");

    countriesWithMaxCountCities.forEach((country) => {
        console.log(country);
    });

    console.log("Список стран с численностью населения:");

    function getInformationByCountries(array) {
        return array.map(function (country) {
            return {
                [country.name]: country.citiesList.reduce(function (sum, element) {
                    return sum + element.population;
                }, 0)
            };
        });
    }

    var informationByCountries = getInformationByCountries(countriesArray);

    informationByCountries.forEach((country) => {
        console.log(country);
    });
})();