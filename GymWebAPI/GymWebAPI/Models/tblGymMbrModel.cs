using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class tblGymMbrModel
    {
        public string MbrId { get; set; }
        public string MbrName { get; set; }
        public string MbrType { get; set; }
        public string MbrMob { get; set; }
        public string MbrDOB { get; set; }
        public string MbrGender { get; set; }
        public string MbrDOE { get; set; } 
        public string MbrEmail { get; set; }
        public string MbrAddr { get; set; }
        public string MbrCity { get; set; }
        public string MbrState { get; set; }
        public string MbrPincode { get; set; }
        public string MbrShipId { get; set; }
        public string sal_Id { get; set; }
        public string LastUpdatedBy { get; set; }
        public string LastUpdatedDt { get; set; }
        public string MbrSalary { get; set; }
        public string SalDesc { get; set; }
        public string MbrCertification { get; set; }
        public string MbrCertificationDt { get; set; }
        public string EmpName { get; set; }
        public string MbrPlans { get; set; }
        public string MbrshipAmt { get; set; }
        public string MbrshipPaidAmt { get; set; }
        public string MbrshipDays { get; set; }
        public string MbrshipStartDt { get; set; }
        public string MbrshipEndDt { get; set; }
        public string MbrshipDesc { get; set; }
        public string MbrPaidBy { get; set; }
        public string MbrUserId { get; set; }
        public string GeneralDesc { get; set; } 
        public Nullable<bool> isDeleted { get; set; }
        public string MbrMob2 { get; set; }
        public Nullable<int> MbrPTCharges { get; set; }
        public string MbrBatch { get; set; }  
        public string PtMemberId { get; set; } 

        // To save PT details 
        public string MbrPTPlanId { get; set; }
        public string MbrPtDays { get; set; }
        public string TrainerId { get; set; }
        public string MbrPTChargesofTrainer { get; set; }
        public string MbrPTAmt { get; set; }
        public string MbrPTAmtPaidBy { get; set; }
        public string MbrPTStartDt { get; set; }
        public string MbrPTEndDt { get; set; }

        public string MbrPTDesc { get; set; }

        public string RemBalance { get; set; }



    }
}