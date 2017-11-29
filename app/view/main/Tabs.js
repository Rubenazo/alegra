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
		title: 'Home',
		iconCls: 'x-fa fa-home',
		padding: 20,
		html: '<h1 class="main-banner">Hello World!</h1>',
		items: [{
			xtype: 'textfield',
			label: 'User name',
			bind: '{userName}',
			listeners: {
				action: 'onGo'
			}
		}, {
			xtype: 'button',
			handler: 'onGo',
			bind: {
				disabled: '{!userName}',
				text: '{userName ? "Save: " + userName : "Save"}'
			}
		}]
	}, {
		title: 'Contactos',
		xtype: 'contacts',
		iconCls: 'x-fa fa-users'
	}, {
		title: 'Nuevo Contacto',
		iconCls: 'x-fa fa-user-plus'
	}]
});