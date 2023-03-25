using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetSalesReportByMonthsModel
    {
        public string Months { get; set; }
        public Nullable<int> Amt { get; set; }
    }
}