Ext.define('Alegra.store.Terms', {
	extend: 'Ext.data.Store',
	alias: 'store.terms',

	model: 'Alegra.model.Term',

	data: [
	{
		"id": null,
		"name": "Vencimiento manual",
		"days": null
	},
	{
		"id": 1,
		"name": "De contado",
		"days": 0
	}, {
		"id": 2,
		"name": "8 días",
		"days": 8
	}, {
		"id": 3,
		"name": "15 días",
		"days": 15
	}, {
		"id": 4,
		"name": "30 días",
		"days": 30
	}, {
		"id": 5,
		"name": "60 días",
		"days": 60
	}]
});