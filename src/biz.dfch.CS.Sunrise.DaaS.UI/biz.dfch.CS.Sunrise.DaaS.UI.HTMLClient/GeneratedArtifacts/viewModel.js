/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditEndpoint(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEndpoint screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Endpoint" type="msls.application.Endpoint">
        /// Gets the endpoint for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEndpoint.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEndpoint", parameters);
    }

    function AddEditKeyNameValue(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditKeyNameValue screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="KeyNameValue" type="msls.application.KeyNameValue">
        /// Gets or sets the keyNameValue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditKeyNameValue.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditKeyNameValue", parameters);
    }

    function AddEditTask(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTask screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Task" type="msls.application.Task">
        /// Gets or sets the task for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTask.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTask", parameters);
    }

    function BrowseEndpoints(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEndpoints screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Endpoints" type="msls.VisualCollection" elementType="msls.application.Endpoint">
        /// Gets the endpoints for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEndpoints.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEndpoints", parameters);
    }

    function BrowseKeyNameValues(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseKeyNameValues screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="KeyNameValues" type="msls.VisualCollection" elementType="msls.application.KeyNameValue">
        /// Gets the keyNameValues for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseKeyNameValues.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseKeyNameValues", parameters);
    }

    function BrowseTasks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTasks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Tasks" type="msls.VisualCollection" elementType="msls.application.Task">
        /// Gets the tasks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTasks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTasks", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function ViewEndpoint(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewEndpoint screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Endpoint" type="msls.application.Endpoint">
        /// Gets the endpoint for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewEndpoint.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewEndpoint", parameters);
    }

    function ViewKeyNameValue(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewKeyNameValue screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="KeyNameValue" type="msls.application.KeyNameValue">
        /// Gets or sets the keyNameValue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewKeyNameValue.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewKeyNameValue", parameters);
    }

    function ViewTask(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewTask screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Task" type="msls.application.Task">
        /// Gets or sets the task for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewTask.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewTask", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditEndpoint: $defineScreen(AddEditEndpoint, [
            {
                name: "Endpoint", kind: "reference", type: lightSwitchApplication.Endpoint,
                createQuery: function (Id) {
                    return this.dataWorkspace.DiagnosticsData.Endpoints_SingleOrDefault(Id);
                }
            }
        ], [
        ]),

        AddEditKeyNameValue: $defineScreen(AddEditKeyNameValue, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
        ]),

        AddEditTask: $defineScreen(AddEditTask, [
            { name: "Task", kind: "local", type: lightSwitchApplication.Task }
        ], [
        ]),

        BrowseEndpoints: $defineScreen(BrowseEndpoints, [
            {
                name: "Endpoints", kind: "collection", elementType: lightSwitchApplication.Endpoint,
                createQuery: function () {
                    return this.dataWorkspace.DiagnosticsData.Endpoints;
                }
            }
        ], [
        ]),

        BrowseKeyNameValues: $defineScreen(BrowseKeyNameValues, [
            {
                name: "KeyNameValues", kind: "collection", elementType: lightSwitchApplication.KeyNameValue,
                createQuery: function () {
                    return this.dataWorkspace.UtilitiesData.KeyNameValues;
                }
            }
        ], [
        ]),

        BrowseTasks: $defineScreen(BrowseTasks, [
            {
                name: "Tasks", kind: "collection", elementType: lightSwitchApplication.Task,
                createQuery: function () {
                    return this.dataWorkspace.UtilitiesData.Tasks;
                }
            }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        ViewEndpoint: $defineScreen(ViewEndpoint, [
            {
                name: "Endpoint", kind: "reference", type: lightSwitchApplication.Endpoint,
                createQuery: function (Id) {
                    return this.dataWorkspace.DiagnosticsData.Endpoints_SingleOrDefault(Id);
                }
            }
        ], [
            { name: "deleteEntity" }
        ]),

        ViewKeyNameValue: $defineScreen(ViewKeyNameValue, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
            { name: "deleteEntity" }
        ]),

        ViewTask: $defineScreen(ViewTask, [
            { name: "Task", kind: "local", type: lightSwitchApplication.Task }
        ], [
            { name: "deleteEntity" }
        ]),

        showAddEditEndpoint: $defineShowScreen(function showAddEditEndpoint(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEndpoint screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditEndpoint", parameters, options);
        }),

        showAddEditKeyNameValue: $defineShowScreen(function showAddEditKeyNameValue(KeyNameValue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditKeyNameValue screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditKeyNameValue", parameters, options);
        }),

        showAddEditTask: $defineShowScreen(function showAddEditTask(Task, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTask screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTask", parameters, options);
        }),

        showBrowseEndpoints: $defineShowScreen(function showBrowseEndpoints(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEndpoints screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEndpoints", parameters, options);
        }),

        showBrowseKeyNameValues: $defineShowScreen(function showBrowseKeyNameValues(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseKeyNameValues screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseKeyNameValues", parameters, options);
        }),

        showBrowseTasks: $defineShowScreen(function showBrowseTasks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTasks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTasks", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showViewEndpoint: $defineShowScreen(function showViewEndpoint(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewEndpoint screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ViewEndpoint", parameters, options);
        }),

        showViewKeyNameValue: $defineShowScreen(function showViewKeyNameValue(KeyNameValue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewKeyNameValue screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewKeyNameValue", parameters, options);
        }),

        showViewTask: $defineShowScreen(function showViewTask(Task, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewTask screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewTask", parameters, options);
        })

    });

}(msls.application));
