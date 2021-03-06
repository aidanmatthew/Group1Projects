/*
 * File: app/view/editWin.js
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

Ext.define('Libray.view.editWin', {
    extend: 'Ext.window.Window',

    requires: [
        'Libray.view.EditBookForm',
        'Ext.form.Panel'
    ],

    height: 227,
    itemId: 'editWin',
    width: 359,
    layout: 'fit',
    header: false,
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'editbookform'
                }
            ]
        });

        me.callParent(arguments);
    }

});