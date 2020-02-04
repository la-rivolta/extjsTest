Ext.define('app.view.main.NewController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.new',

    routes: {
        'feedback' : 'onFeedback'
    },

    Clear: function()
    {   
        this.getView().reset();
    },
    
    Submit: function()
    {   
        Ext.Msg.alert('Success', 'Thank you for you feedback');
    },

    onFeedback : function(){
       this.redirectTo('home');
    }

});