/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function CatalogueItem(entitySet) {
        /// <summary>
        /// Represents the CatalogueItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this catalogueItem.
        /// </param>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this catalogueItem.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this catalogueItem.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this catalogueItem.
        /// </field>
        /// <field name="Collection" type="String">
        /// Gets or sets the collection for this catalogueItem.
        /// </field>
        /// <field name="details" type="msls.application.CatalogueItem.Details">
        /// Gets the details for this catalogueItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function KeyNameValue(entitySet) {
        /// <summary>
        /// Represents the KeyNameValue entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this keyNameValue.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this keyNameValue.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this keyNameValue.
        /// </field>
        /// <field name="Key" type="String">
        /// Gets or sets the key for this keyNameValue.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this keyNameValue.
        /// </field>
        /// <field name="Value" type="String">
        /// Gets or sets the value for this keyNameValue.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this keyNameValue.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this keyNameValue.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this keyNameValue.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this keyNameValue.
        /// </field>
        /// <field name="details" type="msls.application.KeyNameValue.Details">
        /// Gets the details for this keyNameValue.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Person(entitySet) {
        /// <summary>
        /// Represents the Person entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this person.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this person.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this person.
        /// </field>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this person.
        /// </field>
        /// <field name="GivenName" type="String">
        /// Gets or sets the givenName for this person.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this person.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this person.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this person.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this person.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this person.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this person.
        /// </field>
        /// <field name="details" type="msls.application.Person.Details">
        /// Gets the details for this person.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Task(entitySet) {
        /// <summary>
        /// Represents the Task entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this task.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this task.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this task.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this task.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this task.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this task.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this task.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this task.
        /// </field>
        /// <field name="c_Error" type="String">
        /// Gets or sets the c_Error for this task.
        /// </field>
        /// <field name="EndTime" type="Date">
        /// Gets or sets the endTime for this task.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this task.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this task.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this task.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this task.
        /// </field>
        /// <field name="details" type="msls.application.Task.Details">
        /// Gets the details for this task.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Endpoint(entitySet) {
        /// <summary>
        /// Represents the Endpoint entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this endpoint.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this endpoint.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this endpoint.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this endpoint.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this endpoint.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this endpoint.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this endpoint.
        /// </field>
        /// <field name="Modifed" type="Date">
        /// Gets or sets the modifed for this endpoint.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this endpoint.
        /// </field>
        /// <field name="details" type="msls.application.Endpoint.Details">
        /// Gets the details for this endpoint.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UtilitiesData(dataWorkspace) {
        /// <summary>
        /// Represents the UtilitiesData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="CatalogueItems" type="msls.EntitySet">
        /// Gets the CatalogueItems entity set.
        /// </field>
        /// <field name="KeyNameValues" type="msls.EntitySet">
        /// Gets the KeyNameValues entity set.
        /// </field>
        /// <field name="Persons" type="msls.EntitySet">
        /// Gets the Persons entity set.
        /// </field>
        /// <field name="Tasks" type="msls.EntitySet">
        /// Gets the Tasks entity set.
        /// </field>
        /// <field name="details" type="msls.application.UtilitiesData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function DiagnosticsData(dataWorkspace) {
        /// <summary>
        /// Represents the DiagnosticsData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Endpoints" type="msls.EntitySet">
        /// Gets the Endpoints entity set.
        /// </field>
        /// <field name="details" type="msls.application.DiagnosticsData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="UtilitiesData" type="msls.application.UtilitiesData">
        /// Gets the UtilitiesData data service.
        /// </field>
        /// <field name="DiagnosticsData" type="msls.application.DiagnosticsData">
        /// Gets the DiagnosticsData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        CatalogueItem: $defineEntity(CatalogueItem, [
            { name: "Id", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "Collection", type: String }
        ]),

        KeyNameValue: $defineEntity(KeyNameValue, [
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Key", type: String },
            { name: "Name", type: String },
            { name: "Value", type: String },
            { name: "Created", type: Date },
            { name: "CreatedBy", type: String },
            { name: "Modified", type: Date },
            { name: "ModifiedBy", type: String }
        ]),

        Person: $defineEntity(Person, [
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "UserName", type: String },
            { name: "GivenName", type: String },
            { name: "LastName", type: String },
            { name: "Email", type: String },
            { name: "Created", type: Date },
            { name: "CreatedBy", type: String },
            { name: "Modified", type: Date },
            { name: "ModifiedBy", type: String }
        ]),

        Task: $defineEntity(Task, [
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "Status", type: String },
            { name: "Type", type: String },
            { name: "Parameters", type: String },
            { name: "c_Error", type: String },
            { name: "EndTime", type: Date },
            { name: "Created", type: Date },
            { name: "CreatedBy", type: String },
            { name: "Modified", type: Date },
            { name: "ModifiedBy", type: String }
        ]),

        Endpoint: $defineEntity(Endpoint, [
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "Created", type: Date },
            { name: "CreatedBy", type: String },
            { name: "Modifed", type: Date },
            { name: "ModifiedBy", type: String }
        ]),

        UtilitiesData: $defineDataService(UtilitiesData, lightSwitchApplication.rootUri + "/UtilitiesData.svc", [
            { name: "CatalogueItems", elementType: CatalogueItem },
            { name: "KeyNameValues", elementType: KeyNameValue },
            { name: "Persons", elementType: Person },
            { name: "Tasks", elementType: Task }
        ], [
            {
                name: "CatalogueItems_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.CatalogueItems },
                        lightSwitchApplication.rootUri + "/UtilitiesData.svc" + "/CatalogueItems(" + "Id=" + $toODataString(Id, "String?") + ")"
                    );
                }
            },
            {
                name: "KeyNameValues_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.KeyNameValues },
                        lightSwitchApplication.rootUri + "/UtilitiesData.svc" + "/KeyNameValues(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Persons_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Persons },
                        lightSwitchApplication.rootUri + "/UtilitiesData.svc" + "/Persons(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Tasks_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Tasks },
                        lightSwitchApplication.rootUri + "/UtilitiesData.svc" + "/Tasks(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DiagnosticsData: $defineDataService(DiagnosticsData, lightSwitchApplication.rootUri + "/DiagnosticsData.svc", [
            { name: "Endpoints", elementType: Endpoint }
        ], [
            {
                name: "Endpoints_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Endpoints },
                        lightSwitchApplication.rootUri + "/DiagnosticsData.svc" + "/Endpoints(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "UtilitiesData", type: UtilitiesData },
            { name: "DiagnosticsData", type: DiagnosticsData }
        ])

    });

}(msls.application));
