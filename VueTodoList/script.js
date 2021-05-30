Vue.use(window.vuelidate.default);
const {required} = window.validators;

Vue.component("todo-list-item", {
    props: {
        item: {
            type: Object
        }
    },

    data: function () {
        return {
            isEditing: false,
            editText: ""
        };
    },

    validations: {
        editText: {
            required
        }
    },

    template: "#todo-list-item-template",

    methods: {
        status(validation) {
            return {
                error: validation.$error,
                dirty: validation.$dirty
            }
        },

        startEditItem: function () {
            this.editText = this.item.text;
            this.isEditing = true;
        },

        stopEditItem: function () {
            this.isEditing = false;
        },

        saveItem: function () {
            this.$v.$touch();

            if (this.$v.editText.$invalid) {
                return;
            }

            this.$v.$reset();

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

    validations: {
        newTodoText: {
            required
        }
    },

    template: "#todo-list-template",

    methods: {
        status(validation) {
            return {
                error: validation.$error,
                dirty: validation.$dirty
            }
        },

        addNewTodoItem: function () {
            this.$v.$touch();

            if (this.$v.newTodoText.$invalid) {
                return;
            }

            this.$v.$reset();

            var text = this.newTodoText;

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
            });
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