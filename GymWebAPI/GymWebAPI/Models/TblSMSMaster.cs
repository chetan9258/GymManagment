//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GymWebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class TblSMSMaster
    {
        public string Id { get; set; }
        public string AspNetUsersId { get; set; }
        public int AllocatedSMS { get; set; }
        public int UsedSMS { get; set; }
        public int CarryForwardSMS { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
    }
}
