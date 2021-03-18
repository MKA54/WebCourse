"use strict";

(function () {
    var people = [
        {
            lastName: "Ivanov",
            name: "Ivan",
            age: 15
        },
        {
            lastName: "Petrov",
            name: "Peter",
            age: 19
        },
        {
            lastName: "Ivanov",
            name: "Ivan",
            age: 25
        },
        {
            lastName: "Nikolaev",
            name: "Nikolay",
            age: 29
        },
        {
            lastName: "Sergeev",
            name: "Sergey",
            age: 31
        },
        {
            lastName: "Vladimirov",
            name: "Vadim",
            age: 38
        },
        {
            lastName: "Ignatov",
            name: "Anton",
            age: 9
        },
        {
            lastName: "Alekseev",
            name: "Alexey",
            age: 11
        },
        {
            lastName: "Romanov",
            name: "Roman",
            age: 24
        },
        {
            lastName: "Ilyinykh",
            name: "Ilya",
            age: 51
        }
    ];

    var peopleAverageAge = _.chain(people)
        .pluck("age")
        .reduce(function (sum, number) {
            return sum + number;
        }, 0) / people.length;

    console.log("Средний возраст людей: " + peopleAverageAge);

    var sortedListPeople = _.chain(people)
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy("age")
        .value();

    console.log("Отсортированный список людей:");

    _.each(sortedListPeople, function (person) {
        console.log(person);
    });

    console.log("Список людей:");

    _.each(people, function (person) {
        person.fullName = person.lastName + " " + person.name;
        console.log(person);
    });
})();