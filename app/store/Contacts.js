Ext.define('Alegra.store.Contacts', {
	extend: 'Ext.data.Store',
	alias: 'store.contacts',

	model: 'Alegra.model.Contact',

	proxy: {
		type: 'rest',
		url: 'https://app.alegra.com/api/v1/contacts/',
		headers: {
			'Accept': '*/*',
			'Authorization': 'Basic -'
		},
		reader: {
			type: 'json',
			rootProperty: 'contacts',
		}
    },
	autoLoad: true
});