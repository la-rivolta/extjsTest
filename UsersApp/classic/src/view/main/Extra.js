Ext.define('UsersApp.view.main.Extra', {
    extend: 'Ext.form.Panel',
    requires:[
        'UsersApp.view.main.New'
        ],
    xtype: 'extra',
    controller: 'extra',
    //viewmodel: 'extra',
    name: 'form',
    // title: 'User Form',
    height: 200,
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
                        
            {
                fieldLabel: 'Name*',
                name: 'firstName',
                allowBlank: false
            },
            {
                fieldLabel: 'email*',
                name: 'email',
                vtype: 'email',
                allowBlank: false
            },
            {
                fieldLabel: 'phone*',
                name: 'phone',
                allowBlank: false
            },            
            {
                xtype: 'button',
                name: 'Submit',
                text: 'Submit',
                handler: 'Submit',
                formBind: true
            }
            ]
        });