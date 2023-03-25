using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetGymMembersCountsModel
    {
        public string MbrType { get; set; }
        public Nullable<int> count { get; set; }
    }
}