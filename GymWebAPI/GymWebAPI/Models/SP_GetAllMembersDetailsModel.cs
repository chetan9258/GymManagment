using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class SP_GetAllMembersDetailsModel
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrType { get; set; }
        public string MbrMob { get; set; }
        public string MbrDOB { get; set; }
        public string MbrMarrialStatus { get; set; }
        public string MbrDOJ { get; set; }
        public string MbrGender { get; set; }
        
        public string MbrDOL { get; set; }
        public string MbrDOE { get; set; }
        public string MbrEmail { get; set; }
        public string MbrAddr { get; set; }
        public string MbrCity { get; set; }
        public string MbrState { get; set; }
        public string MbrPincode { get; set; }
        public string MbrMob2 { get; set; }
        public Nullable<int> MbrPTCharges { get; set; }
        public string MbrBatch { get; set; }
        public string addedDate { get; set; }
        public string MbrShipId { get; set; }
        public string MbrShipName { get; set; }
        public Nullable<int> MbrShipDurationInDays { get; set; }
        public Nullable<int> MbrShipAmt { get; set; }
        public string StartDt { get; set; }
        public string EndDt { get; set; }
        public string Description { get; set; }
        public Nullable<int> PaidAmt { get; set; }
        public string PaidBy { get; set; }
        public string PaidDt { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public string MbrUserId { get; set; }
        public string sal_Id { get; set; }
        public Nullable<int> MbrSalary { get; set; }
        public string SalDesc { get; set; }
    }
}