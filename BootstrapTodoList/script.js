"use strict";

$(document).ready(function () {
    var nextTodoTextField = $("#new_todo_text");
    var list = $("#list");
    var inputForm = $("#inputForm");

    $("#add_button").click(function () {
        inputForm.removeClass("was-validated");

        if (inputForm[0].checkValidity() === false) {
            inputForm.addClass("was-validated");

            return;
        }

        var text = nextTodoTextField.val().trim();

        function setViewMode() {
            listItem.html("<span class='text'></span><button type='button' class='mx-1 btn btn-warning edit_button'>Редактировать</button>" +
                "<button type='button' class='btn btn-danger delete_button'>Удалить</button>");

            var initialText = listItem.find(".text").text(text);

            listItem.find(".delete_button").click(function () {
                $("#modalTemplate").modal("show");

                $("#deleteButton").click(function () {
                    listItem.remove();

                    $("#modalTemplate").modal("hide");
                });
            });

            listItem.find(".edit_button").click(function () {
                listItem.html("<div class='row'><div class='d-inline-block'><input type='text' class='form-control indent edit_text' required/><div class='invalid-feedback'>Введите текст</div></div>" +
                    "<div class='d-inline-block'><button type='button' class='btn btn-success save_button ml-2'>Сохранить</button> <button type='button' class='btn btn-danger cancel_button'>Отмена</button></div></div>");

                listItem.find(".edit_text").val(text);

                listItem.find(".save_button").click(function () {
                    var listForm = $("#listForm");

                    listForm.removeClass("was-validated");

                    if (listForm[0].checkValidity() === false) {
                        listForm.addClass("was-validated");

                        return;
                    }

                    text = listItem.find(".edit_text").val().trim();

                    setViewMode();
                });

                listItem.find(".cancel_button").click(function () {
                    text = initialText.text();

                    setViewMode();
                });
            });
        }

        var listItem = $("<li>").addClass("list-group-item d-inline");

        setViewMode();

        list.append(listItem);

        nextTodoTextField.val("");
    });
});