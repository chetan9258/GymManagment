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
    
    public partial class SP_GetAllSalaryMstDetailsByMbr_Result
    {
        public string SalMst_Id { get; set; }
        public string MbrId { get; set; }
        public string SalMonth { get; set; }
        public string SalPaidDt { get; set; }
        public string TotalSal { get; set; }
        public string PaidSal { get; set; }
        public Nullable<int> TotalLeaves { get; set; }
        public string Comment { get; set; }
    }
}
