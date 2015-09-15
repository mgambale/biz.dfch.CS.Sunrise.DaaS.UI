/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditTask.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTask
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.AddEditTask,
            value: lightSwitchApplication.AddEditTask
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTask
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTask, {
        /// <field>
        /// Called when a new AddEditTask screen is created.
        /// <br/>created(msls.application.AddEditTask screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTask],
        /// <field>
        /// Called before changes on an active AddEditTask screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTask screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTask],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Details"); }]
    });

    lightSwitchApplication.EndpointsBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointsBrowse
        },
        EndpointList: {
            _$class: msls.ContentItem,
            _$name: "EndpointList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: lightSwitchApplication.EndpointsBrowse
        },
        Endpoints: {
            _$class: msls.ContentItem,
            _$name: "Endpoints",
            _$parentName: "EndpointList",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.EndpointsBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.Endpoint
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Endpoints",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.Endpoint,
            value: lightSwitchApplication.Endpoint
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        RoutePrefix: {
            _$class: msls.ContentItem,
            _$name: "RoutePrefix",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: lightSwitchApplication.EndpointsBrowse
        },
        GeneralRow1: {
            _$class: msls.ContentItem,
            _$name: "GeneralRow1",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: lightSwitchApplication.EndpointsBrowse
        },
        Endpoints_selectedItem_Id: {
            _$class: msls.ContentItem,
            _$name: "Endpoints_selectedItem_Id",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: Number
        },
        Endpoints_selectedItem_Tid: {
            _$class: msls.ContentItem,
            _$name: "Endpoints_selectedItem_Tid",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: String
        },
        Endpoints_selectedItem_CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "Endpoints_selectedItem_CreatedBy",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: String
        },
        Endpoints_selectedItem_Created: {
            _$class: msls.ContentItem,
            _$name: "Endpoints_selectedItem_Created",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: Date
        },
        Endpoints_selectedItem_ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "Endpoints_selectedItem_ModifiedBy",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: String
        },
        Endpoints_selectedItem_Modified: {
            _$class: msls.ContentItem,
            _$name: "Endpoints_selectedItem_Modified",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointsBrowse,
            data: lightSwitchApplication.EndpointsBrowse,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointsBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EndpointsBrowse, {
        /// <field>
        /// Called when a new EndpointsBrowse screen is created.
        /// <br/>created(msls.application.EndpointsBrowse screen)
        /// </field>
        created: [lightSwitchApplication.EndpointsBrowse],
        /// <field>
        /// Called before changes on an active EndpointsBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EndpointsBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EndpointsBrowse],
        /// <field>
        /// Called after the EndpointList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndpointList_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("EndpointList"); }],
        /// <field>
        /// Called after the Endpoints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Endpoints"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Name"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Version"); }],
        /// <field>
        /// Called after the RoutePrefix content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoutePrefix_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("RoutePrefix"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralRow1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralRow1_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("GeneralRow1"); }],
        /// <field>
        /// Called after the Endpoints_selectedItem_Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_selectedItem_Id_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Endpoints_selectedItem_Id"); }],
        /// <field>
        /// Called after the Endpoints_selectedItem_Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_selectedItem_Tid_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Endpoints_selectedItem_Tid"); }],
        /// <field>
        /// Called after the Endpoints_selectedItem_CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_selectedItem_CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Endpoints_selectedItem_CreatedBy"); }],
        /// <field>
        /// Called after the Endpoints_selectedItem_Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_selectedItem_Created_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Endpoints_selectedItem_Created"); }],
        /// <field>
        /// Called after the Endpoints_selectedItem_ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_selectedItem_ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Endpoints_selectedItem_ModifiedBy"); }],
        /// <field>
        /// Called after the Endpoints_selectedItem_Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_selectedItem_Modified_postRender: [$element, function () { return new lightSwitchApplication.EndpointsBrowse().findContentItem("Endpoints_selectedItem_Modified"); }]
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
        GeneralRow1: {
            _$class: msls.ContentItem,
            _$name: "GeneralRow1",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: lightSwitchApplication.EndpointView
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Number
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralRow1",
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
        /// Called after the GeneralRow1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralRow1_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("GeneralRow1"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Id"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Tid"); }],
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
        Endpoints: {
            _$class: msls.ContentItem,
            _$name: "Endpoints",
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
        Configuration: {
            _$class: msls.ContentItem,
            _$name: "Configuration",
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
        /// Called after the Endpoints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Endpoints"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Configuration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Configuration_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Configuration"); }]
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

    lightSwitchApplication.ViewTask.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTask
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.ViewTask,
            value: lightSwitchApplication.ViewTask
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTask
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewTask, {
        /// <field>
        /// Called when a new ViewTask screen is created.
        /// <br/>created(msls.application.ViewTask screen)
        /// </field>
        created: [lightSwitchApplication.ViewTask],
        /// <field>
        /// Called before changes on an active ViewTask screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewTask screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewTask],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.ViewTask screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.ViewTask],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.ViewTask screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.ViewTask],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Details"); }]
    });

}(msls.application));