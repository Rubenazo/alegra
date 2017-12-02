Ext.define('Alegra.view.main.Tabs', {
	extend: 'Ext.tab.Panel',
	xtype: 'tabs',

	requires: [
		'Ext.Button',
		'Ext.field.Text'
	],

	viewModel: {
		data: {
			userName: ''
		}
	},

	items: [{
		title: 'Contactos',
		xtype: 'contacts',
		iconCls: 'x-fa fa-users'
	}, {
		title: 'Nuevo Contacto',
		xtype: 'newcontact',
		iconCls: 'x-fa fa-user-plus'
	}]
});