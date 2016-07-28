/*
 * File: resources/app/view/AdminAddMealWindow.js
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

Ext.define('BurgerQueen.view.AdminAddMealWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldContainer',
        'Ext.form.field.File',
        'Ext.form.field.FileButton',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.toolbar.Toolbar'
    ],

    height: 363,
    id: 'adminAddMealWindow',
    itemId: 'adminAddMealWindow',
    width: 400,
    header: false,
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'adminAddMealForm',
                    itemId: 'adminAddMealForm',
                    bodyPadding: 10,
                    header: false,
                    title: 'adminAddMealForm',
                    items: [
                        {
                            xtype: 'container',
                            height: 55,
                            html: '<link href=\'http://fonts.googleapis.com/css?family=Abel\'\n	rel=\'stylesheet\' type=\'text/css\'>\n <center><div id="header"><h2 style = \'font-family: Abel;\'>Create Meal</h2></div></center>'
                        },
                        {
                            xtype: 'fieldcontainer',
                            height: 237,
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'filefield',
                                    id: 'adminMealImg',
                                    itemId: 'adminMealImg',
                                    width: 338,
                                    fieldLabel: 'Photo',
                                    name: 'image',
                                    allowBlank: false,
                                    emptyText: 'Select an image',
                                    buttonText: 'Browse',
                                    buttonConfig: {
                                        xtype: 'filebutton',
                                        icon: '',
                                        iconCls: '\'upload-icon\'',
                                        text: ''
                                    }
                                },
                                {
                                    xtype: 'combobox',
                                    id: 'adminMealCategory',
                                    itemId: 'adminMealCategory',
                                    width: 338,
                                    fieldLabel: 'Category',
                                    labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                                    name: 'category',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    displayField: 'category',
                                    queryMode: 'local',
                                    store: 'CategoryStore',
                                    valueField: 'category'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'adminMealCode',
                                    itemId: 'adminMealCode',
                                    width: 338,
                                    fieldLabel: 'Meal Code',
                                    labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                                    name: 'code',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'adminAddMealName',
                                    itemId: 'adminAddMealName',
                                    width: 338,
                                    fieldLabel: 'Meal Name',
                                    labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                                    name: 'name',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'adminAddMealDesc',
                                    itemId: 'adminAddMealDesc',
                                    width: 338,
                                    fieldLabel: 'Description:',
                                    labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                                    name: 'description',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'numberfield',
                                    id: 'adminAddMealPrice',
                                    itemId: 'adminAddMealPrice',
                                    width: 338,
                                    fieldLabel: 'Price:',
                                    labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                                    name: 'price',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    enforceMaxLength: false,
                                    maxValue: 99,
                                    minValue: 1
                                },
                                {
                                    xtype: 'numberfield',
                                    id: 'adminAddMealPoints',
                                    itemId: 'adminAddMealPoints',
                                    width: 338,
                                    fieldLabel: 'Points:',
                                    labelSeparator: '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>:',
                                    name: 'points',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    maxValue: 10,
                                    minValue: 1
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    items: [
                        {
                            xtype: 'button',
                            id: 'adminSubmitMealBtn',
                            itemId: 'adminSubmitMealBtn',
                            text: 'Submit'
                        },
                        {
                            xtype: 'button',
                            id: 'adminCancelCreateBtn',
                            itemId: 'adminCancelCreateBtn',
                            text: 'Cancel'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});