using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class TblSMSHistoryModel
    {
        public string Id { get; set; }
        public string MbrId { get; set; }
        public string Status { get; set; }
        public Nullable<System.DateTime> SendDate { get; set; }
        public Nullable<System.DateTime> DeliveredDate { get; set; }
    }
}