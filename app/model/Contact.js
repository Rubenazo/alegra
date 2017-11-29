Ext.define('Alegra.model.Contact', {
	extend: 'Ext.data.Model',

	fields: [
		{ name: 'name',             type: 'string' },
		{ name: 'identification',   type: 'auto' },
		{ name: 'email',            type: 'string' },
		{ name: 'phonePrimary',     type: 'string' },
		{ name: 'phoneSecondary',   type: 'string' },
		{ name: 'fax',              type: 'string' },
		{ name: 'mobile',           type: 'string' },
		{ name: 'observations',     type: 'string' },
		{ name: 'cfdiUse',          type: 'string' },
		{ name: 'ignoreRepeated',   type: 'boolean', defaultValue: true },
		{ name: 'type',             type: 'auto' },
		{ name: 'address',          type: 'auto' },
		{ name: 'seller',           type: 'auto' },
		{ name: 'term',             type: 'auto' },
		{ name: 'priceList',        type: 'auto' },
		{ name: 'internalContacts', type: 'auto' }
	],

	validators: {
        name:           [ { type: 'presence' }, { type: 'length', max: 90 } ],
        identification: { type: 'presence' },
        email:          { type: 'length', max: 100 },
        phonePrimary:   { type: 'length', max: 45 },
        phoneSecondary: { type: 'length', max: 45 },
        fax:            { type: 'length', max: 45 },
        mobile:         { type: 'length', max: 45 },
        observations:   { type: 'length', max: 500 }
    }
});