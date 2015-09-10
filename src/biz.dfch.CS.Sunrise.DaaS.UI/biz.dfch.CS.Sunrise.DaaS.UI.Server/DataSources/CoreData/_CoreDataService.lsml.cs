using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Data.Services.Client;
using System.Web;
using biz.dfch.CS.Utilities.General;

namespace LightSwitchApplication
{
    public partial class CoreDataService
    {
        // will hold the impersonation context between sending and receiving
        private System.Security.Principal.WindowsImpersonationContext _impersonationContext;

        // set up impersonation ...
        partial void CoreData_SendingRequest(ODataSendingState state)
        {
            System.Security.Principal.WindowsIdentity identity;
            if (HttpContext.Current.User.Identity.GetType().Name == "GenericIdentity")
            {
                identity = System.Security.Principal.WindowsIdentity.GetCurrent();
            }
            else
            {
                identity = (System.Security.Principal.WindowsIdentity) HttpContext.Current.User.Identity;
            }
            biz.dfch.CS.Utilities.Logging.Trace.WriteLine("{0}: '{1}' @{2}", Method.fn(), identity.Name, HttpContext.Current.User.Identity.GetType().Name);

            state.Request.Headers.Add("Biz-Dfch-Impersonated-User", string.Format("{0}-{1}", identity.AuthenticationType, identity.Name));
            state.Request.PreAuthenticate = true;
            state.Request.Credentials = System.Net.CredentialCache.DefaultCredentials;

            _impersonationContext = identity.Impersonate();
        }

        // ... and revert after completion of request
        partial void CoreData_ReceivedResponse(ODataReceivedState state)
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
