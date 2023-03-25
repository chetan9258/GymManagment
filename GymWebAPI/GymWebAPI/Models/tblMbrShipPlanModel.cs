using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class tblMbrShipPlanModel
    {
        public string MbrShipId { get; set; }
        public string MbrShipName { get; set; }
        public int MbrShipAmt { get; set; }
        public int MbrShipDurationInDays { get; set; }
        public bool Active { get; set; }
        public string LastUpdatedDt { get; set; }
        public string StartDt { get; set; }
        public string EndDt { get; set; }
        public string Description { get; set; }
        public string LastUpdatedBy { get; set; }
        public string PlanType { get; set; }
    }
}