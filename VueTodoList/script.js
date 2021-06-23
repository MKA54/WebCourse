Vue.component("todo-list-item", {
    props: {
        item: {
            type: Object,
            required: true
        },

        index: Number
    },

    data: function () {
        return {
            isEditing: false,
            editText: ""
        };
    },

    template: "#todo-list-item-template",

    methods: {
        startEditItem: function () {
            this.editText = this.item.text;
            this.isEditing = true;
        },

        stopEditItem: function () {
            this.isEditing = false;
        },

        saveItem: function () {
            //console.log(this.index)
            //console.log(this.item.id)

            var listForm = $(this.$refs.items[this.index]); // items[this.item.id]

            listForm.removeClass("was-validated");

            if (listForm[0].checkValidity() === false || this.editText.length === 0) {
                listForm.addClass("was-validated");

                return;
            }

            this.isEditing = false;
            this.$emit("save-item", this.item, this.editText);
        },

        deleteItem: function () {
            this.$emit("delete-item", this.item);
        }
    }
});

Vue.component("todo-list", {
    data: function () {
        return {
            items: [],
            newTodoText: "",
            newId: 1,
            itemForDelete: ""
        };
    },

    template: "#todo-list-template",

    methods: {
        addNewTodoItem: function () {
            var inputForm = $(this.$refs.inputForm);
            var text = this.newTodoText;

            inputForm.removeClass("was-validated");

            if (inputForm[0].checkValidity() === false || text.length === 0) {
                inputForm.addClass("was-validated");

                return;
            }

            this.items.push({
                id: this.newId,
                text: text
            });

            this.newTodoText = "";
            this.newId++;
        },

        saveItem: function (item, newText) {
            item.text = newText;
        },

        deleteItemConfirm: function (item) {
            this.itemForDelete = item;

            this.$refs.confirmDeleteDialog.show();
        },

        deleteItem: function () {
            this.items = this.items.filter(function (element) {
                return element !== this.itemForDelete;
            }, this);

            this.itemForDelete = "";
        }
    }
});

Vue.component("modal", {
    template: "#modal-template",

    methods: {
        show: function () {
            $(this.$refs.modal).modal("show");
        },

        ok: function () {
            this.$emit("ok");

            $(this.$refs.modal).modal("hide");
        }
    }
});

new Vue({
    el: "#app"
});