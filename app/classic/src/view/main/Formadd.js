Ext.define('app.view.main.Formadd', {
    extend: 'Ext.form.Panel',
    xtype: 'formadd',
    
    requires: [
        'app.view.main.FormaddController'
    ],
    controller: 'formadd',
    layout:{type:'hbox'},
    bodyPadding: 10,
    hidden: true,
    items: [
        {
            xtype: 'textfield',
            emptyText: 'First name',
            name: 'firstname',
            margin: 10,
            allowBlank: false,
        },            
        {
            xtype: 'textfield',
            emptyText: 'Last name',            
            name: 'lastname',
            margin: 10,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            emptyText: 'Age',
            name: 'age',
            margin: 10,
            allowBlank: false
        },
        {   
            xtype: 'textfield',
            vtype: 'email',
            emptyText: 'Email',
            name: 'email',
            margin: 10,
            allowBlank: false
        },    
        {
            xtype: 'button',
            name: 'Add',
            text: '+ Add user',
            ui: 'greenButton',
            margin: 10,
            formBind: true,
            listeners: {
                click: 'Add'
            }
        },
        {
            xtype: 'button',
            name: 'Cancell',
            text: 'Cancell',
            ui: 'greenButton',
            handler: 'Cancell',
            margin: 10,
            listeners: {
                click: 'Cancell'
            }
        }
        ]
});