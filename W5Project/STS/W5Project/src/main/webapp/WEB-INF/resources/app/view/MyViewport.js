/*
 * File: app/view/MyViewport.js
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

Ext.define('BurgerQueen.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'BurgerQueen.view.Products',
        'BurgerQueen.view.Sides',
        'Ext.panel.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    id: 'BurgerQueen',
    itemId: 'BurgerQueen',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    id: 'HomePagePanel',
                    itemId: 'HomePagePanel',
                    layout: 'fit',
                    header: false,
                    title: 'My Panel',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'beveragesButton',
                                    text: 'Beverages'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'burgersButton',
                                    text: 'Burgers'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'chickensButton',
                                    text: 'Chickens'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'dessertsButton',
                                    text: 'Desserts'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'sidesButton',
                                    text: 'Sides'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'loginButton',
                                    text: 'Login'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'logoutButton',
                                    text: 'Logout'
                                },
                                {
                                    xtype: 'button',
                                    id: 'trayBtn',
                                    itemId: 'trayBtn',
                                    text: 'My Tray'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'register',
                                    text: 'Register'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'Products'
                        },
                        {
                            xtype: 'Sides'
                        }
                    ],
                    listeners: {
                        activate: {
                            fn: me.onHomePagePanelActivate,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onHomePagePanelActivate: function(component, eOpts) {
        console.log('activate');
    }

});