sap.ui.define([
	"sapui5/demo/mvcapp/controller/BaseController",
	"sapui5/demo/mvcapp/model/formatter",
	"sapui5/demo/mvcapp/model/types"
], function(BaseController, formatter, types) {
	"use strict";
	
	return BaseController.extend("sapui5.demo.mvcapp.controller.Detail", {
		
		 formatter: formatter,
		 types: types,

		/**
		 * Initialization
		 */
		onInit: function() {
			this.getRouter()
					.getRoute("detail")
					.attachPatternMatched(this._onObjectMatched, this);
			
			var oModel = new sap.ui.model.json.JSONModel({
				buttonPrev: false,
				buttonNext: false 
			});
			this.getView().setModel(oModel, "viewModel");
		},
		
		/**
		 * Event handlers
		 */
		onNavPress: function() {
			this.myNavBack("master");
		},
		onPageUp: function(oEvent) {
			var sID = oEvent.getSource().getBindingContext().sPath;
			sID = parseInt(sID.substr(sID.lastIndexOf("/")+1));
			sID = sID - 1;
			this.getRouter().navTo("detail", { ID: sID });	
		},
		onPageDown: function(oEvent) {
			var sID = oEvent.getSource().getBindingContext().sPath;
			sID = parseInt(sID.substr(sID.lastIndexOf("/")+1));
			sID = sID + 1;
			this.getRouter().navTo("detail", { ID: sID });	
		},
		
		/**
		 *  internal methods
		 */
		_onObjectMatched : function (oEvent) {
			this.sObjectId = oEvent.getParameter("arguments").ID;
			var sObjectPath = "/" + this.sObjectId;
			
			this._bindView(sObjectPath);
			this._updateViewModel();
		},
		_bindView : function (sObjectPath) {
			var oView = this.getView();
			oView.bindElement(sObjectPath);
		},
		_updateViewModel : function() {
			var oModel = this.getView().getModel();
			var oViewModel = this.getView().getModel("viewModel");
			var nextObjectId = parseInt(this.sObjectId) + 1;
			var prevObjectId = parseInt(this.sObjectId) - 1;
			
			var bNext = !!oModel.getProperty("/" + nextObjectId);
			var bPrev = !!oModel.getProperty("/" + prevObjectId);
			
			oViewModel.setProperty("/buttonNext", bNext);
			oViewModel.setProperty("/buttonPrev", bPrev);
		}
	});
});