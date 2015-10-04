/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var height = 130;
var width = 130;

myapp.Home.ShowAddEditOrder_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/add-to-cart.png', { height: height, width: width });
};
myapp.Home.created = function (screen) {
    // Write code here.

    screen.findContentItem("Orders").isVisible = true;
    screen.findContentItem("Endpoints").isVisible = true;
    screen.findContentItem("Configuration").isVisible = true;

    $.getJSON("../Perms/Permissions/", function (data) {
        //attach the permissions to the global 'myapp' object 
        //so it is accessible to the client anywhere.
        myapp.permissions = data;
    }).then(function () {
        if (myapp.permissions["LightSwitchApplication:ActiveDirectoryUserCanRead"]) {
            screen.findContentItem("ShowAddEditOrder").isVisible = true;
        } else {
            screen.findContentItem("ShowAddEditOrder").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:OrderCanRead"]) {
            screen.findContentItem("ShowBrowseOrders").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseOrders").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:UserCanRead"]) {
            screen.findContentItem("ShowBrowseUsers").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseUsers").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:ProductCanRead"]) {
            screen.findContentItem("ShowBrowseProducts").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseProducts").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:RequestItemCanDelete"]) {
            screen.findContentItem("ShowBrowseRequestItems").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseRequestItems").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:AuditTrailCanRead"]) {
            screen.findContentItem("ShowBrowseAuditTrails").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseAuditTrails").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:ManagementCredentialCanRead"]) {
            screen.findContentItem("ShowBrowseManagementCredentials").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseManagementCredentials").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:ManagementUriCanRead"]) {
            screen.findContentItem("ShowBrowseManagementUris").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseManagementUris").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:AssetCanRead"]) {
            screen.findContentItem("ShowBrowseAssets").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseAssets").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:ProjectFolderCanRead"]) {
            screen.findContentItem("ShowBrowseProjectFolders").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseProjectFolders").isVisible = false;
        }

        if (myapp.permissions["LightSwitchApplication:ProjectDocumentCanRead"]) {
            screen.findContentItem("ShowBrowseProjectDocuments").isVisible = true;
        } else {
            screen.findContentItem("ShowBrowseProjectDocuments").isVisible = false;
        }

    });
    //LightSwitchApplication:ActiveDirectoryUserCanRead
    //hideMainNavigation();
};
myapp.Home.ShowBrowseOrders_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/basket.png', { height: height, width: width });
};
myapp.Home.ShowBrowseUsers_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/users.png', { height: height, width: width });
};
myapp.Home.ShowBrowseProducts_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/ipad.png', { height: height, width: width });
};
myapp.Home.ShowBrowseRequestItems_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/requestitem.png', { height: height, width: width });
};
myapp.Home.ShowBrowseAuditTrails_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/audit.png', { height: height, width: width });
};
myapp.Home.ShowBrowseManagementCredentials_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/key.png', { height: height, width: width });
};
myapp.Home.ShowBrowseManagementUris_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/uris.png', { height: height, width: width });
};
myapp.Home.ShowBrowseAssets_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/i-phone.png', { height: height, width: width });
};
myapp.Home.ShowBrowseProjectFolders_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/folders.png', { height: height, width: width });
};
myapp.Home.ShowBrowseProjectDocuments_postRender = function (element, contentItem) {
    // Write code here.
    $(element).spOverlay(contentItem, 'Content/Icons/document.png', { height: height, width: width });
};

myapp.Home.Endpoints_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-expand', { height: height, width: width });
};
myapp.Home.Configuration_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-gears', { height: height, width: width });
};
myapp.Home.Orders_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-list-ul', { height: height, width: width });
};
myapp.Home.Approvals_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-eye', { height: height, width: width });
};
myapp.Home.Catalogue_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-files-o', { height: height, width: width });
};
myapp.Home.Jobs_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-fast-forward', { height: height, width: width });
};
myapp.Home.NewOrder_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-cart-plus', { height: height, width: width });
};
myapp.Home.OrderItems_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-database', { height: height, width: width });
};
myapp.Home.somethingToProve_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-camera-retro', { height: height, width: width });
};