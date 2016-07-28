/*
 * File: app/controller/AdminProducts.js
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

Ext.define('BurgerQueenAdmin.controller.AdminProducts', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'adminAddMealForm',
            selector: '#adminAddMealForm'
        },
        {
            ref: 'adminAddMealWindow',
            selector: '#adminAddMealWindow'
        },
        {
            ref: 'adminEditMealWindow',
            selector: '#adminEditMealWindow'
        },
        {
            ref: 'adminEditMealName',
            selector: '#adminEditMealName'
        },
        {
            ref: 'adminEditDescription',
            selector: '#adminEditDescription'
        },
        {
            ref: 'adminEditPrice',
            selector: '#adminEditPrice'
        },
        {
            ref: 'adminEditPoints',
            selector: '#adminEditPoints'
        },
        {
            ref: 'adminEditMealForm',
            selector: '#adminEditMealForm'
        }
    ],

    onAdminCreateBtnClick: function() {
            Ext.create('BurgerQueenAdmin.view.AdminAddMealWindow').show();
    },

    onAdminDeleteBtnClick: function() {
        var adminProductsGrid = Ext.getCmp('adminProductGridView'),
            adminProductStore = adminProductsGrid.getStore(),
            selectModel = adminProductsGrid.getSelectionModel(),
            selectedProduct = selectModel.getSelection();

         if (!Ext.isEmpty(selectedProduct)) {
             Ext.Msg.confirm("Confirmation", "Are you sure you want to delete this meal?", function(btnText){
            if(btnText === "yes"){
                var product = selectedProduct[0].data;

                Ext.Ajax.request({
                    url:'meal/deleteMealById/' + product.Id,
                    params : {

                    },
                    //jsonData:meal,
                    scope:this,
                    success : function(response) {
                        Ext.MessageBox.alert('Success','Meal has been deleted!');
                        adminProductStore.remove(selectedProduct);
                        adminProductsGrid.refresh();
                    }
                });
            }
        });
         } else {
             Ext.MessageBox.alert('Error','Please select an item!');
         }

    },

    onAdminSubmitMealBtnClick: function() {
         var form = this.getAdminAddMealForm(),
             formValues = form.getValues(),
             image = Ext.getCmp('adminMealImg').getValue(),
             category = formValues.category.toLocaleLowerCase(),

             setImage = 'resources/images/' + category +'/'+image,
             code = formValues.code,
             name = formValues.name,
             description = formValues.description,
             price = formValues.price,
             points = formValues.points,
             adminProductsGrid = Ext.getCmp('adminProductGridView');

        var meal = {
            image:setImage,
            category:category,
            code:code,
            name:name,
            description:description,
            price:price,
            points:points
        };


        if(form.isValid()){
            Ext.Ajax.request({
                url : 'meal/addMeal',
                //                 params : ,
                headers: { 'Content-Type': 'application/json',
                          'Accept': 'application/json'},
                jsonData:meal,
                scope : this,
                success : function(response) {
                    var store = Ext.getStore('ProductStore');
                    store.removeAll();
                    Ext.Ajax.request({
                        url : 'meal/getAllMeals',
                        params : {

                        },
                        scope : this,
                        success : function(response) {
                            var data = Ext.JSON.decode(response.responseText);
                            Ext.each(data, function(record){
                                var product = {
                                    Id:record.id,
                                    Code:record.code,
                                    Name:record.name,
                                    Description:record.description,
                                    Category:record.category,
                                    Price:record.price,
                                    Image:record.image,
                                    Points:record.points
                                };
                                store.add(product);
                            });
                        }
                    });
                }
            });
            this.getAdminAddMealWindow().destroy();
            Ext.MessageBox.alert('Success', 'Meal Added!');
        } else {
            Ext.MessageBox.alert('Error', 'Invalid user input, please check fields');
        }
    },

    onAdminCancelCreateBtnClick: function() {
        this.getAdminAddMealWindow().destroy();
    },

    onAdminEditMealBtnClick: function() {
            var adminProductsGrid = Ext.getCmp('adminProductGridView'),
                selectModel = adminProductsGrid.getSelectionModel(),
                selectedProduct = selectModel.getSelection();

            if (!Ext.isEmpty(selectedProduct)) {
                Ext.create('BurgerQueenAdmin.view.AdminEditMealWindow').show();
            } else {
                Ext.MessageBox.alert('Error','Please select an item!');
            }

    },

    onAdminEditMealWindowActivate: function(window, eOpts) {
        var adminProductsGrid = Ext.getCmp('adminProductGridView'),
                                    adminProductStore = adminProductsGrid.getStore(),
                                    selectModel = adminProductsGrid.getSelectionModel(),
                                    selectedProduct = selectModel.getSelection()[0].data;

        this.getAdminEditMealName().setValue(selectedProduct.Name);
            this.getAdminEditDescription().setValue(selectedProduct.Description);
            this.getAdminEditPrice().setValue(selectedProduct.Price);
            this.getAdminEditPoints().setValue(selectedProduct.Points);
    },

    onAdminEditBtnClick: function() {
        var form = this.getAdminEditMealForm(),
            adminProductsGrid = Ext.getCmp('adminProductGridView'),
            selectModel = adminProductsGrid.getSelectionModel(),
            selectedProduct = selectModel.getSelection()[0].data;

        var mealName = this.getAdminEditMealName().getValue(),
            mealDescription = this.getAdminEditDescription().getValue(),
            mealPrice = this.getAdminEditPrice().getValue(),
            mealPoints = this.getAdminEditPoints().getValue();

        var meal = {
            id:selectedProduct.Id,
            image:selectedProduct.Image,
            category:selectedProduct.Category,
            code:selectedProduct.Code,
            name:mealName,
            description:mealDescription,
            price:mealPrice,
            points:mealPoints
        };

        //var meal = selectedProduct;

        if(form.isValid()){
            Ext.Ajax.request({
                url:'meal/updateMeal',
                headers: { 'Content-Type': 'application/json',
                          'Accept': 'application/json'},
                jsonData:meal,
                scope:this,
                success : function(response) {
                    var store = Ext.getStore('ProductStore');
                    store.removeAll();
                    Ext.Ajax.request({
                        url : 'meal/getAllMeals',
                        params : {

                        },
                        scope : this,
                        success : function(response) {
                            var data = Ext.JSON.decode(response.responseText);
                            Ext.each(data, function(record){
                                var product = {
                                    Id:record.id,
                                    Code:record.code,
                                    Name:record.name,
                                    Description:record.description,
                                    Category:record.category,
                                    Price:record.price,
                                    Image:record.image,
                                    Points:record.points
                                };
                                store.add(product);
                            });
                        }
                    });
                }
            });
            this.getAdminEditMealWindow().destroy();
            Ext.MessageBox.alert('Success','Meal has been updated!');
        } else {
            Ext.MessageBox.alert('Error', 'Invalid user input, please check fields');
        }
    },

    onAdminCancelEditBtnClick: function() {
        this.getAdminEditMealWindow().destroy();
    },

    onAdminMealCodeBlur: function() {
        var mealCode = Ext.getCmp('adminMealCode'),
            code = mealCode.getValue();
        //var existing = "";

        Ext.Ajax.request({
            url:'meal/checkMealCode',
            params : {
                'code':code
            },
            success : function(response) {
                var data = response.responseText;

                if (data == 'true') {
                    mealCode.markInvalid('Meal code is already existing!');
                    return 'Meal code is already existing!';
                }

                return true;
            }
        });

        // console.log(existing);
        // return existing;
    },

    init: function(application) {
        this.control({
            "#adminCreateBtn": {
                click: this.onAdminCreateBtnClick
            },
            "#adminDeleteBtn": {
                click: this.onAdminDeleteBtnClick
            },
            "#adminSubmitMealBtn": {
                click: this.onAdminSubmitMealBtnClick
            },
            "#adminCancelCreateBtn": {
                click: this.onAdminCancelCreateBtnClick
            },
            "#adminEditMealBtn": {
                click: this.onAdminEditMealBtnClick
            },
            "#adminEditMealWindow": {
                activate: this.onAdminEditMealWindowActivate
            },
            "#adminEditBtn": {
                click: this.onAdminEditBtnClick
            },
            "#adminCancelEditBtn": {
                click: this.onAdminCancelEditBtnClick
            },
            "#adminMealCode": {
                blur: this.onAdminMealCodeBlur
            }
        });
    }

});
