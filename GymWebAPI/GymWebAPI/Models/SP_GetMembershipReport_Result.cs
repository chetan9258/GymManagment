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
    
    public partial class SP_GetMembershipReport_Result
    {
        public string MbrShipName { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public Nullable<int> TotalMembers { get; set; }
        public Nullable<int> TotalEarn { get; set; }
    }
}
