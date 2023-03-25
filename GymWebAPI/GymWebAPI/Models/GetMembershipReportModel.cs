using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetMembershipReportModel
    {
        public string MbrShipName { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public Nullable<int> TotalMembers { get; set; }
        public Nullable<int> TotalEarn { get; set; }
    }
}