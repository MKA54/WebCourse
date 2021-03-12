"use strict";

$(document).ready(function () {
    var surname = $("#surname");
    var name = $("#name");
    var phone = $("#phone");

    var addButton = $("#add_button");

    var tableBody = $("#table_body");

    var surnameMistakeMessage = $("#surname_mistake");
    var nameMistakeMessage = $("#name_mistake");
    var phoneErrorMessage = $("#phone_error");

    addButton.click(function () {
        var surnameValue = surname.val();
        var nameValue = name.val();
        var phoneNumber = phone.val();

        if (surnameValue === "") {
            surnameMistakeMessage.text("Введите фамилию.");
            surname.addClass("border_error");

            return;
        }

        surnameMistakeMessage.text("");
        surname.removeClass("border_error");


        if (nameValue === "") {
            nameMistakeMessage.text("Введите имя.");
            name.addClass("border_error");

            return;
        }

        nameMistakeMessage.text("");
        name.removeClass("border_error");

        var regularExpression = /(8)(\d{10})/;

        if (phoneNumber === "") {
            phoneErrorMessage.text("Введите номер телефон.");
            phone.addClass("border_error");

            return;
        }

        if (!regularExpression.test(phoneNumber)) {
            phoneErrorMessage.text("Введите в формате 8хххххххххх");
            phone.addClass("border_error");

            return;
        }

        phoneNumber = phoneNumber.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4-$5');

        phoneErrorMessage.text("");
        phone.removeClass("border_error");

        var line = $("<tr>");
        line.html("<td class='line_number'></td><td class='surname_value'></td><td class='name_value'></td>" +
            "<td class='phone_number'></td><td><button type='button' class='delete_button'>х</button></td>");

        line.find(".line_number").text();
        line.find(".surname_value").text(surnameValue);
        line.find(".name_value").text(nameValue);
        line.find(".phone_number").text(phoneNumber);

        tableBody.append(line)

        $('.table tbody tr').each(function (i) {
            var number = i + 1;

            line.find('td:first').text(number);
        });

        surname.val("");
        name.val("");
        phone.val("");
    });
});