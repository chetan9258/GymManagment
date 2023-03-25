using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class MembershipGoingtoExxpiredMembersModel
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrMob { get; set; }
        public string MbrBatch { get; set; }
        public string MbrShipName { get; set; }
        public string MembershipType { get; set; }
        public Nullable<int> PaidAmt { get; set; }
        public string PaidDt { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public Nullable<int> RemBalance { get; set; }
        public Nullable<int> RemainingDays { get; set; }
    }
}