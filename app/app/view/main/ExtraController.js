Ext.define('app.view.main.ExtraController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',

    Reset: function()
    {   
        this.getView().reset();
    },
    
    Submit: function()
    {   
        Ext.Msg.alert('Success', 'Data sent to server');
    }

});