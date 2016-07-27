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

Ext.define('BurgerQueenAdmin.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'BurgerQueenAdmin.view.adminUsersPanel',
        'BurgerQueenAdmin.view.adminProductsPanel',
        'BurgerQueenAdmin.view.adminOrdersPanel',
        'BurgerQueenAdmin.view.adminInquiriesPanel',
        'BurgerQueenAdmin.view.adminCreateMessagePanel',
        'BurgerQueenAdmin.view.adminCommentsPanel',
        'Ext.panel.Panel',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 0.3,
                    hidden: true,
                    id: 'adminMenu',
                    itemId: 'adminMenu',
                    title: 'Menu Buttons',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'adminUsersButton',
                            ui: 'menubarbtn',
                            text: 'Manage Users'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'adminProductsButton',
                            ui: 'menubarbtn',
                            text: 'Manage Products'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'adminOrdersButton',
                            ui: 'menubarbtn',
                            text: 'Manage Orders'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'adminProductFeedbackButton',
                            ui: 'menubarbtn',
                            text: 'Product Feedback'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'adminInquiriesButton',
                            ui: 'menubarbtn',
                            text: 'Inquiries'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'adminCreateMessageButton',
                            ui: 'menubarbtn',
                            text: 'Create Message'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    id: 'adminMain',
                    itemId: 'adminMain',
                    layout: 'fit',
                    title: 'Chosen Menu',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'showAdminMenu',
                                    itemId: 'showAdminMenu',
                                    text: 'Expand Menu'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'adminuserspanel'
                        },
                        {
                            xtype: 'adminproductspanel'
                        },
                        {
                            xtype: 'adminorderspanel'
                        },
                        {
                            xtype: 'admininquiriespanel'
                        },
                        {
                            xtype: 'admincreatemessagepanel'
                        },
                        {
                            xtype: 'admincommentspanel'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});