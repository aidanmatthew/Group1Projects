/*
 * File: resources/app/view/ProfileChangePasswordWindow.js
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

Ext.define('BurgerQueen.view.ProfileChangePasswordWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 262,
    id: 'profileChangePasswordWindow',
    itemId: 'profileChangePasswordWindow',
    width: 364,
    header: false,
    title: 'My Window',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    html: '<center><div id="nav"><h1 style = \'font-family: Arial; color:#565652;\' >Change Password</h1></div></center>'
                },
                {
                    xtype: 'form',
                    id: 'changePasswordForm',
                    itemId: 'changePasswordForm',
                    bodyPadding: 10,
                    header: false,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'textfield',
                            height: 40,
                            id: 'editOldPassword',
                            itemId: 'editOldPassword',
                            width: '100%',
                            fieldLabel: '',
                            labelStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            inputType: 'password',
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            emptyText: 'Current Password'
                        },
                        {
                            xtype: 'textfield',
                            height: 40,
                            id: 'editNewPassword',
                            itemId: 'editNewPassword',
                            width: '100%',
                            fieldLabel: '',
                            labelStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            inputType: 'password',
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            emptyText: 'New Password'
                        },
                        {
                            xtype: 'textfield',
                            validator: function(value) {
                                if(Ext.getCmp('editNewPassword').getValue() !== value){
                                    Ext.getCmp('editConfirmPassword').markInvalid('Password does not match');
                                    return "Password does not match";
                                }else{
                                    return true;
                                }
                            },
                            height: 40,
                            id: 'editConfirmPassword',
                            itemId: 'editConfirmPassword',
                            width: '100%',
                            fieldLabel: '',
                            labelStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            inputType: 'password',
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            emptyText: 'Confirm Password'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            height: 30,
                            id: 'btnSavePasswordChange',
                            itemId: 'btnSavePasswordChange',
                            width: '80%',
                            text: 'Save'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});