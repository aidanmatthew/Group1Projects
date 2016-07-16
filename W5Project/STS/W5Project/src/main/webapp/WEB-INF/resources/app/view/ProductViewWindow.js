/*
 * File: app/view/ProductViewWindow.js
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

Ext.define('BurgerQueen.view.ProductViewWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.Img',
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.field.Number',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.Hidden'
    ],

    height: 405,
    id: 'ProductView',
    itemId: 'ProductView',
    width: 665,
    layout: 'fit',
    frameHeader: false,
    header: false,
    manageHeight: false,
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    shadow: false,
                    layout: {
                        type: 'hbox',
                        align: 'middle'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'image',
                                    height: 201,
                                    id: 'ProductImage',
                                    itemId: 'ProductImage',
                                    width: 201
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            flex: 1,
                            height: 200,
                            autoScroll: true,
                            bodyPadding: 10,
                            header: false,
                            title: 'My Form',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    id: 'ProductName',
                                    itemId: 'ProductName',
                                    fieldLabel: '',
                                    value: 'Name'
                                },
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    id: 'ProductPrice',
                                    itemId: 'ProductPrice',
                                    fieldLabel: 'RMB',
                                    value: 'Price'
                                },
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    id: 'ProductDescription',
                                    itemId: 'ProductDescription',
                                    fieldLabel: '',
                                    value: 'Description'
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    id: 'ProductQuantity',
                                    itemId: 'ProductQuantity',
                                    fieldLabel: 'Quantity',
                                    minValue: 1
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
                                            id: 'AddCartButton',
                                            itemId: 'AddCartButton',
                                            text: 'Add to cart'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'CancelCartButton',
                                            itemId: 'CancelCartButton',
                                            text: 'Cancel'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            id: 'productId',
                            itemId: 'productId',
                            fieldLabel: 'Label'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});