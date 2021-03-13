"use strict";

$(document).ready(function () {
    var nextTodoTextField = $("#new_todo_text");
    var list = $("#list");
    var enterError = $("#error_message");
    var addButton = $("#add_button");

    addButton.click(function () {
        var text = nextTodoTextField.val();

        if (text === "" || text.match(/^[ ]+$/)) {
            enterError.text("Введите текст.");

            return;
        }

        enterError.text("");

        function setViewMode() {
            listItem.html("<span class='text'></span><button type='button' class='edit_button'>Редактировать</button>" +
                "<button type='button' class='delete_button'>Удалить</button>");

            listItem.find(".delete_button").click(function () {
                listItem.remove();
            });

            listItem.find(".edit_button").click(function () {
                listItem.html("<input class='edit_text' /><button type='button' class='save_button'>Сохранить</button>" +
                    "<button type='button' class='cancel_button'>Отмена</button>");

                listItem.find(".save_button").click(function () {
                    text = listItem.find(".edit_text").val();

                    if (text === "" || text.match(/^[ ]+$/)) {
                        itemError.text("Введите текст.");

                        listItem.append(itemError);
                    }

                    itemError.text("");

                    setViewMode();
                });

                var cancelButton = listItem.find(".cancel_button");

                cancelButton.click(function () {
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