Ext.define('Alegra.store.PriceLists', {
	extend: 'Ext.data.Store',
	alias: 'store.pricelists',

	model: 'Alegra.model.PriceList',

	proxy: {
		type: 'rest',
		url: 'https://app.alegra.com/api/v1/price-lists/',
		headers: {
			'Authorization': 'Basic -'
		},
		reader: {
			type: 'json',
			rootProperty: 'pricelists',
		}
    },
	autoLoad: true
});