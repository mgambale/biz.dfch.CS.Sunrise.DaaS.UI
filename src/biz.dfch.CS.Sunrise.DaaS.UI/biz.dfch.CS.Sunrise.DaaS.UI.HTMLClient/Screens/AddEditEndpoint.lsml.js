/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditEndpoint.beforeApplyChanges = function (screen) {
    if (null == screen.Endpoint.Tid) {
        screen.Endpoint.Tid = "00000000-0000-0000-0000-000000000000";
    }
};