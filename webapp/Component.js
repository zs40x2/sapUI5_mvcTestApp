sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
	], function(UIComponent, JSONModel) {
		"use strict";
	
	return UIComponent.extend("sapui5.demo.mvcapp.App", {
		metadata: {
			"rootView": "sapui5.demo.mvcapp.view.App"
		},
		createContent: function() {
			var oRootView = UIComponent.prototype.createContent.apply(this, arguments);
			
			var oData = {
				"CountSuppliers" : "2",
    			"Suppliers":[  
	        		{  
	            		"ID":0,
	            		"Name":"Exotic Liquids",
	        	    	"Address":{  
	    	            	"Street":"NE 228th",
		                	"City":"Sammamish",
	                		"State":"WA",
	                		"ZipCode":"98074",
	            	    	"Country":"USA"
	        	    	}
	    	        },
		            {  
	        	    	"ID":1,
	    	        	"Name":"Tokyo Traders",
		            	"Address":{  
	                		"Street":"NE 40th",
	                		"City":"Redmond",
	                		"State":"WA",
	                		"ZipCode":"98052",
	                		"Country":"USA"
	            		}
	            	}
	        ]}; 
			
			var oModel = new JSONModel();
            oModel.setData(oData);
            this.setModel(oModel);
           
            oApp = oRootView.byId("app");
            return oRootView;
		}
	});	
});