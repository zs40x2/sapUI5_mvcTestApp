sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sapui5/demo/mvcapp/model/AppModel"
	], function(UIComponent, JSONModel, Device, AppModel) {
		"use strict";
	
	return UIComponent.extend("sapui5.demo.mvcapp.Component", {

		metadata: {
			manifest: "json"
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
		
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
			
			var oAppModel = new AppModel("/Suppliers");
          
            jQuery.ajax({
                type : "GET",
                contentType : "application/json",
                url : "/Suppliers",
                dataType : "json",
                success : function(oData) {
                    oAppModel.setData(oData);
                },
                error : function() {
                    jQuery.sap.log.debug("something went wrong while retrieving the data");
                }
			});
			
            this.setModel(oAppModel);
		
			this.getRouter().initialize();
		}
	});	
});