"use strict";

$(document).ready(function () {
    var nextTodoTextField = $("#new_todo_text");
    var list = $("#list");
    var errorMessage = $("#error_message");
    var form = $("#form");

    $("#add_button").click(function () {
        var text = nextTodoTextField.val().trim();

        if (text === "") {
            errorMessage.removeClass("invalid-feedback");

            form.addClass("was-validated");

            nextTodoTextField.val("");

            return;
        }

        form.removeClass("was-validated");
        errorMessage.addClass("invalid-feedback");

        function setViewMode() {
            listItem.html("<span class='text'></span><button type='button' class='mx-1 btn btn-warning edit_button'>Редактировать</button>" +
                "<button type='button' class='btn btn-danger delete_button'>Удалить</button>");

            var initialText = listItem.find(".text").text(text);

            listItem.find(".delete_button").click(function () {
                listItem.remove();
            });

            listItem.find(".edit_button").click(function () {
                listItem.html("<input type='text' class='edit_text' /><button type='button' class='mx-1 btn btn-success save_button'>Сохранить</button>" +
                    "<button type='button' class='btn btn-danger cancel_button'>Отмена</button>");

                listItem.find(".edit_text").val(text);

                listItem.find(".save_button").click(function () {
                    text = listItem.find(".edit_text").val().trim();

                    if (text === "") {
                        itemError.text("Введите текст.");

                        listItem.append(itemError);
                        listItem.find(".edit_text").val("");

                        return;
                    }

                    itemError.text("");

                    setViewMode();
                });

                listItem.find(".cancel_button").click(function () {
                    text = initialText.text();

                    setViewMode();
                });
            });
        }

        var listItem = $("<li>").addClass("list-group-item border-bottom border-info bg bg-light");
        var itemError = $("<div>").addClass("alert-link alert-danger indent mt-2");

        setViewMode();

        list.addClass("border border-info");

        list.append(listItem);
        nextTodoTextField.val("");
    });
});