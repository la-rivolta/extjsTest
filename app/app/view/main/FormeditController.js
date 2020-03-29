Ext.define('app.view.main.FormeditController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.formedit',

    requires: [
           'app.store.Personnel'
          ],

    store: {
        type: 'personnel'
       },

    Save: function(){
        let record = {};
        let values = this.getView('Formedit').getValues();
        record.firstname = values.firstname;
        record.lastname = values.lastname;
        record.age = values.age;
        record.email = values.email;
        record.guid = values.guid;
        const store = Ext.getStore('personnel').data.items;
        function countIndex(){
            for(let i = 0; i < store.length; i++){
                let guid = store[i].data.guid;
                if(guid == record.guid){
                    return i;
                }
            }
        }
        Ext.getStore('personnel').insert(countIndex(), record);
        Ext.getStore('personnel').removeAt((countIndex()+1));
        this.getView().close();
    },

    Cancell: function() {
        this.getView().close();
    }
});