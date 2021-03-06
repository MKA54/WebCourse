function get(url, data) {
    return $.get(url, data);
}

function post(url, data) {
    return $.post({
        url: url,
        contentType: "application/json",
        data: JSON.stringify(data)
    });
}

function PhoneBookService() {
    this.baseUrl = "/api/";

    this.getContacts = function (term) {
        return get(this.baseUrl + "getContacts", {term: term});
    };

    this.createContact = function (contact) {
        return post(this.baseUrl + "createContact", {contact: contact});
    };

    this.deleteContact = function (id) {
        return post(this.baseUrl + "deleteContact", {id: id});
    };
}

Vue.component("modal", {
    template: "#modal-template",

    data: function () {
        return {
            onOk: null
        }
    },

    methods: {
        show: function (onOk) {
            this.onOk = onOk;
            $(this.$refs.modal).modal("show");
        },

        ok: function () {
            this.onOk();
            $(this.$refs.modal).modal("hide");
        }
    }
});

new Vue({
    el: "#app",

    data: {
        contacts: [],
        name: "",
        phone: "",
        term: "",

        service: new PhoneBookService()
    },

    created: function () {
        this.loadContacts();
    },

    methods: {
        loadContacts: function () {
            var self = this;

            this.service.getContacts(this.term).done(function (response) {
                self.contacts = response;
            }).fail(function () {
                alert("Не удалось загрузить список контактов");
            });
        },

        clearSearch: function () {
            this.term = "";
            this.loadContacts();
        },

        addContact: function () {
            var contact = {
                name: this.name,
                phone: this.phone
            }

            var inputForm = $(this.$refs.inputForm);
            inputForm.removeClass("was-validated");

            var errorMessage = $(this.$refs.errorMessage)

            if (inputForm[0].checkValidity() === false) {
                inputForm.addClass("was-validated");

                if (this.phone === "") {
                    errorMessage.text("Введите номер телефона.");
                    return;
                }

                errorMessage.text("Введите номер телефона в формате 8хххххххххх.");

                return;
            }

            var self = this;

            this.service.createContact(contact).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.name = "";
                self.phone = "";

                self.loadContacts();
            }).fail(function () {
                alert("Не удалось создать контакт");
            });
        },

        deleteContactConfirm: function (contact) {
            var self = this;

            this.$refs.confirmDeleteDialog.show(function () {
                self.service.deleteContact(contact.id).done(function (response) {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }

                    self.loadContacts();
                }).fail(function () {
                    alert("Не удалось удалить контакт");
                });
            });
        }
    }
});