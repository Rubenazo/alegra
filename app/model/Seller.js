Ext.define('Alegra.model.Seller', {
	extend: 'Ext.data.Model',

	fields: [
		{ name: 'name', type: 'string' },
		{ name: 'identification', type: 'string' },
		{ name: 'observations', type: 'string' },
		{ name: 'status', type: 'string' }
	]
});