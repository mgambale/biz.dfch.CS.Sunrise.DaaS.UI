
var dfchls = {

    stripText: function (element, contentItem, length) {
        contentItem.dataBind("value", function (value) {
            if (value) {
                
                $(element).text(value.substr(0, length) + '...');
                
            }
        });
    }
    ,
    
    addAdSearchBox: function (tableProperties, $element, contentItem, entityState, options) {

        try {

            //check if options are set:
            if ((undefined === options) || (null === options)) {
                var options = {}
            }

            if ((undefined === tableProperties) || (null === tableProperties)) {
                var tableProperties = {}
            }
            checkSelect2Options(options);

            //var obj = WinJS.Resources.getString("/client/" + options["btnAddItemTitle"]);
            //var lang = obj.lang.substring(2, 0);
            //add dynamically resource file from select2: (languages are defined like "en", "de" etc.           
            //dfchls.loadJsFile("scripts/select2_locale_" + lang + ".js");

            //add html
            var $divMaster = $("<div class='dfchlsMasterDiv' />");
            //own function, because .uniqueId() is only in jqueryUI available:
            var id = generateUniqueId();

            if ('single' == options["mode"]) {
                $element.append($divMaster);
            } else {
                var $btnAdd = $("<span '" + id + "'><span class='dfchlsButtonSpan'><i class='fa fa-plus-square-o fa-2x' /><span class='dfchlsButtonSpan'>" + obj.value + "</span></span></span>");
                $btnAdd
                    .on("vmousedown", function () {
                        if (getElementsCountByClassName($divMaster, 'dfchlsChildDiv') < options["maximumItems"]) {
                            addDivRow($divMaster, tableProperties, contentItem, options);
                        }
                        else {
                            msls.showMessageBox(WinJS.Resources.getString("/client/MsgMaxItemsReached").value, {
                                title: WinJS.Resources.getString("/client/MsgMaxItemsReachedTitle").value,
                                buttons: msls.MessageBoxButtons.ok
                            });
                        }
                    });

                $element.append($divMaster, $btnAdd);
            }


            if (msls.EntityState.added == entityState) {
                if (0 < options["initialItemsMin"] || 'single' != options['mode']) {
                    for (var c = 0; c < options["initialItemsMin"]; c++) {
                        //$("#" + id).trigger("vmousedown");
                        addDivRow($divMaster, tableProperties, contentItem, options);

                    };
                } else {
                    //only create one select2 control if options['mode'] = 'single':
                    addDivRow($divMaster, tableProperties, contentItem, options);
                }
            }
            else {
                var contentItemValue = contentItem.value;
                if ((undefined != contentItemValue) || (null != contentItemValue)) {
                    try {
                        var jsonItems = JSON.parse(contentItemValue);
                        var count = jsonItems.items.length;

                        if ('single' != options['mode']) {
                            for (var objItem in jsonItems.items) {
                                addDivRow($divMaster, tableProperties, contentItem, options, jsonItems.items[objItem]);
                            }
                            if (count < options["initialItemsMin"]) {
                                var dif = options["initialItemsMin"] - count;
                                for (i = 0; i < dif; i++) {
                                    addDivRow($divMaster, tableProperties, contentItem, options, null);
                                }
                            }
                        } else {
                            addDivRow($divMaster, tableProperties, contentItem, options, jsonItems.items[0]);
                        }


                    } catch (e) {
                        console.log(e.message + "; description:" + e.description);
                    }
                }
                else {
                    if ('single' != options['mode']) {
                        for (var i = 0; i < options["initialItemsMin"]; i++) {
                            addDivRow($divMaster, tableProperties, contentItem, options, null);
                        }
                    } else {
                        addDivRow($divMaster, tableProperties, contentItem, options, null);
                    }

                }
            }
        }
        catch (e) {
            console.log(e.message + "; description:" + e.description);
        }
    }
    ,
    //From http://msdn.microsoft.com/en-us/library/hh973172.aspx
    loadData: function (data, odataUrl, dataLoaded) {
        if (data) {
            // WinJS.Promise.as: http://msdn.microsoft.com/en-us/library/windows/apps/br211664.aspx
            return WinJS.Promise.as(data);
        }
        else {
            return new WinJS.Promise(function (complete, error, progress) {
                // http://blogs.msdn.com/b/lightswitch/archive/2012/11/13/new-lightswitch-html-client-apis.aspx
                window.OData.read(odataUrl,
                function (data) {
                    complete(dataLoaded(data.results));
                },
                function (dataerror) {
                    error(dataerror);
                });
            });
        }
    }
    ,
    //from http://joquery.com/2012/string-format-for-javascript
    stringFormat: function () {
        // The string containing the format items (e.g. "{0}")
        // will and always has to be the first argument.
        var theString = arguments[0];

        // start with the second argument (i = 1)
        for (var i = 1; i < arguments.length; i++) {
            // "gm" = RegEx options for Global search (more than one instance)
            // and for Multiline search
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, arguments[i]);
        }

        return theString;
    }
    ,

    isJsonString: function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
,

    initScreen: function (screen, entityState) {
        // set screen title
        dfchls.setScreenTitle(screen, entityState);
        //add pagecreate event:
        $(document).one("pagecreate", screen, function (event) {
            dfchls.getControls(screen, screen.findContentItem("Details"), entityState);
        });
    }
    ,
    //set screen title (depending on Add or Edit screen)
    setScreenTitle: function (screen, entityState) {
        var dScreen = JSON.parse(screen.details.description);
        var titleProp = "title" + entityState;
        if (dScreen && dScreen.hasOwnProperty(titleProp)) {
            screen.details.displayName = WinJS.Resources.getString("/client/" + dScreen[titleProp]).value;
        }

    }
    ,
    //SetControlState:
    setControlState: function (screen, name, permission) {
        if (undefined === myapp.permissions || null === myapp.permissions) {
            getAuthInfo();
        }
        var aname;
        if (name instanceof Array) {
            aname = name;
        } else {
            aname = [name];
        }
        var fVisible = false;
        if (myapp.permissions !== undefined && (myapp.permissions[permission])) {
            fVisible = true;
        }
        for (var c = 0; c < aname.length; c++) {
            name = aname[c];
            screen.findContentItem(name).isVisible = fVisible;
        }
    }
    ,

    setContextHelp: function (element, contentItem, helpTextPropertyName, helpTextDefault, toastrOptions) {
        if ((undefined === toastrOptions) || (null === toastrOptions)) {
            toastrOptions = {};
        }
        checkToastrOptions(toastrOptions);
        //Look for content items with type either 'details' (a navigation property) 
        //or 'value' (non-relationship properties) 
        var contentItemTypes = [];
        contentItemTypes.push(msls.ContentItemKind.details);
        contentItemTypes.push(msls.ContentItemKind.value);
        // Find these content items starting from the children of the 'columns' content item 
        var matchingContentItems = findMatchingContentItems(contentItemTypes, contentItem);
        // Find all LABEL elements that are descendants of the parent element rendering the 
        // 'columns' content item 
        var $matchingElements = $(element).find("label:not(:empty)"); //<--This is neceesary for custom controls like multiple select2

        if (!helpTextPropertyName) { helpTextPropertyName = "helpText"; }
        if (!helpTextDefault) { helpTextDefault = "/client/CommonHelpTextNone"; }

        $.each($matchingElements, function (index) {
            // Set the LABEL element to float left 
            $(this).css("float", "left");
            // Create a new A element that will display the '?' link 
            var $help = $("<a href='#'><i class='fa fa-question-circle' style='color: #fff;'></i></a>");
            $help.css({ "cursor": "pointer", "display": "block", "float": "right" });
            var correspondingContentItem = matchingContentItems[index];
            try {
                var d = JSON.parse(correspondingContentItem.description);
            }
            catch (e) {
                var d = null;
            }


            toastr.options = toastrOptions;

            var helpText = (d && d.hasOwnProperty(helpTextPropertyName)) ? WinJS.Resources.getString("/client/" + d.helpText).value : WinJS.Resources.getString(helpTextDefault).value;

            // Add a click event handler to display the content item description 
            $help.on('vmousedown', function (e) {
                e.preventDefault();
                contentItem.screen.HelpText = helpText;
                contentItem.screen.showPopup('Help');
            });

            var $lasttoast;
            $help.on('mouseenter', function (e) {
                var $curtoast = toastr[toastrOptions["type"]](helpText, WinJS.Resources.getString("/client/CommonHelpBoxTitle").value);
                $lasttoast = $curtoast;
            });

            $help.on('mouseleave', function (e) {
                toastr.clear($lasttoast);
            });
            // Insert the help element as a sibling after the LABEL element 
            $(this).after($help);
        });
    }
    ,
    //Set tool tip: (obsolete)
    setToolTip: function (element, contentItemName, helpTextPropertyName, helpTextDefault, timeOut) {
        fn = "setToolTip";
        var contentItem = element.findContentItem(contentItemName);

        if (!element) { console.log(fn + ": element not specified."); return; }
        if (!contentItem) { console.log(fn + ": contentItem not specified."); return; }
        if (!helpTextPropertyName) { helpTextPropertyName = "helpText"; }
        if (!helpTextDefault) { helpTextDefault = "/client/HelpTextNone"; }
        if (null == timeOut) { timeOut = toastr.options.timeOut; }
        try {
            var d = JSON.parse(contentItem.description);
        }
        catch (e) {
            var d = null;
        }
        var helpText = (d && d.hasOwnProperty(helpTextPropertyName)) ? WinJS.Resources.getString("/client/" + d.helpText).value : WinJS.Resources.getString(helpTextDefault).value;
        $element = $(contentItem)
        $element.helpTextTriggered = new Date('1970-01-01');
        $element.on("vmousedown", { element: $element, contentItem: contentItem, helpText: helpText }, function (evt) {
            var d = new Date();
            if (toastr.options.timeOut < (d.valueOf() - evt.data.element.helpTextTriggered.valueOf())) {
                toastr.info(evt.data.helpText, contentItem.displayName, { timeOut: timeOut });
                evt.data.element.helpTextTriggered = d;
            }
        });
    }
    ,
    //Set default value:
    setDefaultValue: function (screen, entityState, contentItemName) {
        var defaultValueProp = "defaultValue";
        if (msls.EntityState.added == entityState) {
            var ciControl = screen.findContentItem(contentItemName);
            var dControl = JSON.parse(ciControl.description);
            if (dControl && dControl.hasOwnProperty(defaultValueProp)) {
                ciControl.value = dControl[defaultValueProp];
                console.log(defaultValueProp + "=" + dControl[defaultValueProp]);
            }
        }
    }
    ,

    getControls: function (element, contentItem, entityState) {
        console.log('getControls');
        var contentItemTypes = [];
        contentItemTypes.push(msls.ContentItemKind.details);
        contentItemTypes.push(msls.ContentItemKind.value);
        var matchingContentItems = findMatchingContentItems(contentItemTypes, contentItem);
        var $matchingElements = $.find("input,textarea,select");
        $.each($matchingElements, function (index) {
            var correspondingContentItem = matchingContentItems[index];
            if (correspondingContentItem) {
                console.log(correspondingContentItem.name);
                if (correspondingContentItem.name != "columns") {
                    dfchls.setDefaultValue(element, entityState, correspondingContentItem.name);
                }
            }
        });
    }
    ,

    getUserInfo: function () {
        // Get current user
        if (undefined === myapp.CurrentUser || null === myapp.CurrentUser) {
            //console.log("Get currently logged on user");
            $.getJSON("../Controllers/CurrentUser/", function (data) {
                myapp.CurrentUser = data;
            });

        }

        //Check the user permissions
        if (undefined === myapp.permissions || null === myapp.permissions) {
            //Get permissions of the currently logged on user
            //console.log("Get permissions of the currently logged on user");
            $.getJSON("../Controllers/UserPermissions/", function (data) {

                //attach the permissions to the global 'myapp' object 
                //so it is accessible to the client anywhere.
                myapp.permissions = data;
            });

        }

        //Check the user roles
        if (undefined === myapp.roles || null === myapp.roles) {
            //Get roles of the currently logged on user
            //console.log("Get roles of the currently logged on user");
            $.getJSON("../Controllers/UserRoles/", function (data) {

                //attach the permissions to the global 'myapp' object 
                //so it is accessible to the client anywhere.
                myapp.roles = data;
            });

        }
    }

    ,

    hideOrDisableContentItems: function (element, contentItem, showToOnly) {
        if (undefined === myapp.permissions || null === myapp.permissions) {
            dfchls.getUserInfo();
        }
        if ((undefined === showToOnly) || (null === showToOnly)) {
            showToOnly = true;
        }

        var contentItemTypes = [];
        contentItemTypes.push(msls.ContentItemKind.details);
        contentItemTypes.push(msls.ContentItemKind.value);
        var matchingContentItems = findMatchingContentItems(contentItemTypes, contentItem);

        $.each(matchingContentItems, function (index) {
            var correspondingContentItem = matchingContentItems[index];
            if (correspondingContentItem) {
                console.log(correspondingContentItem.name);

                var controlState = "visibility";
                var mypermissions = myapp.permissions;
                var myroles = myapp.roles;
                var thisDescription = correspondingContentItem.description;
                //
                if (dfchls.isJsonString(thisDescription)) {
                    var cIDescription = JSON.parse(thisDescription);
                    if (cIDescription && cIDescription.hasOwnProperty("SetControlState")) {
                        controlState = cIDescription.hasOwnProperty("SetControlState");
                    }
                    var showOrEnable = false;
                    if (cIDescription && cIDescription.hasOwnProperty("Roles")) {
                        var controlRoles = cIDescription["Roles"].split(",");

                        $.each(controlRoles, function (i) {
                            if (myroles[controlRoles[i]]) {
                                if ("visibility" == controlState) {
                                    correspondingContentItem.isVisible = true;
                                } else {
                                    correspondingContentItem.isEnabled = true;
                                }
                                showOrEnable = true;
                                //break if one matching found:
                                return;
                            } else {
                                if ("visibility" == controlState) {
                                    correspondingContentItem.isVisible = false;
                                } else {
                                    correspondingContentItem.isEnabled = false;
                                }
                            }
                        });
                    }
                    //If roles already enable control, permissions check is not necessary (showOrEnable):
                    if (cIDescription && cIDescription.hasOwnProperty("Permissions") && showOrEnable == false) {
                        var controlPermissions = cIDescription["Permissions"].split(",");
                        $.each(controlPermissions, function (i) {
                            if (mypermissions[controlPermissions[i]]) {
                                if ("visibility" == controlState) {
                                    correspondingContentItem.isVisible = true;
                                } else {
                                    correspondingContentItem.isEnabled = true;
                                }

                                //break if one matching found:
                                return;
                            } else {
                                if ("visibility" == controlState) {
                                    correspondingContentItem.isVisible = false;
                                } else {
                                    correspondingContentItem.isEnabled = false;
                                }
                            }
                        });
                    }
                }
            }



        });
    }

    ,

    loadJsFile: function (filename) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = filename;
        head.appendChild(script);
    }

    ,

    loadCssFile: function (filename, mediaType) {

        if ((undefined === mediaType) || (null === mediaType)) {
            var mediaType = "screen";
        }
        var headID = document.getElementsByTagName("head")[0];
        var cssNode = document.createElement('link');
        cssNode.type = 'text/css';
        cssNode.rel = 'stylesheet';
        cssNode.href = filename;
        cssNode.media = mediaType;
        headID.appendChild(cssNode);
    }

    ,

    confirmSaveChangingsTest: function (screen) {

        $("[data-ls-tap='tap:{data.shell.saveCommand.command}']").bind("vmousedown", function () {
            //work: myapp.activeDataWorkspace.ApplicationData.Announcements.dataService.saveChanges()

            msls.showMessageBox("Click Ok to save.", {
                title: "Confim Save",
                buttons: msls.MessageBoxButtons.okCancel
            })
                  .then(function (result) {
                      if (result === msls.MessageBoxResult.ok) {
                          var test = myapp.activeDataWorkspace.ApplicationData.saveChanges()
                             .then(null, function fail(e) {
                                 // If error occurs, show the error.
                                 msls.showMessageBox(e.message, { title: e.title }).then(function () {
                                     // Discard Changes
                                     screen.details.dataWorkspace.ApplicationData.details.discardChanges();
                                 });

                             });
                          console.log(test);
                          return test;
                      }
                  });

        });
    }

    ,

    confirmSaveChangings: function (screen, showSuccess) {

        //msls.showMessageBox(WinJS.Resources.getString("/client/CommonSaveConfirmMsg").value,
        //        {
        //            title: WinJS.Resources.getString("/client/CommonSaveConfirmTitle").value
        //            ,
        //            buttons: msls.MessageBoxButtons.yesNo
        //        })
        //     .then(function (result) {
        //         if (result === msls.MessageBoxResult.yes) {
        //             if (true == showSuccess) {
        //                 myapp.activeDataWorkspace.ApplicationData.saveChanges()
        //                     .then(function() {
        //                         msls.showMessageBox(WinJS.Resources.getString("/client/CommonSaveSuccessMsg").value)
        //                             .then(function() { myapp.navigateBack(); },
        //                                 function fail(e) {
        //                                     // If error occurs, show the error.
        //                                     msls.showMessageBox(e.message, { title: e.title }).then(function() {
        //                                         // Discard Changes
        //                                         screen.details.dataWorkspace.ApplicationData.details.discardChanges();
        //                                     });
        //                                 });
        //                     });
        //             }
        //             else {
        //                 myapp.activeDataWorkspace.ApplicationData.saveChanges()
        //                     .then(function() { myapp.navigateBack(); },
        //                         function fail(e) {
        //                             // If error occurs, show the error.
        //                             msls.showMessageBox(e.message, { title: e.title }).then(function() {
        //                                 // Discard Changes
        //                                 screen.details.dataWorkspace.ApplicationData.details.discardChanges();
        //                             });

        //                         });
        //             }
        //         }
        //         else {
        //             return false;
        //         }
        //     });
    }

    ,

    showNotification: function (functionToCall, args, toastrOptions) {
        if ((undefined === toastrOptions) || (null === toastrOptions)) {
            toastrOptions = {};
        }
        checkToastrOptions(toastrOptions);
        functionToCall(args, toastrOptions);
    }
}

function addColorBar($ctrl) {
    var strColorBar = '<div class="l-brand-responsive" >' +
                        '<div class="bloc1"></div>' +
                        '<div class="bloc2"></div>' +
                        '<div class="bloc3"></div>' +
                        '<div class="bloc4"></div>' +
                        '<div class="bloc5"></div>' +
                        '<div class="bloc6"></div>' +
                        '<div class="bloc7"></div>' +
                        '<div class="bloc8"></div>' +
                        '<div class="bloc9"></div>' +
                        '<div class="bloc10"></div>' +
                        '<div class="bloc11"></div></div>';
    $ctrl.append(strColorBar);
    
    $('#footer').append(strColorBar);
    
}
function hideMainNavigation() {
    //$(".ui-icon.ui-icon-msls-dropdown.ui-icon-shadow").hide();  //<span class="ui-icon ui-icon-msls-dropdown ui-icon-shadow">&nbsp;</span>

    //var $html = $('html');
    //var $element = $html.find(".msls-nav");
    //$element.hide();
}

function checkSelect2Options(options) {

    /* usage example and description of options:
    description:
    placeholder: '[ResourceId of placeholder, defined in .resjson]' -- placeholder text 
        quietMillis: 1000   --- time until controls will search (in ms)   
        minimumInputLength: 3   --- minimum lenght of characters until starting search   
        dataType: json   --- data type of results
        page_limit: 10   --- limit of pages of results
        dropdownCssClass: 'bigdrop'   --- style of control (defined in select2)
        initialItemsMin:5   --- count of controls which are initially displayed  
        minimumItems: 1   --- min. count of select2 controls for contentItem
        maximumItems: 3   --- max. count of select2 controls for contentItem 
        searchMode: 'startsWith'   --- mode for searching (startsWith | indexOf)
        width: '100px'   --- width of control (int, % or px)
        btnAddItemTitle: '[ResourceId of btnAddItemTitle, defined in .resjson]'   --- button text
        mode: 'single' | 'multi'   --- specifies if one or multiple select2 controls will be shown (with add/remove button)
    usage:
    var options = { 
        placeholder: '[ResourceId of placeholder, defined in .resjson]',  
        quietMillis: 1000,   
        minimumInputLength: 3,   
        dataType: json,
        page_limit: 10,
        dropdownCssClass: 'bigdrop',
        initialItemsMin:5, 
        minimumItems: 1,
        maximumItems: 3, 
        searchMode: 'startsWith',
        width: '100px',
        btnAddItemTitle: '[ResourceId of btnAddItemTitle, defined in .resjson]',
        mode: 'single'
    }
    
    */
    if (!options.hasOwnProperty("placeholder")) { options["placeholder"] = 'SelectItemPlaceholder'; }
    if (!options.hasOwnProperty("quietMillis")) { options["quietMillis"] = 1000; }
    if (!options.hasOwnProperty("minimumInputLength")) { options["minimumInputLength"] = 3; }
    if (!options.hasOwnProperty("dataType")) { options["dataType"] = 'json'; }
    if (!options.hasOwnProperty("page_limit")) { options["page_limit"] = '10'; }
    if (!options.hasOwnProperty("dropdownCssClass")) { options["dropdownCssClass"] = 'bigdrop'; }
    if (options.hasOwnProperty("initialItemsMin")) { options["initialItemsMin"] = parseInt(options["initialItemsMin"], 10); }
    if (!options.hasOwnProperty("initialItemsMin")) { options["initialItemsMin"] = 1; }
    if (options.hasOwnProperty("minimumItems")) { options["minimumItems"] = parseInt(options["minimumItems"], 10); }
    if (!options.hasOwnProperty("minimumItems")) { options["minimumItems"] = options["initialItemsMin"] > 1 ? options["initialItemsMin"] : 1; }
    if (options.hasOwnProperty("maximumItems")) { options["maximumItems"] = parseInt(options["maximumItems"], 10); }
    if (!options.hasOwnProperty("maximumItems")) { options["maximumItems"] = options["initialItemsMin"] > 1 ? options["initialItemsMin"] : 1; }
    if (!options.hasOwnProperty("searchMode")) { options["searchMode"] = 'indexOf'; }
    if (!options.hasOwnProperty("width")) { options["width"] = '180px'; }
    if (!options.hasOwnProperty("btnAddItemTitle")) { options["btnAddItemTitle"] = 'BtnAddItem'; }
    if (!options.hasOwnProperty("mode")) { options["mode"] = 'single'; }
}

function getActiveDirectoryData(data, searchTerm) {

    //ctxAdData is defined and set in common.js
    var promise = null;
    var tableProperties = { table: 'ActiveDirectoryUsers', id: 'sAMAccountName', name: 'displayName' };
    var idField = tableProperties['id'];
    var displayField = tableProperties['name'];
    data.results = [];
    ctxAdData.prepareRequest = function (r) {
        r[0].requestUri += "('*" + searchTerm + "*')";
    }
    promise = ctxAdData[tableProperties['table']]

    .forEach(function (dataItem) {
        data.results.push({
            id: dataItem[idField],
            text: dataItem[displayField] + " - " + dataItem["department"],
            username: dataItem["sAMAccountName"],
            displayname: dataItem["displayName"],
            email: dataItem["mail"],
            department: dataItem["department"],
            firstname: dataItem["givenName"],
            lastname: dataItem["sn"],
            pernr: dataItem["employeeID"]
        });
    });
    return promise;

}

function addDivRow($divMaster, tableProperties, contentItem, options, value) {
    checkSelect2Options(options);
    var $divChild = $('<div class="dfchlsChildDiv" />');
    var $input = $("<input data-role='none' id='MyInput' type='text'>");

    if ('single' == options["mode"]) {
        $divChild.append($input);
    } else {
        var $spanDelete = $("<span class='dfchlsButtonSpan'><i class='fa fa-minus-square-o fa-2x' /></span>");
        $spanDelete
        .on("vmousedown", function () {
            removeDivRow($divMaster, contentItem, $divChild, options["minimumItems"]);
        });
        $divChild.append($input, $spanDelete);
    }

    $divMaster.append($divChild);
    var placeholderText = "Search User"; //WinJS.Resources.getString("/client/" + options["placeholder"]).value;
    var $divProductMaster = $("<div class='dfchlsProductsDiv' />");

    $input
        .select2({
            placeholder: placeholderText,
            quietMillis: options["quietMillis"],
            minimumInputLength: options["minimumInputLength"],
            page_limit: options["page_limit"],
            width: options["width"],
            query: function (query) {
                var items = [];
                getActiveDirectoryData(items, query.term)
                    .then(function () {
                        query.callback(items);
                    });
            }



        })
        .on("change", function (e) {
            //contentItem.value = getSelectedValues($divMaster);
            contentItem.screen.ADUsername = e.added.username;
            contentItem.screen.ADDisplayName = e.added.displayname;
            contentItem.screen.ADMail = e.added.email;
            contentItem.screen.ADDepartment = e.added.department;
            contentItem.screen.ADFirstname = e.added.firstname;
            contentItem.screen.ADLastname = e.added.lastname;
            contentItem.screen.ProjectName = formatPerNr(e.added.pernr, 8);
            $divProductMaster.empty();
            renderProductsForOrder($(orderElement), orderContentItem, e.added.username, $divProductMaster);
        });
    if ((undefined != value) || (null != value)) {
        $input.select2("data", value);
    }
    addAttributeDataRole($divMaster, 'select2-focusser select2-offscreen');
}

function removeDivRow($divMaster, contentItem, $currentDivRow, min) {
    try {
        var c = getElementsCountByClassName($divMaster, 'dfchlsChildDiv');
        if (c > min) {
            $divMaster = $currentDivRow.parent();
            $currentDivRow.remove();
            contentItem.value = getSelectedValues($divMaster);
        }
        else {
            var msgTitle = dfchls.stringFormat(WinJS.Resources.getString("/client/MsgMinItemsReachedTitle").value, c);
            var msgBody = dfchls.stringFormat(WinJS.Resources.getString("/client/MsgMinItemsReached").value, c);
            msls.showMessageBox(msgBody, {
                title: msgTitle,
                buttons: msls.MessageBoxButtons.ok
            });
        }

    } catch (e) {
        console.log(e.message + "; description:" + e.description);
    }

}

function getSelectedValues($divMaster) {
    try {
        var selectedItems = { items: [] };
        $divMaster.find("input[type=text]").each(function () {
            var $this = $(this);
            //do NOT select input boxes with CssClass select2-focusser! 
            //These are inputs rendered by select2-Control and are 
            //used for item searching:
            if (!$this.hasClass('select2-focusser') && $this.attr("role") != "button") {
                var value = $this.select2("data");
                if (undefined != value || null != value) {
                    //check if dataItem is valid:
                    if (undefined != value.id || null != value.id) {
                        selectedItems.items.push(value);
                    }
                }
            }

        });

        return selectedItems;

    } catch (e) {
        console.log(e.message + "; description:" + e.description);
    }

}

function addAttributeDataRole($ctrl, classToFind) {
    try {

        $ctrl.find("input[type=text]").each(function () {
            var $this = $(this);
            //select input boxes with CssClass select2-focusser.
            //These are inputs rendered by select2-Control and are 
            //used for item searching. Adding attribute "data-role=none" prevent input from being wrapped by jQuery-mobile:

            if ($this.hasClass(classToFind)) {
                $this.attr('data-role', 'none');
            }
        });

    } catch (e) {
        console.log(e.message + "; description:" + e.description);
    }

}
//.uniqueId() only works with jQueryUI, so here is an own function:
function generateUniqueId() {
    return Math.round(new Date().getTime() + (Math.random() * 100));
}

function getElementsCountByClassName($divMaster, className) {
    return $divMaster.find('.' + className).length;
}

function findMatchingContentItems(arrayOfTypes, parentContentItem) {
    var matches = [];
    // Return an empty array if no children to look at 
    if (parentContentItem.children.length == 0) {
        return matches;
    }
    $.each(parentContentItem.children, function (i, contentItem) {
        $.each(arrayOfTypes, function (j, type) {
            if (contentItem.kind == type) {
                matches.push(contentItem);
            }
        });
        // Check the child's children for matches 
        matches = matches.concat(findMatchingContentItems(arrayOfTypes, contentItem));
    });
    return matches;
}

function intersection(x, y) {
    x.sort(); y.sort();
    var i = j = 0; ret = [];
    while (i < x.length && j < y.length) {
        if (x[i] < y[j]) i++;
        else if (y[j] < x[i]) j++;
        else {
            ret.push(x[i]);
            i++, j++;
        }
    }
    return ret;
}

function checkNullValue(input, outputIfTrue) {
    if (null == input || 'undefiened' == input)
        return outputIfTrue;
    return input;
}

function checkIfUserIsInStorebox(username) {
    var filter = "UserName eq '" + username + "'";
    myapp.activeDataWorkspace.ApplicationData.Users.filter(filter).
        execute().then(function (result) {
            return result.results.length;
        });
}

(function ($) {
    $.fn.spOverlay = function (contentItem, imageUrl, options, createNoti, count) {
        var me = $.extend({
            width: 200,
            height: 200,
            displayName: contentItem.model.displayName,
            description: (contentItem.model.description) ? contentItem.model.description : '',
            element: this,
            //imageUrl: imageUrl,
        }, options);

        me.createSpOverlay = function () {
            me.element.find('a').css({
                //    'background-image': 'url(' + me.imageUrl + ')',
                //    'background-repeat': 'no-repeat',
                //    'background-position': 'center',
                'width': '' + me.width + 'px',
                'height': '' + me.height + 'px'
            });
            if (createNoti == true) {
                var $noti = $('<div  class="noti_bubble">' + count + '</div>');
                me.element.append($noti);
            }

            setTimeout(function () {
                me.element.find('a').html(
                '<span class="fa ' + imageUrl + ' fa-inverse fa-5x" style="width:100%;height:100%;position:relative;background-color:#5D1048" >' +
                '    <span class="spOverlay ui-btn-up-a ui-btn-hover-a ui-btn-down-a" style="display:block;font-size:14px">' +
                '        <span class="spOverlayBackground"></span>' +
                '        <span class="spTitle">' + me.displayName + '</span>' +
                '        <span class="spDescription">' + me.description + '</span> ' +
                '    </span>' +
                '</span>');
            });
        };

        me.createSpOverlay();

    };

}(jQuery));

function renderProductsForOrder($element, contentItem, username, $div) {
    contentItem.screen.findContentItem("Password").isVisible = false;
    contentItem.screen.findContentItem("ProjectName").isVisible = false;
    contentItem.screen.findContentItem("UserComment").isVisible = false;
    //{"UserName":"ckreissl","
    var filterExpression = '"UserName":"' + username + '"';
    var requestItemFilter = "((substringof('" + filterExpression + "', Parameters) eq true) and (Status ne 'Completed') and (Status ne 'Canceled') and (Status ne 'Failed'))";
    myapp.activeDataWorkspace.ApplicationData.RequestItems.filter(requestItemFilter)
        .top(1)
        .includeTotalCount()
        .execute()
        .then(function (resultItem) {
            if (0 < resultItem.totalCount) {
                msls.showMessageBox("There is already an pending/waiting order for '" + username + "'. Please choose another user.", {
                    title: "Order exists",
                    buttons: msls.MessageBoxButtons.ok
                });
            } else {
                var filterUser = "UserName eq '" + username + "'";
                var $prodDiv = $("<div id='productDiv' />").appendTo($div);
                myapp.activeDataWorkspace.ApplicationData.Users.filter(filterUser).
                    execute()
                    .then(function (resultUser) {
                        if (0 == resultUser.results.length) {
                            renderControlsForUser($element, contentItem, username, $prodDiv);
                        } else {
                            $("<div><br/>This user already have a Storebox account.<br/><br/>" +
                                           "</div>").appendTo($prodDiv);
                        }

                        if (myapp.permissions["LightSwitchApplication:ProductCanRead"]) {
                            var filter = "active eq true";
                            myapp.activeDataWorkspace.ApplicationData.Products.filter(filter).
                                execute().then(function (result) {
                                    for (var i in result.results) {
                                        //productArray.push(result.results[i].Name);
                                        $("<div><input type='checkbox' id='cbx_" + result.results[i].Id + "' value='" + result.results[i].Name + "' checked />" +
                                            "<label for='cbx_" + result.results[i].Id + "'><b>&nbsp;" + result.results[i].Name + "</b>" +
                                            "<br/>" +
                                            checkNullValue(result.results[i].Description, "no description") +
                                            "</label>" +
                                            "</div>").appendTo($prodDiv);
                                    }
                                });
                        }
                        $div.appendTo($element);
                    });
            }
        });




}

function renderControlsForUser($element, contentItem, username, $div) {
    $("<div><br/><input type='checkbox' id='cbx_sbaccount' value='CreateStoreboxAccount' checked disabled=true/>" +
                               "<label for='cbx_sbaccount'><b>&nbsp;Create Storebox Account</b>" +
                               "<br/>" +
                               "</label><br/>" +
                               "</div>").appendTo($div);
    //contentItem.screen.findContentItem("Password").isVisible = true;
    contentItem.screen.findContentItem("ProjectName").isVisible = true;
    contentItem.screen.findContentItem("UserComment").isVisible = true;

}

function showLeading(input, length) {
    return input.substr(0, length);
}

function formatPerNr(input, len)
{ return (Array(len).join("0") + input).slice(-len); }

function generatePassword(plength) {

    var keylistalpha = "abcdefghijklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    var keylistint = "123456789";
    var keylistspec = "!@#_";
    var temp = '';
    var len = plength / 2;
    var len = len - 1;
    var lenspec = plength - len - len;

    for (i = 0; i < len; i++)
        temp += keylistalpha.charAt(Math.floor(Math.random() * keylistalpha.length));

    for (i = 0; i < lenspec; i++)
        temp += keylistspec.charAt(Math.floor(Math.random() * keylistspec.length));

    for (i = 0; i < len; i++)
        temp += keylistint.charAt(Math.floor(Math.random() * keylistint.length));

    temp = temp.split('').sort(function () { return 0.5 - Math.random() }).join('');

    return temp;
}
var Password = {

    _pattern: /[a-zA-Z0-9_\-\+\$\%\.]/,


    _getRandomByte: function () {
        // http://caniuse.com/#feat=getrandomvalues
        var resultPwd;
        if (window.crypto && window.crypto.getRandomValues) {
            resultPwd = new Uint8Array(1);
            window.crypto.getRandomValues(resultPwd);
            return resultPwd[0];
        }
        else if (window.msCrypto && window.msCrypto.getRandomValues) {
            resultPwd = new Uint8Array(1);
            window.msCrypto.getRandomValues(resultPwd);
            return resultPwd[0];
        }
        else {
            return Math.floor(Math.random() * 256);
        }
    },

    generate: function (length) {
        return Array.apply(null, { 'length': length })
          .map(function () {
              var result;
              while (true) {
                  result = String.fromCharCode(this._getRandomByte());
                  if (this._pattern.test(result)) {
                      return result;
                  }
              }
          }, this)
          .join('');
    }

};