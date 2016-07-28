/*
 * File: app/view/AdminOrderManagementPanel.js
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

Ext.define('BurgerQueenAdmin.view.AdminOrderManagementPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.adminordermanagementpanel',

    requires: [
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.selection.RowModel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],

    height: 331,
    id: 'AdminOrderManagementPanel',
    itemId: 'AdminOrderManagementPanel',
    width: 1111,
    layout: 'fit',
    header: false,
    title: 'My Panel',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 198,
                    layout: 'fit',
                    bodyPadding: 10,
                    title: 'Order Management',
                    items: [
                        {
                            xtype: 'gridpanel',
                            id: 'adminOrderManagementGrid',
                            itemId: 'adminOrderManagementGrid',
                            header: false,
                            title: 'My Grid Panel',
                            scroll: 'vertical',
                            store: 'AdminOrderManagementStore',
                            selModel: Ext.create('Ext.selection.RowModel', {

                            }),
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    id: 'adminOrderId',
                                    itemId: 'adminOrderId',
                                    dataIndex: 'id',
                                    text: 'Order Id'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    id: 'adminUserId',
                                    itemId: 'adminUserId',
                                    width: 65,
                                    dataIndex: 'userId',
                                    text: 'User Id'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    stateId: 'adminOrderManagementStatus',
                                    id: 'adminOrderManagementStatus',
                                    itemId: 'adminOrderManagementStatus',
                                    dataIndex: 'status',
                                    text: 'Status',
                                    flex: 1
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
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            id: 'adminDoneBttn',
                            itemId: 'adminDoneBttn',
                            text: 'Done'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});