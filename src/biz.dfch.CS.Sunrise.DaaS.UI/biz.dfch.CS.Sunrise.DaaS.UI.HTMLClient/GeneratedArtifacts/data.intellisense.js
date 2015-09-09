/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.CatalogueItem, {
        /// <field>
        /// Called when a new catalogueItem is created.
        /// <br/>created(msls.application.CatalogueItem entity)
        /// </field>
        created: [lightSwitchApplication.CatalogueItem]
    });

    msls._addEntryPoints(lightSwitchApplication.Person, {
        /// <field>
        /// Called when a new person is created.
        /// <br/>created(msls.application.Person entity)
        /// </field>
        created: [lightSwitchApplication.Person]
    });

    msls._addEntryPoints(lightSwitchApplication.Endpoint, {
        /// <field>
        /// Called when a new endpoint is created.
        /// <br/>created(msls.application.Endpoint entity)
        /// </field>
        created: [lightSwitchApplication.Endpoint]
    });

    msls._addEntryPoints(lightSwitchApplication.KeyNameValue, {
        /// <field>
        /// Called when a new keyNameValue is created.
        /// <br/>created(msls.application.KeyNameValue entity)
        /// </field>
        created: [lightSwitchApplication.KeyNameValue]
    });

    msls._addEntryPoints(lightSwitchApplication.Task, {
        /// <field>
        /// Called when a new task is created.
        /// <br/>created(msls.application.Task entity)
        /// </field>
        created: [lightSwitchApplication.Task]
    });

}(msls.application));
