sap.ui.define([
	"sapui5/demo/mvcapp/controller/BaseController",
	"sapui5/demo/mvcapp/model/formatter"
], function(BaseController, History, formatter) {
	"use strict";
	
	return BaseController.extend("sapui5.demo.mvcapp.controller.Detail", {
		
		 formatter: formatter,
		 
		/**
		 * Initialization
		 */
		onInit: function() {
			this.getRouter()
					.getRoute("detail")
					.attachPatternMatched(this._onObjectMatched, this);
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