Ext.define('Alegra.view.contact.ContactsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacts',

    onViewButtonClick: function(btn) {
        var record = btn.element.component.ownerCmp._record.data;
        Ext.create({
            xtype: 'viewmodal',
            viewModel: {
                data: {
                    contact: record
                }
            }
        }).show();
    },

    onEditButtonClick: function(btn) {
        var record = btn.element.component.ownerCmp._record.data;
        Ext.create({
            xtype: 'editmodal',
            viewModel: {
                data: {
                    contact: record
                }
            }
        }).show();
    },

    onDeleteButtonClick: function(btn) {
        var record = btn.element.component.ownerCmp._record.data;
        Ext.create({
            xtype: 'deletemodal',
            viewModel: {
                data: {
                    contact: record
                }
            }
        }).show();
    },
    
    addContact: function() {
        var data = this.getViewModel().data;
        var contact = Ext.create('Alegra.model.Contact', data.contact);
        
        var type = [];
        if (data.client) type.push('client');
        if (data.provider) type.push('provider');
        contact.data.type = type;

        contact.getProxy().setUrl('http://localhost/alegra/api/public/v1/contacts');
        contact.save({
            success: function() {
                Ext.Msg.alert('Listo!', 'El nuevo contacto ha sido guardado exitosamente', function() {
                    location.reload();
                });
            },
            failure: function() {
                Ext.Msg.alert('Error', 'Ha ocurrido un error al guardar el usuario', function() {
                    location.reload();
                });
            }
        });
    },

    editContact: function() {
        var view = this.getView();

        view.destroy();
    },

    deleteContact: function(me) {
        var view = this.getView();
        var contact = Ext.create('Alegra.model.Contact', this.getViewModel().data.contact);

        contact.erase({
            success: function() {
                location.reload();
            },
            failure: function() {
                Ext.Msg.alert('Error', 'Ha ocurrido un error al eliminar el usuario');
            }
        });
        view.destroy();
    },

    closeModal: function() {
        var view = this.getView();

        view.destroy();
    }
});