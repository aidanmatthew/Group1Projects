/*
 * File: app/store/bookHistoryStore.js
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

Ext.define('BookingManagementSystem.store.bookHistoryStore', {
    extend: 'Ext.data.Store',

    requires: [
        'BookingManagementSystem.model.bookHistoryModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'BookingManagementSystem.model.bookHistoryModel',
            storeId: 'bookHistoryStore'
        }, cfg)]);
    }
});