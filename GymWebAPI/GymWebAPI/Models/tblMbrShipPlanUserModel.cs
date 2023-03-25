using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class tblMbrShipPlanUserModel
    {
        public string MbrUserId { get; set; }
        public string MbrShipId { get; set; }
        public string MbrId { get; set; }
        public int PaidAmt { get; set; }
        public string PaidBy { get; set; }
        public string CardNumber { get; set; }
        public int Disscount { get; set; }
        public string PaidDt { get; set; }
        public string Discription { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public string MembershipType { get; set; }
        public string sessionTime { get; set; }
        public Nullable<int> RemBalance { get; set; }
        public string TrainerId { get; set; }
        public Nullable<bool> IsRenewed { get; set; }
        public System.DateTime LastUpdatedDt { get; set; }
        public string LastUpdatedBy { get; set; }

    }
}