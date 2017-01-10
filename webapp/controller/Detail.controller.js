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
		
		/**
		 *  internal methods
		 */
		_onObjectMatched : function (oEvent) {
			var sObjectPath = "/Suppliers/" + oEvent.getParameter("arguments").ID;
			this._bindView(sObjectPath);
		},
		_bindView : function (sObjectPath) {
			var oView = this.getView();
			oView.bindElement(sObjectPath);
		}
	});
});