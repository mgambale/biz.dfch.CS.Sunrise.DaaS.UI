/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.KeyNameValueView.deleteEntity_execute = function (screen) {
    msls.showMessageBox("Sure, you want to delete?",
        {
            title: "Delete Entity?"
            ,
            buttons: msls.MessageBoxButtons.yesNo
        }
    ).then(function (result) {
        if (result == msls.MessageBoxResult.yes) {
            screen.KeyNameValue.deleteEntity();
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
};

/**
 *
 *
 * Copyright 2014-2015 Ronald Rink, d-fens GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
