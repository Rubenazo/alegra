Ext.define('Alegra.view.contact.DeleteModal', {
    extend: 'Ext.window.Window',
    xtype: 'deletemodal',
    controller: 'contacts',

    bind: {
        title: '{contact.name}'
    },

    floating: true,
    centered: true,
    modal: true,

    items: [{
        bind: {
            html: '¿Esta seguro de eliminar a {contact.name} de su lista de contactos?'
        }
    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            ui: 'decline',
            text: 'Eliminar',
            iconCls: 'x-fa fa-warning',
            handler: 'deleteContact'
        }, {
            xtype: 'button',
            text: 'Cerrar',
            iconCls: 'x-fa fa-close',
            handler: 'closeModal'
        }]
    }]
});