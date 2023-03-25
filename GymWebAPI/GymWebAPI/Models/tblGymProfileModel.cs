using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class tblGymProfileModel
    {
        public string GymProfileId { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string GymName { get; set; }
        public string EMailId { get; set; }
        public string GymMemberShipPlanName { get; set; }
        public string StartDt { get; set; }
        public string ExpiredDt { get; set; }
        public string AmtPaid { get; set; } 
        public string MemberShipStatus { get; set; }
        public string MobileNumber { get; set; }
        public string Website { get; set; }
        public string Address { get; set; }
        public string GSTNo { get; set; }
        public string LastUpdatedBy { get; set; }
        public System.DateTime LastUpdatedDt { get; set; }
    }
}