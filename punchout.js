// Copyright (c) 2013 NLTD CUPS team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var qaBaseUrl = "http://qa.staplesimprintsolutions.com/StudioJs.aspx?RETURNURL=Punchout.aspx&ACTION=CREATE&SKU=",
	stagingBaseUrl = "http://stage.staplesimprintsolutions.com/StudioJs.aspx?RETURNURL=Punchout.aspx&ACTION=CREATE&SKU=",
	productionBaseUrl = "http://www.staplesimprintsolutions.com/StudioJs.aspx?RETURNURL=Punchout.aspx&ACTION=CREATE&SKU=",
	getPunchoutFn,
	context = "selection",
	title = "CUPS Punchout",
	punchoutContextMenu;

getPunchoutFn = function (baseUrl) {
	var punchoutFn = function (info, tab) {
		var sku = info.selectionText,
			url = baseUrl + sku;

		chrome.tabs.create({'url': url});
	};

	return punchoutFn;
};

punchoutContextMenu = chrome.contextMenus.create({"title": title, "contexts":[context]});

chrome.contextMenus.create(
  {"title": "QA", "parentId": punchoutContextMenu, "onclick": getPunchoutFn(qaBaseUrl), "contexts":[context]});

chrome.contextMenus.create(
  {"title": "Staging", "parentId": punchoutContextMenu, "onclick": getPunchoutFn(stagingBaseUrl), "contexts":[context]});

chrome.contextMenus.create(
  {"title": "Production", "parentId": punchoutContextMenu, "onclick": getPunchoutFn(productionBaseUrl), "contexts":[context]});
