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
    
    public partial class SP_GetSMSHistory_Result
    {
        public string MbrName { get; set; }
        public string MbrMob { get; set; }
        public Nullable<System.DateTime> SendDate { get; set; }
        public Nullable<System.DateTime> DeliveredDate { get; set; }
        public string Status { get; set; }
    }
}
