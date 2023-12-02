using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class SP_GetSMSHistoryModel
    {
        public string MbrName { get; set; }
        public string MbrMob { get; set; }
        public Nullable<System.DateTime> SendDate { get; set; }
        public Nullable<System.DateTime> DeliveredDate { get; set; }
        public string Status { get; set; }
    }
}