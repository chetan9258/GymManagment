using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class tblSalaryModel
    { 

         
        public string sal_Id { get; set; }
        public string emp_Id { get; set; }
        public Nullable<int> Sal_Amt { get; set; }
        public string Sal_Desc { get; set; }
        public System.DateTime LastUpdatedDt { get; set; }
        public string LastUpdatedBy { get; set; }

    }
}