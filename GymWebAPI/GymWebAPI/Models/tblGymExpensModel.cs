using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class tblGymExpensModel
    {
        public string ExpensesId { get; set; }
        public int Amount { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string ExpenseDate { get; set; }
        public string LastUpdatedBy { get; set; }
        public string SubCategory { get; set; }
        public System.DateTime LastUpdatedDt { get; set; }
    }
}