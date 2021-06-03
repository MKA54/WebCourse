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

new Vue({
    el: "#app",

    data: {
        contacts: [],
        name: "",
        phone: "",
        term: ""
    },

    created: function () {
        this.loadContacts();
    },

    methods: {
        loadContacts: function () {
            var self = this;

            get("/api/getContacts", {term: this.term}).done(function (response) {
                self.contacts = response;
            });
        }
    }
});