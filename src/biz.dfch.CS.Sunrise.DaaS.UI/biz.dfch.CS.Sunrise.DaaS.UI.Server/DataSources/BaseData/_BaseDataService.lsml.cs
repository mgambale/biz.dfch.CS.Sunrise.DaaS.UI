using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Data.Services.Client;
using System.Web;

namespace LightSwitchApplication
{
    public partial class BaseDataService
    {
        // will hold the impersonation context between sending and receiving
        private System.Security.Principal.WindowsImpersonationContext _impersonationContext;

        // set up impersonation ...
        partial void BaseData_SendingRequest(ODataSendingState state)
        {
            System.Security.Principal.WindowsIdentity identity;
            if (HttpContext.Current.User.Identity.GetType().Name == "GenericIdentity")
            {
                identity = System.Security.Principal.WindowsIdentity.GetCurrent();
                System.Diagnostics.Trace.WriteLine(String.Format("{0}: '{1}' @{2}", "BaseData_SendingRequest", identity.Name, HttpContext.Current.User.Identity.GetType().Name));
            }
            else
            {
                identity = (System.Security.Principal.WindowsIdentity) HttpContext.Current.User.Identity;
                System.Diagnostics.Trace.WriteLine(String.Format("{0}: '{1}' @{2}", "BaseData_SendingRequest", identity.Name, HttpContext.Current.User.Identity.GetType().Name));
            }

            state.Request.Headers.Add("Biz-Dfch-Impersonated-User", string.Format("{0}-{1}", identity.AuthenticationType, identity.Name));
            state.Request.PreAuthenticate = true;
            state.Request.Credentials = System.Net.CredentialCache.DefaultCredentials;

            _impersonationContext = identity.Impersonate();
        }

        // ... and revert after completion of request
        partial void BaseData_ReceivedResponse(ODataReceivedState state)
        {
            if (null == _impersonationContext)
            {
                return;
            }
            _impersonationContext.Undo();
            _impersonationContext.Dispose();
            _impersonationContext = null;
        }
    }
}
