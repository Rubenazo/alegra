Ext.define('Alegra.store.PriceLists', {
	extend: 'Ext.data.Store',
	alias: 'store.pricelists',

	model: 'Alegra.model.PriceList',

	autoLoad: true
});