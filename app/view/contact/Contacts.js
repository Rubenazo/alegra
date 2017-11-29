Ext.define('Alegra.view.contact.Contacts', {
	extend: 'Ext.Panel',
	xtype: 'contacts',

	requires: [
		'Ext.grid.Grid',
		'Ext.layout.Fit'
	],

	layout: 'fit',

	items: [{
		xtype: 'grid',

		store: {
			type: 'contacts'
		},

		columns: [{
			text: 'Nombre',
			dataIndex: 'name'
		}, {
			text: 'Identificación',
			dataIndex: 'identification'
		}, {
			text: 'Telefono 1',
			dataIndex: 'phonePrimary'
		}, {
			text: 'Observaciones',
			dataIndex: 'observations',
			flex: 1
		}]
	}]
});