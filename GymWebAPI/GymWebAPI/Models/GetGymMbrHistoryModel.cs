using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetGymMbrHistoryModel
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrBatch { get; set; }
        public string MbrShipName { get; set; }
        public Nullable<int> MbrShipAmt { get; set; }
        public Nullable<int> PaidAmt { get; set; }
        public string PaidBy { get; set; }
        public string PaidDt { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public string MembershipType { get; set; }
    }
}