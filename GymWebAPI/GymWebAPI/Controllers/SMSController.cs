using GymWebAPI.Models;
using log4net;
using Microsoft.AspNet.Identity;
using Nelibur.ObjectMapper;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GymWebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/SMSDetails")]
    public class SMSController : ApiController
    {
        DBContext _DBContext = new DBContext(); // For all database query
        DataLayer.DataLayer _DataLayer = new DataLayer.DataLayer();
        private static readonly ILog log = LogManager.GetLogger(typeof(GymMemberController));

        [Route("GetSMSDetails")]
        [HttpGet]
        public List<SP_GetSMSHistoryModel> GetMemberDetails( )
        {
            try
            { 
                string AspNetUserId = User.Identity.GetUserId();
                return _DataLayer.GetSMSHistoryDL(AspNetUserId);
                 
            }
            catch (Exception ex)
            {
                log.Error("This is an error message");
                return null;
            }
        }
    }
}