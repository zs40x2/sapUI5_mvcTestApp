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
			
			var sPageId = oApp.getPages()[1].getId();
			oApp.to(sPageId);
			
			var oPage = oApp.getPage(sPageId);
			var oContext = oEvent.getSource().getBindingContext();
			oPage.setBindingContext(oContext);
		}
	});
});