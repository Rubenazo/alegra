Ext.define('Alegra.view.contact.Contacts', {
	extend: 'Ext.Panel',
	xtype: 'contacts',
	controller: 'contacts',

	requires: [
		'Ext.grid.Grid',
		'Ext.grid.cell.Widget',
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
			dataIndex: 'name',
			flex: 1
		}, {
			text: 'Identificación',
			dataIndex: 'identification',
			flex: 1
		}, {
			text: 'Telefono 1',
			dataIndex: 'phonePrimary',
			flex: 1
		}, {
			text: 'Observaciones',
			dataIndex: 'observations',
			flex: 3
		}, {
			text: 'Ver',
			align: 'center',
			cell: {
		        xtype: 'widgetcell',
		        widget: {
		            xtype: 'button',
		            handler: 'onViewButtonClick',
		            iconCls: 'x-fa fa-eye'
	        	},
	        }
        }, {
			text: 'Editar',
			align: 'center',
			cell: {
		        xtype: 'widgetcell',
		        widget: {
		            xtype: 'button',
		            handler: 'onEditButtonClick',
		            iconCls: 'x-fa fa-pencil'
	        	}
	        }
        }, {
			text: 'Eliminar',
			align: 'center',
	        cell: {
		        xtype: 'widgetcell',
		        widget: {
		            xtype: 'button',
		            ui: 'decline',
		            handler: 'onDeleteButtonClick',
		            iconCls: 'x-fa fa-remove'
	        	}
	        }
		}]
	}]
});