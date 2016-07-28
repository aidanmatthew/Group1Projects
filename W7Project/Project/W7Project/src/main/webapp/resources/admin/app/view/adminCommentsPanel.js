/*
 * File: app/view/adminCommentsPanel.js
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

Ext.define('BurgerQueenAdmin.view.adminCommentsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.admincommentspanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.selection.RowModel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 250,
    id: 'adminCommentsPanel',
    itemId: 'adminCommentsPanel',
    width: 400,
    layout: 'fit',
    frameHeader: false,
    header: false,
    title: 'Comments',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    header: false,
                    title: 'My Grid Panel',
                    store: 'AdminCommentsStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Id',
                            text: 'Id',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'User',
                            text: 'User',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Meal',
                            text: 'Meal',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Feedback',
                            text: 'Feedback',
                            flex: 1
                        }
                    ],
                    selModel: Ext.create('Ext.selection.RowModel', {

                    })
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
                            itemId: 'acceptFeedbackAdmin',
                            text: 'Accept Feedback'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});