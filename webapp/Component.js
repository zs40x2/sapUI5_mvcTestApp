sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
	], function(UIComponent, JSONModel) {
		"use strict";
	
	return UIComponent.extend("sapui5.demo.mvcapp.App", {
		metadata: {
			"rootView": "sapui5.demo.mvcapp.view.App",
			"config": {
				"serviceUrl": "webapp/service/data.json"
			},
			"routing": {
				"routerClass": "sap.m.routing.Router",
				"viewType": "XML",
				"viewPath": "sapui5.demo.mvcapp.view",
				"controlId": "app",
				"controlAggregation": "pages",
				"transition": "slide"
			},
			"routes": [{
				"pattern": "",
				"name": "master",
				"target": "mater" 
			},
			{
				"pattern": "detail/{ID}",
				"name": "detail",
				"target": "detail"
			}],
			"targets": {
				"master": {
					"viewName": "master",
					"viewLevel": 1
				},
				"detail": {
					"viewName": "Detail",
					"viewLevel": 2
				}
			}
		},
		createContent: function() {
			var oRootView = UIComponent.prototype.createContent.apply(this, arguments);
			
            this.setModel(new JSONModel(this.getMetadata().getConfig().serviceUrl));
           
            oApp = oRootView.byId("app");
            return oRootView;
		}
	});	
});