Ext.define('Alegra.view.contact.ViewModal', {
    extend: 'Ext.window.Window',
    xtype: 'viewmodal',
    controller: 'contacts',

    bind: {
        title: '{contact.name}'
    },

    floating: true,
    centered: true,
    modal: true,

    items: [{
        bind: {
            html: '<table>' +
                       '<tr><td>Identificacion:</td>     <td>{contact.identification}</td></tr>' +
                       '<tr><td>Teléfono:</td>           <td>{contact.phonePrimary}</td></tr>' +
                       '<tr><td>Teléfono 2:</td>         <td>{contact.phoneSecondary}</td></tr>' +
                       '<tr><td>Celular:</td>            <td>{contact.mobile}</td></tr>' +
                       '<tr><td>Dirección:</td>          <td>{contact.address.address}</td></tr>' +
                       '<tr><td>Ciudad:</td>             <td>{contact.address.city}</td></tr>' +
                       '<tr><td>Correo Electrónico:</td> <td>{contact.email}</td></tr>' +
                       '<tr><td>Lista de Precio:</td>    <td>{contact.priceList.name}</td></tr>' +
                       '<tr><td>Observaciones:</td>      <td>{contact.observations}</td></tr>' +
                   '</table>'
        }
    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Cerrar',
            iconCls: 'x-fa fa-close',
            handler: 'closeModal'
        }]
    }]
});