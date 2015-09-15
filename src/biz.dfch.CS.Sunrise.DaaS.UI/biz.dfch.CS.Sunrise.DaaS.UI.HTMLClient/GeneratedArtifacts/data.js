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
        /// <field name="Version" type="String">
        /// Gets or sets the version for this endpoint.
        /// </field>
        /// <field name="RouteTemplate" type="String">
        /// Gets or sets the routeTemplate for this endpoint.
        /// </field>
        /// <field name="RoutePrefix" type="String">
        /// Gets or sets the routePrefix for this endpoint.
        /// </field>
        /// <field name="ServerRole" type="String">
        /// Gets or sets the serverRole for this endpoint.
        /// </field>
        /// <field name="Priority" type="Number">
        /// Gets or sets the priority for this endpoint.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this endpoint.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this endpoint.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this endpoint.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this endpoint.
        /// </field>
        /// <field name="details" type="msls.application.Endpoint.Details">
        /// Gets the details for this endpoint.
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
        /// <field name="Description" type="String">
        /// Gets or sets the description for this keyNameValue.
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

    function Job(entitySet) {
        /// <summary>
        /// Represents the Job entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this job.
        /// </param>
        /// <field name="State" type="String">
        /// Gets or sets the state for this job.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this job.
        /// </field>
        /// <field name="ReferencedItemId" type="String">
        /// Gets or sets the referencedItemId for this job.
        /// </field>
        /// <field name="Token" type="String">
        /// Gets or sets the token for this job.
        /// </field>
        /// <field name="TenantId" type="String">
        /// Gets or sets the tenantId for this job.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this job.
        /// </field>
        /// <field name="c_Error" type="String">
        /// Gets or sets the c_Error for this job.
        /// </field>
        /// <field name="EndTime" type="Date">
        /// Gets or sets the endTime for this job.
        /// </field>
        /// <field name="ParentId" type="Number">
        /// Gets or sets the parentId for this job.
        /// </field>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this job.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this job.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this job.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this job.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this job.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this job.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this job.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this job.
        /// </field>
        /// <field name="details" type="msls.application.Job.Details">
        /// Gets the details for this job.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CatalogueItem1(entitySet) {
        /// <summary>
        /// Represents the CatalogueItem1 entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this catalogueItem1.
        /// </param>
        /// <field name="Collection" type="String">
        /// Gets or sets the collection for this catalogueItem1.
        /// </field>
        /// <field name="Version" type="String">
        /// Gets or sets the version for this catalogueItem1.
        /// </field>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this catalogueItem1.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this catalogueItem1.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this catalogueItem1.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this catalogueItem1.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this catalogueItem1.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this catalogueItem1.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this catalogueItem1.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this catalogueItem1.
        /// </field>
        /// <field name="details" type="msls.application.CatalogueItem1.Details">
        /// Gets the details for this catalogueItem1.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Order(entitySet) {
        /// <summary>
        /// Represents the Order entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this order.
        /// </param>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this order.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this order.
        /// </field>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this order.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this order.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this order.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this order.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this order.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this order.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this order.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this order.
        /// </field>
        /// <field name="OrderItems" type="msls.EntityCollection" elementType="msls.application.OrderItem">
        /// Gets the orderItems for this order.
        /// </field>
        /// <field name="details" type="msls.application.Order.Details">
        /// Gets the details for this order.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function OrderItem(entitySet) {
        /// <summary>
        /// Represents the OrderItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this orderItem.
        /// </param>
        /// <field name="OrderId" type="Number">
        /// Gets or sets the orderId for this orderItem.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this orderItem.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this orderItem.
        /// </field>
        /// <field name="Version" type="String">
        /// Gets or sets the version for this orderItem.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this orderItem.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this orderItem.
        /// </field>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this orderItem.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this orderItem.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this orderItem.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this orderItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this orderItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this orderItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this orderItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this orderItem.
        /// </field>
        /// <field name="details" type="msls.application.OrderItem.Details">
        /// Gets the details for this orderItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Ace(entitySet) {
        /// <summary>
        /// Represents the Ace entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this ace.
        /// </param>
        /// <field name="Resource" type="String">
        /// Gets or sets the resource for this ace.
        /// </field>
        /// <field name="Trustee" type="String">
        /// Gets or sets the trustee for this ace.
        /// </field>
        /// <field name="Action" type="String">
        /// Gets or sets the action for this ace.
        /// </field>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this ace.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this ace.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this ace.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this ace.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this ace.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this ace.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this ace.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this ace.
        /// </field>
        /// <field name="details" type="msls.application.Ace.Details">
        /// Gets the details for this ace.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Approval(entitySet) {
        /// <summary>
        /// Represents the Approval entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this approval.
        /// </param>
        /// <field name="State" type="String">
        /// Gets or sets the state for this approval.
        /// </field>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this approval.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this approval.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this approval.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this approval.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this approval.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this approval.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this approval.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this approval.
        /// </field>
        /// <field name="details" type="msls.application.Approval.Details">
        /// Gets the details for this approval.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ActiveDirectoryUser(entitySet) {
        /// <summary>
        /// Represents the ActiveDirectoryUser entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this activeDirectoryUser.
        /// </param>
        /// <field name="cn" type="String">
        /// Gets or sets the cn for this activeDirectoryUser.
        /// </field>
        /// <field name="description" type="String">
        /// Gets or sets the description for this activeDirectoryUser.
        /// </field>
        /// <field name="distinguishedName" type="String">
        /// Gets or sets the distinguishedName for this activeDirectoryUser.
        /// </field>
        /// <field name="groupType" type="Number">
        /// Gets or sets the groupType for this activeDirectoryUser.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this activeDirectoryUser.
        /// </field>
        /// <field name="sn" type="String">
        /// Gets or sets the sn for this activeDirectoryUser.
        /// </field>
        /// <field name="givenName" type="String">
        /// Gets or sets the givenName for this activeDirectoryUser.
        /// </field>
        /// <field name="department" type="String">
        /// Gets or sets the department for this activeDirectoryUser.
        /// </field>
        /// <field name="displayName" type="String">
        /// Gets or sets the displayName for this activeDirectoryUser.
        /// </field>
        /// <field name="mail" type="String">
        /// Gets or sets the mail for this activeDirectoryUser.
        /// </field>
        /// <field name="objectGUID" type="String">
        /// Gets or sets the objectGUID for this activeDirectoryUser.
        /// </field>
        /// <field name="objectSID" type="String">
        /// Gets or sets the objectSID for this activeDirectoryUser.
        /// </field>
        /// <field name="sAMAccountName" type="String">
        /// Gets or sets the sAMAccountName for this activeDirectoryUser.
        /// </field>
        /// <field name="employeeID" type="String">
        /// Gets or sets the employeeID for this activeDirectoryUser.
        /// </field>
        /// <field name="telephoneNumber" type="String">
        /// Gets or sets the telephoneNumber for this activeDirectoryUser.
        /// </field>
        /// <field name="mobile" type="String">
        /// Gets or sets the mobile for this activeDirectoryUser.
        /// </field>
        /// <field name="sAMAccountType" type="Number">
        /// Gets or sets the sAMAccountType for this activeDirectoryUser.
        /// </field>
        /// <field name="uSNChanged" type="String">
        /// Gets or sets the uSNChanged for this activeDirectoryUser.
        /// </field>
        /// <field name="uSNCreated" type="String">
        /// Gets or sets the uSNCreated for this activeDirectoryUser.
        /// </field>
        /// <field name="whenChanged" type="Date">
        /// Gets or sets the whenChanged for this activeDirectoryUser.
        /// </field>
        /// <field name="whenCreated" type="Date">
        /// Gets or sets the whenCreated for this activeDirectoryUser.
        /// </field>
        /// <field name="details" type="msls.application.ActiveDirectoryUser.Details">
        /// Gets the details for this activeDirectoryUser.
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
        /// <field name="Persons" type="msls.EntitySet">
        /// Gets the Persons entity set.
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

    function CoreData(dataWorkspace) {
        /// <summary>
        /// Represents the CoreData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="KeyNameValues" type="msls.EntitySet">
        /// Gets the KeyNameValues entity set.
        /// </field>
        /// <field name="Jobs" type="msls.EntitySet">
        /// Gets the Jobs entity set.
        /// </field>
        /// <field name="CatalogueItems" type="msls.EntitySet">
        /// Gets the CatalogueItems entity set.
        /// </field>
        /// <field name="Orders" type="msls.EntitySet">
        /// Gets the Orders entity set.
        /// </field>
        /// <field name="OrderItems" type="msls.EntitySet">
        /// Gets the OrderItems entity set.
        /// </field>
        /// <field name="Aces" type="msls.EntitySet">
        /// Gets the Aces entity set.
        /// </field>
        /// <field name="Approvals" type="msls.EntitySet">
        /// Gets the Approvals entity set.
        /// </field>
        /// <field name="ActiveDirectoryUsers" type="msls.EntitySet">
        /// Gets the ActiveDirectoryUsers entity set.
        /// </field>
        /// <field name="details" type="msls.application.CoreData.Details">
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
        /// <field name="CoreData" type="msls.application.CoreData">
        /// Gets the CoreData data service.
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

        Endpoint: $defineEntity(Endpoint, [
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Version", type: String },
            { name: "RouteTemplate", type: String },
            { name: "RoutePrefix", type: String },
            { name: "ServerRole", type: String },
            { name: "Priority", type: Number },
            { name: "Created", type: Date },
            { name: "CreatedBy", type: String },
            { name: "Modified", type: Date },
            { name: "ModifiedBy", type: String }
        ]),

        KeyNameValue: $defineEntity(KeyNameValue, [
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Key", type: String },
            { name: "Name", type: String },
            { name: "Value", type: String },
            { name: "Description", type: String },
            { name: "Created", type: Date },
            { name: "CreatedBy", type: String },
            { name: "Modified", type: Date },
            { name: "ModifiedBy", type: String }
        ]),

        Job: $defineEntity(Job, [
            { name: "State", type: String },
            { name: "Type", type: String },
            { name: "ReferencedItemId", type: String },
            { name: "Token", type: String },
            { name: "TenantId", type: String },
            { name: "Parameters", type: String },
            { name: "c_Error", type: String },
            { name: "EndTime", type: Date },
            { name: "ParentId", type: Number },
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date }
        ]),

        CatalogueItem1: $defineEntity(CatalogueItem1, [
            { name: "Collection", type: String },
            { name: "Version", type: String },
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date }
        ]),

        Order: $defineEntity(Order, [
            { name: "Status", type: String },
            { name: "Parameters", type: String },
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "OrderItems", kind: "collection", elementType: OrderItem }
        ]),

        OrderItem: $defineEntity(OrderItem, [
            { name: "OrderId", type: Number },
            { name: "Status", type: String },
            { name: "Quantity", type: Number },
            { name: "Version", type: String },
            { name: "Type", type: String },
            { name: "Parameters", type: String },
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date }
        ]),

        Ace: $defineEntity(Ace, [
            { name: "Resource", type: String },
            { name: "Trustee", type: String },
            { name: "Action", type: String },
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date }
        ]),

        Approval: $defineEntity(Approval, [
            { name: "State", type: String },
            { name: "Id", type: Number },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date }
        ]),

        ActiveDirectoryUser: $defineEntity(ActiveDirectoryUser, [
            { name: "cn", type: String },
            { name: "description", type: String },
            { name: "distinguishedName", type: String },
            { name: "groupType", type: Number },
            { name: "name", type: String },
            { name: "sn", type: String },
            { name: "givenName", type: String },
            { name: "department", type: String },
            { name: "displayName", type: String },
            { name: "mail", type: String },
            { name: "objectGUID", type: String },
            { name: "objectSID", type: String },
            { name: "sAMAccountName", type: String },
            { name: "employeeID", type: String },
            { name: "telephoneNumber", type: String },
            { name: "mobile", type: String },
            { name: "sAMAccountType", type: Number },
            { name: "uSNChanged", type: String },
            { name: "uSNCreated", type: String },
            { name: "whenChanged", type: Date },
            { name: "whenCreated", type: Date }
        ]),

        UtilitiesData: $defineDataService(UtilitiesData, lightSwitchApplication.rootUri + "/UtilitiesData.svc", [
            { name: "CatalogueItems", elementType: CatalogueItem },
            { name: "Persons", elementType: Person }
        ], [
            {
                name: "CatalogueItems_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.CatalogueItems },
                        lightSwitchApplication.rootUri + "/UtilitiesData.svc" + "/CatalogueItems(" + "Id=" + $toODataString(Id, "String?") + ")"
                    );
                }
            },
            {
                name: "Persons_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Persons },
                        lightSwitchApplication.rootUri + "/UtilitiesData.svc" + "/Persons(" + "Id=" + $toODataString(Id, "Int32?") + ")"
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

        CoreData: $defineDataService(CoreData, lightSwitchApplication.rootUri + "/CoreData.svc", [
            { name: "KeyNameValues", elementType: KeyNameValue },
            { name: "Jobs", elementType: Job },
            { name: "CatalogueItems", elementType: CatalogueItem1 },
            { name: "Orders", elementType: Order },
            { name: "OrderItems", elementType: OrderItem },
            { name: "Aces", elementType: Ace },
            { name: "Approvals", elementType: Approval },
            { name: "ActiveDirectoryUsers", elementType: ActiveDirectoryUser }
        ], [
            {
                name: "KeyNameValues_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.KeyNameValues },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/KeyNameValues(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Jobs_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Jobs },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Jobs(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "CatalogueItems_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.CatalogueItems },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/CatalogueItems(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Orders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Orders },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Orders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "OrderItems_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.OrderItems },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/OrderItems(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Aces_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Aces },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Aces(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Approvals_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Approvals },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Approvals(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ActiveDirectoryUsers_SingleOrDefault", value: function (cn) {
                    return new $DataServiceQuery({ _entitySet: this.ActiveDirectoryUsers },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/ActiveDirectoryUsers(" + "cn=" + $toODataString(cn, "String?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "UtilitiesData", type: UtilitiesData },
            { name: "DiagnosticsData", type: DiagnosticsData },
            { name: "CoreData", type: CoreData }
        ])

    });

}(msls.application));
