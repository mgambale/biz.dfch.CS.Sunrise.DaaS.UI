/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditTask.beforeApplyChanges = function (screen) {
    if (null == screen.Task.Tid) {
        screen.Task.Tid = "00000000-0000-0000-0000-000000000000";
    }
};