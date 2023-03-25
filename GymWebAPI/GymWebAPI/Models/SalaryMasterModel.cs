using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class SalaryMasterModel
    {
        public string salMst_Id { get; set; }
        public string emp_Id { get; set; }
        public string salMst_Date { get; set; }
        public Nullable<int> emp_leaves { get; set; }
        public string emp_LeaveDesc { get; set; }
        public Nullable<int> emp_SalaryPaid { get; set; }
        public string Last_ModifiedDate { get; set; }
    }
}