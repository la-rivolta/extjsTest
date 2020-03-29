Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
            login: 'onLoginNavigate',
            home: 'onHomeNavigate'
    },
     
    /**
    В следующих двух функциях использую promise, так как их неиспользование вызывает много ошибок
    */
    onLoginNavigate: function() {
         let promise = new Promise((resolve, reject) => {
            this.getView().destroy();
            Ext.create('app.view.main.Login', {
            renderTo: Ext.getBody()
            });
            localStorage.clear();
            resolve('result');
        });
        promise.then(
            result => {  
                console.log('Done');       
            },
            error => {
                console.log('Reject: ' + error);
            }
        );
         },
    
    onHomeNavigate: function() {
        let promise = new Promise((resolve, reject) => {
            this.getView().destroy();
            Ext.create('app.view.main.Main', {
            renderTo: Ext.getBody()
            });
            resolve('result');
        });
        promise.then(
            result => {  
                console.log('Done');       
            },
            error => {
                console.log('Reject: ' + error);
            }
           );
         },
    
    onLogoffClick: function(){
        this.redirectTo('login');
        localStorage.clear();
        },

    onRemoveUserBtnClick: function(button) {
        this.getView().getStore().remove(button.$widgetRecord);
        },

    onEditUserBtnClick: function(button) {
        const record = button.$widgetRecord.data;
        const Form = Ext.create('app.view.main.Formedit');
        Form.show();
        Form.getViewModel().set('userData', record);
        },    
    

    onShowFormadd: function(){
        let Formadd = this.getView().items.items[0].items.items[2];
        let satusFormadd = Formadd.getHidden();
        if(satusFormadd == false){
            Formadd.reset();
            Formadd.hide();
        }
        else{
            Formadd.show();
        }
    }
});
