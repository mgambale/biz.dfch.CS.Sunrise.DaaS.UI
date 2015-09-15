﻿

/*//////////////////////////////////////////////////////////////////////////////////////
////// Autogenerated by JaySvcUtil.exe http://JayData.org for more info        /////////
//////                             oData  V3                                     /////////
//////////////////////////////////////////////////////////////////////////////////////*/
(function(global, $data, undefined) {

    
  $data.Entity.extend('LightSwitchApplication.Models.UserHelper', {
     'Id': { 'key':true,'type':'Edm.Int32','nullable':false,'required':true },
     'UserName': { 'type':'Edm.String' },
     'FirstName': { 'type':'Edm.String' },
     'LastName': { 'type':'Edm.String' },
     'Uid': { 'type':'Edm.String' },
     'Password': { 'type':'Edm.String' },
     'Created': { 'type':'Edm.DateTime','nullable':false,'required':true },
     'CreatedBy': { 'type':'Edm.String' },
     'Modified': { 'type':'Edm.DateTime','nullable':false,'required':true },
     'ModifiedBy': { 'type':'Edm.String' }
  });

  $data.Entity.extend('LightSwitchApplication.Models.ManagementCredentialHelper', {
     'Id': { 'key':true,'type':'Edm.Int32','nullable':false,'required':true },
     'Name': { 'type':'Edm.String' },
     'Description': { 'type':'Edm.String' },
     'Username': { 'type':'Edm.String' },
     'Password': { 'type':'Edm.String' },
     'Created': { 'type':'Edm.DateTime','nullable':false,'required':true },
     'CreatedBy': { 'type':'Edm.String' },
     'Modified': { 'type':'Edm.DateTime','nullable':false,'required':true },
     'ModifiedBy': { 'type':'Edm.String' }
  });

  $data.Entity.extend('LightSwitchApplication.Models.ActiveDirectoryUser', {
     'cn': { 'key':true,'type':'Edm.String','nullable':false,'required':true },
     'description': { 'type':'Edm.String' },
     'distinguishedName': { 'type':'Edm.String' },
     'groupType': { 'type':'Edm.Int32','nullable':false,'required':true },
     'name': { 'type':'Edm.String' },
     'sn': { 'type':'Edm.String' },
     'givenName': { 'type':'Edm.String' },
     'department': { 'type':'Edm.String' },
     'displayName': { 'type':'Edm.String' },
     'mail': { 'type':'Edm.String' },
     'objectGUID': { 'type':'Edm.String' },
     'objectSID': { 'type':'Edm.String' },
     'sAMAccountName': { 'type':'Edm.String' },
     'sAMAccountType': { 'type':'Edm.Int32','nullable':false,'required':true },
     'uSNChanged': { 'type':'Edm.Int64','nullable':false,'required':true },
     'uSNCreated': { 'type':'Edm.Int64','nullable':false,'required':true },
     'whenChanged': { 'type':'Edm.DateTime','nullable':false,'required':true },
     'whenCreated': { 'type':'Edm.DateTime','nullable':false,'required':true }
  });

  $data.EntityContext.extend('Default.Utilities', {
     'UserHelpers': { type: $data.EntitySet, elementType: LightSwitchApplication.Models.UserHelper},
     'ManagementCredentialHelpers': { type: $data.EntitySet, elementType: LightSwitchApplication.Models.ManagementCredentialHelper},
     'ActiveDirectoryUsers': { type: $data.EntitySet, elementType: LightSwitchApplication.Models.ActiveDirectoryUser}
  });

  $data.generatedContexts = $data.generatedContexts || [];
  $data.generatedContexts.push(Default.Utilities);
  
      
})(window, $data);
      
    