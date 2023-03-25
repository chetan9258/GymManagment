using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GymWebAPI.Models
{
    public class ResponseModel
    {
        public bool IsSuccess { get; set; } = false;
        public string data { get; set; } 
        public string Message { get; set; }

    }
}