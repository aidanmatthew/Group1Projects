/*
 * File: app/view/HomePanel.js
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

Ext.define('Project.view.HomePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel12',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label'
    ],

    manageHeight: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
                            xtype: 'label',
                            text: 'WELCOME TO BMS'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});