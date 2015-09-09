﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.ComponentModel;
using System.Data.EntityClient;
using System.Data.Objects;
using System.Data.Objects.DataClasses;
using System.Linq;
using System.Runtime.Serialization;
using System.Xml.Serialization;

[assembly: EdmSchemaAttribute()]
namespace LightSwitchApplication.Implementation
{
    #region Contexts
    
    /// <summary>
    /// No Metadata Documentation available.
    /// </summary>
    public partial class DiagnosticsData : ObjectContext
    {
        #region Constructors
    
        /// <summary>
        /// Initializes a new DiagnosticsData object using the connection string found in the 'DiagnosticsData' section of the application configuration file.
        /// </summary>
        public DiagnosticsData() : base("name=DiagnosticsData", "DiagnosticsData")
        {
            OnContextCreated();
        }
    
        /// <summary>
        /// Initialize a new DiagnosticsData object.
        /// </summary>
        public DiagnosticsData(string connectionString) : base(connectionString, "DiagnosticsData")
        {
            OnContextCreated();
        }
    
        /// <summary>
        /// Initialize a new DiagnosticsData object.
        /// </summary>
        public DiagnosticsData(EntityConnection connection) : base(connection, "DiagnosticsData")
        {
            OnContextCreated();
        }
    
        #endregion
    
        #region Partial Methods
    
        partial void OnContextCreated();
    
        #endregion
    
        #region ObjectSet Properties
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        public ObjectSet<Endpoint> Endpoints
        {
            get
            {
                if ((_Endpoints == null))
                {
                    _Endpoints = base.CreateObjectSet<Endpoint>("Endpoints");
                }
                return _Endpoints;
            }
        }
        private ObjectSet<Endpoint> _Endpoints;

        #endregion

        #region AddTo Methods
    
        /// <summary>
        /// Deprecated Method for adding a new object to the Endpoints EntitySet. Consider using the .Add method of the associated ObjectSet&lt;T&gt; property instead.
        /// </summary>
        public void AddToEndpoints(Endpoint endpoint)
        {
            base.AddObject("Endpoints", endpoint);
        }

        #endregion

    }

    #endregion

    #region Entities
    
    /// <summary>
    /// No Metadata Documentation available.
    /// </summary>
    [EdmEntityTypeAttribute(NamespaceName="LightSwitchApplication", Name="Endpoint")]
    [Serializable()]
    [DataContractAttribute(IsReference=true)]
    public partial class Endpoint : EntityObject
    {
        #region Factory Method
    
        /// <summary>
        /// Create a new Endpoint object.
        /// </summary>
        /// <param name="id">Initial value of the Id property.</param>
        /// <param name="name">Initial value of the Name property.</param>
        /// <param name="version">Initial value of the Version property.</param>
        /// <param name="routeTemplate">Initial value of the RouteTemplate property.</param>
        /// <param name="routePrefix">Initial value of the RoutePrefix property.</param>
        /// <param name="serverRole">Initial value of the ServerRole property.</param>
        /// <param name="priority">Initial value of the Priority property.</param>
        public static Endpoint CreateEndpoint(global::System.Int32 id, global::System.String name, global::System.String version, global::System.String routeTemplate, global::System.String routePrefix, global::System.String serverRole, global::System.Int32 priority)
        {
            Endpoint endpoint = new Endpoint();
            endpoint.Id = id;
            endpoint.Name = name;
            endpoint.Version = version;
            endpoint.RouteTemplate = routeTemplate;
            endpoint.RoutePrefix = routePrefix;
            endpoint.ServerRole = serverRole;
            endpoint.Priority = priority;
            return endpoint;
        }

        #endregion

        #region Primitive Properties
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=true, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.Int32 Id
        {
            get
            {
                return _Id;
            }
            set
            {
                if (_Id != value)
                {
                    OnIdChanging(value);
                    ReportPropertyChanging("Id");
                    _Id = value;
                    ReportPropertyChanged("Id");
                    OnIdChanged();
                }
            }
        }
        private global::System.Int32 _Id;
        partial void OnIdChanging(global::System.Int32 value);
        partial void OnIdChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String Tid
        {
            get
            {
                return _Tid;
            }
            set
            {
                OnTidChanging(value);
                ReportPropertyChanging("Tid");
                _Tid = value;
                ReportPropertyChanged("Tid");
                OnTidChanged();
            }
        }
        private global::System.String _Tid;
        partial void OnTidChanging(global::System.String value);
        partial void OnTidChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.String Name
        {
            get
            {
                return _Name;
            }
            set
            {
                OnNameChanging(value);
                ReportPropertyChanging("Name");
                _Name = value;
                ReportPropertyChanged("Name");
                OnNameChanged();
            }
        }
        private global::System.String _Name;
        partial void OnNameChanging(global::System.String value);
        partial void OnNameChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.String Version
        {
            get
            {
                return _Version;
            }
            set
            {
                OnVersionChanging(value);
                ReportPropertyChanging("Version");
                _Version = value;
                ReportPropertyChanged("Version");
                OnVersionChanged();
            }
        }
        private global::System.String _Version;
        partial void OnVersionChanging(global::System.String value);
        partial void OnVersionChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.String RouteTemplate
        {
            get
            {
                return _RouteTemplate;
            }
            set
            {
                OnRouteTemplateChanging(value);
                ReportPropertyChanging("RouteTemplate");
                _RouteTemplate = value;
                ReportPropertyChanged("RouteTemplate");
                OnRouteTemplateChanged();
            }
        }
        private global::System.String _RouteTemplate;
        partial void OnRouteTemplateChanging(global::System.String value);
        partial void OnRouteTemplateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.String RoutePrefix
        {
            get
            {
                return _RoutePrefix;
            }
            set
            {
                OnRoutePrefixChanging(value);
                ReportPropertyChanging("RoutePrefix");
                _RoutePrefix = value;
                ReportPropertyChanged("RoutePrefix");
                OnRoutePrefixChanged();
            }
        }
        private global::System.String _RoutePrefix;
        partial void OnRoutePrefixChanging(global::System.String value);
        partial void OnRoutePrefixChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.String ServerRole
        {
            get
            {
                return _ServerRole;
            }
            set
            {
                OnServerRoleChanging(value);
                ReportPropertyChanging("ServerRole");
                _ServerRole = value;
                ReportPropertyChanged("ServerRole");
                OnServerRoleChanged();
            }
        }
        private global::System.String _ServerRole;
        partial void OnServerRoleChanging(global::System.String value);
        partial void OnServerRoleChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.Int32 Priority
        {
            get
            {
                return _Priority;
            }
            set
            {
                OnPriorityChanging(value);
                ReportPropertyChanging("Priority");
                _Priority = value;
                ReportPropertyChanged("Priority");
                OnPriorityChanged();
            }
        }
        private global::System.Int32 _Priority;
        partial void OnPriorityChanging(global::System.Int32 value);
        partial void OnPriorityChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTimeOffset> Created
        {
            get
            {
                return _Created;
            }
            set
            {
                OnCreatedChanging(value);
                ReportPropertyChanging("Created");
                _Created = value;
                ReportPropertyChanged("Created");
                OnCreatedChanged();
            }
        }
        private Nullable<global::System.DateTimeOffset> _Created;
        partial void OnCreatedChanging(Nullable<global::System.DateTimeOffset> value);
        partial void OnCreatedChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String CreatedBy
        {
            get
            {
                return _CreatedBy;
            }
            set
            {
                OnCreatedByChanging(value);
                ReportPropertyChanging("CreatedBy");
                _CreatedBy = value;
                ReportPropertyChanged("CreatedBy");
                OnCreatedByChanged();
            }
        }
        private global::System.String _CreatedBy;
        partial void OnCreatedByChanging(global::System.String value);
        partial void OnCreatedByChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTimeOffset> Modified
        {
            get
            {
                return _Modified;
            }
            set
            {
                OnModifiedChanging(value);
                ReportPropertyChanging("Modified");
                _Modified = value;
                ReportPropertyChanged("Modified");
                OnModifiedChanged();
            }
        }
        private Nullable<global::System.DateTimeOffset> _Modified;
        partial void OnModifiedChanging(Nullable<global::System.DateTimeOffset> value);
        partial void OnModifiedChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String ModifiedBy
        {
            get
            {
                return _ModifiedBy;
            }
            set
            {
                OnModifiedByChanging(value);
                ReportPropertyChanging("ModifiedBy");
                _ModifiedBy = value;
                ReportPropertyChanged("ModifiedBy");
                OnModifiedByChanged();
            }
        }
        private global::System.String _ModifiedBy;
        partial void OnModifiedByChanging(global::System.String value);
        partial void OnModifiedByChanged();

        #endregion

    
    }

    #endregion

    
}
