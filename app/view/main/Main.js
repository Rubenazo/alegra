Ext.define('Alegra.view.main.Main', {
	extend: 'Ext.Panel',
	controller: 'main',
	
	layout: {
        type: 'vbox'
    },

	items: [{
		xtype: 'titlebar',
	    docked: 'top',
	    title: '<img id="alegra-logo" src="resources/images/logo_alegra.png" alt="Alegra">',
	}, {
		xtype: 'tabs',
		flex: 1
	}]
});