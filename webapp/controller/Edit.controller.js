sap.ui.define([
		"sapui5/demo/mvcapp/controller/BaseController",
		"sapui5/demo/mvcapp/model/formatter",
		"sapui5/demo/mvcapp/model/types",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageToast"
	], function (BaseController, formatter, types, JSONModel, MessageToast) {
	"use strict";
	return BaseController.extend("sapui5.demo.mvcapp.controller.Edit", {

        formatter: formatter,
        types: types,
		
		onInit : function () {
			var oRouter, oViewModel;
			oRouter = this.getRouter();
			oViewModel = new JSONModel({
				"createMode": false
			});
			this.getView().setModel(oViewModel, "viewModel");
			
			oRouter.attachRoutePatternMatched(this._onRouteMatched, this);
		},
		onNavPress : function () {
			this.myNavBack("master");
		},
		
		onSave: function(){
			var sLocalPath,
				sUrl = "/destinations/learnui5", 
				sPath = this.getView().getElementBinding().getPath(),
				oModel = this.getModel(),
				oObject = oModel.getProperty(sPath),
				that = this;
			
			//check if we're in edit or createMode
			if(!this.getModel("viewModel").getProperty("/createMode")){
				//we're not, so we update an existing entry
				sUrl = "/" + oObject.id;
				sLocalPath = sPath;
			} else {
				sUrl = "/";
			}
			oModel.saveEntry(oObject, sUrl, sLocalPath);
			oModel.attachEventOnce("requestCompleted", function(){
				that.getRouter().navTo("master");
			}, this);
			oModel.attachEventOnce("requestFailed", function(){
				MessageToast.show(that.getResourceBundle().getText("updateFailed"));
			}, this);
		},
		
		_onRouteMatched : function (oEvent) {
			var oEventData = oEvent.getParameter("arguments");
			if (oEvent.getParameter("name")==="master"){
			    return;
			}
			if(oEventData && oEventData.ID){
				this.sObjectPath = "/" + oEventData.ID;
			} else {
				this.getView().getModel("viewModel").setProperty("/createMode", true);
				this.getModel().createEntry("/");
				this.sObjectPath = "/createEntry";
			}
			this._bindView();
		},
		
		_bindView : function () {
			var oView = this.getView();
			oView.bindElement(this.sObjectPath);
		}
	});
});