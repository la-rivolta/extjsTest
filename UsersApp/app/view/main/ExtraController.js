/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('UsersApp.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.extra',
    
    requires: [
        'UsersApp.store.Personnel'
    ],

    store: {
        type: 'personel'
    },

    
    onHome : function(){
        
    },

    Submit: function () {
        var lastname = this.getView().items.items[0].lastValue;
        var lastemail = this.getView().items.items[1].lastValue;
        var lastphone = this.getView().items.items[2].lastValue;
        const person = {'name' : lastname, 'email' : lastemail, 'phone' : lastphone};
        Ext.getStore('personel').add(person);
        this.getView().reset();

        Ext.create('UsersApp.view.main.New', {
            renderTo: Ext.getBody()
        });
        this.redirectTo('feed');
        Ext.route.Router.resume(true);
    }

});
