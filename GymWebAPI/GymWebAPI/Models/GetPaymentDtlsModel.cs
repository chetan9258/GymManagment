using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetPaymentDtlsModel
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrType { get; set; }
        public string MbrShipName { get; set; }
        public int MbrShipAmt { get; set; }
        public int MbrShipDurationInDays { get; set; }
        public int MbrShipAmt1 { get; set; }
        public int PaidAmt { get; set; }
        public string PaidBy { get; set; }
        public string PaidDt { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public string MembershipType { get; set; }
    }
}