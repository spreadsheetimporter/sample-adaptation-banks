/***
@controller Name:fin.cash.bankmaster.manage.controller.ManageBanks,
*@viewId:application-adaptationproject-display-component---ManageBanks
*/
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
		'sap/ui/core/mvc/ControllerExtension'
	],
	function (
		ControllerExtension
	) {
		"use strict";
		return ControllerExtension.extend("customer.app.finbank.OverflowToolbar", {

			async onUpload(event)  {
				const spreadsheetUploadComponent = await this.base.getView().getController().getOwnerComponent().createComponent(
					{
						usage: "customer.upload",
						async: true,
						componentData: {
							context: this,
							odataType: "FCLM_BM_SRV.Bank"
						}
					}
				)
				spreadsheetUploadComponent.openSpreadsheetUploadDialog()
			}
		});
	});