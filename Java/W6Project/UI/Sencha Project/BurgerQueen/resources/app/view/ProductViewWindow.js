/*
 * File: resources/app/view/ProductViewWindow.js
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

    height: 278,
    html: '<link href=\'http://fonts.googleapis.com/css?family=Abel\'rel=\'stylesheet\' type=\'text/css\'>',
    id: 'ProductView',
    itemId: 'ProductView',
    width: 665,
    frameHeader: false,
    header: false,
    manageHeight: false,
    title: 'My Window',
    modal: true,

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'center'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    style: 'font-family: \'Century Gothic\';',
                    shadow: false,
                    layout: {
                        type: 'hbox',
                        align: 'stretchmax'
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
                            height: 243,
                            autoScroll: true,
                            bodyPadding: 10,
                            bodyStyle: 'font-family: \'Century Gothic\';',
                            header: false,
                            title: 'My Form',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    id: 'ProductName',
                                    itemId: 'ProductName',
                                    fieldLabel: '',
                                    labelStyle: 'font-family: \'Abel; font-size: 15px;',
                                    value: 'Name',
                                    fieldStyle: 'font-family: \'Insaniburger with Cheese\'; font-size: 35px;color:#8b542f;'
                                },
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    id: 'ProductPrice',
                                    itemId: 'ProductPrice',
                                    padding: '10px 0px 0px 0px',
                                    style: 'font-family: \'Century Gothic\';',
                                    fieldLabel: 'Price:',
                                    labelStyle: 'font-family: \'Abel\'; font-size: 15px;  ',
                                    value: 'Price',
                                    fieldStyle: 'font-family: \'Abel\'; font-size: 22px;font-weight: bold;'
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '50%',
                                    id: 'ProductQuantity',
                                    itemId: 'ProductQuantity',
                                    padding: '10px 0px 0px 0px',
                                    width: 250,
                                    fieldLabel: 'Quantity',
                                    labelStyle: 'font-family: \'Abel\'; font-size: 15px;',
                                    value: 1,
                                    fieldStyle: 'font-family: \'Abel\'; font-size: 15px;',
                                    minValue: 1
                                },
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    id: 'ProductDescription',
                                    itemId: 'ProductDescription',
                                    padding: '10px 0px 0px 0px',
                                    fieldLabel: '',
                                    labelStyle: 'font-family: \'Abel\'; font-size: 15px;',
                                    value: 'Description',
                                    fieldStyle: 'font-family: \'Abel\'; font-size: 17px;'
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
                                            id: 'productViewClose',
                                            itemId: 'productViewClose',
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
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            id: 'productPoints',
                            itemId: 'productPoints',
                            fieldLabel: 'Label'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});