Ext.define('Alegra.model.PriceList', {
	extend: 'Ext.data.Model',

	fields: [
		{ name: 'name', type: 'string' },
		{ name: 'status', type: 'string' },
		{ name: 'type', type: 'string' },
		{ name: 'percentage', type: 'number' }
	],

	proxy: {
		type: 'rest',
		url: 'https://app.alegra.com/api/v1/price-lists/',
		headers: {
			'Authorization': Alegra.Constants.APIKEY
		},
		reader: {
			type: 'json',
			rootProperty: 'pricelists',
		}
    }
});