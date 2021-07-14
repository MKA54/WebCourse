"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var array1 = [];
    var timer;

    canvas.onclick = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;

        x = Math.floor(x / 10);
        y = Math.floor(y / 10);

        array1[y][x] = 1;

        drawField();
    };

    function goLife() {
        var x = 50;
        var y = 50;

        for (var i = 0; i < y; i++) {
            array1[i] = [];

            for (var j = 0; j < x; j++) {
                array1[i][j] = 0;
            }
        }
    }

    goLife();

    function drawField() {
        context.clearRect(0, 0, 500, 500);

        for (var i = 0; i < 50; i++) {
            for (var j = 0; j < 50; j++) {
                if (array1[i][j] === 1) {
                    context.fillRect(j * 10, i * 10, 10, 10);
                }
            }
        }
    }

    function startLife() {
        var array2 = [];

        for (var i = 0; i < 50; i++) {
            array2[i] = [];

            for (var j = 0; j < 50; j++) {
                var neighbors = 0;

                if (array1[fpm(i) - 1][j] === 1) { //верх
                    neighbors++;
                }

                if (array1[i][fpp(j) + 1] === 1) { //право
                    neighbors++;
                }

                if (array1[fpp(i) + 1][j] === 1) { //низ
                    neighbors++;
                }

                if (array1[i][fpm(j) - 1] === 1) { // лево
                    neighbors++;
                }

                if (array1[fpm(i) - 1][fpp(j) + 1]) {
                    neighbors++;
                }

                if (array1[fpp(i) + 1][fpp(j) + 1]) {
                    neighbors++;
                }

                if (array1[fpp(i) + 1][fpm(j) - 1]) {
                    neighbors++;
                }

                if (array1[fpm(i) - 1][fpm(j) - 1]) {
                    neighbors++;
                }

                (neighbors === 2 || neighbors === 3) ? array2[i][j] = 1 : array2[i][j] = 0;
            }
        }

        array1 = array2;

        drawField();
        timer = setTimeout(startLife, 300);
    }

    function fpm(i) {
        if (i === 0) {
            return 50;
        }

        return i;
    }

    function fpp(i) {
        if (i === 49) {
            return -1;
        }

        return i;
    }

    canvas.onclick = function (event){

    }
});