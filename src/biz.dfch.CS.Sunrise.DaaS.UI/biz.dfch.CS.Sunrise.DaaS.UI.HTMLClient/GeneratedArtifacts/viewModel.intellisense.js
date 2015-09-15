/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.ApprovalsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalsList
        },
        ApprovalList: {
            _$class: msls.ContentItem,
            _$name: "ApprovalList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.ApprovalsList,
            value: lightSwitchApplication.ApprovalsList
        },
        Approvals: {
            _$class: msls.ContentItem,
            _$name: "Approvals",
            _$parentName: "ApprovalList",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.ApprovalsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ApprovalsList,
                _$entry: {
                    elementType: lightSwitchApplication.Approval
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Approvals",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: lightSwitchApplication.Approval
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "rows",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ApprovalsList, {
        /// <field>
        /// Called when a new ApprovalsList screen is created.
        /// <br/>created(msls.application.ApprovalsList screen)
        /// </field>
        created: [lightSwitchApplication.ApprovalsList],
        /// <field>
        /// Called before changes on an active ApprovalsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ApprovalsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ApprovalsList],
        /// <field>
        /// Called to determine if the refresh method can be executed.
        /// <br/>canExecute(msls.application.ApprovalsList screen)
        /// </field>
        refresh_canExecute: [lightSwitchApplication.ApprovalsList],
        /// <field>
        /// Called to execute the refresh method.
        /// <br/>execute(msls.application.ApprovalsList screen)
        /// </field>
        refresh_execute: [lightSwitchApplication.ApprovalsList],
        /// <field>
        /// Called after the ApprovalList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalList_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("ApprovalList"); }],
        /// <field>
        /// Called after the Approvals content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approvals_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("Approvals"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("State"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("Name"); }]
    });

    lightSwitchApplication.ApprovalView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: lightSwitchApplication.ApprovalView
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: lightSwitchApplication.Approval
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.Approval,
            value: lightSwitchApplication.Approval
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "left",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.Approval,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.Approval,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.Approval,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.Approval,
            value: lightSwitchApplication.Approval
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: lightSwitchApplication.ApprovalView
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: lightSwitchApplication.ApprovalView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ApprovalView, {
        /// <field>
        /// Called when a new ApprovalView screen is created.
        /// <br/>created(msls.application.ApprovalView screen)
        /// </field>
        created: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called before changes on an active ApprovalView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ApprovalView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the approve method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        approve_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the approve method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        approve_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the decline method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        decline_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the decline method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        decline_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the refresh method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        refresh_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the refresh method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        refresh_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("left"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("State"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("right"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.CatalogueItemsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueItemsList
        },
        CatalogueItem1List: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItem1List",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItemsList,
            value: lightSwitchApplication.CatalogueItemsList
        },
        CatalogueItems: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItems",
            _$parentName: "CatalogueItem1List",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItemsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.CatalogueItemsList,
                _$entry: {
                    elementType: lightSwitchApplication.CatalogueItem1
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "CatalogueItems",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItem1,
            value: lightSwitchApplication.CatalogueItem1
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Collection: {
            _$class: msls.ContentItem,
            _$name: "Collection",
            _$parentName: "rows",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueItemsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CatalogueItemsList, {
        /// <field>
        /// Called when a new CatalogueItemsList screen is created.
        /// <br/>created(msls.application.CatalogueItemsList screen)
        /// </field>
        created: [lightSwitchApplication.CatalogueItemsList],
        /// <field>
        /// Called before changes on an active CatalogueItemsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CatalogueItemsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CatalogueItemsList],
        /// <field>
        /// Called after the CatalogueItem1List content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItem1List_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("CatalogueItem1List"); }],
        /// <field>
        /// Called after the CatalogueItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItems_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("CatalogueItems"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Collection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Collection_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("Collection"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("Description"); }]
    });

    lightSwitchApplication.EndpointsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointsList
        },
        EndpointList: {
            _$class: msls.ContentItem,
            _$name: "EndpointList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.EndpointsList,
            value: lightSwitchApplication.EndpointsList
        },
        Endpoints: {
            _$class: msls.ContentItem,
            _$name: "Endpoints",
            _$parentName: "EndpointList",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.EndpointsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.EndpointsList,
                _$entry: {
                    elementType: lightSwitchApplication.Endpoint
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Endpoints",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.Endpoint,
            value: lightSwitchApplication.Endpoint
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        RoutePrefix: {
            _$class: msls.ContentItem,
            _$name: "RoutePrefix",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EndpointsList, {
        /// <field>
        /// Called when a new EndpointsList screen is created.
        /// <br/>created(msls.application.EndpointsList screen)
        /// </field>
        created: [lightSwitchApplication.EndpointsList],
        /// <field>
        /// Called before changes on an active EndpointsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EndpointsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EndpointsList],
        /// <field>
        /// Called after the EndpointList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndpointList_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("EndpointList"); }],
        /// <field>
        /// Called after the Endpoints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("Endpoints"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("Version"); }],
        /// <field>
        /// Called after the RoutePrefix content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoutePrefix_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("RoutePrefix"); }]
    });

    lightSwitchApplication.EndpointView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: lightSwitchApplication.EndpointView
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: lightSwitchApplication.EndpointView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "left",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        RoutePrefix: {
            _$class: msls.ContentItem,
            _$name: "RoutePrefix",
            _$parentName: "left",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        RouteTemplate: {
            _$class: msls.ContentItem,
            _$name: "RouteTemplate",
            _$parentName: "left",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        ServerRole: {
            _$class: msls.ContentItem,
            _$name: "ServerRole",
            _$parentName: "left",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "left",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Number
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: lightSwitchApplication.EndpointView
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: lightSwitchApplication.EndpointView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EndpointView, {
        /// <field>
        /// Called when a new EndpointView screen is created.
        /// <br/>created(msls.application.EndpointView screen)
        /// </field>
        created: [lightSwitchApplication.EndpointView],
        /// <field>
        /// Called before changes on an active EndpointView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EndpointView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EndpointView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.EndpointView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.EndpointView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.EndpointView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.EndpointView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Details"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Version"); }],
        /// <field>
        /// Called after the RoutePrefix content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoutePrefix_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("RoutePrefix"); }],
        /// <field>
        /// Called after the RouteTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RouteTemplate_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("RouteTemplate"); }],
        /// <field>
        /// Called after the ServerRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServerRole_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("ServerRole"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Priority"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Orders: {
            _$class: msls.ContentItem,
            _$name: "Orders",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Home
        },
        Approvals: {
            _$class: msls.ContentItem,
            _$name: "Approvals",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Home
        },
        Catalogue: {
            _$class: msls.ContentItem,
            _$name: "Catalogue",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Home
        },
        NewOrder: {
            _$class: msls.ContentItem,
            _$name: "NewOrder",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Home
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Endpoints: {
            _$class: msls.ContentItem,
            _$name: "Endpoints",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        Configuration: {
            _$class: msls.ContentItem,
            _$name: "Configuration",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        Jobs: {
            _$class: msls.ContentItem,
            _$name: "Jobs",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        OrderItems: {
            _$class: msls.ContentItem,
            _$name: "OrderItems",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Orders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Orders_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Orders"); }],
        /// <field>
        /// Called after the Approvals content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approvals_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Approvals"); }],
        /// <field>
        /// Called after the Catalogue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Catalogue_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Catalogue"); }],
        /// <field>
        /// Called after the NewOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NewOrder_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("NewOrder"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Endpoints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Endpoints"); }],
        /// <field>
        /// Called after the Configuration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Configuration_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Configuration"); }],
        /// <field>
        /// Called after the Jobs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Jobs_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Jobs"); }],
        /// <field>
        /// Called after the OrderItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItems_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("OrderItems"); }]
    });

    lightSwitchApplication.KeyNameValueAdd.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueAdd
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValueAdd,
            value: lightSwitchApplication.KeyNameValueAdd
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValueAdd,
            value: lightSwitchApplication.KeyNameValue
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: lightSwitchApplication.KeyNameValue
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueAdd
        }
    };

    msls._addEntryPoints(lightSwitchApplication.KeyNameValueAdd, {
        /// <field>
        /// Called when a new KeyNameValueAdd screen is created.
        /// <br/>created(msls.application.KeyNameValueAdd screen)
        /// </field>
        created: [lightSwitchApplication.KeyNameValueAdd],
        /// <field>
        /// Called before changes on an active KeyNameValueAdd screen are applied.
        /// <br/>beforeApplyChanges(msls.application.KeyNameValueAdd screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.KeyNameValueAdd],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("left"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Value"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Description"); }]
    });

    lightSwitchApplication.KeyNameValueEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: lightSwitchApplication.KeyNameValueEdit
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: lightSwitchApplication.KeyNameValueEdit
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: lightSwitchApplication.KeyNameValueEdit
        },
        KeyNameValue_Tid: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        KeyNameValue_Id: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Id",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: Number
        },
        KeyNameValue_Created: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Created",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: Date
        },
        KeyNameValue_CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        KeyNameValue_Modified: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: Date
        },
        KeyNameValue_ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.KeyNameValueEdit, {
        /// <field>
        /// Called when a new KeyNameValueEdit screen is created.
        /// <br/>created(msls.application.KeyNameValueEdit screen)
        /// </field>
        created: [lightSwitchApplication.KeyNameValueEdit],
        /// <field>
        /// Called before changes on an active KeyNameValueEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.KeyNameValueEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.KeyNameValueEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("left"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Value"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("General"); }],
        /// <field>
        /// Called after the KeyNameValue_Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Tid_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_Tid"); }],
        /// <field>
        /// Called after the KeyNameValue_Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Id_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_Id"); }],
        /// <field>
        /// Called after the KeyNameValue_Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Created_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_Created"); }],
        /// <field>
        /// Called after the KeyNameValue_CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_CreatedBy"); }],
        /// <field>
        /// Called after the KeyNameValue_Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Modified_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_Modified"); }],
        /// <field>
        /// Called after the KeyNameValue_ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_ModifiedBy"); }]
    });

    lightSwitchApplication.KeyNameValuesList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValuesList
        },
        KeyNameValueList: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValuesList,
            value: lightSwitchApplication.KeyNameValuesList
        },
        KeyNameValues: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValues",
            _$parentName: "KeyNameValueList",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValuesList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.KeyNameValuesList,
                _$entry: {
                    elementType: lightSwitchApplication.KeyNameValue
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "KeyNameValues",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValue,
            value: lightSwitchApplication.KeyNameValue
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "rows",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "rows",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValuesList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.KeyNameValuesList, {
        /// <field>
        /// Called when a new KeyNameValuesList screen is created.
        /// <br/>created(msls.application.KeyNameValuesList screen)
        /// </field>
        created: [lightSwitchApplication.KeyNameValuesList],
        /// <field>
        /// Called before changes on an active KeyNameValuesList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.KeyNameValuesList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.KeyNameValuesList],
        /// <field>
        /// Called after the KeyNameValueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValueList_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("KeyNameValueList"); }],
        /// <field>
        /// Called after the KeyNameValues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValues_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("KeyNameValues"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("Value"); }]
    });

    lightSwitchApplication.KeyNameValueView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: lightSwitchApplication.KeyNameValueView
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: lightSwitchApplication.KeyNameValue
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValue,
            value: lightSwitchApplication.KeyNameValue
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: lightSwitchApplication.KeyNameValueView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: Number
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.KeyNameValueView, {
        /// <field>
        /// Called when a new KeyNameValueView screen is created.
        /// <br/>created(msls.application.KeyNameValueView screen)
        /// </field>
        created: [lightSwitchApplication.KeyNameValueView],
        /// <field>
        /// Called before changes on an active KeyNameValueView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.KeyNameValueView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.KeyNameValueView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.KeyNameValueView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.KeyNameValueView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.KeyNameValueView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.KeyNameValueView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("left"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Value"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.OrdersList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrdersList
        },
        OrderList: {
            _$class: msls.ContentItem,
            _$name: "OrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.OrdersList,
            value: lightSwitchApplication.OrdersList
        },
        Orders: {
            _$class: msls.ContentItem,
            _$name: "Orders",
            _$parentName: "OrderList",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.OrdersList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.OrdersList,
                _$entry: {
                    elementType: lightSwitchApplication.Order
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Orders",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: Date
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrdersList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrdersList, {
        /// <field>
        /// Called when a new OrdersList screen is created.
        /// <br/>created(msls.application.OrdersList screen)
        /// </field>
        created: [lightSwitchApplication.OrdersList],
        /// <field>
        /// Called before changes on an active OrdersList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrdersList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrdersList],
        /// <field>
        /// Called after the OrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderList_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("OrderList"); }],
        /// <field>
        /// Called after the Orders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Orders_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Orders"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Status"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Created"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Description"); }]
    });

    lightSwitchApplication.OrderView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: lightSwitchApplication.OrderView
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: lightSwitchApplication.Order
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.Order,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.Order,
            value: String
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.Order,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.Order,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: lightSwitchApplication.OrderView
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: lightSwitchApplication.OrderView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderView, {
        /// <field>
        /// Called when a new OrderView screen is created.
        /// <br/>created(msls.application.OrderView screen)
        /// </field>
        created: [lightSwitchApplication.OrderView],
        /// <field>
        /// Called before changes on an active OrderView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.OrderView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.OrderView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.OrderView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.OrderView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Status"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Description1"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.OrderViewDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderViewDetails
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: lightSwitchApplication.OrderViewDetails
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: lightSwitchApplication.Order
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.Order,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.Order,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.Order,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.Order,
            value: String
        },
        OrderItems: {
            _$class: msls.ContentItem,
            _$name: "OrderItems",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: lightSwitchApplication.OrderViewDetails
        },
        OrderItems1: {
            _$class: msls.ContentItem,
            _$name: "OrderItems1",
            _$parentName: "OrderItems",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.OrderViewDetails,
                _$entry: {
                    elementType: lightSwitchApplication.OrderItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "OrderItems1",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderItem,
            value: lightSwitchApplication.OrderItem
        },
        Status1: {
            _$class: msls.ContentItem,
            _$name: "Status1",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        OrderId: {
            _$class: msls.ContentItem,
            _$name: "OrderId",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: lightSwitchApplication.OrderViewDetails
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: lightSwitchApplication.OrderViewDetails
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderViewDetails
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderViewDetails, {
        /// <field>
        /// Called when a new OrderViewDetails screen is created.
        /// <br/>created(msls.application.OrderViewDetails screen)
        /// </field>
        created: [lightSwitchApplication.OrderViewDetails],
        /// <field>
        /// Called before changes on an active OrderViewDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderViewDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderViewDetails],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.OrderViewDetails screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.OrderViewDetails],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.OrderViewDetails screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.OrderViewDetails],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Status"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Description"); }],
        /// <field>
        /// Called after the OrderItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItems_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("OrderItems"); }],
        /// <field>
        /// Called after the OrderItems1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItems1_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("OrderItems1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("rows"); }],
        /// <field>
        /// Called after the Status1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status1_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Status1"); }],
        /// <field>
        /// Called after the OrderId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderId_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("OrderId"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Modified"); }]
    });

    lightSwitchApplication.CatalogueItemView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueItemView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: lightSwitchApplication.CatalogueItemView
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: lightSwitchApplication.CatalogueItem1
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItem1,
            value: lightSwitchApplication.CatalogueItem1
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Collection: {
            _$class: msls.ContentItem,
            _$name: "Collection",
            _$parentName: "left",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "left",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: lightSwitchApplication.CatalogueItemView
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: lightSwitchApplication.CatalogueItemView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueItemView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CatalogueItemView, {
        /// <field>
        /// Called when a new CatalogueItemView screen is created.
        /// <br/>created(msls.application.CatalogueItemView screen)
        /// </field>
        created: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called before changes on an active CatalogueItemView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CatalogueItemView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.CatalogueItemView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.CatalogueItemView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Collection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Collection_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Collection"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Version"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.JobsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.JobsList
        },
        JobList: {
            _$class: msls.ContentItem,
            _$name: "JobList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.JobsList,
            value: lightSwitchApplication.JobsList
        },
        Jobs: {
            _$class: msls.ContentItem,
            _$name: "Jobs",
            _$parentName: "JobList",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.JobsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.JobsList,
                _$entry: {
                    elementType: lightSwitchApplication.Job
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Jobs",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: lightSwitchApplication.Job
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "rows",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "rows",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: String
        },
        ReferencedItemId: {
            _$class: msls.ContentItem,
            _$name: "ReferencedItemId",
            _$parentName: "rows",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.JobsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.JobsList, {
        /// <field>
        /// Called when a new JobsList screen is created.
        /// <br/>created(msls.application.JobsList screen)
        /// </field>
        created: [lightSwitchApplication.JobsList],
        /// <field>
        /// Called before changes on an active JobsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.JobsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.JobsList],
        /// <field>
        /// Called after the JobList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobList_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("JobList"); }],
        /// <field>
        /// Called after the Jobs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Jobs_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("Jobs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("State"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("Type"); }],
        /// <field>
        /// Called after the ReferencedItemId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReferencedItemId_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("ReferencedItemId"); }]
    });

    lightSwitchApplication.JobView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.JobView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: lightSwitchApplication.JobView
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: lightSwitchApplication.Job
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: lightSwitchApplication.Job
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "left",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        Token: {
            _$class: msls.ContentItem,
            _$name: "Token",
            _$parentName: "left",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        EndTime: {
            _$class: msls.ContentItem,
            _$name: "EndTime",
            _$parentName: "left",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: lightSwitchApplication.Job
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "right",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        RefId: {
            _$class: msls.ContentItem,
            _$name: "RefId",
            _$parentName: "right",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        TenantId: {
            _$class: msls.ContentItem,
            _$name: "TenantId",
            _$parentName: "right",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        ParentId: {
            _$class: msls.ContentItem,
            _$name: "ParentId",
            _$parentName: "right",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: Number
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Error: {
            _$class: msls.ContentItem,
            _$name: "Error",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: lightSwitchApplication.JobView
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: lightSwitchApplication.JobView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.JobView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.JobView, {
        /// <field>
        /// Called when a new JobView screen is created.
        /// <br/>created(msls.application.JobView screen)
        /// </field>
        created: [lightSwitchApplication.JobView],
        /// <field>
        /// Called before changes on an active JobView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.JobView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.JobView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.JobView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.JobView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.JobView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.JobView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("left"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("State"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Token content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Token_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Token"); }],
        /// <field>
        /// Called after the EndTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndTime_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("EndTime"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("right"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Type"); }],
        /// <field>
        /// Called after the RefId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RefId_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("RefId"); }],
        /// <field>
        /// Called after the TenantId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TenantId_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("TenantId"); }],
        /// <field>
        /// Called after the ParentId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParentId_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("ParentId"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Description1"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the Error content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Error_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Error"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.OrderAdd.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderAdd
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: lightSwitchApplication.OrderAdd
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: lightSwitchApplication.OrderAdd
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Group",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Group",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: String
        },
        Parameters1: {
            _$class: msls.ContentItem,
            _$name: "Parameters1",
            _$parentName: "Group",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: lightSwitchApplication.OrderAdd
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: lightSwitchApplication.OrderAdd
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: Date
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAdd,
            data: lightSwitchApplication.OrderAdd,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderAdd
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderAdd, {
        /// <field>
        /// Called when a new OrderAdd screen is created.
        /// <br/>created(msls.application.OrderAdd screen)
        /// </field>
        created: [lightSwitchApplication.OrderAdd],
        /// <field>
        /// Called before changes on an active OrderAdd screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderAdd screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderAdd],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Group"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Description"); }],
        /// <field>
        /// Called after the Parameters1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters1_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Parameters1"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrderAdd().findContentItem("Status"); }]
    });

    lightSwitchApplication.OrderAddSpecial.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderAddSpecial
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: lightSwitchApplication.OrderAddSpecial
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: lightSwitchApplication.Order
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.Order,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.Order,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.Order,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "right",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.Order,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: lightSwitchApplication.OrderAddSpecial
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: lightSwitchApplication.OrderAddSpecial
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: Date
        },
        Order_Status: {
            _$class: msls.ContentItem,
            _$name: "Order_Status",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderAddSpecial,
            data: lightSwitchApplication.OrderAddSpecial,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderAddSpecial
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderAddSpecial, {
        /// <field>
        /// Called when a new OrderAddSpecial screen is created.
        /// <br/>created(msls.application.OrderAddSpecial screen)
        /// </field>
        created: [lightSwitchApplication.OrderAddSpecial],
        /// <field>
        /// Called before changes on an active OrderAddSpecial screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderAddSpecial screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderAddSpecial],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("left"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Status"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("right"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Order_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Order_Status_postRender: [$element, function () { return new lightSwitchApplication.OrderAddSpecial().findContentItem("Order_Status"); }]
    });

    lightSwitchApplication.OrderItemsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderItemsList
        },
        OrderItemList: {
            _$class: msls.ContentItem,
            _$name: "OrderItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItemsList,
            value: lightSwitchApplication.OrderItemsList
        },
        OrderItems: {
            _$class: msls.ContentItem,
            _$name: "OrderItems",
            _$parentName: "OrderItemList",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItemsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.OrderItemsList,
                _$entry: {
                    elementType: lightSwitchApplication.OrderItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "OrderItems",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: lightSwitchApplication.OrderItem
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        OrderId: {
            _$class: msls.ContentItem,
            _$name: "OrderId",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderItemsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderItemsList, {
        /// <field>
        /// Called when a new OrderItemsList screen is created.
        /// <br/>created(msls.application.OrderItemsList screen)
        /// </field>
        created: [lightSwitchApplication.OrderItemsList],
        /// <field>
        /// Called before changes on an active OrderItemsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderItemsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderItemsList],
        /// <field>
        /// Called after the OrderItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItemList_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("OrderItemList"); }],
        /// <field>
        /// Called after the OrderItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItems_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("OrderItems"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("Status"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the OrderId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderId_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("OrderId"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("Description"); }]
    });

    lightSwitchApplication.OrderItemView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderItemView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: lightSwitchApplication.OrderItemView
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: lightSwitchApplication.OrderItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: lightSwitchApplication.OrderItem
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        OrderId: {
            _$class: msls.ContentItem,
            _$name: "OrderId",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: lightSwitchApplication.OrderItem
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: lightSwitchApplication.OrderItemView
        },
        GeneralGroup1: {
            _$class: msls.ContentItem,
            _$name: "GeneralGroup1",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: lightSwitchApplication.OrderItemView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralGroup1",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderItemView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderItemView, {
        /// <field>
        /// Called when a new OrderItemView screen is created.
        /// <br/>created(msls.application.OrderItemView screen)
        /// </field>
        created: [lightSwitchApplication.OrderItemView],
        /// <field>
        /// Called before changes on an active OrderItemView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderItemView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderItemView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.OrderItemView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.OrderItemView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.OrderItemView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.OrderItemView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("left"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Status"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Version"); }],
        /// <field>
        /// Called after the OrderId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderId_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("OrderId"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Type"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("right"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Description"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralGroup1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralGroup1_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("GeneralGroup1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Modified"); }]
    });

}(msls.application));