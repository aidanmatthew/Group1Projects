/*
 * File: app/view/RegisterWindow.js
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

Ext.define('BurgerQueen.view.RegisterWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.TextArea',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 600,
    html: '<link href=\'http://fonts.googleapis.com/css?family=Abel\'rel=\'stylesheet\' type=\'text/css\'>\n<center><div id="nav"><h2 style = \'font-family: Abel;\'>Register</h2></div></center>',
    itemId: 'registerWindow',
    style: 'font-family: \'Abel\';',
    width: 463,
    layout: 'fit',
    header: false,
    title: 'My Window',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'registerForm',
                    bodyPadding: 10,
                    bodyStyle: 'font-family: \'Century Gothic\';',
                    header: false,
                    title: 'Register',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            height: 60,
                            html: '<link href=\'http://fonts.googleapis.com/css?family=Arial\'rel=\'stylesheet\' type=\'text/css\'>\n<center><div><h1 style = \'font-family: Arial; color:#565652; \'>Register</h1></div></center>',
                            margin: '0, 0, 35, 0',
                            width: 400,
                            fieldLabel: ''
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            rtl: false,
                            fieldLabel: 'User Name',
                            labelAlign: 'right',
                            labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'username',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            id: 'password',
                            itemId: '',
                            fieldLabel: 'Password',
                            labelAlign: 'right',
                            labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'password',
                            inputType: 'password',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            validator: function(value) {
                                if(Ext.getCmp('password').getValue() !== value){
                                    Ext.getCmp('confirmpassword').markInvalid('Password does not match');
                                    return "Password does not match";
                                }else{
                                    return true;
                                }
                            },
                            flex: 1,
                            id: 'confirmpassword',
                            itemId: 'confirmpassword',
                            fieldLabel: 'Confirm Password',
                            labelAlign: 'right',
                            labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'confirmpassword',
                            inputType: 'password',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'First Name',
                            labelAlign: 'right',
                            labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'firstname',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Middle Name',
                            labelAlign: 'right',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'middlename'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Last Name',
                            labelAlign: 'right',
                            labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'lastname',
                            allowBlank: false
                        },
                        {
                            xtype: 'textareafield',
                            flex: 1,
                            fieldLabel: 'Address',
                            labelAlign: 'right',
                            labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'address',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Contact No.',
                            labelAlign: 'right',
                            labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'contactno',
                            inputType: 'tel',
                            allowBlank: false,
                            maskRe: /^[0-9]*$/
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Email',
                            labelAlign: 'right',
                            labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            name: 'email',
                            invalidText: 'Email is invalid',
                            allowBlank: false,
                            emptyText: 'sample@email.com',
                            regex: /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/
                        },
                        {
                            xtype: 'radiogroup',
                            flex: 1,
                            width: 400,
                            fieldLabel: 'Gender',
                            labelAlign: 'right',
                            labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'gender',
                                    boxLabel: 'Male',
                                    checked: true,
                                    inputValue: 'Male'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'gender',
                                    boxLabel: 'Female',
                                    inputValue: 'Female'
                                }
                            ]
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
                            id: 'registerWindowButton',
                            text: 'Register'
                        },
                        {
                            xtype: 'button',
                            id: 'cancelRegisterButton',
                            text: 'Cancel'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});