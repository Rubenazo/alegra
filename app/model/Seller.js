Ext.define('Alegra.model.Seller', {
	extend: 'Ext.data.Model',

	fields: [
		{ name: 'name', type: 'string' },
		{ name: 'identification', type: 'string' },
		{ name: 'observations', type: 'string' },
		{ name: 'status', type: 'string' }
	],

	proxy: {
		type: 'rest',
		url: 'https://app.alegra.com/api/v1/sellers/',
		headers: {
			'Authorization': Alegra.Constants.APIKEY
		},
		reader: {
			type: 'json',
			rootProperty: 'sellers',
		}
    },
});