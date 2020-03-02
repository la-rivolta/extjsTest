/**
 * This view is an example list of people.
 */
Ext.define('UsersApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'main',

    requires: [
        'UsersApp.store.Personnel',
        'UsersApp.view.main.MainController'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Delete', flex: 1,
            renderer: function() {
                return '<button class="delete" href="javascript:void(0)">Delete</button>'
            }
    }

    ],

    listeners: {

        cellclick : 'cellclick'

    }

});
