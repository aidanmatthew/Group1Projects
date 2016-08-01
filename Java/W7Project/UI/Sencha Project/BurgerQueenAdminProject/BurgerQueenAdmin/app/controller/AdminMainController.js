/*
 * File: app/controller/AdminMainController.js
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

Ext.define('BurgerQueenAdmin.controller.AdminMainController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'adminMenu',
            selector: '#adminMenu'
        },
        {
            ref: 'adminMain',
            selector: '#adminMain'
        },
        {
            ref: 'adminCommentsGrid',
            selector: '#AdminCommentsGrid'
        },
        {
            ref: 'adminMessageToSend',
            selector: '#AdminMessageToSend'
        }
    ],

    onShowAdminMenuClick: function() {
        this.getAdminMenu().show();
    },

    onAcceptFeedbackAdminClick: function() {
                    var feedbackGrid = this.getAdminCommentsGrid(),
                    selectedModel = feedbackGrid.getSelectionModel(),
                    selectedFeedback = selectedModel.getSelection(),
                    store = Ext.getStore('AdminCommentsStore');
                    if(!Ext.isEmpty(selectedFeedback)){
                        var userId = selectedFeedback[0].data.User;
                        var feedBackId = selectedFeedback[0].data.Id;
                        Ext.Ajax.request({
                                     url : 'user/getUserById/' + userId,
                                     params : {
                                     },
                                     scope : this,
                                     success : function(response) {
                                         var data = response.responseText;
                                         var decodedData = Ext.decode(data);
                                         console.log(decodedData);
                                         decodedData.points += 1;
                                         console.log(decodedData);
                                                         Ext.Ajax.request({
                                                            url:'user/updateUser',
                                                            headers: { 'Content-Type': 'application/json',
                                                             'Accept': 'application/json'},
                                                             jsonData:decodedData,
                                                            scope:this,
                                                            success : function(response) {
                                                                Ext.MessageBox.alert('Success','Points added to user');
                                                                    Ext.Ajax.request({
                                                                   url:'feedback/removeFeedback/'+feedBackId,
                                                                           params:{

                                                                           },
                                                                            scope:this,
                                                                            success : function(response) {
                                                                            store.remove(selectedFeedback);
                                                                        }
                                                                    });

                                                            }
                                                        });
                                     }
                                });

                    }else{
                        Ext.MessageBox.alert('Error', 'No selected feedback');
                    }

    },

    onDeleteFeedbackClick: function() {
        var feedbackGrid = this.getAdminCommentsGrid(),
            store = Ext.getStore('AdminCommentsStore');
                            selectedModel = feedbackGrid.getSelectionModel();
                            selectedFeedback = selectedModel.getSelection();
                            if(!Ext.isEmpty(selectedFeedback)){
                                Ext.Msg.confirm("Confirmation", "Are you sure you want to delete feedback?", function(btnText){
                                    if(btnText === "yes"){
                                        var feedBackId = selectedFeedback[0].data.Id;

                                          Ext.Ajax.request({
                                              url:'feedback/removeFeedback/'+feedBackId,
                                              params:{
                                              },
                                               scope:this,
                                               success : function(response) {
                                                 var data = response.responseText;
                                                 var decodedData = Ext.decode(data);
                                                 if(!Ext.isEmpty(decodedData)){
                                                     Ext.MessageBox.alert('Success', 'Feedback has been deleted');
                                                    store.remove(selectedFeedback);
                                                 }
                                                 else{
                                                     Ext.MessageBox.alert('Error', 'Failed to delete feedback');
                                                 }
                                              }
                                          });
                                    }else{

                                    }
                                },this);

                            }else{
                                Ext.MessageBox.alert('Error', 'No selected feedback to approve');
                            }

    },

    onAdminSendMsgBtnClick: function() {
                var message = this.getAdminMessageToSend().getValue();
                if(Ext.isEmpty(message)){
                    Ext.MessageBox.alert('Error', 'Empty message');
                }else{
                                var store = Ext.getStore('AdminMessageStore');
                                        Ext.Ajax.request({
                                                      url:'message/sendMessage',
                                                      params:{
                                                          message : message
                                                      },
                                                       scope:this,
                                                       success : function(response) {
                                                         var data = response.responseText;
                                                         if(!Ext.isEmpty(data)){
                                                             Ext.MessageBox.alert('Success', 'Message successfully sent to all clients');
                                                             var messageMod = {
                                                                    Message : message
                                                                };
                                                                 store.add(messageMod);
                                                         }else{
                                                             Ext.MessageBox.alert('Error', 'Message failed to sent');
                                                         }

                                                      }
                                                  });
                }
    },

    init: function(application) {
        this.control({
            "#showAdminMenu": {
                click: this.onShowAdminMenuClick
            },
            "#acceptFeedbackAdmin": {
                click: this.onAcceptFeedbackAdminClick
            },
            "#deleteFeedback": {
                click: this.onDeleteFeedbackClick
            },
            "#AdminSendMsgBtn": {
                click: this.onAdminSendMsgBtnClick
            }
        });
    }

});