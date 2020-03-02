Ext.define('UsersApp.view.main.New', {
    extend: 'Ext.form.Panel',
    xtype: 'New',
    name: 'form',
    controller: 'new',
    title: 'This is new form',
    height: 350,
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
                        
                        {
                            xtype: 'component',
                            margin: '50 0 20 0',
                            html: 'You added data, now you can send feedback.'
                        },
                        {
                            fieldLabel: 'Your feedback*',
                            name: 'feedback',
                            allowBlank: false,
                            xtype: 'textarea'
                        },
                        {
                            xtype: 'button',
                            name: 'Clear',
                            text: 'Clear',
                            handler: 'Clear'
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