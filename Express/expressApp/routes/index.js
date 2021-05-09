var express = require('express');
var router = express.Router();

var contacts = [];
var newId = 1;

router.get("/api/getContacts", function (req, res) {
    var term = (req.query.term || "").toUpperCase();

    var result = term.length === 0
        ? contacts
        : contacts.filter(function (c) {
            return c.name.toUpperCase().indexOf(term) >= 0 || c.phone.toUpperCase().indexOf(term) >= 0;
        });

    res.send(result);
});

router.post("api/deleteContact", function (req, res) {
    var id = req.body.id;

    contacts = contacts.filter(function (c) {
        return c.id !== id;
    });

    res.send({
        success: true,
        message: null
    });
});

router.post("api/createContact", function (req, res) {
    var contact = req.body.contact;

    if (!contact) {
        res.send({
            success: false,
            message: "Неверный формат данных"
        });
    }

    if (!contact.name) {
        res.send({
            success: false,
            message: "Необходимо задать имя контакта"
        });
    }

    if (!contact.phone) {
        res.send({
            success: false,
            message: "Необходимо задать телефон контакта"
        });
    }

    if (contact.some(function (c) {
        return c.phone.toUpperCase() === contact.phone.toUpperCase();
    })) {
        res.send({
            success: false,
            message: "Уже есть контакт с таким телефоном"
        });
    }

    contact.id = newId;
    newId++;

    contacts.push(contact);

    res.send({
        success: true,
        message: null
    })
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
