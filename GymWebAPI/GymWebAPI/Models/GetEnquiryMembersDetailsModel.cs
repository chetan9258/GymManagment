using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetEnquiryMembersDetailsModel
    {
        public string MbrName { get; set; }
        public string EnquiryFor { get; set; }
        public string enquiryDate { get; set; }
        public string ExpectedDtToJoin { get; set; }
    }
}