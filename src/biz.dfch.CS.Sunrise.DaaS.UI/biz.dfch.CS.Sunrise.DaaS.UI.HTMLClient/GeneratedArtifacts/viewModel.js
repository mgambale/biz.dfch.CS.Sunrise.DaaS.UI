/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

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
        /// <field name="details" type="msls.application.AddEditTask.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTask", parameters);
    }

    function EndpointsBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EndpointsBrowse screen.
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
        /// <field name="details" type="msls.application.EndpointsBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EndpointsBrowse", parameters);
    }

    function EndpointView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EndpointView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Endpoint" type="msls.application.Endpoint">
        /// Gets or sets the endpoint for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EndpointView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EndpointView", parameters);
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

    function KeyNameValueAdd(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the KeyNameValueAdd screen.
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
        /// <field name="details" type="msls.application.KeyNameValueAdd.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "KeyNameValueAdd", parameters);
    }

    function KeyNameValueEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the KeyNameValueEdit screen.
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
        /// <field name="details" type="msls.application.KeyNameValueEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "KeyNameValueEdit", parameters);
    }

    function KeyNameValuesList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the KeyNameValuesList screen.
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
        /// <field name="details" type="msls.application.KeyNameValuesList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "KeyNameValuesList", parameters);
    }

    function KeyNameValueView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the KeyNameValueView screen.
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
        /// <field name="details" type="msls.application.KeyNameValueView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "KeyNameValueView", parameters);
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
        /// <field name="details" type="msls.application.ViewTask.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewTask", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditTask: $defineScreen(AddEditTask, [
        ], [
        ]),

        EndpointsBrowse: $defineScreen(EndpointsBrowse, [
            {
                name: "Endpoints", kind: "collection", elementType: lightSwitchApplication.Endpoint,
                createQuery: function () {
                    return this.dataWorkspace.DiagnosticsData.Endpoints;
                }
            }
        ], [
        ]),

        EndpointView: $defineScreen(EndpointView, [
            { name: "Endpoint", kind: "local", type: lightSwitchApplication.Endpoint }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        KeyNameValueAdd: $defineScreen(KeyNameValueAdd, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
        ]),

        KeyNameValueEdit: $defineScreen(KeyNameValueEdit, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
        ]),

        KeyNameValuesList: $defineScreen(KeyNameValuesList, [
            {
                name: "KeyNameValues", kind: "collection", elementType: lightSwitchApplication.KeyNameValue,
                createQuery: function () {
                    return this.dataWorkspace.BaseData.KeyNameValues;
                }
            }
        ], [
        ]),

        KeyNameValueView: $defineScreen(KeyNameValueView, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
            { name: "deleteEntity" }
        ]),

        ViewTask: $defineScreen(ViewTask, [
        ], [
            { name: "deleteEntity" }
        ]),

        showAddEditTask: $defineShowScreen(function showAddEditTask(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTask screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AddEditTask", parameters, options);
        }),

        showEndpointsBrowse: $defineShowScreen(function showEndpointsBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the EndpointsBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("EndpointsBrowse", parameters, options);
        }),

        showEndpointView: $defineShowScreen(function showEndpointView(Endpoint, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EndpointView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EndpointView", parameters, options);
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

        showKeyNameValueAdd: $defineShowScreen(function showKeyNameValueAdd(KeyNameValue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the KeyNameValueAdd screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("KeyNameValueAdd", parameters, options);
        }),

        showKeyNameValueEdit: $defineShowScreen(function showKeyNameValueEdit(KeyNameValue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the KeyNameValueEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("KeyNameValueEdit", parameters, options);
        }),

        showKeyNameValuesList: $defineShowScreen(function showKeyNameValuesList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the KeyNameValuesList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("KeyNameValuesList", parameters, options);
        }),

        showKeyNameValueView: $defineShowScreen(function showKeyNameValueView(KeyNameValue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the KeyNameValueView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("KeyNameValueView", parameters, options);
        }),

        showViewTask: $defineShowScreen(function showViewTask(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewTask screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ViewTask", parameters, options);
        })

    });

}(msls.application));
