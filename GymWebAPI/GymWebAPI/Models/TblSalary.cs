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
    
    public partial class TblSalary
    {
        public string sal_Id { get; set; }
        public string emp_Id { get; set; }
        public Nullable<int> Sal_Amt { get; set; }
        public string Sal_Desc { get; set; }
        public System.DateTime LastUpdatedDt { get; set; }
        public string LastUpdatedBy { get; set; }
    }
}
