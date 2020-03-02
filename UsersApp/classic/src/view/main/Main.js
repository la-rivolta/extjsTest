/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('UsersApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'UsersApp.view.main.MainController',
        'UsersApp.view.main.MainModel',
        'UsersApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    //  header: {
    //     layout: {
    //          align: 'stretchmax'
    //      },
    //      title: {
    //          bind: {
    //              text: '{name}'
    //          },
    //          flex: 0
    // //YY     },
    // //     iconCls: 'fa-th-list'
    // // },

    // responsiveConfig: {
    //     tall: {
    //         headerPosition: 'top'
    //     }
    // },

    items: [{
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [
            {
            xtype: 'extra'
            },
            {
             xtype: 'mainlist'
            }
        ]
    }]
});
