Vue.component

new Vue({
    el: "#app",

    data: {
        telephones: [
            {
                phoneImage: "public/Apple iphone 12.jpg",
                name: "Apple iPhone 12",
                producer: "Apple",
                releaseYear: 2020,
                diagonal: "6,1",
                producingCountry: "China",
                memorySize: "128 Гб",
                screenRefreshRate: "60 Гц",
                NFC: "public/bad.jpg",
                eSIM: "public/ok.jpg",
                wirelessCharging: "public/ok.jpg",
                cost: "81 990"
            },
            {
                phoneImage: "public/xiaomi mi 11 lite.jpeg",
                name: "Xiaomi Mi 11 Lite",
                producer: "Xiaomi",
                releaseYear: 2021,
                diagonal: "6,55",
                producingCountry: "China",
                memorySize: "128 Гб",
                screenRefreshRate: "60 Гц",
                NFC: "public/ok.jpg",
                eSIM: "public/ok.jpg",
                wirelessCharging: "public/bad.jpg",
                cost: "27 490"
            },
            {
                phoneImage: "public/samsung galaxy a72.jpg",
                name: "Samsung Galaxy A72",
                producer: "Samsung",
                releaseYear: 2021,
                diagonal: "6,7",
                producingCountry: "Vietnam",
                memorySize: "128 Гб",
                screenRefreshRate: "90 Гц",
                NFC: "public/ok.jpg",
                eSIM: "public/bad.jpg",
                wirelessCharging: "public/ok.jpg",
                cost: "32 890"
            },
            {
                phoneImage: "public/samsung galaxy s21.jpg",
                name: "Samsung Galaxy S21",
                producer: "Samsung",
                releaseYear: 2021,
                diagonal: "6,2",
                producingCountry: "Vietnam",
                memorySize: "128 Гб",
                screenRefreshRate: "120 Гц",
                NFC: "public/ok.jpg",
                eSIM: "public/ok.jpg",
                wirelessCharging: "public/ok.jpg",
                cost: "58 790"
            },
            {
                phoneImage: "public/apple iphone xr.jpg",
                name: "Apple iPhone Xr",
                producer: "Apple",
                releaseYear: 2018,
                diagonal: "6,1",
                producingCountry: "China",
                memorySize: "64 Гб",
                screenRefreshRate: "60 Гц",
                NFC: "public/ok.jpg",
                eSIM: "public/ok.jpg",
                wirelessCharging: "public/ok.jpg",
                cost: "70 000"
            },
            {
                phoneImage: "public/Realme 8 pro.jpg",
                name: "Realme 8 Pro",
                producer: "Realme",
                releaseYear: 2021,
                diagonal: "6,4",
                producingCountry: "China",
                memorySize: "128 Гб",
                screenRefreshRate: "60 Гц",
                NFC: "public/ok.jpg",
                eSIM: "public/bad.jpg",
                wirelessCharging: "public/bad.jpg",
                cost: "24 990"
            }
        ],

        uploadPhones: [],
        itemsNotDisplayed: [],
        showModal: false,
        checked: false,
        phonesCount: 3
    },

    created: function () {
        this.uploadPhonesList();
    },

    methods: {
        uploadPhonesList: function () {
            this.uploadPhones = [];

            for (var i = 0; i < this.phonesCount; i++) {
                this.uploadPhones.push(this.telephones[i])
            }
        },

        showDistinctions: function () {
            for (var i = 2, row; row = table.rows[i]; i++) {

                for (var j = 1, k = 2, currentColumn, nextColumn; currentColumn = row.cells[j], nextColumn = row.cells[k]; j++, k++) {
                    if (currentColumn.textContent !== nextColumn.textContent) {

                    }
                }


            }
        }
    }
});