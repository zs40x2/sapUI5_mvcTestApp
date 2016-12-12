sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
	], function(UIComponent, JSONModel) {
		"use strict";
	
	return UIComponent.extend("sapui5.demo.mvcapp.Component", {
		
		crreateContent: function() {
			UIComponent.prototype.createContent.apply(this, arguments); 
			
			var oModel = sap.ui.model.json.JSONModel();
            oModel.setData(oData);
            this.setModel(oModel);
           
            var oRootView = sap.ui.view({ 
            	type: sap.ui.core.mvc.ViewType.XML,
            	viewName: "sapui5.demo.mvcapp.view.App"
            });
            
            oApp = oAppView.byId("app");
            return oRootView;
		}
	});	
});