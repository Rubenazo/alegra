/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'Alegra',
    extend: 'Alegra.Application',

    requires: [
    	'Alegra.*',
    	'Ext.data.proxy.Rest'
    ],
});
