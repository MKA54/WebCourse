"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var nextTodoTextField = document.getElementById("new_todo_text");
    var list = document.getElementById("list");
    var enterError = document.getElementById("error_message");
    var addButton = document.getElementById("add_button");

    addButton.addEventListener("click", function () {
        var text = nextTodoTextField.value;

        if (text === "" || text.match(/^[ ]+$/)) {
            enterError.textContent = "Введите текст.";

            nextTodoTextField.value = "";

            return;
        }

        enterError.textContent = "";

        function setViewMode() {
            listItem.innerHTML = "<span class='text'></span><button type='button' class='edit_button'>Редактировать</button>" +
                "<button type='button' class='delete_button'>Удалить</button>";

            listItem.querySelector(".text").textContent = text;

            listItem.querySelector(".delete_button").addEventListener("click", function () {
                listItem.parentNode.removeChild(listItem);
            });

            listItem.querySelector(".edit_button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit_text' /><button type='button' class='save_button'>Сохранить</button>" +
                    "<button type='button' class='cancel_button'>Отмена</button>";

                listItem.querySelector(".edit_text").value = text;

                listItem.querySelector(".save_button").addEventListener("click", function () {
                    text = listItem.querySelector(".edit_text").value;

                    if (text === "" || text.match(/^[ ]+$/)) {
                        itemError.textContent = "Введите текст."

                        listItem.appendChild(itemError);

                        return;
                    }

                    itemError.textContent = "";

                    setViewMode();
                });

                var cancelButton = listItem.querySelector(".cancel_button");

                cancelButton.addEventListener("click", function () {
                    setViewMode();
                });
            });
        }

        var listItem = document.createElement("li");

        var itemError = document.createElement("div");
        itemError.className = "error";

        setViewMode();

        list.appendChild(listItem);

        nextTodoTextField.value = "";
    });
});