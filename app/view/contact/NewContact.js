Ext.define('Alegra.view.contact.NewContact', {
	extend: 'Ext.Panel',
	xtype: 'newcontact',
	controller: 'contacts',

	requires: [
		'Ext.field.Text'
	],

    viewModel: {
        data: {
            contact: { name: '' },
            client: false,
            provider: false
        }
    },

    scrollable: true,
    layout: {
        type: 'vbox',
        align: 'center',
    },

	items: [{
        xtype: 'panel',
        iconCls: 'x-fa fa-plus',
        title: 'Nuevo Contacto',
        margin: 20,
        padding: 20,
        border: 1,
        layout: {
            type: 'hbox',
        },
        items: [{
            xtype: 'panel',
            padding: 10,
            width: 250,
            items: [{
                xtype: 'textfield',
                label: 'Nombre*',
                bind: '{contact.name}',
            }, {
                xtype: 'textfield',
                label: 'Identificación',
                bind: '{contact.identification}',
            }, {
                xtype: 'textfield',
                label: 'Dirección',
                bind: '{contact.address.address}',
            }, {
                xtype: 'textfield',
                label: 'Ciudad',
                bind: '{contact.address.city}',
            }, {
                xtype: 'textfield',
                label: 'Correo electrónico',
                bind: '{contact.email}',
            }, {
                xtype: 'textfield',
                label: 'Teléfono 1',
                bind: '{contact.phonePrimary}',
            }, {
                xtype: 'textfield',
                label: 'Teléfono 2',
                bind: '{contact.phoneSecondary}',
            }, {
                xtype: 'textfield',
                label: 'Fax',
                bind: '{contact.fax}',
            }, {
                xtype: 'textfield',
                label: 'Celular',
                bind: '{contact.mobile}',
            }]
        }, {
            xtype: 'panel',
            padding: 10,
            width: 250,
            items: [{
                xtype: 'selectfield',
                label: 'Lista de precios',
                displayField: 'name',
                valueField: 'id',
                store: {
                    type: 'pricelists'
                },
                bind: {
                    value: '{contact.priceList.id}'
                }
            }, {
                xtype: 'selectfield',
                label: 'Vendedor',
                displayField: 'name',
                valueField: 'id',
                store: {
                    type: 'sellers'
                },
                bind: {
                    value: '{contact.seller.id}'
                }
            }, {
                xtype: 'selectfield',
                label: 'Terminos de pago',
                displayField: 'name',
                valueField: 'id',
                store: {
                    type: 'terms'
                },
                bind: {
                    value: '{contact.term.id}'
                }
            }, {
                xtype: 'checkboxfield',
                label: 'Cliente',
                value: 'client',
                bind: '{client}'
            }, {
                xtype: 'checkboxfield',
                label: 'Proveedor',
                value: 'provider',
                bind: '{provider}'
            }, {
                xtype: 'textareafield',
                label: 'Observaciones',
                bind: '{contact.observations}',
            }]
        }]
    }, {
        xtype: 'button',
        text: 'Guardar',
        margin: '0 0 20 0',
        handler: 'addContact',
        bind: {
            disabled: '{!contact.name}'
        }
    }]
});