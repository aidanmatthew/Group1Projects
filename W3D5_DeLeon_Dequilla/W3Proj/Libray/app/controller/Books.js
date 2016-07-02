/*
 * File: app/controller/Books.js
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

Ext.define('Libray.controller.Books', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'bookListView',
            selector: '#BookListView'
        },
        {
            ref: 'borrowedView',
            selector: '#borrowedView'
        },
        {
            ref: 'booksCont',
            selector: '#mycontainer4'
        },
        {
            ref: 'borrowedCont',
            selector: '#mycontainer5'
        }
    ],

    onBorrowBtnClick: function() {
        var gridBook = this.getBookListView(),
            storeBook = gridBook.getStore(),
            storeBorrowed = Ext.getStore('BorrowedStore'),
            selectModel = gridBook.getSelectionModel(),
            selectedBooks = selectModel.getSelection(),
            selected = selectedBooks.length;

            storeBorrowed.add(selectedBooks);
            storeBook.remove(selectedBooks);

        //     for(var ctr = 0; ctr<selected;ctr++){
        // //         storeBook.


        //     }



    },

    onReturnBookBtnClick: function() {
        var gridBorrowed = this.getBorrowedView(),
                    storeBorrowed = gridBorrowed.getStore(),
                    storeBook = Ext.getStore('BookStore'),
                    selectModel = gridBorrowed.getSelectionModel(),
                    selectedBooks = selectModel.getSelection(),
                    selected = selectedBooks.length;

        storeBook.add(selectedBooks);
        storeBorrowed.remove(selectedBooks);
    },

    onBackBtnClick: function() {
        this.getBooksCont().show();
            this.getBorrowedCont().hide();
    },

    init: function(application) {
        this.control({
            "#borrowBtn": {
                click: this.onBorrowBtnClick
            },
            "#returnBookBtn": {
                click: this.onReturnBookBtnClick
            },
            "#backBtn": {
                click: this.onBackBtnClick
            }
        });
    }

});
