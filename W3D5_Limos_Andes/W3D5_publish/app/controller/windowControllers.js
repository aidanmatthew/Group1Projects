/*
 * File: app/controller/windowControllers.js
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

Ext.define('BookingManagementSystem.controller.windowControllers', {
    extend: 'Ext.app.Controller',

    oLoadingMessageMask: null,

    refs: [
        {
            ref: 'firstName',
            selector: '#firstName'
        },
        {
            ref: 'lastName',
            selector: '#lastName'
        },
        {
            ref: 'userName',
            selector: '#userName'
        },
        {
            ref: 'password',
            selector: '#password'
        },
        {
            ref: 'contactNo',
            selector: '#contactNo'
        },
        {
            ref: 'email',
            selector: '#email'
        },
        {
            ref: 'address',
            selector: '#address'
        }
    ],

    onCancelButtonClick: function() {
            this.registerWindow.close();
            Ext.getBody().unmask();
    },

    onSubmitButtonClick: function() {
            this.showLoadingMessageMask();
            var form = this.registerPanel.getForm();
                if(form.isValid()){

                        var firstName = form.getValues().firstName;
                        var lastName = form.getValues().lastName;
                        var userName = form.getValues().userName;
                        var password = form.getValues().password;
                        var contactNo = form.getValues().contactNo;
                        var email = form.getValues().email;
                        var address = form.getValues().address;
                        var userStore = this.userStore;
                        console.log(userName);
                        var regexemail = new RegExp(/^([A-Za-z0-9_.]+)@([A-Za-z0-9]+).([A-Za-z0-9]+)$/);

                    if(!regexemail.test(email)){

                    this.hideLoadingMessageMask();
                        this.showErrorMessage('Invalid Email address!');
                    }else if(!this.isUserExist(userName)){
                               var users = {
                                   userId: this.userStore.getCount()+1,
                                    firstName:firstName,
                                    lastName: lastName,
                                    userName: userName,
                                    password:password,
                                    contactNo:contactNo,
                                    email:email,
                                    address:address
                                };
                                console.log(users);
                                    userStore.add(users);
                                this.hideLoadingMessageMask();
                                this.showSuccessMessage('User has been created');
                                this.registerWindow.close();
                                Ext.getBody().unmask();
                    }else{
                        this.hideLoadingMessageMask();
                        this.showErrorMessage('Username already exists!');
                    }


                }else{
                    this.hideLoadingMessageMask();
                    this.showErrorMessage('All fields must have a value');
                }
    },

    onRegisterWindowActivate: function(window, eOpts) {

                  this.registerPanel = Ext.getCmp('registerPanel');
                  this.registerWindow = Ext.getCmp('registerWindow');
                  this.userStore = Ext.getStore('userStore');
    },

    onSaveBookButtonClick: function() {
                var form = this.addBookPanel.getForm();
                var author = form.getValues().author;
                var description = form.getValues().description;
                var available = form.getValues().available;
                var title = form.getValues().title;
                if(form.isValid()){
                    if(!this.isBookExist(title)){
                        var book = {
                            bookId: this.bookStore.getCount() + 1,
                            title: title,
                            author: author,
                            description: description,
                            available: available
                        };

                        this.bookStore.add(book);
                        this.showSuccessMessage('Book has been successfully added!');
                        this.addBookWindow.close();
                        Ext.getBody().unmask();


                    }else{
                        this.showErrorMessage('Book with title \"'+title+'\" already exists');
                    }
                }
    },

    onAddBookWindowActivate: function(window, eOpts) {
                 this.addBookPanel = Ext.getCmp('addBookPanel');
                  this.addBookWindow = Ext.getCmp('addBookWindow');
                  this.bookStore = Ext.getStore('bookStore');
    },

    onCancelSaveBookButtonClick: function() {
            this.addBookWindow.close();
            Ext.getBody().unmask();
    },

    onAddBookWindowDestroy: function(component, eOpts) {
            Ext.getBody().unmask();
    },

    onViewCancelSaveBookButtonClick: function() {
            Ext.getCmp('viewBookWindow').close();
            Ext.getBody().unmask();
    },

    onViewBookWindowActivate: function(window, eOpts) {
                var bookInformation = window.record;
                var uType = window.uType;
                this.userName = window.userName;
                this.bookStore = Ext.getStore('bookStore');
                this.userBookStore = Ext.getStore('userBookStore');
                this.author = bookInformation.data.author;
                this.title = bookInformation.data.title;
                this.description = bookInformation.data.description;
                this.available = bookInformation.data.available;
                this.checkoutBy = bookInformation.data.checkoutBy;
                this.bookId = bookInformation.data.bookId;
                this.userId	= window.userId;
                this.viewBookPanel = Ext.getCmp('viewBookPanel');

                this.titleView = Ext.getCmp('titleView');
                this.authorView = Ext.getCmp('authorView');
                this.descriptionView = Ext.getCmp('descriptionView');
                this.availableView = Ext.getCmp('availableView');
                this.bookHistoryStore = Ext.getStore('bookHistoryStore');

                Ext.getCmp('titleView').setValue(this.title);
                Ext.getCmp('authorView').setValue(this.author);
                Ext.getCmp('descriptionView').setValue(this.description);
                Ext.getCmp('availableView').setValue(this.available);

        //              titleName = Ext.getCmp('bookHistoryStore').getValue();
                        store = Ext.getStore('bookHistoryStore');
                        store.filter('bookId', this.bookId);
                        console.log(this.bookId);

                var form = Ext.getCmp('viewBookPanel');
                if(uType !== 'admin'){
                    Ext.getCmp('titleView').setReadOnly(true);
                    Ext.getCmp('authorView').setReadOnly(true);
                    Ext.getCmp('descriptionView').setReadOnly(true);
                    Ext.getCmp('availableView').setReadOnly(true);
                    Ext.getCmp('bookHistoryGrid').hide();
                    Ext.getCmp('adminViewBookToolbar').hide();
                    Ext.getCmp('userViewBookToolbar').show();
                }else{
                     Ext.getCmp('userViewBookToolbar').hide();
                     Ext.getCmp('adminViewBookToolbar').show();
                     Ext.getCmp('bookHistoryGrid').show();
                }


    },

    onViewSaveBookButtonClick: function() {
                    var form = this.viewBookPanel.getForm();
                    var bookStore = this.bookStore;
                    var storeTitle = this.bookStore.getById(this.bookId).data.title;
                    var title = form.getValues().title;

                    var storeId = this.bookStore.getById(this.bookId).data.id;
                    var storeAuthor = this.bookStore.getById(this.bookId).data.author;
                    if(form.isValid()){
                        if(this.isBookExist(title) && storeTitle !== title && storeId !== this.bookId){
                            this.showErrorMessage('Book already exists');
                        }else{
                            bookStore.remove(bookStore.getById(this.bookId));
                            var book = {
                                id:this.bookId,
                                title:this.titleView.getValue(),
                                author:this.authorView.getValue(),
                                description:this.descriptionView.getValue(),
                                available:this.availableView.getValue()
                            };
                            bookStore.add(book);
                            this.showSuccessMessage('Book has been updated');
                            Ext.getCmp('viewBookWindow').close();
                            Ext.getBody().unmask();
                        }
                    }else{
                        this.showErrorMessage('All fields must have a value');
                    }
    },

    onViewBookWindowDestroy: function(component, eOpts) {
            Ext.getBody().unmask();
            Ext.getCmp('viewBookButton').disable();
            Ext.getCmp('deleteBookButton').disable();
             Ext.getStore('bookHistoryStore').clearFilter();
    },

    onCheckOutThisBookClick: function() {
                Ext.Msg.confirm("Confirmation", "Checkout this book?", function(btnText){
                    var record = Ext.getCmp('booksGrid').getSelectionModel().getSelection()[0];
                    if(btnText === "yes"){

                        var currentAvailable = record.data.available - 1;

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
                        Ext.getCmp('viewBookWindow').close();
                        Ext.getBody().unmask();
                    this.userBookStore.add(userBook);
                    this.bookHistoryStore.add(historyLog);
                    record.set('available', currentAvailable);
                        }


                    }, this);
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

    isUserExist: function(userName) {
                    var userStore = this.userStore;
                    var exist = userStore.find("userName",userName);
                    if(exist === -1){
                        return false;
                    }else{
                        return true;
                    }

    },

    isBookExist: function(title) {
                var exist = this.bookStore.find("title",title);
                if(exist === -1){
                    return false;
                }
                else{
                    return true;
                }
    },

    init: function(application) {
        this.control({
            "#cancelButton": {
                click: this.onCancelButtonClick
            },
            "#submitButton": {
                click: this.onSubmitButtonClick
            },
            "#registerWindow": {
                activate: this.onRegisterWindowActivate
            },
            "#saveBookButton": {
                click: this.onSaveBookButtonClick
            },
            "#addBookWindow": {
                activate: this.onAddBookWindowActivate,
                destroy: this.onAddBookWindowDestroy
            },
            "#cancelSaveBookButton": {
                click: this.onCancelSaveBookButtonClick
            },
            "#viewCancelSaveBookButton": {
                click: this.onViewCancelSaveBookButtonClick
            },
            "#viewBookWindow": {
                activate: this.onViewBookWindowActivate,
                destroy: this.onViewBookWindowDestroy
            },
            "#viewSaveBookButton": {
                click: this.onViewSaveBookButtonClick
            },
            "#checkOutThisBook": {
                click: this.onCheckOutThisBookClick
            }
        });
    }

});
