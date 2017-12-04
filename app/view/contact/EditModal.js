Ext.define('Alegra.view.contact.EditModal', {
    extend: 'Ext.window.Window',
    xtype: 'editmodal',
    controller: 'contacts',

    bind: {
        title: '{contact.name}'
    },

    requires: [
      'Ext.field.Text',
      'Ext.field.Select',
      'Ext.field.Checkbox',
      'Ext.field.TextArea'
    ],

    width: 550,
    height: 400,
    floating: true,
    centered: true,
    modal: true,
    scrollable: 'vertical',

    items: [{
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'panel',
            padding: 10,
            width: 250,
            items: [{
                xtype: 'textfield',
                label: 'Nombre',
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
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Actualizar',
            iconCls: 'x-fa fa-check',
            handler: 'editContact'
        }, {
            xtype: 'button',
            text: 'Cerrar',
            iconCls: 'x-fa fa-close',
            handler: 'closeModal'
        }]
    }]
});