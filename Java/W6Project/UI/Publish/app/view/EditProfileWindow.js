/*
 * File: app/view/EditProfileWindow.js
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

Ext.define('BurgerQueen.view.EditProfileWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 429,
    id: 'editProfileWindow',
    itemId: 'editProfileWindow',
    width: 347,
    layout: 'fit',
    title: '',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'updateProfileForm',
                    bodyPadding: 10,
                    header: false,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            height: 67,
                            html: '<link href=\'http://fonts.googleapis.com/css?family=Arial\'rel=\'stylesheet\' type=\'text/css\'>\n<center><div id="nav"><h1 style = \'font-family: Arial; color:#565652;\' >Update Profile</h1></div></center>',
                            width: 334,
                            fieldLabel: ''
                        },
                        {
                            xtype: 'textfield',
                            height: 40,
                            id: 'editFirstName',
                            itemId: 'editFirstName',
                            width: 320,
                            fieldLabel: '',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            emptyText: 'First name'
                        },
                        {
                            xtype: 'textfield',
                            height: 40,
                            id: 'editMiddleName',
                            itemId: 'editMiddleName',
                            width: 320,
                            fieldLabel: '',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            emptyText: 'Middle name'
                        },
                        {
                            xtype: 'textfield',
                            height: 40,
                            id: 'editLastName',
                            itemId: 'editLastName',
                            width: 320,
                            fieldLabel: '',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            emptyText: 'Last name'
                        },
                        {
                            xtype: 'textfield',
                            height: 40,
                            id: 'editAddress',
                            itemId: 'editAddress',
                            width: 320,
                            fieldLabel: '',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            emptyText: 'Address'
                        },
                        {
                            xtype: 'textfield',
                            height: 40,
                            id: 'editEmail',
                            itemId: 'editEmail',
                            width: 320,
                            fieldLabel: '',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            emptyText: 'Email'
                        },
                        {
                            xtype: 'textfield',
                            height: 40,
                            id: 'editContact',
                            itemId: 'editContact',
                            width: 320,
                            fieldLabel: '',
                            fieldStyle: 'text-align: center; font-family:\'Abel\' ; font-size:18px;',
                            emptyText: 'Contact Number'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            layout: {
                                type: 'hbox',
                                pack: 'end'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnUpdateProfile',
                                    itemId: 'btnUpdateProfile',
                                    text: 'Update'
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