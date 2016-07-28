/*
 * File: resources/app/controller/Windows.js
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

Ext.define('BurgerQueen.controller.Windows', {
    extend: 'Ext.app.Controller',

    mixins: {
        GlobalUtil: 'com.oocl.mnlbc.GlobalMessage'
    },

    oLoadingMessageMask: null,

    refs: [
        {
            ref: 'productName',
            selector: '#ProductName'
        },
        {
            ref: 'productPrice',
            selector: '#ProductPrice'
        },
        {
            ref: 'productDescription',
            selector: '#ProductDescription'
        },
        {
            ref: 'productQuantity',
            selector: '#ProductQuantity'
        },
        {
            ref: 'productImage',
            selector: '#ProductImage'
        },
        {
            ref: 'productViewWindow',
            selector: '#ProductView'
        },
        {
            ref: 'totalItems',
            selector: '#totalItems'
        },
        {
            ref: 'trayWindow',
            selector: '#TrayWindow'
        },
        {
            ref: 'trayGrid',
            selector: '#trayGrid'
        },
        {
            ref: 'totalAmount',
            selector: '#totalAmount'
        },
        {
            ref: 'productId',
            selector: '#productId'
        },
        {
            ref: 'registerForm',
            selector: '#registerForm'
        },
        {
            ref: 'chickensButton',
            selector: '#chickensButton'
        },
        {
            ref: 'loginForm',
            selector: '#loginForm'
        },
        {
            ref: 'registerWindow',
            selector: '#registerWindow'
        },
        {
            ref: 'beveragesButton',
            selector: '#beveragesButton'
        },
        {
            ref: 'loginWindow',
            selector: '#loginWindow'
        },
        {
            ref: 'burgersButton',
            selector: '#burgersButton'
        },
        {
            ref: 'dessertsButton',
            selector: '#dessertsButton'
        },
        {
            ref: 'registerButton',
            selector: '#registerButton'
        },
        {
            ref: 'trayButton',
            selector: '#trayButton'
        },
        {
            ref: 'sidesButton',
            selector: '#sidesButton'
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
            ref: 'myProfileButton',
            selector: '#myProfileButton'
        },
        {
            ref: 'activeUsersCount',
            selector: '#activeUsersCount'
        },
        {
            ref: 'products',
            selector: '#Products'
        },
        {
            ref: 'addCartButton',
            selector: '#AddCartButton'
        },
        {
            ref: 'transactionDetails',
            selector: '#TransactionDetails'
        },
        {
            ref: 'btnSubmitComment',
            selector: '#btnSubmitComment'
        },
        {
            ref: 'commentBox',
            selector: '#commentBox'
        },
        {
            ref: 'productPoints',
            selector: '#productPoints'
        },
        {
            ref: 'totalPoints',
            selector: '#totalPoints'
        },
        {
            ref: 'editFirstName',
            selector: '#editFirstName'
        },
        {
            ref: 'editMiddleName',
            selector: '#editMiddleName'
        },
        {
            ref: 'editLastName',
            selector: '#editLastName'
        },
        {
            ref: 'editAddress',
            selector: '#editAddress'
        },
        {
            ref: 'editContact',
            selector: '#editContact'
        },
        {
            ref: 'totalDiscountedAmount',
            selector: '#totalDiscountedAmount'
        },
        {
            ref: 'editProfileWindow',
            selector: '#editProfileWindow'
        },
        {
            ref: 'editOldPassword',
            selector: '#editOldPassword'
        },
        {
            ref: 'editNewPassword',
            selector: '#editNewPassword'
        },
        {
            ref: 'editConfirmPassword',
            selector: '#editConfirmPassword'
        },
        {
            ref: 'changePasswordForm',
            selector: '#changePasswordForm'
        },
        {
            ref: 'profileChangePasswordWindow',
            selector: '#profileChangePasswordWindow'
        },
        {
            ref: 'userGrid',
            selector: '#userGrid'
        },
        {
            ref: 'updateProfileForm',
            selector: '#updateProfileForm'
        },
        {
            ref: 'commentFoodForm',
            selector: '#commentFoodForm'
        },
        {
            ref: 'txtCommentBox',
            selector: '#txtCommentBox'
        },
        {
            ref: 'btnComment',
            selector: '#btnComment'
        },
        {
            ref: 'contactUsForm',
            selector: '#contactUsForm'
        }
    ],

    onProductViewActivate: function(window, eOpts) {
        var data = window.selectedProduct,
            img = this.getProductImage(),
            productName = this.getProductName(),
            productDescription = this.getProductDescription(),
            productPrice = this.getProductPrice(),
            productId = this.getProductId(),
            productPoints = this.getProductPoints();


        productPoints.setValue(data.Points);
        img.setSrc(data.Image);
        productName.setValue(data.Name);
        productDescription.setValue(data.Description);
        productPrice.setValue(data.Price);
        productId.setValue(data.Id);

        Ext.Ajax.request({
                        url : 'hasLogged',
                        params : {

                        },
                        scope : this,
                        success : function(response) {

                            if(response.responseText === 'false'){
                                this.getProductQuantity().hide();
                                this.getAddCartButton().hide();
                            }else{
                                this.getProductQuantity().show();
                                this.getAddCartButton().show();
                            }
                        }
        });


    },

    onAddCartButtonClick: function() {
        var trayStore = Ext.getStore('TrayStore'),
                    productName = this.getProductName().getValue(),
                    productQuantity = this.getProductQuantity().getValue(),
                    productPrice = this.getProductPrice().getValue(),
                    productId= this.getProductId().getValue(),
                   productPoints = this.getProductPoints().getValue();

                var tray = {
                    Id: productId,
                    Name: productName,
                    Quantity: productQuantity,
                    Price: productPrice,
                    Total: productQuantity * productPrice,
                    Points:productQuantity * productPoints
                };


                var totalItems = 0;
                    var index = trayStore.find('Id', productId);
                    if(index === -1){
                        trayStore.add(tray);
                    }else{
                        var currentQuantity = trayStore.getAt(index).data.Quantity,
                            replaceQuantity = currentQuantity + productQuantity;
                            trayStore.getAt(index).data.Quantity = replaceQuantity;

                    }
                Ext.Msg.alert('Status', this.added_to_cart);
                this.getProductViewWindow().destroy();
    },

    onCancelCheckoutBtnClick: function() {
        this.getTrayWindow().destroy();
    },

    onRemoveItemBtnClick: function() {
        var trayStore = Ext.getStore('TrayStore');

        var trayGrid = this.getTrayGrid(),
            selectModel = trayGrid.getSelectionModel(),
            selectedProduct = selectModel.getSelection();


            if(!Ext.isEmpty(selectedProduct)){
                var selectedPrice = selectedProduct[0].data.Price,
                    selectedQty = selectedProduct[0].data.Quantity;

                var currentQty = this.getTotalItems().getValue(),
                    currentAmount = this.getTotalAmount().getValue();

                var updatedQty = currentQty - selectedQty,
                    updatedAmount = currentAmount - selectedPrice;

                trayStore.remove(selectedProduct);
                this.getTotalItems().setValue('Total '+updatedQty + ' item(s)');
                this.getTotalAmount().setValue(updatedAmount);
                //call on show event of tray
                this.onTrayWindowShow();


            }else{
                Ext.MessageBox.alert('Error','Please select an item to remove');

            }


    },

    onTrayWindowShow: function(component, eOpts) {
            var grid = this.getTrayGrid(),
                store = grid.getStore(),
                totalQuantity = 0,
                totalAmount = 0,
                totalPoints = 0,
                records = store.getRange();

            Ext.each(records,function(record){
                   totalQuantity += record.data.Quantity;
                    totalAmount += record.data.Total;
                    totalPoints += record.data.Points;
            });

        //     totalAmount = Ext.util.Format.number(totalAmount, '0,000.00');
            this.getTotalAmount().setValue(totalAmount);
            this.getTotalItems().setValue('Total '+totalQuantity + ' item(s)');
            this.getTotalPoints().setValue(totalPoints);
    },

    onRegisterWindowButtonClick: function() {
                var form = this.getRegisterForm(),
                    username = form.getValues().username,
                    password = form.getValues().password,
                    firstname = form.getValues().firstname,
                    middlename = form.getValues().middlename,
                    lastname = form.getValues().lastname,
                    address = form.getValues().address,
                    contactno = form.getValues().contactno,
                    email = form.getValues().email,
                    gender = form.getValues().gender,
                    user = {
                            username:username,
                            password:password,
                            firstname:firstname,
                            middlename:middlename,
                            lastname:lastname,
                            address:address,
                            contactno:contactno,
                            email:email,
                            gender:gender,
                            userLevel:0,
                            isDisabled:0,
                            points:0,
                            type:'customer',

                     };


                if(form.isValid()){
                    Ext.Ajax.request({
                        url : 'user/addUser',
        //                 params : ,
                        headers: { 'Content-Type': 'application/json',
                         'Accept': 'application/json'},
                         jsonData:user,
                        scope : this,
                        success : function(response) {
                    var data = response.responseText;
                    if(data ==='success'){
                        Ext.MessageBox.alert('Sucess', this.success_registration);
                        this.getRegisterWindow().destroy();
                    }
                    if(data === 'username'){
                        Ext.MessageBox.alert('Error', this.existing_username);
                    }
                    if(data === 'email'){
                        Ext.MessageBox.alert('Error', this.existing_email);
                    }
                }
            });
        }else{
            Ext.MessageBox.alert('Error', 'Invalid user input, please check fields');
        }
    },

    onLoginWindowButtonClick: function() {
        var form = this.getLoginForm(),
                                    username = form.getValues().username,
                                    password = form.getValues().password;

                            if(form.isValid()){

                                var ajaxFunction = function(){
                                    var store = Ext.getStore('TrayStore');
                                    Ext.Ajax.request({
                                     url : 'tray/getTrayByUserId',
                                     params : {
                                         'userId':currentLoginUser.id
                                     },
                                     scope : this,
                                success : function(response) {
                                 var data = Ext.JSON.decode(response.responseText);


                                            Ext.each(data, function(record){
                                                var product = {
                                                    Id:record.meal.id,
                                                    Name:record.meal.name,
                                                    Quantity:record.quantity,
                                                    Price:record.meal.price,
                                                    Total: record.quantity * record.meal.price
                                                };

                                                var index = store.find('Id', product.Id);
                                                if(index === -1){
                                                    store.add(product);
                                                }else{
                                                    var currentQuantity = store.getAt(index).data.Quantity,
                                                        replaceQuantity = currentQuantity + product.Quantity;
                                                        store.getAt(index).data.Quantity = replaceQuantity;
                                                }

                                        });


                                }
                            });

                              Ext.Ajax.request({
                            url : 'tray/removeTrayByUserId',
                            params : {
                                "userId":currentLoginUser.id
                            },
                            scope : this,
                            success : function(response) {
                                var data = Ext.decode(response.responseText);

                            }
                        });
        };


                                Ext.Ajax.request({
                                    url : 'checkLoggedIn',
                                    params : {
                                        'username':username,
                                        'password':password
                                    },
                                    scope : this,
                                    success : function(response) {
                                        var data = response.responseText;
                                        if(!Ext.isEmpty(data)) {
                                            if (data === 'null') {
                                                Ext.MessageBox.alert('Error','User does not exist');
                                            } else if (data === 'password') {
                                                Ext.MessageBox.alert('Error','User entered wrong password');
                                            } else if (data === 'block') {
                                                Ext.MessageBox.alert('Error','User is blocked');
                                            } else if (data === 'logged') {
                                                Ext.MessageBox.alert('Error','User is already logged in');
                                            } else if (data === 'success'){
                                                //


                                                Ext.Ajax.request({
                                                    url : 'login',
                                                    params : {
                                                        'username':username,
                                                        'password':password
                                                    },
                                                    scope : this,
                                                    success : function(response) {
                                                        var data = response.responseText;
                                                        if(!Ext.isEmpty(data)){
                                                            var decodedData = Ext.decode(data);
                                                            var type = decodedData.type;
                                                            Ext.MessageBox.alert('Success','Welcome!');
                                                            currentLoginUser = decodedData;
                                                            task.start();

                                                            this.getLoginButton().hide();
                                                            this.getLogoutButton().show();
                                                            this.getRegisterButton().hide();
                                                            this.activeUserCounter();
                                                            this.getMyProfileButton().setText('Welcome, '+ decodedData.username +'! |');
                                                            this.getLoginWindow().destroy();
                                                            ajaxFunction();
                                                            if(type === 'customer'){

                                                                Ext.getCmp('AdminUserPanel').hide();
                                                                Ext.getCmp('AdminCommentsPanel').hide();
                                                                this.getMyProfileButton().show();
                                                                this.getTrayButton().show();
                                                                Ext.getCmp('toolBarCustomer').show();
                                                                Ext.getCmp('toolBarAdmin').hide();
                                                                this.getProducts().show();

                                                                Ext.Ajax.request({
                                                                    url : 'message/startClient',
                                                                    params : {
                                                                        userId:currentLoginUser.id
                                                                    },
                                                                    scope : this,
                                                                    success : function(response) {
                                                                        var data = Ext.decode(response.responseText);
                                                                    }
                                                                });

                                                            }
                                                        }
                                                    }
                                                });

                                            }

                                            //
                                        }
                                    }


                                });
                            }

    },

    onCancelRegisterButtonClick: function() {
                this.getRegisterWindow().destroy();
    },

    onCancelLoginButtonClick: function() {
                this.getLoginWindow().destroy();
    },

    onProductViewCloseClick: function() {
         this.getProductViewWindow().destroy();
    },

    onCheckoutBtnClick: function() {
        var store = Ext.getStore('TrayStore');

        if(Ext.isEmpty(store.getRange())){
            Ext.MessageBox.alert('Error','Your cart is empty');
            return;
        }


        var orderItemList = [];
        store.each(function(record){
            var orderItem = {
                    id: 0,
                    order:{
                        id:0
                    },
                    meal : {
                        id: record.data.Id
                    },
                    quantity : record.data.Quantity

                };
            orderItemList.push(orderItem);
        });




        var order = {
            id:0,
            user:{
                id:currentLoginUser.id
            },
            orderItemList:orderItemList,
            status: 'DONE'
        };


        Ext.Ajax.request({
            url : 'order/addOrder',
            jsonData:order,
            success : function(response) {
                var data = response.responseText;
                if(data === 'success'){
                    store.removeAll();
                    Ext.MessageBox.alert('Success', 'Order success, please wait for order delivery.');
                }
                else{
                    Ext.MessageBox.alert('Error', 'Failed to checkout your order.');
                }
            }
        });

        currentLoginUser.points += parseFloat(this.getTotalPoints().getValue());
        var user = currentLoginUser;

        Ext.Ajax.request({
                            url:'user/updateUser',
                            headers: { 'Content-Type': 'application/json',
                             'Accept': 'application/json'},
                             jsonData:user,
                            scope:this,
                            success : function(response) {
                                Ext.MesssageBox.alert('Success','Points added to user');
                            }
                        });

                    this.getTrayWindow().destroy();
    },

    onTransactionDetailsActivate: function(window, eOpts) {
                var transactionData = window.transaction;
                var id = transactionData.data.Id;

                Ext.Ajax.request({
                            url : 'orderItem/getAllOrderItemsByOrderId',
                            params : {
                                id:id
                            },
                            scope : this,

                            success : function(response) {
                                var transacDetailsStore = Ext.getStore('TransactionDetailsStore');
                                var recordData = Ext.JSON.decode(response.responseText);
                                    Ext.each(recordData, function(rec){
                                       var orderItems = {
                                        Id:rec.id,
                                        Quantity:rec.quantity,
                                        Meal:rec.meal.name
                                    };

                                    transacDetailsStore.add(orderItems);
                                });



                            }
                        });
    },

    onCloseBtnClick: function() {
        this.getTransactionDetails().destroy();
    },

    onBtnContactUsClick: function() {
        Ext.create('BurgerQueen.view.ContactUsWindow').show();

            Ext.Ajax.request({
                url : 'hasLogged',
                params : {

                },
                scope : this,
                success : function(response) {

                    if(response.responseText === 'true'){
                      Ext.getCmp('commentBox').show();
                     Ext.getCmp('btnSubmitComment').show();
                    }
                }
                });

    },

    onBtnSubmitCommentClick: function() {
        // console.log('hi;');

        var comment = this.getCommentBox().getValue();
        // if(!Ext.isEmpty(comment)){
        //         Ext.Ajax.request({
        //             url : 'http://localhost:' + window.location.port + '/mnlbcjms/sendMessage',
        //             params : {
        //                 username:currentLoginUser.username,
        //                message:comment
        //             },
        //             scope : this,
        //             success : function(response) {
        //                Ext.MessageBox.alert('Information','Your comment has been sent.');
        //             }
        //         });


        // }
    },

    onTotalItemsChange: function() {

        // var level = currentLoginUser.userLevel,
        //     totaPrice = this.getTotalAmount().getValue(),
        //     discount = 0;
        // if(!Ext.isEmpty(totalPrice)){
        //     if(level === 1){
        //         discount = totalPrice * 0.05;
        //     }else if(level ===2){
        //         discount = totalPrice * 0.1;
        //     }else if(level ===3){
        //         discount = totalPrice * 0.15;
        //     }

        //         this.getTotalAmount().setValue(totalPrice-discount);
        // }
    },

    onTotalPointsChange: function() {
        var level = currentLoginUser.userLevel,
            totalPrice = this.getTotalAmount().getValue(),
            discount = 0;
        if(!Ext.isEmpty(totalPrice)){
            if(level === 1){
                discount = totalPrice * 0.05;
            }else if(level ===2){
                discount = totalPrice * 0.1;
            }else if(level ===3){
                discount = totalPrice * 0.15;
            }

                this.getTotalAmount().setValue(totalPrice-discount);
        }
    },

    onEditProfileButtonClick: function() {
        Ext.create('BurgerQueen.view.EditProfileWindow').show();
    },

    onEditProfileWindowActivate: function(window, eOpts) {
        var firstname = currentLoginUser.firstname,
            middlename = currentLoginUser.middlename,
            lastname = currentLoginUser.lastname,
            address = currentLoginUser.address,
            contact = currentLoginUser.contactno;

        this.getEditFirstName().setValue(firstname);
        this.getEditMiddleName().setValue(middlename);
        this.getEditLastName().setValue(lastname);
        this.getEditAddress().setValue(address);
        this.getEditContact().setValue(contact);



    },

    onBtnUpdateProfileClick: function() {

        var form = this.getUpdateProfileForm();
        var firstname =  this.getEditFirstName().getValue(),
                middlename = this.getEditMiddleName().getValue(),
                lastname = this.getEditLastName().getValue(),
               address =  this.getEditAddress().getValue(),
               contactno =  this.getEditContact().getValue(),
                fullname = lastname +', '+firstname+' '+middlename;


        currentLoginUser.firstname = firstname;
        currentLoginUser.middlename = middlename;
        currentLoginUser.lastname = lastname;
        currentLoginUser.address = address;
        currentLoginUser.contactno = contactno;

         if(form.isValid()){
        Ext.Ajax.request({
                            url:'user/updateUser',
                            headers: { 'Content-Type': 'application/json',
                             'Accept': 'application/json'},
                             jsonData:currentLoginUser,
                            scope:this,
                            success : function(response) {
                                Ext.MessageBox.alert('Success','User profile has been updated.');
                                Ext.getCmp('fullnameProfile').setValue(fullname);
                                Ext.getCmp('addressProfile').setValue(address);
                                Ext.getCmp('contactnumProfile').setValue(contactno);
                            }
                        });

             this.getEditProfileWindow().destroy();

         }else{
             Ext.MessageBox.alert('Error', 'Invalid user input, please check fields');
         }





    },

    onBtnSavePasswordChangeClick: function() {
         var oldPassword = this.getEditOldPassword().getValue(),
                newPassword = this.getEditNewPassword().getValue(),
                confirmPassword = this.getEditConfirmPassword().getValue();

        if(newPassword === confirmPassword){
                Ext.Ajax.request({
                        url : 'user/changePassword',
                    params:{
                        'currentPass':oldPassword,
                        'newPass':newPassword,
                        'username':currentLoginUser.username
                    },

                        scope : this,
                        success : function(response) {
                    var data = response.responseText;
                    if(data ==='success'){
                        Ext.MessageBox.alert('Sucess', this.success_changePassword);
                        this.getProfileChangePasswordWindow().destroy();
                    }
                    if(data === 'current password'){
                        Ext.MessageBox.alert('Error', this.failed_toChangePassword);
                    }
                }
            });
        }else{
            Ext.MessageBox.alert('Error','Password does not match');
        }




    },

    onBtnCommentClick: function() {
            var form = this.getCommentFoodForm();

                if(form.isValid()){
                    var commentTxt = this.getTxtCommentBox().getValue(),
                         productId= this.getProductId().getValue();

                    var comment = {
                        id:0,
                        user:{
                            id:currentLoginUser.id
                        },
                        meal:{
                            id:productId
                        },
                        'feedback':commentTxt
                         };


                    Ext.Ajax.request({
                        url : 'feedback/addFeedback',
                        headers: { 'Content-Type': 'application/json',
                                     'Accept': 'application/json'},
                        jsonData:comment,
                        scope : this,
                        success : function(response) {
                            var data = response.responseText;
                            Ext.MessageBox.alert('Success', 'Thank your for your comment ^__^ Enjoy!');
                            this.getProductViewWindow().destroy();
                        }
                    });


                 }else{
                     Ext.MessageBox.alert('Error', 'Please input some comment...');
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
                        var store = activeUserStore;
                        store.removeAll();
                       this.getActiveUsersCount().setValue(data.length);
                        Ext.each(data, function(record){
                            store.add({username:record.username});
                        });
                    }
                });
    },

    hideLoadingMessageMask: function() {

                            if (this.oLoadingMessageMask) {
                               this.oLoadingMessageMask.hide();
                            }
    },

    showLoadingMessageMask: function() {
                            if (!this.oLoadingMessageMask) {
                               this.oLoadingMessageMask = new Ext.LoadMask(Ext.getBody(), {
                                  msg : "Loading, please wait..."
                               });
                            }
                            this.oLoadingMessageMask.show();
    },

    init: function(application) {
        this.control({
            "#ProductView": {
                activate: this.onProductViewActivate
            },
            "#AddCartButton": {
                click: this.onAddCartButtonClick
            },
            "#cancelCheckoutBtn": {
                click: this.onCancelCheckoutBtnClick
            },
            "#removeItemBtn": {
                click: this.onRemoveItemBtnClick
            },
            "#TrayWindow": {
                show: this.onTrayWindowShow
            },
            "#registerWindowButton": {
                click: this.onRegisterWindowButtonClick
            },
            "#loginWindowButton": {
                click: this.onLoginWindowButtonClick
            },
            "#cancelRegisterButton": {
                click: this.onCancelRegisterButtonClick
            },
            "#cancelLoginButton": {
                click: this.onCancelLoginButtonClick
            },
            "#productViewClose": {
                click: this.onProductViewCloseClick
            },
            "#checkoutBtn": {
                click: this.onCheckoutBtnClick
            },
            "#TransactionDetails": {
                activate: this.onTransactionDetailsActivate
            },
            "#closeBtn": {
                click: this.onCloseBtnClick
            },
            "#btnContactUs": {
                click: this.onBtnContactUsClick
            },
            "#btnSubmitComment": {
                click: this.onBtnSubmitCommentClick
            },
            "#totalItems": {
                change: this.onTotalItemsChange
            },
            "#totalPoints": {
                change: this.onTotalPointsChange
            },
            "#editProfileButton": {
                click: this.onEditProfileButtonClick
            },
            "#editProfileWindow": {
                activate: this.onEditProfileWindowActivate
            },
            "#btnUpdateProfile": {
                click: this.onBtnUpdateProfileClick
            },
            "#btnSavePasswordChange": {
                click: this.onBtnSavePasswordChangeClick
            },
            "#btnComment": {
                click: this.onBtnCommentClick
            }
        });
    }

});
