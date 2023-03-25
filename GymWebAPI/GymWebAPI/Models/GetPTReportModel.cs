using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetPTReportModel
    {
        public string MbrName { get; set; }
        public Nullable<int> TotalAmount { get; set; }
    }
}