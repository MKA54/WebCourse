"use strict";

$(document).ready(function () {
    var nextTodoTextField = $("#new_todo_text");
    var list = $("#list");
    var enterError = $("#error_message");

    $("#add_button").click(function () {
        var text = nextTodoTextField.val().trim();

        if (text === "") {
            enterError.text("Введите текст.");

            nextTodoTextField.val("");

            return;
        }

        enterError.text("");

        function setViewMode() {
            listItem.html("<span class='text'></span><button type='button' class='edit_button'>Редактировать</button>" +
                "<button type='button' class='delete_button'>Удалить</button>");

            var initialText = listItem.find(".text").text(text);

            listItem.find(".delete_button").click(function () {
                listItem.remove();
            });

            listItem.find(".edit_button").click(function () {
                listItem.html("<input class='edit_text' /><button type='button' class='save_button'>Сохранить</button>" +
                    "<button type='button' class='cancel_button'>Отмена</button>");

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

        var listItem = $("<li>");
        var itemError = $("<div>").addClass("error");

        setViewMode();

        list.append(listItem);
        nextTodoTextField.val("");
    });
});