/*
 * File: resources/app/controller/HomePage.js
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

Ext.define('BurgerQueen.controller.HomePage', {
    extend: 'Ext.app.Controller',

    mixins: {
        GlobalUtil: 'com.oocl.mnlbc.GlobalMessage'
    },

    refs: [
        {
            ref: 'beveragesButton',
            selector: '#beveragesButton'
        },
        {
            ref: 'chickensButton',
            selector: '#chickensButton'
        },
        {
            ref: 'dessertsButton',
            selector: '#dessertsButton'
        },
        {
            ref: 'loginButton',
            selector: '#loginButton'
        },
        {
            ref: 'logoutButton',
            selector: '#logoutButton'
        },
        {
            ref: 'productGrid',
            selector: '#ProductGrid'
        },
        {
            ref: 'productViewWindow',
            selector: '#ProductView'
        },
        {
            ref: 'products',
            selector: '#Products'
        },
        {
            ref: 'userProfile',
            selector: '#UserProfile'
        },
        {
            ref: 'sidesButton',
            selector: '#sidesButton'
        },
        {
            ref: 'trayButton',
            selector: '#trayButton'
        },
        {
            ref: 'registerButton',
            selector: '#registerButton'
        },
        {
            ref: 'myProfileButton',
            selector: '#myProfileButton'
        },
        {
            ref: 'usernameProfile',
            selector: '#usernameProfile'
        },
        {
            ref: 'addressProfile',
            selector: '#addressProfile'
        },
        {
            ref: 'emailProfile',
            selector: '#emailProfile'
        },
        {
            ref: 'contactNumProfile',
            selector: '#contactnumProfile'
        },
        {
            ref: 'activeUsersCount',
            selector: '#activeUsersCount'
        },
        {
            ref: 'transacHistoryGrid',
            selector: '#TransacHistoryGrid'
        },
        {
            ref: 'fullnameProfile',
            selector: '#fullnameProfile'
        },
        {
            ref: 'adminCommentsPanel',
            selector: '#AdminCommentsPanel'
        },
        {
            ref: 'adminProductsPanel',
            selector: '#AdminProductsPanel'
        },
        {
            ref: 'adminTransactionsPanel',
            selector: '#AdminTransactionsPanel'
        },
        {
            ref: 'adminUserPanel',
            selector: '#AdminUserPanel'
        },
        {
            ref: 'userGrid',
            selector: '#userGrid'
        },
        {
            ref: 'btnEnable',
            selector: '#btnEnable'
        },
        {
            ref: 'btnDisable',
            selector: '#btnDisable'
        }
    ],

    onLoginButtonClick: function() {
                Ext.create('BurgerQueen.view.LoginWindow').show();

    },

    onBeveragesButtonClick: function() {

                var productStore = this.productStore;
                this.getProducts().show();

        this.getUserProfile().hide();
                productStore.clearFilter();
                productStore.filter('Category','Drinks');



    },

    onBurgersButtonClick: function() {
                     var productStore = this.productStore;
        this.getProducts().show();

        this.getUserProfile().hide();
                        productStore.clearFilter();
                        productStore.filter('Category','Burgers');
    },

    onChickensButtonClick: function() {
                 var productStore = this.productStore;
        this.getProducts().show();

        this.getUserProfile().hide();
                        productStore.clearFilter();
                        productStore.filter('Category','Chickens');
    },

    onDessertsButtonClick: function() {
             var productStore = this.productStore;
        this.getProducts().show();

        this.getUserProfile().hide();
                        productStore.clearFilter();
                        productStore.filter('Category','Desserts');
    },

    onProductGridItemDblClick: function() {
                 var productStore = this.productStore;

                var productGrid = this.getProductGrid(),
                    selectModel = productGrid.getSelectionModel(),
                    selectedProduct = selectModel.getSelection()[0].data;

        //         var selectedProductName = selectedProduct.name,
        //         	selectedProductPrice = selectedProduct.price,
        //         	selectedProductDesc = selectedProduct.description;

        //         this.getProductName().setValue(selectedProductName);
        //         this.getProductPrice().setValue(selectedProductPrice);
        //         this.getProductDesc().setValue(selectedProductDesc);

                var productWin = Ext.create('BurgerQueen.view.ProductViewWindow',{selectedProduct: selectedProduct});
                productWin.show();
    },

    onTrayBtnClick: function() {
         Ext.create('BurgerQueen.view.TrayWindow').show();
    },

    onBurgerQueenRender: function() {
        var store = Ext.getStore('ProductStore');

        Ext.Ajax.request({
            url : 'meal/getAllMeals',
            params : {

            },
            scope : this,
            success : function(response) {
                var data = response.responseText;
                Ext.each(data, function(record){
                    var product = {
                        Id:record.id,
                        Code:record.code,
                        Name:record.name,
                        Description:record.description,
                        Category:record.category,
                        Price:record.price,
                        Image:record.image
                    };
                    store.add(product);
                });
            }
        });

        this.activeUserCounter();

        Ext.Ajax.request({
            url : 'getUserSession',
            params : {

            },
            scope : this,
            success : function(response) {
                var data = Ext.decode(response.responseText);

                   if(!Ext.isEmpty(data)){

                       currentLoginUser = data;
                       this.displayForSessions();
                   }
            }
        });


                var userStore = Ext.getStore('UsersStore');

                Ext.Ajax.request({
                    url : 'user/getAllUsers',
                    params : {

                    },
                    scope : this,
                    success : function(response) {
                        var data = Ext.decode(response.responseText);
                        Ext.each(data, function(record){
                            var users = {
                                id:record.id,
                                Username:record.username,
                                Password:record.password,
                                Firstname:record.firstname,
                                Middlename:record.middlename,
                                Lastname:record.lastname,
                                Gender:record.gender,
                                Email:record.email,
                                Address:record.address,
                                Contact:record.contactno,
                                Disabled:record.isDisabled,
                                Type:record.type,
                                Level:record.userLevel,
                                Points:record.points

                            };
                            userStore.add(users);
                        });
                    }
                });



    },

    onUserProfileShow: function(component, eOpts) {
                this.activeUserCounter();
                if(Ext.isEmpty(currentLoginUser)){
                    return;
                }

        var firstName = currentLoginUser.firstname,
            middleName = currentLoginUser.middlename,
            lastName =currentLoginUser.lastname,
            fullName = lastName + ', ' + firstName + " " + middleName;

                this.getUsernameProfile().setValue(currentLoginUser.username);
                this.getFullnameProfile().setValue(fullName);
                this.getAddressProfile().setValue(currentLoginUser.address);
                this.getEmailProfile().setValue(currentLoginUser.email);
                this.getContactNumProfile().setValue(currentLoginUser.contact);


                Ext.Ajax.request({
                    url : 'order/getAllOrderByUser',
                    params : {
                        userId : currentLoginUser.id
                    },
                    scope : this,

                    success : function(response) {
                        var transactionStore = Ext.getStore('TransactionStore');
                        var userTransactions = Ext.JSON.decode(response.responseText);
                        Ext.each(userTransactions,function(record){
                            var transaction = {
                                Id : record.id,
                                UserId: record.userId,
                                Status : record.status
                            };
                            transactionStore.add(transaction);
                        });
                    }
                });
    },

    onShowUsersWindowClick: function() {

        Ext.create('BurgerQueen.view.ActiveUsersWindow').show();
    },

    onAllCategoriesButtonClick: function() {
                 var productStore = this.productStore;
        this.getProducts().show();
        this.getUserProfile().hide();
                        productStore.clearFilter();
    },

    onSidesButtonClick: function() {
                var productStore = this.productStore;
        this.getProducts().show();
        this.getUserProfile().hide();
                productStore.clearFilter();
                productStore.filter('Category','Sides');

    },

    onLogoutButtonClick: function() {
                    Ext.Msg.confirm("Confirmation", "Are you sure you want to logout?", function(btnText){
                            if(btnText === "yes"){
                                        Ext.Ajax.request({
                    url : 'logout',
                    params : {

                    },
                    scope : this,
                    success : function(response) {
                        this.activeUserCounter();
                    }
                });

                this.getTrayButton().hide();
                this.getRegisterButton().show();
                this.getLoginButton().show();
                this.getLogoutButton().hide();
                this.getMyProfileButton().hide();
                this.getUserProfile().hide();
                this.getProducts().show();
                Ext.getStore('TrayStore').removeAll();
                                Ext.getStore('TransactionStore').removeAll();
                                Ext.getStore('TransactionDetailsStore').removeAll();
                            }
                        }, this);

    },

    onTrayButtonClick: function() {
         Ext.create('BurgerQueen.view.TrayWindow').show();
    },

    onRegisterButtonClick: function() {
               Ext.create('BurgerQueen.view.RegisterWindow').show();
    },

    onMyProfileButtonClick: function() {
                this.getProducts().hide();
                this.getUserProfile().show();

                var userStore = Ext.getStore('UserStore').getRange();

                Ext.each(userStore, function(record){
                    var userName = record.get('userName'),
                        firstName = record.get('firstName'),
                        middleName =  record.get('middleName'),
                        lastName = record.get('lastName'),
                        fullName = lastName + ', ' + firstName + " " + middleName,
                        address = record.get('address'),
                        email = record.get('email'),
                        contactNum = record.get('contactNum');


                    this.getUserNameField().setValue(userName);
                    this.getFullNameField().setValue(fullName);
                    this.getAddressField().setValue(address);
                    this.getEmailField().setValue(email);
                });
    },

    onBtnUsersClick: function() {
            this.getProducts().hide();
            this.getUserProfile().hide();
            this.getAdminCommentsPanel().hide();
            this.getAdminProductsPanel().hide();
            this.getAdminTransactionsPanel().hide();
            this.getAdminUserPanel().show();
        console.log('User');


    },

    onBtnProductsClick: function() {
            this.getProducts().hide();
            this.getUserProfile().hide();
            this.getAdminCommentsPanel().hide();
            this.getAdminTransactionsPanel().hide();
            this.getAdminUserPanel().hide();
            this.getAdminProductsPanel().show();
        console.log('Product');
    },

    onBtnTransactionsClick: function() {
             this.getProducts().hide();
            this.getUserProfile().hide();
            this.getAdminCommentsPanel().hide();
            this.getAdminUserPanel().hide();
            this.getAdminProductsPanel().hide();
            this.getAdminTransactionsPanel().show();
        console.log('Transaction');
    },

    onBtnCommentsClick: function() {
            this.getProducts().hide();
            this.getUserProfile().hide();
            this.getAdminUserPanel().hide();
            this.getAdminProductsPanel().hide();
            this.getAdminTransactionsPanel().hide();
            this.getAdminCommentsPanel().show();
        console.log('Comments');
    },

    onUserGridSelectionChange: function() {
        var userStore = Ext.getStore('UsersStore');

                var usersGrid = this.getUserGrid(),
                    selectModel = usersGrid.getSelectionModel(),
                    selectedUser = selectModel.getSelection(),
                    userDisabledValue = selectedUser[0].data.Disabled;

                if(userDisabledValue === 0){

                    // Ext.getCmp('btnEnable')
                    this.getBtnEnable().disable();
                    this.getBtnDisable().enable();

                }else{
                    this.getBtnEnable().enable();
                    this.getBtnDisable().disable();
                }
    },

    onLaunch: function() {
                this.productStore = Ext.getStore('ProductStore');
        //         activeUserStore = Ext.getStore('ActiveUserStore');
                activeUserStore = Ext.create('BurgerQueen.store.ActiveUserStore');
    },

    showLoadingMessageMask: function() {
                            if (!this.oLoadingMessageMask) {
                               this.oLoadingMessageMask = new Ext.LoadMask(Ext.getBody(), {
                                  msg : "Loading, please wait..."
                               });
                            }
                            this.oLoadingMessageMask.show();
    },

    hideLoadingMessageMask: function() {

                            if (this.oLoadingMessageMask) {
                               this.oLoadingMessageMask.hide();
                            }
    },

    activeUserCounter: function() {


            Ext.Ajax.request({
                    url : 'getLoggedUsers',
                    params : {

                    },
                    scope : this,
                    success : function(response) {
                        var data = Ext.decode(response.responseText);
                        activeUsers = data;
                        activeUser = true;
                        var store = activeUserStore;
                        store.removeAll();
                       this.getActiveUsersCount().setValue(data.length);
        //                 Ext.each(data, function(record){
        //                     store.add({username:record.username});
        //                 });

                    }
                });
    },

    displayForSessions: function() {
                this.getLoginButton().hide();
                this.getLogoutButton().show();
                this.getRegisterButton().hide();
                this.getMyProfileButton().show();
                this.getTrayButton().show();
                this.activeUserCounter();
                this.getMyProfileButton().show();
                this.getMyProfileButton().setText('Welcome, '+ currentLoginUser.username);
                this.getProducts().show();

        if(currentLoginUser.type ==='admin'){
                     Ext.getCmp('toolBarCustomer').hide();
                     Ext.getCmp('toolBarAdmin').show();
                }

    },

    init: function(application) {
        this.control({
            "#loginButton": {
                click: this.onLoginButtonClick
            },
            "#beveragesButton": {
                click: this.onBeveragesButtonClick
            },
            "#burgersButton": {
                click: this.onBurgersButtonClick
            },
            "#chickensButton": {
                click: this.onChickensButtonClick
            },
            "#dessertsButton": {
                click: this.onDessertsButtonClick
            },
            "#ProductGrid": {
                itemdblclick: this.onProductGridItemDblClick
            },
            "#trayBtn": {
                click: this.onTrayBtnClick
            },
            "#BurgerQueen": {
                render: this.onBurgerQueenRender
            },
            "#UserProfile": {
                show: this.onUserProfileShow
            },
            "#showUsersWindow": {
                click: this.onShowUsersWindowClick
            },
            "#allCategoriesButton": {
                click: this.onAllCategoriesButtonClick
            },
            "#sidesButton": {
                click: this.onSidesButtonClick
            },
            "#logoutButton": {
                click: this.onLogoutButtonClick
            },
            "#trayButton": {
                click: this.onTrayButtonClick
            },
            "#registerButton": {
                click: this.onRegisterButtonClick
            },
            "#myProfileButton": {
                click: this.onMyProfileButtonClick
            },
            "#btnUsers": {
                click: this.onBtnUsersClick
            },
            "#btnProducts": {
                click: this.onBtnProductsClick
            },
            "#btnTransactions": {
                click: this.onBtnTransactionsClick
            },
            "#btnComments": {
                click: this.onBtnCommentsClick
            },
            "#userGrid": {
                selectionchange: this.onUserGridSelectionChange
            }
        });
    }

});
