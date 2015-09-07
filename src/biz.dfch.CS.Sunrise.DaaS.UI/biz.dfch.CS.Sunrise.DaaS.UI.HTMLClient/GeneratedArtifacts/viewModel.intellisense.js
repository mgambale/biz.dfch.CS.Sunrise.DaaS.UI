/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditEndpoint.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEndpoint
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEndpoint,
            data: lightSwitchApplication.AddEditEndpoint,
            value: lightSwitchApplication.AddEditEndpoint
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEndpoint
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEndpoint, {
        /// <field>
        /// Called when a new AddEditEndpoint screen is created.
        /// <br/>created(msls.application.AddEditEndpoint screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEndpoint],
        /// <field>
        /// Called before changes on an active AddEditEndpoint screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEndpoint screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEndpoint],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditEndpoint().findContentItem("Details"); }]
    });

    lightSwitchApplication.AddEditKeyNameValue.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditKeyNameValue
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: lightSwitchApplication.AddEditKeyNameValue
        },
        DetailsRow1: {
            _$class: msls.ContentItem,
            _$name: "DetailsRow1",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: lightSwitchApplication.AddEditKeyNameValue
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "DetailsRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "DetailsRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "DetailsRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: lightSwitchApplication.AddEditKeyNameValue
        },
        GeneralRow1: {
            _$class: msls.ContentItem,
            _$name: "GeneralRow1",
            _$parentName: "General",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: lightSwitchApplication.AddEditKeyNameValue
        },
        KeyNameValue_Tid: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Tid",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: Number
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.AddEditKeyNameValue,
            data: lightSwitchApplication.AddEditKeyNameValue,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditKeyNameValue
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditKeyNameValue, {
        /// <field>
        /// Called when a new AddEditKeyNameValue screen is created.
        /// <br/>created(msls.application.AddEditKeyNameValue screen)
        /// </field>
        created: [lightSwitchApplication.AddEditKeyNameValue],
        /// <field>
        /// Called before changes on an active AddEditKeyNameValue screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditKeyNameValue screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditKeyNameValue],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("Details"); }],
        /// <field>
        /// Called after the DetailsRow1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsRow1_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("DetailsRow1"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("Value"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralRow1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralRow1_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("GeneralRow1"); }],
        /// <field>
        /// Called after the KeyNameValue_Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Tid_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("KeyNameValue_Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.AddEditKeyNameValue().findContentItem("Modified"); }]
    });

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
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.AddEditTask,
            value: lightSwitchApplication.Task
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: lightSwitchApplication.Task
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: Number
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: lightSwitchApplication.Task
        },
        c_Error: {
            _$class: msls.ContentItem,
            _$name: "c_Error",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        EndTime: {
            _$class: msls.ContentItem,
            _$name: "EndTime",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: Date
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
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
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("left"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Id"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Description"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Status"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Type"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("right"); }],
        /// <field>
        /// Called after the c_Error content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Error_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("c_Error"); }],
        /// <field>
        /// Called after the EndTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndTime_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("EndTime"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.BrowseEndpoints.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEndpoints
        },
        EndpointList: {
            _$class: msls.ContentItem,
            _$name: "EndpointList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEndpoints,
            data: lightSwitchApplication.BrowseEndpoints,
            value: lightSwitchApplication.BrowseEndpoints
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEndpoints
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEndpoints, {
        /// <field>
        /// Called when a new BrowseEndpoints screen is created.
        /// <br/>created(msls.application.BrowseEndpoints screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEndpoints],
        /// <field>
        /// Called before changes on an active BrowseEndpoints screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEndpoints screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEndpoints],
        /// <field>
        /// Called after the EndpointList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndpointList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEndpoints().findContentItem("EndpointList"); }]
    });

    lightSwitchApplication.BrowseKeyNameValues.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseKeyNameValues
        },
        KeyNameValueList: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseKeyNameValues,
            data: lightSwitchApplication.BrowseKeyNameValues,
            value: lightSwitchApplication.BrowseKeyNameValues
        },
        KeyNameValues: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValues",
            _$parentName: "KeyNameValueList",
            screen: lightSwitchApplication.BrowseKeyNameValues,
            data: lightSwitchApplication.BrowseKeyNameValues,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseKeyNameValues,
                _$entry: {
                    elementType: lightSwitchApplication.KeyNameValue
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "KeyNameValues",
            screen: lightSwitchApplication.BrowseKeyNameValues,
            data: lightSwitchApplication.KeyNameValue,
            value: lightSwitchApplication.KeyNameValue
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseKeyNameValues,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseKeyNameValues,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseKeyNameValues,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseKeyNameValues
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseKeyNameValues, {
        /// <field>
        /// Called when a new BrowseKeyNameValues screen is created.
        /// <br/>created(msls.application.BrowseKeyNameValues screen)
        /// </field>
        created: [lightSwitchApplication.BrowseKeyNameValues],
        /// <field>
        /// Called before changes on an active BrowseKeyNameValues screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseKeyNameValues screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseKeyNameValues],
        /// <field>
        /// Called after the KeyNameValueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValueList_postRender: [$element, function () { return new lightSwitchApplication.BrowseKeyNameValues().findContentItem("KeyNameValueList"); }],
        /// <field>
        /// Called after the KeyNameValues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValues_postRender: [$element, function () { return new lightSwitchApplication.BrowseKeyNameValues().findContentItem("KeyNameValues"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseKeyNameValues().findContentItem("rows"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.BrowseKeyNameValues().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseKeyNameValues().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.BrowseKeyNameValues().findContentItem("Value"); }]
    });

    lightSwitchApplication.BrowseTasks.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTasks
        },
        TaskList: {
            _$class: msls.ContentItem,
            _$name: "TaskList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.BrowseTasks,
            value: lightSwitchApplication.BrowseTasks
        },
        Tasks: {
            _$class: msls.ContentItem,
            _$name: "Tasks",
            _$parentName: "TaskList",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.BrowseTasks,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTasks,
                _$entry: {
                    elementType: lightSwitchApplication.Task
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Tasks",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.Task,
            value: lightSwitchApplication.Task
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.Task,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.Task,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.Task,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTasks
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTasks, {
        /// <field>
        /// Called when a new BrowseTasks screen is created.
        /// <br/>created(msls.application.BrowseTasks screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTasks],
        /// <field>
        /// Called before changes on an active BrowseTasks screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTasks screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTasks],
        /// <field>
        /// Called after the TaskList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("TaskList"); }],
        /// <field>
        /// Called after the Tasks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tasks_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("Tasks"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("rows"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("Id"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("Name"); }]
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
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }]
    });

    lightSwitchApplication.ViewEndpoint.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEndpoint
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewEndpoint,
            data: lightSwitchApplication.ViewEndpoint,
            value: lightSwitchApplication.ViewEndpoint
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEndpoint
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewEndpoint, {
        /// <field>
        /// Called when a new ViewEndpoint screen is created.
        /// <br/>created(msls.application.ViewEndpoint screen)
        /// </field>
        created: [lightSwitchApplication.ViewEndpoint],
        /// <field>
        /// Called before changes on an active ViewEndpoint screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewEndpoint screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewEndpoint],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.ViewEndpoint screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.ViewEndpoint],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.ViewEndpoint screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.ViewEndpoint],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewEndpoint().findContentItem("Details"); }]
    });

    lightSwitchApplication.ViewKeyNameValue.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewKeyNameValue
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: lightSwitchApplication.ViewKeyNameValue
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: lightSwitchApplication.ViewKeyNameValue
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: lightSwitchApplication.ViewKeyNameValue
        },
        GeneralRow1: {
            _$class: msls.ContentItem,
            _$name: "GeneralRow1",
            _$parentName: "General",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: lightSwitchApplication.ViewKeyNameValue
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: Number
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "GeneralRow1",
            screen: lightSwitchApplication.ViewKeyNameValue,
            data: lightSwitchApplication.ViewKeyNameValue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewKeyNameValue
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewKeyNameValue, {
        /// <field>
        /// Called when a new ViewKeyNameValue screen is created.
        /// <br/>created(msls.application.ViewKeyNameValue screen)
        /// </field>
        created: [lightSwitchApplication.ViewKeyNameValue],
        /// <field>
        /// Called before changes on an active ViewKeyNameValue screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewKeyNameValue screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewKeyNameValue],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.ViewKeyNameValue screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.ViewKeyNameValue],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.ViewKeyNameValue screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.ViewKeyNameValue],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("Details"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("left"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("Value"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("General"); }],
        /// <field>
        /// Called after the GeneralRow1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GeneralRow1_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("GeneralRow1"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewKeyNameValue().findContentItem("ModifiedBy"); }]
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
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.ViewTask,
            value: lightSwitchApplication.Task
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: lightSwitchApplication.Task
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: Number
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: lightSwitchApplication.Task
        },
        c_Error: {
            _$class: msls.ContentItem,
            _$name: "c_Error",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        EndTime: {
            _$class: msls.ContentItem,
            _$name: "EndTime",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: Date
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTask,
            data: lightSwitchApplication.Task,
            value: String
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
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("left"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Id"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Description"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Status"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Type"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("right"); }],
        /// <field>
        /// Called after the c_Error content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Error_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("c_Error"); }],
        /// <field>
        /// Called after the EndTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndTime_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("EndTime"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTask().findContentItem("ModifiedBy"); }]
    });

}(msls.application));