sap.ui.define([
	"sapui5/demo/mvcapp/controller/BaseController",
], function(BaseController) {
	"use strict";
	
	return BaseController.extend("sapui5.demo.mvcapp.controller.Master", {
		
		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */
		logError: function() {
			jQuery.sap.log.error("Error log", "This is an error log", "controller initialized");
		},
		onListPress: function(oEvent) {
			this._showObject(oEvent.getSource());
		},
		
		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */

		_showObject : function (oItem) {
			this.getRouter().navTo("detail", {
				ID: oItem.getBindingContext().getProperty("ID")
			});
		}
	});
});