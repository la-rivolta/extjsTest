Ext.define('app.view.main.New', {
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
                            margin: '0 0 20 0',
                            html: 'Pleas, take your feedback about this app*'
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