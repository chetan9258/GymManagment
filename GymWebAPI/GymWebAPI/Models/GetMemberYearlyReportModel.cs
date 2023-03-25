using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetMemberYearlyReportModel
    {
         
        public string MbrName { get; set; }
        public string MbrMob { get; set; }
        public string MbrDOB { get; set; }
        public string MbrMarrialStatus { get; set; }
        public string MbrEmail { get; set; }
        public string MbrAddr { get; set; }
        public string MbrCity { get; set; }
        public string MbrState { get; set; }
        public string MbrPincode { get; set; }
        public Nullable<int> MbrPTCharges { get; set; }
        public string MbrBatch { get; set; }
        public string GeneralDesc { get; set; }
        public string MbrGender { get; set; }
        public string MbrShipName { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public Nullable<int> PaidAmt { get; set; }
        public string PaidDt { get; set; }
        public string PaidBy { get; set; }
        public string MembershipType { get; set; }
        public Nullable<int> RemBalance { get; set; }
    }
}