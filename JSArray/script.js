"use strict";

(function () {
    var array = [1, 5, 7, 6, 2, 15, 19, 20, 4, 13, 11];

    console.log(array);

    array.sort(function (e1, e2) {
        return e2 - e1;
    });

    console.log(array);

    var subarray1 = array.slice(0, 5);

    console.log(subarray1);

    var subarray2 = array.slice(array.length - 5);

    console.log(subarray2);

    var evenElementsSum = array
        .filter(function (element) {
            return element % 2 === 0;})
        .reduce(function (sum, element) {
            return sum + element;}, 0);

    console.log(evenElementsSum);
})();

(function () {
    var array = new Array(100);

    for (var i = 0, j = 1; i < array.length; i++, j++) {
        array[i] = j;
    }

    console.log(array);

    var evenNumbersListSquares = array
        .filter(function (element) {
            return element % 2 === 0;})
        .map(function (element) {
            return Math.pow(element, 2);});

    console.log(evenNumbersListSquares);
})();