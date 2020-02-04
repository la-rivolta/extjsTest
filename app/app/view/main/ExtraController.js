Ext.define('app.view.main.ExtraController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',

    routes: {
        'home' : 'onHome'
    },

    Reset: function()
    {   
        this.getView().reset();
    },
    
    Submit: function()
    {   
        //Ext.Msg.alert('Success', 'Data sent to server');
        Ext.create('app.view.main.New', {
            renderTo: Ext.getBody()
        });
        this.redirectTo('feed');
        Ext.route.Router.resume(true);
    },
    onHome : function(){
        
    }


});