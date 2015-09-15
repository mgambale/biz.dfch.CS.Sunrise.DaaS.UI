var svcUrl = msls.application.rootUri + "/ApplicationData.svc/$metadata";
var ctxData = "42";
var svcAdUrl = msls.application.rootUri + "/utilities.svc/$metadata";
var ctxAdData = "42";

var orderElement = null;
var orderContentItem = null;

$(document).ready(function () {
    msls.application.options.showContentBehindDialog = false;
    msls.application.options.disableUrlScreenParameters = false;
    

    $data.initService(svcAdUrl)
        .then(function (context) {
            ctxAdData = context;
        });

    $data.initService(svcUrl)
        .then(function (context) {
            ctxData = context;
        });

});
function deleteEntity(screen, entity, title, message, messageNotSelected) {
    if (null === screen || undefined === screen || (0 >= screen.length)) {
        console.log("deleteEntity: 'screen': Parameter validation FAILED.");
        return;
    }
    if (null === entity || undefined === entity || (0 >= entity.length)) {
        console.log("deleteEntity: 'entity': Parameter validation FAILED.");
        return;
    }
    if (null === title || undefined === title || (0 >= title.length)) { title = "Delete '" + entity + "'"; }
    if (null === message || undefined === message || (0 >= message.length)) { message = "Sure, you want to delete?"; }
    if (null === messageNotSelected || undefined === messageNotSelected || (0 >= messageNotSelected.length)) { messageNotSelected = "No entity selected. Cannot delete entity."; }
    if (!screen[entity]) {
        msls.showMessageBox(messageNotSelected,
            {
                title: title
                ,
                buttons: msls.MessageBoxButtons.ok
            }
        )
    } else {
        msls.showMessageBox(message,
            {
                title: title
                ,
                buttons: msls.MessageBoxButtons.yesNo
            }
        ).then(function (result) {
            if (result == msls.MessageBoxResult.yes) {
                screen[entity].deleteEntity();
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
}