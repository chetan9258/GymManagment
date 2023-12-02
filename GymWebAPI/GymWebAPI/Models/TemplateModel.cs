using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class TemplateModel
    {
        public string Id { get; set; }
        public string TemplateType { get; set; }
        public string TemplateKey { get; set; }
        public string Template1 { get; set; }
        public bool IsActive { get; set; }
        public System.DateTime AddedDate { get; set; }
    }
}