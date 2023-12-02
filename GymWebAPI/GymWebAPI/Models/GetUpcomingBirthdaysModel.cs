using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetUpcomingBirthdaysModel
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrType { get; set; }
        public string MbrMob { get; set; }
        public string BIRTHDAY { get; set; }
        public Nullable<decimal> AGE_NOW { get; set; }
    }
}