/*
 * File: app/view/MyViewport.js
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

Ext.define('Libray.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.Display',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.selection.CheckboxModel'
    ],

    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    height: 807,
                    autoScroll: true,
                    header: false,
                    overlapHeader: false,
                    title: '',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            html: '<link href=\'http://fonts.googleapis.com/css?family=Abel\'\n	rel=\'stylesheet\' type=\'text/css\'>\n <center><h1 style = \'font-family: Abel;margin-top: 310px; \'>Book for a Day</h1></center>\n <hr width="550">',
                            itemId: 'mycontainer3',
                            autoScroll: true,
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    flex: 1,
                                    height: 98,
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                align: 'center',
                                                pack: 'center'
                                            },
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    itemId: 'userName',
                                                    fieldLabel: 'User name:'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    itemId: 'password',
                                                    fieldLabel: 'Password:',
                                                    inputType: 'password'
                                                },
                                                {
                                                    xtype: 'toolbar',
                                                    flex: 1,
                                                    border: '',
                                                    height: 48,
                                                    ui: 'untitled-ui-3',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'center'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            itemId: 'loginBtn',
                                                            text: 'Login'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            itemId: 'registerBtn',
                                                            text: 'Register'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            height: 168,
                            hidden: true,
                            itemId: 'mycontainer4',
                            width: 381,
                            autoScroll: true,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    height: 146,
                                    html: '<link href=\'http://fonts.googleapis.com/css?family=Abel\'\n	rel=\'stylesheet\' type=\'text/css\'>\n <center><div id="header"><h2 style = \'font-family: Abel;\'>Select & Borrow!</h2></div></center>\n <hr width="550">',
                                    style: '#nav {\nline-height: 30px;\nbackground-color: #D4F5C9;\nheight: 460px;\nwidth: 180px;\nfloat: left;\npadding: 5px;\n}',
                                    width: 575,
                                    layout: {
                                        type: 'hbox',
                                        align: 'bottom'
                                    },
                                    items: [
                                        {
                                            xtype: 'displayfield',
                                            flex: 1,
                                            itemId: 'welcomeLabel',
                                            fieldLabel: 'Welcome',
                                            value: ''
                                        },
                                        {
                                            xtype: 'button',
                                            itemId: 'logout',
                                            text: 'Logout'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    height: 300,
                                    itemId: 'bookListGrid',
                                    width: 1447,
                                    header: false,
                                    title: 'My Grid Panel',
                                    store: 'BookStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            itemId: 'title',
                                            width: 364,
                                            dataIndex: 'title',
                                            text: 'Title'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 360,
                                            dataIndex: 'author',
                                            text: 'Author'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 374,
                                            dataIndex: 'publisher',
                                            text: 'Publisher',
                                            flex: 1
                                        }
                                    ],
                                    viewConfig: {
                                        id: 'BookListView'
                                    },
                                    selModel: Ext.create('Ext.selection.CheckboxModel', {

                                    })
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    height: 285,
                                    items: [
                                        {
                                            xtype: 'toolbar',
                                            height: 80,
                                            hidden: true,
                                            itemId: 'mytoolbar1',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center'
                                            },
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    itemId: 'addBookWinShowBtn',
                                                    text: 'Add Book'
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'removeBookBtn',
                                                    text: 'Remove Book'
                                                },
                                                {
                                                    xtype: 'button',
                                                    disabled: true,
                                                    itemId: 'editBookBtn',
                                                    text: 'Edit Book Details'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'toolbar',
                                            height: 118,
                                            itemId: 'mytoolbar5',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center'
                                            },
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    itemId: 'borrowBtn',
                                                    text: ' Borrow'
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'manageBtn',
                                                    text: 'Manage Borrowed Books'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            hidden: true,
                            itemId: 'mycontainer5',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    height: 146,
                                    html: '<link href=\'http://fonts.googleapis.com/css?family=Abel\'\n	rel=\'stylesheet\' type=\'text/css\'>\n <center><div id="header"><h2 style = \'font-family: Abel;\'>Checked out Book/s</h3></div></center>\n <hr width="400">',
                                    itemId: 'logout',
                                    style: '#nav {\nline-height: 30px;\nbackground-color: #D4F5C9;\nheight: 460px;\nwidth: 180px;\nfloat: left;\npadding: 5px;\n}',
                                    width: 515,
                                    layout: {
                                        type: 'hbox',
                                        align: 'bottom'
                                    },
                                    items: [
                                        {
                                            xtype: 'displayfield',
                                            flex: 1,
                                            itemId: 'welcome',
                                            fieldLabel: 'Welcome',
                                            value: ''
                                        },
                                        {
                                            xtype: 'button',
                                            itemId: 'logoutBtn',
                                            text: 'Logout'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    height: 425,
                                    itemId: 'borrowedGrid',
                                    width: 1447,
                                    header: false,
                                    title: '',
                                    store: 'BorrowedStore',
                                    viewConfig: {
                                        itemId: 'borrowedView'
                                    },
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            width: 142,
                                            dataIndex: 'title',
                                            text: 'Title'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 206,
                                            dataIndex: 'author',
                                            text: 'Author'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'publisher',
                                            text: 'Publisher',
                                            flex: 1
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
                                                    itemId: 'returnBookBtn',
                                                    width: 100,
                                                    text: 'Return Book'
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'backBtn',
                                                    text: 'Back'
                                                }
                                            ]
                                        }
                                    ],
                                    selModel: Ext.create('Ext.selection.CheckboxModel', {

                                    })
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