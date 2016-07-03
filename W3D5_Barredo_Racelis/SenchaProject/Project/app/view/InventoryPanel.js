/*
 * File: app/view/InventoryPanel.js
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

Ext.define('Project.view.InventoryPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.inventorypanel1',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.View',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.grid.plugin.RowEditing'
    ],

    itemId: 'inventoryPanel',
    bodyPadding: 5,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: 'titleInventoryPage',
                            fieldLabel: 'Title',
                            inputId: 'title'
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'authorInventoryPage',
                            fieldLabel: 'Author:',
                            inputId: 'author'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'inventorySearchBttn',
                            width: '',
                            text: 'Filter'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    itemId: 'bookGrid',
                    autoScroll: true,
                    title: 'Book Records',
                    store: 'Books',
                    columns: [
                        {
                            xtype: 'rownumberer'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 200,
                            dataIndex: 'title',
                            text: 'Ttitle',
                            editor: {
                                xtype: 'textfield',
                                itemId: 'titleColumnTextField',
                                width: 100,
                                hideLabel: true
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'author',
                            text: 'Author',
                            editor: {
                                xtype: 'textfield',
                                itemId: 'authorColumnTextField',
                                width: 100,
                                hideLabel: true
                            }
                        },
                        {
                            xtype: 'datecolumn',
                            width: 119,
                            dataIndex: 'datePublished',
                            text: 'Date Published',
                            editor: {
                                xtype: 'datefield',
                                itemId: 'dateColumnDateField'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'description',
                            text: 'Description',
                            flex: 1,
                            editor: {
                                xtype: 'textfield',
                                itemId: 'descriptionColumnTextField'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            itemId: 'category',
                            dataIndex: 'category',
                            text: 'Category',
                            flex: 1,
                            editor: {
                                xtype: 'combobox',
                                itemId: 'categoryColumnComboBox',
                                forceSelection: true,
                                multiSelect: true,
                                store: [
                                    'Science fiction',
                                    'Satire',
                                    'Drama',
                                    'Action and Adventure',
                                    'Romance',
                                    'Mystery',
                                    'Horror',
                                    'Self help',
                                    'Health',
                                    'Guide',
                                    'Travel',
                                    'Children',
                                    'Religion, Spirituality & New Age',
                                    'Science',
                                    'History',
                                    'Math',
                                    'Anthology',
                                    'Poetry',
                                    'Encyclopedias',
                                    'Dictionaries',
                                    'Comics',
                                    'Art',
                                    'Cookbooks',
                                    'Diaries',
                                    'Journals',
                                    'Prayer books',
                                    'Series',
                                    'Trilogy',
                                    'Biographies',
                                    'Autobiographies',
                                    'Fantasy'
                                ]
                            }
                        }
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.RowEditing', {

                        })
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
                            itemId: 'removeBooksBtn',
                            text: 'Remove'
                        },
                        {
                            xtype: 'button',
                            itemId: 'addBooksBtn',
                            text: 'Add'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});