"use strict";

$(document).ready(function () {
    var surname = $("#surname");
    var name = $("#name");
    var phone = $("#phone");

    var addButton = $("#add_button");

    var tableBody = $("#table_body");

    var surnameErrorMessage = $("#surname_error");
    var nameErrorMessage = $("#name_error");
    var phoneErrorMessage = $("#phone_error");

    addButton.click(function () {
        var surnameValue = surname.val();
        var nameValue = name.val();
        var phoneNumber = phone.val();

        if (surnameValue === "") {
            surnameErrorMessage.text("Введите фамилию.");
            surname.addClass("border_error");

            return;
        }

        surnameErrorMessage.text("");
        surname.removeClass("border_error");

        if (nameValue === "") {
            nameErrorMessage.text("Введите имя.");
            name.addClass("border_error");

            return;
        }

        nameErrorMessage.text("");
        name.removeClass("border_error");

        if (phoneNumber === "") {
            phoneErrorMessage.text("Введите номер телефон.");
            phone.addClass("border_error");

            return;
        }

        var regularExpression = /(8)(\d{10})/;

        if (!regularExpression.test(phoneNumber)) {
            phoneErrorMessage.text("Введите в формате 8хххххххххх");
            phone.addClass("border_error");

            return;
        }

        phoneNumber = phoneNumber.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4-$5');

        phoneErrorMessage.text("");
        phone.removeClass("border_error");

        var row = $("<tr>");

        row.html("<td class='row_number'></td><td class='surname_value'></td><td class='name_value'></td>" +
            "<td class='phone_number'></td><td><button type='button' class='delete_button'>х</button></td>");

        row.find(".row_number").text($(".table tr").length);
        row.find(".surname_value").text(surnameValue);
        row.find(".name_value").text(nameValue);
        row.find(".phone_number").text(phoneNumber);

        tableBody.append(row);

        row.find(".delete_button").click(function () {
            row.remove();

            $(".table tr").each(function (i) {
                $(this).find("td:first").text(i);
            });
        });

        surname.val("");
        name.val("");
        phone.val("");
    });
});