Vue.use(window.vuelidate.default);
const {required, minLength} = window.validators;

Vue.component("todo-list-item", {
    props: {
        item: {
            type: Object,
            required: true
        }
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
            newId: 1
        };
    },

    validations: {
        newTodoText: {
            required,
            minLength: minLength(1)
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
            var text = this.newTodoText.trim();

            this.items.push({
                id: this.newId,
                text: text
            });

            this.newTodoText = "";
            this.newId++;
        },

        deleteItem: function (item) {
            this.items = this.items.filter(function (element) {
                return element !== item;
            });
        },

        saveItem: function (item, newText) {
            item.text = newText;
        }
    }
});

new Vue({
    el: "#app"
});