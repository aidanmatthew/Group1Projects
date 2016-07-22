/*
 * File: app/view/LoginWindow.js
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

Ext.define('BurgerQueen.view.LoginWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 250,
    html: '<link href=\'http://fonts.googleapis.com/css?family=Abel\'rel=\'stylesheet\' type=\'text/css\'>',
    itemId: 'loginWindow',
    style: 'font-family: \'Abel\';',
    width: 350,
    header: false,
    title: 'Log-in ',
    modal: true,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    html: '<link href=\'http://fonts.googleapis.com/css?family=Arial\'rel=\'stylesheet\' type=\'text/css\'>\n<center><div id="nav"><h1 style = \'font-family: Arial; color:#565652;\' >Login</h1></div></center>',
                    itemId: 'loginForm',
                    bodyPadding: 10,
                    header: false,
                    title: 'My Form',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            height: 80,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            }
                        },
                        {
                            xtype: 'container',
                            height: 49,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    width: 320,
                                    fieldLabel: '',
                                    labelStyle: 'font-family: \'Abel\'; font-size: 20px;',
                                    name: 'username',
                                    fieldStyle: 'font-family: \'Abel\'; font-size: 20px;',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    emptyText: 'Username'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 43,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '',
                                    labelStyle: 'font-family: \'Abel\'; font-size: 15px;',
                                    name: 'password',
                                    fieldStyle: 'font-family: \'Abel\'; font-size: 20px;',
                                    inputType: 'password',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    emptyText: 'Password'
                                }
                            ]
                        },
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            margins: '',
                            height: 50,
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'loginWindowButton',
                                    style: 'font-family: \'Abel\';',
                                    text: 'Login'
                                },
                                {
                                    xtype: 'button',
                                    id: 'cancelLoginButton',
                                    style: 'font-family: \'Abel\';',
                                    text: 'Cancel'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});