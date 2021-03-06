/*
 * File: app/controller/AdminUser.js
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

Ext.define('BurgerQueenAdmin.controller.AdminUser', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'userGrid',
            selector: '#userGrid'
        },
        {
            ref: 'adminUserPanel',
            selector: '#adminUserPanel'
        },
        {
            ref: 'adminManageUserForm',
            selector: '#adminManageUserForm'
        },
        {
            ref: 'winUserEdit',
            selector: '#winUserEdit'
        },
        {
            ref: 'btnEnable',
            selector: '#btnEnable'
        },
        {
            ref: 'btnDisable',
            selector: '#btnDisable'
        },
        {
            ref: 'btnManage',
            selector: '#btnManage'
        }
    ],

    onBtnManageClick: function() {
            Ext.create('BurgerQueenAdmin.view.WinUserEdit').show();

                        var usersGrid = this.getUserGrid(),
                            selectModel = usersGrid.getSelectionModel(),
                            selectedUser = selectModel.getSelection(),
                            type = selectedUser[0].data.Type,
                            point = selectedUser[0].data.Points;

                        Ext.getCmp('UserManageType').setValue(type);
                        Ext.getCmp('manageUserPoints').setValue(point);
    },

    onBtnEnableClick: function() {
         var userStore = Ext.getStore('UsersStore');

                                 var usersGrid = this.getUserGrid(),
                            selectModel = usersGrid.getSelectionModel(),
                            selectedUser = selectModel.getSelection();
                            User = selectedUser[0].data;


        var user ={
            'address':User.Address,
            'contactno':User.Contact,
            'email':User.Email,
            'firstname':User.Firstname,
            'gender':User.Gender,
            'id':User.id,
            'isDisabled':0,
            'lastname':User.Lastname,
            'middlename':User.Middlename,
            'points':User.Points,
            'type':User.Type,
            'userLevel':User.Level,
            'username':User.Username
        };

               Ext.Ajax.request({
                            url:'user/updateUser',
                            headers: { 'Content-Type': 'application/json',
                             'Accept': 'application/json'},
                             jsonData:user,
                            scope:this,
                            success : function(response) {
                                Ext.MessageBox.alert('Success',User.Username + ' is now Activated');

                                userStore.removeAll();

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

                            }
                        });

    },

    onBtnDisableClick: function() {

                var userStore = Ext.getStore('UsersStore');

                                 var usersGrid = this.getUserGrid(),
                            selectModel = usersGrid.getSelectionModel(),
                            selectedUser = selectModel.getSelection();
                            User = selectedUser[0].data;
        var user ={
            'address':User.Address,
            'contactno':User.Contact,
            'email':User.Email,
            'firstname':User.Firstname,
            'gender':User.Gender,
            'id':User.id,
            'isDisabled':1,
            'lastname':User.Lastname,
            'middlename':User.Middlename,
            'points':User.Points,
            'type':User.Type,
            'userLevel':User.Level,
            'username':User.Username
        };
               Ext.Ajax.request({
                            url:'user/updateUser',
                            headers: { 'Content-Type': 'application/json',
                             'Accept': 'application/json'},
                             jsonData:user,
                            scope:this,
                            success : function(response) {
                                Ext.MessageBox.alert('Success',User.Username + ' is now Blocked');
                                var userStore = Ext.getStore('UsersStore');
                                userStore.removeAll();

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

                            }
                        });

    },

    onUserGridSelectionChange: function() {
        var userStore = Ext.getStore('UsersStore');

                var usersGrid = this.getUserGrid(),
                    selectModel = usersGrid.getSelectionModel(),
                    selectedUser = selectModel.getSelection();

        if(!Ext.isEmpty(selectedUser))  {
            userDisabledValue = selectedUser[0].data.Disabled;
            if(userDisabledValue === 0){
                    this.getBtnEnable().disable();
                    this.getBtnDisable().enable();
                    Ext.getCmp('btnManage').enable();
                }else{
                    this.getBtnEnable().enable();
                    this.getBtnDisable().disable();
                    Ext.getCmp('btnManage').enable();
                }
        }else{
            Ext.getCmp('btnManage').disable();
        }

    },

    onManageUserBtnConfirmClick: function() {
               var form = this.getAdminManageUserForm();
                var usersGrid = this.getUserGrid(),
                    selectModel = usersGrid.getSelectionModel(),
                    selectedUser = selectModel.getSelection();
                User = selectedUser[0].data;

         if(form.isValid()){
             var type = Ext.getCmp('UserManageType').getValue(),
                  points = Ext.getCmp('manageUserPoints').getValue();

            var user ={
                        'address':User.Address,
                        'contactno':User.Contact,
                        'email':User.Email,
                        'firstname':User.Firstname,
                        'gender':User.Gender,
                        'id':User.id,
                        'isDisabled':User.isDisabled,
                        'lastname':User.Lastname,
                        'middlename':User.Middlename,
                        'points':points,
                        'type':type,
                        'userLevel':User.Level,
                        'username':User.Username
                    };

                            Ext.Ajax.request({
                                    url:'user/updateUser',
                                    headers: { 'Content-Type': 'application/json',
                                     'Accept': 'application/json'},
                                     jsonData:user,
                                    scope:this,
                                    success : function(response) {
                                        Ext.MessageBox.alert('Success','User: '+User.Username + ' was updated!');
                                        var userStore = Ext.getStore('UsersStore');
                                        userStore.removeAll();

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

                                    }
                                });

            this.getWinUserEdit().destroy();

         }else{
             Ext.MessageBox.alert('Error', 'Invalid input, please check fields');
         }


    },

    init: function(application) {
        this.control({
            "#btnManage": {
                click: this.onBtnManageClick
            },
            "#btnEnable": {
                click: this.onBtnEnableClick
            },
            "#btnDisable": {
                click: this.onBtnDisableClick
            },
            "#userGrid": {
                selectionchange: this.onUserGridSelectionChange
            },
            "#manageUserBtnConfirm": {
                click: this.onManageUserBtnConfirmClick
            }
        });
    }

});
