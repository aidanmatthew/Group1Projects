/*
 * File: app/view/Products.js
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

Ext.define('BurgerQueen.view.Products', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Products',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    height: 559,
    html: '<link href=\'http://fonts.googleapis.com/css?family=Abel\'\nrel=\'stylesheet\' type=\'text/css\'>',
    itemId: 'Products',
    style: 'font-family: \'Century Gothic\';',
    width: 1099,
    autoScroll: true,
    bodyStyle: 'font-family: \'Century Gothic\';',
    header: false,
    title: 'Products',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
                            xtype: 'textfield',
                            id: 'SearchField',
                            itemId: 'SearchField',
                            style: 'font-family: \'Century Gothic\';',
                            fieldLabel: 'Search',
                            labelStyle: 'font-family: \'Century Gothic\'',
                            fieldStyle: ' font-family: \'Century Gothic\';',
                            listeners: {
                                change: {
                                    fn: me.onSearchFieldChange,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'container',
                    margin: '0, 300, 0, 300',
                    padding: '20,100,100,100',
                    items: [
                        {
                            xtype: 'gridpanel',
                            id: 'ProductGrid',
                            itemId: 'ProductGrid',
                            ui: 'menubarbtn',
                            bodyBorder: true,
                            header: false,
                            title: 'My Grid Panel',
                            columnLines: false,
                            hideHeaders: true,
                            store: 'ProductStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {

                                        return '<img src="'+value+'" width="250" height="250" border="0" />';
                                    },
                                    dataIndex: 'Image',
                                    text: 'Image',
                                    flex: 0.4
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-family: \'Abel\';\nfont-size: 15px;',
                                    dataIndex: 'Name',
                                    text: 'Name',
                                    flex: 0.4
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onSearchFieldChange: function(field, newValue, oldValue, eOpts) {
                var productStore = Ext.getStore('ProductStore');
                productStore.clearFilter();
                if(!Ext.isEmpty(newValue)){
                    productStore.filter('Name', newValue);
                }else{
                    productStore.clearFilter();
                }

    }

});