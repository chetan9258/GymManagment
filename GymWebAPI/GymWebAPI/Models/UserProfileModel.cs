using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class UserProfileModel
    {
        public string User_Id { get; set; }
        public string MobileNo { get; set; }
        public string Name { get; set; }
        public Nullable<System.DateTime> DOB { get; set; }
        public string Address { get; set; }
        public Nullable<int> City { get; set; }
        public Nullable<int> Country { get; set; }
        public string ZipCode { get; set; }
        public string BloodGroup { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<int> State { get; set; }

        public string StateName { get; set; }
        public string CountryName { get; set; }
        public string CityName { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsLoginUser { get; set; }
        public string AddedBy { get; set; }
    }
}