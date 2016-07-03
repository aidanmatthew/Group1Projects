/*
 * File: app/store/userStore.js
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

Ext.define('BookingManagementSystem.store.userStore', {
    extend: 'Ext.data.Store',

    requires: [
        'BookingManagementSystem.model.userModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'BookingManagementSystem.model.userModel',
            storeId: 'userStore',
            data: [
                {
                    firstName: 'Alexander',
                    lastName: 'Hernandez',
                    userName: 'nemo',
                    password: 'nemo',
                    uType: 'admin',
                    address: '04 Kipling Center',
                    contactNo: 'ad',
                    email: 'jfrazier@rhynoodle.biz',
                    booksAtHand: 'eaque'
                }
            ]
        }, cfg)]);
    }
});