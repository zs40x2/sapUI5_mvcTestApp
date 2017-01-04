sap.ui.define([
	"sapui5/demo/mvcapp/controller/BaseController",
], function(BaseController) {
	"use strict";
	
	return BaseController.extend("sapui5.demo.mvcapp.controller.Master", {
		
		logError: function() {
			jQuery.sap.log.error("Error log", "This is an error log", "controller initialized");
		},
		onListPress: function(oEvent) {
			
			jQuery.sap.log.info("onListPress", "onListPress", "onListPress");
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oItem = oEvent.getSource();
			oRouter.navTo("detail", {
				ID: oItem.getBindingContext().getProperty("ID")
			});
		}
	});
});