"use strict";

(function () {
    var array = [1, 5, 7, 6, 2, 15, 19, 20, 4, 13, 11];
    console.log(array);

    function sortDescending(array) {
        array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    sortDescending(array)
    console.log(array);

    function getFirstFiveArrayElements(array) {
        return array.slice(0, 5);
    }

    var subarray1 = getFirstFiveArrayElements(array);
    console.log(subarray1);

    function getLastFiveArrayElements(array) {
        return array.slice(array.length - 5);
    }

    var subarray2 = getLastFiveArrayElements(array);
    console.log(subarray2);

    function getEvenNumbersSum(array) {
        return array
            .filter(function (element) {
                return element % 2 === 0;
            })
            .reduce(function (sum, element) {
                return sum + element;
            }, 0);
    }

    var evenElementsSum = getEvenNumbersSum(array);
    console.log(evenElementsSum);
})();

(function () {
    var array = new Array(100);

    for (var i = 0; i < array.length; i++) {
        array[i] = i + 1;
    }

    console.log(array);

    function getEvenNumbersSquaresList() {
        return array
            .filter(function (element) {
                return element % 2 === 0;
            })
            .map(function (element) {
                return Math.pow(element, 2);
            });
    }

    var evenNumbersSquaresList = getEvenNumbersSquaresList(array);
    console.log(evenNumbersSquaresList);
})();