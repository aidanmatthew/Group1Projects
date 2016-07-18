/*
 * File: app/controller/SignUpController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Project.controller.SignUpController', {
    extend: 'Ext.app.Controller',

    views: [
        'SignUpWindow'
    ],

    refs: [
        {
            ref: 'signUpForm',
            selector: '#signUpForm'
        },
        {
            ref: 'registerBttn',
            selector: '#registerBttn'
        },
        {
            ref: 'cancel',
            selector: '#cancelBttn'
        },
        {
            ref: 'nameSignup',
            selector: '#nameSignup'
        }
    ],

    onRegisterBttnClick: function(button) {
        var data = this.getSignUpForm().getForm().getValues();

        console.log(data);

        if(Ext.isEmpty(data.username) || Ext.isEmpty(data.phone) || Ext.isEmpty(data.password) || Ext.isEmpty(data.password2) || Ext.isEmpty(data.address) || Ext.isEmpty(data.name)){
            Ext.Msg.alert('Register Failed', 'Please complete all the fields');
            return;
        }
        if(data.password !== data.password2){
            Ext.Msg.alert('Password Failed', 'Password do not match!');
            return;
        }
        var record = {
            username: data.username,
            password: data.password,
            name:  data.name,
            address: data.address,
            type: 'client'
        };
        console.log(data);
        Ext.getStore('userStore').add(record);
        button.up('window').destroy();
    },

    onCancelBttnClick: function(button) {
                button.up('window').destroy();
    },

    init: function(application) {
        this.control({
            "#registerBttn": {
                click: this.onRegisterBttnClick
            },
            "#cancelBttn": {
                click: this.onCancelBttnClick
            }
        });
    }

});
