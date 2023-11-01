/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo_v2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
