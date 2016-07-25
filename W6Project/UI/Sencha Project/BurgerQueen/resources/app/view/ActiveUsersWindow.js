/*
 * File: resources/app/view/ActiveUsersWindow.js
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

Ext.define('BurgerQueen.view.ActiveUsersWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View'
    ],

    height: 270,
    itemId: 'ActiveUsersWindow',
    width: 357,
    layout: 'fit',
    title: 'Active Users',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    padding: 10,
                    items: [
                        {
                            xtype: 'gridpanel',
                            header: false,
                            title: 'My Grid Panel',
                            hideHeaders: true,
                            store: 'ActiveUserStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'username',
                                    text: 'String',
                                    flex: 1
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