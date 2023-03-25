using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetAllSalaryMstDetailsModel
    {
        public string MbrName { get; set; }
        public string MbrType { get; set; }
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