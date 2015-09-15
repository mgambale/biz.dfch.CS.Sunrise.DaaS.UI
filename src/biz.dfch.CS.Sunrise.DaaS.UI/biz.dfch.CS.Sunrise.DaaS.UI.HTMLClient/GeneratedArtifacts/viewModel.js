/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function ApprovalsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ApprovalsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Approvals" type="msls.VisualCollection" elementType="msls.application.Approval">
        /// Gets the approvals for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ApprovalsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ApprovalsList", parameters);
    }

    function ApprovalView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ApprovalView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Approval" type="msls.application.Approval">
        /// Gets or sets the approval for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ApprovalView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ApprovalView", parameters);
    }

    function CatalogueItemsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CatalogueItemsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CatalogueItems" type="msls.VisualCollection" elementType="msls.application.CatalogueItem1">
        /// Gets the catalogueItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CatalogueItemsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CatalogueItemsList", parameters);
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

    function OrdersList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrdersList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Orders" type="msls.VisualCollection" elementType="msls.application.Order">
        /// Gets the orders for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrdersList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrdersList", parameters);
    }

    function OrderView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderView", parameters);
    }

    function OrderViewDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderViewDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this screen.
        /// </field>
        /// <field name="OrderItems" type="msls.VisualCollection" elementType="msls.application.OrderItem">
        /// Gets the orderItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderViewDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderViewDetails", parameters);
    }

    function CatalogueItemView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CatalogueItemView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CatalogueItem1" type="msls.application.CatalogueItem1">
        /// Gets or sets the catalogueItem1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CatalogueItemView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CatalogueItemView", parameters);
    }

    function JobsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the JobsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Jobs" type="msls.VisualCollection" elementType="msls.application.Job">
        /// Gets the jobs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.JobsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "JobsList", parameters);
    }

    function JobView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the JobView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Job" type="msls.application.Job">
        /// Gets or sets the job for this screen.
        /// </field>
        /// <field name="details" type="msls.application.JobView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "JobView", parameters);
    }

    function OrderAdd(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderAdd screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderAdd.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderAdd", parameters);
    }

    function OrderAddSpecial(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderAddSpecial screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderAddSpecial.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderAddSpecial", parameters);
    }

    function OrderItemsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderItemsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderItems" type="msls.VisualCollection" elementType="msls.application.OrderItem">
        /// Gets the orderItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderItemsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderItemsList", parameters);
    }

    function OrderItemView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderItemView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderItem" type="msls.application.OrderItem">
        /// Gets or sets the orderItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderItemView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderItemView", parameters);
    }

    msls._addToNamespace("msls.application", {

        ApprovalsList: $defineScreen(ApprovalsList, [
            {
                name: "Approvals", kind: "collection", elementType: lightSwitchApplication.Approval,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Approvals;
                }
            }
        ], [
            { name: "refresh" }
        ]),

        ApprovalView: $defineScreen(ApprovalView, [
            { name: "Approval", kind: "local", type: lightSwitchApplication.Approval }
        ], [
            { name: "approve" },
            { name: "decline" },
            { name: "refresh" }
        ]),

        CatalogueItemsList: $defineScreen(CatalogueItemsList, [
            {
                name: "CatalogueItems", kind: "collection", elementType: lightSwitchApplication.CatalogueItem1,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.CatalogueItems;
                }
            }
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
                    return this.dataWorkspace.CoreData.KeyNameValues;
                }
            }
        ], [
        ]),

        KeyNameValueView: $defineScreen(KeyNameValueView, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
            { name: "deleteEntity" }
        ]),

        OrdersList: $defineScreen(OrdersList, [
            {
                name: "Orders", kind: "collection", elementType: lightSwitchApplication.Order,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Orders;
                }
            }
        ], [
        ]),

        OrderView: $defineScreen(OrderView, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order }
        ], [
        ]),

        OrderViewDetails: $defineScreen(OrderViewDetails, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order },
            {
                name: "OrderItems", kind: "collection", elementType: lightSwitchApplication.OrderItem,
                getNavigationProperty: function () {
                    if (this.owner.Order) {
                        return this.owner.Order.details.properties.OrderItems;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        CatalogueItemView: $defineScreen(CatalogueItemView, [
            { name: "CatalogueItem1", kind: "local", type: lightSwitchApplication.CatalogueItem1 }
        ], [
        ]),

        JobsList: $defineScreen(JobsList, [
            {
                name: "Jobs", kind: "collection", elementType: lightSwitchApplication.Job,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Jobs;
                }
            }
        ], [
        ]),

        JobView: $defineScreen(JobView, [
            { name: "Job", kind: "local", type: lightSwitchApplication.Job }
        ], [
        ]),

        OrderAdd: $defineScreen(OrderAdd, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order }
        ], [
        ]),

        OrderAddSpecial: $defineScreen(OrderAddSpecial, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order }
        ], [
        ]),

        OrderItemsList: $defineScreen(OrderItemsList, [
            {
                name: "OrderItems", kind: "collection", elementType: lightSwitchApplication.OrderItem,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.OrderItems;
                }
            }
        ], [
        ]),

        OrderItemView: $defineScreen(OrderItemView, [
            { name: "OrderItem", kind: "local", type: lightSwitchApplication.OrderItem }
        ], [
        ]),

        showApprovalsList: $defineShowScreen(function showApprovalsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ApprovalsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ApprovalsList", parameters, options);
        }),

        showApprovalView: $defineShowScreen(function showApprovalView(Approval, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ApprovalView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ApprovalView", parameters, options);
        }),

        showCatalogueItemsList: $defineShowScreen(function showCatalogueItemsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the CatalogueItemsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("CatalogueItemsList", parameters, options);
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

        showOrdersList: $defineShowScreen(function showOrdersList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrdersList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("OrdersList", parameters, options);
        }),

        showOrderView: $defineShowScreen(function showOrderView(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderView", parameters, options);
        }),

        showOrderViewDetails: $defineShowScreen(function showOrderViewDetails(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderViewDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderViewDetails", parameters, options);
        }),

        showCatalogueItemView: $defineShowScreen(function showCatalogueItemView(CatalogueItem1, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CatalogueItemView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CatalogueItemView", parameters, options);
        }),

        showJobsList: $defineShowScreen(function showJobsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the JobsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("JobsList", parameters, options);
        }),

        showJobView: $defineShowScreen(function showJobView(Job, options) {
            /// <summary>
            /// Asynchronously navigates forward to the JobView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("JobView", parameters, options);
        }),

        showOrderAdd: $defineShowScreen(function showOrderAdd(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderAdd screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderAdd", parameters, options);
        }),

        showOrderAddSpecial: $defineShowScreen(function showOrderAddSpecial(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderAddSpecial screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderAddSpecial", parameters, options);
        }),

        showOrderItemsList: $defineShowScreen(function showOrderItemsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderItemsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("OrderItemsList", parameters, options);
        }),

        showOrderItemView: $defineShowScreen(function showOrderItemView(OrderItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderItemView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderItemView", parameters, options);
        })

    });

}(msls.application));
