Ext.define('UsersApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personel',

    model: 'UsersApp.model.Personnel',

    data: {},

    proxy: {
        type: 'localstorage',
        id: 'person'
    }
});
