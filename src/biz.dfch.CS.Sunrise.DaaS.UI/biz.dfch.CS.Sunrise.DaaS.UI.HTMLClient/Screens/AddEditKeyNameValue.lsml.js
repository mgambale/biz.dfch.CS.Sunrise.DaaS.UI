/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditKeyNameValue.beforeApplyChanges = function (screen) {
    if (null == screen.KeyNameValue.Tid)
    {
        screen.KeyNameValue.Tid = "00000000-0000-0000-0000-000000000000";
    }
};
myapp.AddEditKeyNameValue.created = function (screen) {
    if (null == screen.KeyNameValue.Id)
    {
        screen.KeyNameValue.Id = 0;
    }
    if (null == screen.KeyNameValue.Tid)
    {
        screen.KeyNameValue.Tid = "00000000-0000-0000-0000-000000000000";
    }
    if(null == screen.KeyNameValue.Created)
    {
        screen.KeyNameValue.Created = new Date(2015, 01, 01);
    }
    if (null == screen.KeyNameValue.CreatedBy) {
        screen.KeyNameValue.CreatedBy = "USER";
    }
    if (null == screen.KeyNameValue.Modified) {
        screen.KeyNameValue.Modified = new Date(2015, 01, 01);
    }
    if (null == screen.KeyNameValue.ModifiedBy) {
        screen.KeyNameValue.ModifiedBy = "USER";
    }
};