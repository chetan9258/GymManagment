using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class GetInvoiceModel
    {
        public Nullable<int> InvoiceId { get; set; }
        public string GymName { get; set; }
        public string Address { get; set; }
        public string MobileNumber { get; set; }
        public string MembershipType { get; set; }
        public Nullable<int> PaidAmt { get; set; }
        public string PaidDt { get; set; }
    }
}