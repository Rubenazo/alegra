Ext.define('Alegra.model.PriceList', {
	extend: 'Ext.data.Model',

	fields: [
		{ name: 'name', type: 'string' },
		{ name: 'status', type: 'string' },
		{ name: 'type', type: 'string' },
		{ name: 'percentage', type: 'number' }
	]
});