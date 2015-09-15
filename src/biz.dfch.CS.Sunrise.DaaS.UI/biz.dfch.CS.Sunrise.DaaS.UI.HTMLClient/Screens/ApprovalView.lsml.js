/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ApprovalView.approve_execute = function (screen) {
    if (screen.Approval.State != "Created") {
        msls.showMessageBox("Request has already been processed. Cannot proceed.",
            {
                title: "Error"
                ,
                buttons: msls.MessageBoxButtons.ok
            });
    }
    else
    {
        msls.showMessageBox("Sure, you want to approve the request?",
            {
                title: "Approve?"
                ,
                buttons: msls.MessageBoxButtons.yesNo
            }
        ).then(function (result) {
            if (result == msls.MessageBoxResult.yes) {
                screen.Approval.State = "Approved";
                return myapp.commitChanges().then(null, function fail(e) {
                    msls.showMessageBox(e.message,
                        {
                            title: e.title
                            ,
                            buttons: msls.MessageBoxButtons.ok
                        }).then(function (result) {
                            myapp.cancelChanges();
                            throw e;
                        });
                }
                );
            }
        }
        );
    }
};
myapp.ApprovalView.decline_execute = function (screen) {
    if (screen.Approval.State != "Created")
    {
        msls.showMessageBox("Request has already been processed. Cannot proceed.",
            {
                title: "Error"
                ,
                buttons: msls.MessageBoxButtons.ok
            });
    }
    else
    {
        msls.showMessageBox("Sure, you want to decline the request?",
            {
                title: "Decline?"
                ,
                buttons: msls.MessageBoxButtons.yesNo
            }
        ).then(function (result) {
            if (result == msls.MessageBoxResult.yes) {
                screen.Approval.State = "Declined";
                return myapp.commitChanges().then(null, function fail(e) {
                    msls.showMessageBox(e.message,
                        {
                            title: e.title
                            ,
                            buttons: msls.MessageBoxButtons.ok
                        }).then(function (result) {
                            myapp.cancelChanges();
                            throw e;
                        });
                }
                );
            }
        }
        );
    }
};

myapp.ApprovalView.refresh_execute = function (screen) {
    if (!screen.Approval) {
        msls.showMessageBox("No items selected. Select item and retry operation.", {
            title: "Refresh",
            buttons: msls.MessageBoxButtons.ok
        });
    } else {
        screen.Approval.details.refresh();
    }
};
myapp.ApprovalView.deleteEntity_execute = function (screen) {
    deleteEntity(screen, "Approval");
};