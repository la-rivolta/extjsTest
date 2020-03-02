/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('UsersApp.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.extra',
    name: [], //пытаюсь объявить глобальную переменную, но не выходит, при обращении к ней получаю ошибки
    
    requires: [
        'UsersApp.store.Personnel',
        'UsersApp.view.main.Vars'
    ],

    store: {
        type: 'personel'
    },

    


    Submit: function () {
        class CreatePerson{
            constructor(name, email, phone){
                this.name = name;
                this.email = email;
                this.phone = phone;
            }
        }
        var lastname = this.getView().items.items[0].lastValue;
        var lastemail = this.getView().items.items[1].lastValue;
        var lastphone = this.getView().items.items[2].lastValue;
        const person = {'name' : lastname, 'email' : lastemail, 'phone' : lastphone};
        name.push(new CreatePerson(person.name, person.email, person.phone));//пытаюсь запушить элемент, но не получается
        //window.localStorage.setItem('person', JSON.stringify(name));
        Ext.getStore('personel').add(person);
        this.getView().reset();
    }

});
