Ext.define('Alegra.store.Contacts', {
	extend: 'Ext.data.Store',
	alias: 'store.contacts',

	model: 'Alegra.model.Contact',

	autoLoad: true

/*
	data: [
    {
        "id": "1",
        "name": "Pedro Perez",
        "identification": "123456",
        "email": "a@a.com",
        "phonePrimary": "1234",
        "phoneSecondary": "4321",
        "fax": "12344",
        "mobile": "54321",
        "observations": "Ninguna",
        "address": {
            "address": "Calle 1",
            "city": "China"
        },
        "type": [
            "client",
            "provider"
        ],
        "seller": null,
        "term": {
            "id": "4",
            "name": "30 días",
            "days": "30"
        },
        "priceList": {
            "id": "1",
            "name": "General"
        },
        "internalContacts": []
    },
    {
        "id": "2",
        "name": "Pedro Perez",
        "identification": "123456",
        "email": "a@a.com",
        "phonePrimary": "1234",
        "phoneSecondary": "4321",
        "fax": "12344",
        "mobile": "54321",
        "observations": "Ninguna",
        "address": {
            "address": "Calle 1",
            "city": "China"
        },
        "type": [
            "client",
            "provider"
        ],
        "seller": null,
        "term": {
            "id": "4",
            "name": "30 días",
            "days": "30"
        },
        "priceList": {
            "id": "1",
            "name": "General"
        },
        "internalContacts": []
    }]
*/
});