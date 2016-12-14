sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("sapui5.demo.mvcapp.controller.Master", {
		
		logError: function() {
			jQuery.sap.log.error("Error log", "This is an error log", "controller initialized");
		},
		onListPress: function(oEvent) {
			
			jQuery.sap.log.info("onListPress", "onListPress", "onListPress");
			
			var oRouter = sap.ui.coew.UIComponent.getRouterFor(this);
			var oItem = oEvent.getSource();
			oRouter.navTo("detail", {
				ID: oItem.getBindingContext().getPropoerty("ID")
			});
		}
	});
});