Ext.define('app.view.main.Formedit', {
    extend: 'Ext.form.Panel',
    xtype: 'formedit',

    requires: [
        'app.view.main.FormeditController'
    ],
    controller: 'formedit',
    viewModel: {
        type: 'formedit'
    },
    layout: {type: 'vbox'},

    ui: 'topPanel',
    autoDestroy: true,
    floating: true,
    closable: true,
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            emptyText: 'Guid',
            name: 'guid',
            editable: false,
            margin: 10,
            bind: {
                value: '{userData.guid}'
            }
        },
        {
            xtype: 'textfield',
            emptyText: 'First name',
            name: 'firstname',
            margin: 10,
            bind: {
                value: '{userData.firstname}'
            }
        },
        {
            xtype: 'textfield',
            emptyText: 'Last name',
            name: 'lastname',
            margin: 10,
            bind: {
                value: '{userData.lastname}'
            }
        },
        {
            xtype: 'textfield',
            emptyText: 'Age',
            name: 'age',
            margin: 10,
            bind: {
                value: '{userData.age}'
            }
        },
        {
            xtype: 'textfield',
            vtype: 'email',
            emptyText: 'Email',
            name: 'email',
            margin: 10,
            bind: {
                value: '{userData.email}'
            }
        },
        {
            xtype: 'button',
            name: 'Save',
            text: 'Save',
            ui: 'greenButton',
            width: 170,
            margin: 10,
            formBind: true,
            listeners: {
                click: 'Save'
            }
        },
        {
            xtype: 'button',
            name: 'Cancell',
            text: 'Cancell',
            ui: 'greenButton',
            width: 170,
            margin: 10,
            listeners: {
                click: 'Cancell'
            }
        }
    ]
});