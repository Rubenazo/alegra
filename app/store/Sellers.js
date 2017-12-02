Ext.define('Alegra.store.Sellers', {
	extend: 'Ext.data.Store',
	alias: 'store.sellers',

	model: 'Alegra.model.Seller',

	proxy: {
		type: 'rest',
		url: 'https://app.alegra.com/api/v1/sellers/',
		headers: {
			'Authorization': 'Basic -'
		},
		reader: {
			type: 'json',
			rootProperty: 'sellers',
		}
    },
	autoLoad: true
});