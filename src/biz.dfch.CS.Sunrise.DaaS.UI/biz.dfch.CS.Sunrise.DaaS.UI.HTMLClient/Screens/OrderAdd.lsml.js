/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.OrderAdd.created = function (screen) {
    // Write code here.
    screen.Order.Tid = "00000000-0000-0000-0000-000000000000";
    screen.Order.Id = 0;
    screen.Order.Status = "Created";
    screen.Order.CreatedBy = "USER";
    screen.Order.ModifiedBy = "USER";
    screen.Order.Parameters = '[{"Quantity":1,"CatalogueItemId":"1"},{"Quantity":1,"CatalogueItemId":"2"}]';
    screen.Order.Created = new Date();
    screen.Order.Modified = new Date();
};