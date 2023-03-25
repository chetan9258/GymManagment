using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class SP_GetGymProfileModel
    {
        public string GymProfileId { get; set; }
        public string GymName { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string MobileNumber { get; set; }
        public string Address { get; set; }
        public string EMailId { get; set; }
        public string MbrShipName { get; set; }
        public Nullable<int> PaidAmt { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public string mbrShipStatus { get; set; }
        public string GSTNo { get; set; }
        public string Website { get; set; }
    }
}