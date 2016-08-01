/*
 * File: resources/app/store/TrayStore.js
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

Ext.define('BurgerQueen.store.TrayStore', {
    extend: 'Ext.data.Store',

    requires: [
        'BurgerQueen.model.TrayModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'BurgerQueen.model.TrayModel',
            storeId: 'TrayStore',
            listeners: {
                datachanged: {
                    fn: me.onStoreDataChangeD,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onStoreDataChangeD: function(store, eOpts) {
        var trays =[];

        Ext.each(store.getRange(),function(record){
            trays.push(record.data);
        });


        Ext.Ajax.request({
                                    url : 'tray/setTraySession',
                                    params : {
                                        'trays':Ext.JSON.encode(trays)
                                    },
                                    scope : this,
                                    success : function(response) {
                                        //var data = Ext.JSON.decode(response.responseText);

                                    }
                                });
    }

});