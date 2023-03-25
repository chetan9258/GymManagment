using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetAllPTMembersModel
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrMob { get; set; }
        public string MbrType { get; set; }
        public string MbrUserId { get; set; }
        public string MbrShipId { get; set; }
        public string TrainerId { get; set; }
        public Nullable<int> PaidAmt { get; set; }
        public string PaidBy { get; set; }
        public string PaidDt { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
    }
}