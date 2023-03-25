using GymWebAPI.Models;
using Microsoft.AspNet.Identity;
using Nelibur.ObjectMapper;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;


namespace GymWebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/GymReport")]
    public class GymReportController : ApiController
    {

        DataLayer.DataLayer _DataLayer = new DataLayer.DataLayer();


        [Route("GetMemberYearlyReport")]
        [HttpGet]
        public List<GetMemberYearlyReportModel> GetMemberYearlyReport(string MbrId)
        { 
            return _DataLayer.GetMemberYearlyReportDL(MbrId);
        }

        [Route("GetMembershipReport")]
        [HttpGet]
        public List<GetMembershipReportModel> GetMembershipReport()
        {
            string _userId = User.Identity.GetUserId();
            return _DataLayer.GetMembershipReportDL(_userId);
        }

        [Route("GetPTReport")]
        [HttpGet]
        public List<GetPTReportModel> GetPTReport()
        {
            string _userId = User.Identity.GetUserId();

            return _DataLayer.GetPTReportDL(_userId);
        }

        [Route("GetSummaryReport")]
        [HttpGet]
        public List<GetSummaryReportModel> GetSummaryReport()
        {
            string _userId = User.Identity.GetUserId();

            return _DataLayer.GetSummaryReportDL(_userId);
        }
    }
}