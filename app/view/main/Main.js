Ext.define('Alegra.view.main.Main', {
	extend: 'Ext.Panel',
	controller: 'main',
	layout: {
        type: 'vbox'
    },

	requires: [
		'Ext.field.Text'
	],

	items: [{
		xtype: 'titlebar',
	    docked: 'top',
	    title: '<img id="alegra-logo" src="resources/images/logo_alegra.png" alt="Alegra">',
	    items: [{
            xtype: 'textfield',
			label: 'Buscar...',
			align: 'right'
        }]
	}, {
		xtype: 'tabs',
		flex: 1
	}]
});