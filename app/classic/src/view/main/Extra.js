Ext.define('app.view.main.Extra', {
    extend: 'Ext.form.Panel',
    requires:[
        'app.view.main.New'
        ],
    xtype: 'Extra',
    name: 'form',
    controller: 'extra',
    title: 'User Form',
    height: 350,
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
                        
                        {
                            xtype: 'component',
                            margin: '0 0 20 0',
                            html: 'Completed form. Fields marked * are required.'
                        },
                        {
                            fieldLabel: 'First Name*',
                            name: 'firstName',
                            allowBlank: false,
                        },
                        {
                            fieldLabel: 'Last Name*',
                            name: 'lastName',
                            allowBlank: false
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Date of Birth',
                            name: 'birthDate',
                            invalidText: '"{0}" bad. "{1}" good.'
                        },
                        {
                            fieldLabel: 'E-mail*',
                            name: 'email',
                            vtype: 'email',
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
                            name: 'Reset',
                            text: 'Reset',
                            handler: 'Reset'
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