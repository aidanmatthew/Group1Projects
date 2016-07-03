/*
 * File: app/controller/viewPortControllers.js
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

Ext.define('BookingManagementSystem.controller.viewPortControllers', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'registerButton',
            selector: '#registerButton'
        },
        {
            ref: 'loginButton',
            selector: '#loginButton'
        }
    ],

    onRegisterButtonClick: function() {
        Ext.getBody().mask();
        Ext.create('BookingManagementSystem.view.MyWindow',{


        }).show();

    },

    onLoginButtonClick: function() {
                var form = this.loginPage.getForm();
                if(form.isValid()){
                    if(this.validateLogin(form) === -1){
                        this.showErrorMessage('User does not exist');
                    }else if(this.validateLogin(form) === 0){
                        this.showErrorMessage('Wrong Password!');
                    }else{
                        this.userStore.getById();
                        var index = this.userStore.find("userName", form.getValues().userName);
                        var userInfo = this.userStore.getAt(index);
                        Ext.create('BookingManagementSystem.view.Homepage',{
                            userInfo: userInfo
                         }).show();
                    }

                }else{
                    this.showErrorMessage('All fields must have a value');
                }
    },

    onAddBookButtonClick: function() {
                Ext.getBody().mask();
                Ext.create('BookingManagementSystem.view.addBookWindow',{

                        }).show();
    },

    onBooksGridItemClick: function() {
                Ext.getCmp('viewBookButton').enable();
                Ext.getCmp('deleteBookButton').enable();
                Ext.getCmp('userViewBookButton').enable();
                Ext.getCmp('userCheckoutBookButton').enable();
    },

    onDeleteBookButtonClick: function() {
              var booksGrid = Ext.getCmp('booksGrid');
                var selectedModel = booksGrid.getSelectionModel().getSelection()[0];
        var title = selectedModel.data.title;
        var bookId = selectedModel.data.bookId;
        console.log(selectedModel);
            Ext.Msg.confirm("Confirmation", "Do you want to Delete \""+ title +"\"?", function(btnText){
                    if(btnText === "yes"){
                        this.bookStore.remove(selectedModel);
                    }
                }, this);
    },

    onViewBookButtonClick: function() {
                Ext.getBody().mask();
                Ext.create('BookingManagementSystem.view.viewBookWindow',{
                    record:Ext.getCmp('booksGrid').getSelectionModel().getSelection()[0],
                    uType: this.uType
                }).show();


    },

    onHomePageAfterRender: function(component, eOpts) {
                this.userInformation = component.userInfo;
                var firstName = this.userInformation.data.firstName;
                var lastName = this.userInformation.data.lastName;
                this.userName = this.userInformation.data.userName;
                this.uType = this.userInformation.data.uType;
                this.userBookStore=Ext.getStore('userBookStore');
                Ext.getCmp('welcomeUserLabel').getEl().update('Welcome ' + firstName + ' ' + lastName);
                console.log(this.uType);
                if(this.uType == 'admin'){
                    Ext.getCmp('userBooksToolbar').hide();

        //             Ext.getCmp('usersTab').show();
                }else{
                    Ext.getCmp('adminBooksToolbar').hide();
                    Ext.getCmp('checkoutByColumn').hide();
                    Ext.getCmp('homePageTab').child('#usersTab').tab.hide();
        //             Ext.getCmp('usersTab').hide();

                }
    },

    onLogoutButtonClick: function() {
        Ext.Msg.confirm("Confirmation", "Are you sure you want to logout?", function(btnText){
                    if(btnText === "yes"){
                            Ext.getCmp('homePage').destroy();
                            Ext.getCmp('userName').setValue('');
                            Ext.getCmp('password').setValue('');
                    }
                }, this);
    },

    onUserViewBookButtonClick: function() {
                Ext.getBody().mask();
                Ext.create('BookingManagementSystem.view.viewBookWindow',{
                    record:Ext.getCmp('booksGrid').getSelectionModel().getSelection()[0],
                    uType: this.uType,
                    userName:this.userName,
                    userId:this.userId
                }).show();
    },

    onUserCheckoutBookButtonClick: function() {
                Ext.Msg.confirm("Confirmation", "CheckOut this book?", function(btnText){
                    var record = Ext.getCmp('booksGrid').getSelectionModel().getSelection()[0];
                    if(btnText === "yes"){

                        var currentAvailable = record.data.available - 1;
                        var bookHistoryStore = this.bookHistoryStore;

                        var historyLog = {
                            bookId:record.data.bookId,
                            action:"Checked out book",
                            date: new Date(),
                            userName: this.userName
                        };
                        var userBook = {
                            title: record.data.title,
                            description:record.data.description,
                            checkoutDate:new Date(),
                            userId:this.userId
                        };

                    this.userBookStore.add(userBook);
                    bookHistoryStore.add(historyLog);
                    record.set('available', currentAvailable);
                        }


                    }, this);
    },

    onLaunch: function() {
                this.loginPage = Ext.getCmp('loginPage');
                this.userStore = Ext.getStore('userStore');
                this.booksGrid = Ext.getCmp('booksGrid');
                this.bookStore = Ext.getStore('bookStore');
                this.bookHistoryStore=Ext.getStore('bookHistoryStore');
                this.userBookStore=Ext.getStore('userBookStore');
    },

    showLoadingMessageMask: function() {
                    if (!this.oLoadingMessageMask) {
                       this.oLoadingMessageMask = new Ext.LoadMask(Ext.getBody(), {
                          msg : "Processing, please wait..."
                       });
                    }
                    this.oLoadingMessageMask.show();
    },

    hideLoadingMessageMask: function() {
                    if (this.oLoadingMessageMask) {
                       this.oLoadingMessageMask.hide();
                    }

    },

    showErrorMessage: function(message) {
                Ext.MessageBox.show({
                    title:document.title,
                    msg: message,
                    buttons: Ext.MessageBox.OK,
                    icon:Ext.MessageBox.ERROR
                });
    },

    showSuccessMessage: function(message) {
                Ext.MessageBox.show({
                    title:document.title,
                    msg: message,
                    buttons: Ext.MessageBox.OK,
                    icon:Ext.MessageBox.SUCCESS
                });
    },

    validateLogin: function(form) {
                var userStore = this.userStore;
                var userName = form.getValues().userName;
                var password = form.getValues().password;
                var index = userStore.find("userName", userName);
                if(index === -1){
                    return -1;
                }else{
                    var storePassword = userStore.getAt(index).data.password;
                    if(password == storePassword){
                        return 1;
                    }else{
                        return 0;
                    }
                }
    },

    init: function(application) {
        this.control({
            "#registerButton": {
                click: this.onRegisterButtonClick
            },
            "#loginButton": {
                click: this.onLoginButtonClick
            },
            "#addBookButton": {
                click: this.onAddBookButtonClick
            },
            "#booksGrid": {
                itemclick: this.onBooksGridItemClick
            },
            "#deleteBookButton": {
                click: this.onDeleteBookButtonClick
            },
            "#viewBookButton": {
                click: this.onViewBookButtonClick
            },
            "#homePage": {
                afterrender: this.onHomePageAfterRender
            },
            "#logoutButton": {
                click: this.onLogoutButtonClick
            },
            "#userViewBookButton": {
                click: this.onUserViewBookButtonClick
            },
            "#userCheckoutBookButton": {
                click: this.onUserCheckoutBookButtonClick
            }
        });
    }

});
