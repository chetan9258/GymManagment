using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class DashboardDataModel
    {
        public List<GetGymMembersCountsModel> countModel { get; set; }

        public List<GetSalesReportByMonthsModel> salesModel { get; set; }

        public List<GetEnquiryMembersDetailsModel> enquiryModel { get; set; }
    }
}