/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ApprovalsList.refresh_execute = function (screen) {
    // Write code here.

};
myapp.ApprovalsList.refresh_execute = function (screen) {
    if (!screen.Approvals.selectedItem) {
        msls.showMessageBox("No items selected. Select item and retry operation.", {
            title: "Refresh",
            buttons: msls.MessageBoxButtons.ok
        });
    } else {
        screen.Approvals.selectedItem.details.refresh();
    }
};