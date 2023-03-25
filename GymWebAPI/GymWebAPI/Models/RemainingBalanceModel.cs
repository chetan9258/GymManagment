using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class RemainingBalanceModel
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrBatch { get; set; }
        public string MbrMob { get; set; }
        public string MbrShipName { get; set; }
        public Nullable<int> lastPaidAmt { get; set; }
        public string LastPaidBy { get; set; }
        public string PaidDt { get; set; }
        public Nullable<int> RemBalance { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public string MembershipType { get; set; }
        public string MbrShipId { get; set; }

    }
}