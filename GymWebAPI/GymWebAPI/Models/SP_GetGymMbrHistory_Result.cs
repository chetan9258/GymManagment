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
    
    public partial class SP_GetGymMbrHistory_Result
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrBatch { get; set; }
        public string MbrShipName { get; set; }
        public Nullable<int> MbrShipAmt { get; set; }
        public Nullable<int> PaidAmt { get; set; }
        public string PaidBy { get; set; }
        public string PaidDt { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public string MembershipType { get; set; }
    }
}