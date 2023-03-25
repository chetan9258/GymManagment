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
    [RoutePrefix("api/GymDetails")]
    public class GymDetailsController : ApiController
    { 
        DataLayer.DataLayer _DataLayer = new DataLayer.DataLayer();

        // API For create membership plans

        [Route("CreateMemberShipPlan")]
        [HttpPost]
        public bool CreateMemberShipPlan(tblMbrShipPlanModel _plan)
        {
            if (_plan != null)
            {
                _plan.MbrShipId = Guid.NewGuid().ToString();
                _plan.LastUpdatedBy = User.Identity.GetUserId();
                _plan.LastUpdatedDt = DateTime.Now.ToString();
                _plan.Active = true;
                var result = _DataLayer.SaveMembershipPlanDL(_plan);

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("UpdateMemberShipPlan")]
        [HttpPost]
        public bool UpdateMemberShipPlan(tblMbrShipPlanModel UserProfile)
        {
            if (UserProfile != null)
            {
                List<string> _lst = new List<string>();
                _lst.Add("MbrShipName");
                _lst.Add("MbrShipAmt");
                _lst.Add("MbrShipDurationInDays");
                _lst.Add("StartDt");
                _lst.Add("EndDt");
                _lst.Add("Description");
                _lst.Add("LastUpdatedBy");
                _lst.Add("LastUpdatedDt");


                UserProfile.LastUpdatedBy= User.Identity.GetUserId();
                UserProfile.LastUpdatedDt = DateTime.Now.ToString();

                bool result = _DataLayer.UpdateMembershipPlanDL(UserProfile, _lst);

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("DeleteMembershipPlan")]
        [HttpGet]
        public bool DeleteMembershipPlan(string PlanId)
        {
            //Before Delete make sure this salary details and plan details will be deleted  
            return _DataLayer.DeleteMembershipPlanDL(PlanId);
        }

        [Route("GetAllMemberShipPlan")]
        [HttpGet]
        public List<tblMbrShipPlanModel> GetAllMemberShipPlan()
        {
            List<tblMbrShipPlanModel> _user = new List<tblMbrShipPlanModel>();
            string userId = User.Identity.GetUserId();  // Current login userid
            _user = _DataLayer.GetAllMembershipPlan(userId);
            _user = _user.OrderByDescending(m => m.MbrShipDurationInDays).ToList();
            return _user;
        }


        // Api for membership plan taken by user
        [Route("CreateMemberShipPlanUser")]
        [HttpPost]
        public bool CreateMemberShipPlanUser(tblMbrShipPlanUserModel _plan)
        {
            if (_plan != null)
            {
                _plan.MbrUserId = Guid.NewGuid().ToString();
                _plan.LastUpdatedBy = User.Identity.GetUserId();
                _plan.LastUpdatedDt = DateTime.Now;
                _plan.IsRenewed = false;

                var result = _DataLayer.SaveMembershipPlanUserDL(_plan);

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("UpdateMemberShipPlanUser")]
        [HttpPost]
        public bool UpdateMemberShipPlanUser(tblMbrShipPlanUserModel UserProfile)
        {
            if (UserProfile != null)
            {
                List<string> _lst = new List<string>();
                _lst.Add("PaidAmt");
                _lst.Add("PaidBy");
                _lst.Add("CardNumber");
                _lst.Add("Disscount");
                _lst.Add("PaidDt");
                _lst.Add("Discription");
                _lst.Add("LastUpdatedBy");
                _lst.Add("LastUpdatedDt");

                UserProfile.LastUpdatedBy = User.Identity.GetUserId();
                UserProfile.LastUpdatedDt = DateTime.Now;

                bool result = _DataLayer.UpdateMembershipPlanUserDL(UserProfile, _lst);

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("DeleteMembershipPlan")]
        [HttpGet]
        public bool DeleteMembershipPlanUser(string MbrUserId)
        {
            //Before Delete make sure this salary details and plan details will be deleted  
            return _DataLayer.DeleteMembershipPlanUserDL(MbrUserId);
        }

        [Route("GetAllMemberShipPlanUser")]
        [HttpGet]
        public List<tblMbrShipPlanUserModel> GetAllMemberShipPlanUser()
        {
            List<tblMbrShipPlanUserModel> _user = new List<tblMbrShipPlanUserModel>();
            string userId = User.Identity.GetUserId();  // Current login userid
            _user = _DataLayer.GetAllMembershipPlanUser(userId);
            return _user;
        }
         
      
        [Route("GetGymPaymentDetails")]
        [HttpGet]
        public List<GetPaymentDtlsModel> GetGymPaymentDetails()
        {
            List<GetPaymentDtlsModel> _user = new List<GetPaymentDtlsModel>();
            string userId = User.Identity.GetUserId();  // Current login userid
            _user = _DataLayer.GetGymPaymentsDetailsDL(userId);
            return _user;
        }


        // API For create membership plans

        [Route("CreateExpense")]
        [HttpPost]
        public bool CreateExpense(tblGymExpensModel _expnese)
        {
            if (_expnese != null)
            {
                _expnese.ExpensesId = Guid.NewGuid().ToString();
                _expnese.LastUpdatedBy= User.Identity.GetUserId();
                _expnese.LastUpdatedDt = DateTime.Now;

                var result = _DataLayer.SaveExpensesDL(_expnese);

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("UpdateExpense")]
        [HttpPost]
        public bool UpdateExpense(tblGymExpensModel _expense)
        {
            if (_expense != null)
            {
                List<string> _lst = new List<string>();
                _lst.Add("Amount");
                _lst.Add("Description");
                _lst.Add("ExpenseDate");
                _lst.Add("Category");
                _lst.Add("SubCategory");
                _lst.Add("LastUpdatedBy");
                _lst.Add("LastUpdatedDt");

                _expense.LastUpdatedBy= User.Identity.GetUserId();
                _expense.LastUpdatedDt = DateTime.Now; 

                tblGymExpensModel _exp = _DataLayer.GetExpenseById(_expense.ExpensesId);

                _exp.Amount = _expense.Amount;
                _exp.Description = _expense.Description;
                _exp.ExpenseDate = _expense.ExpenseDate;
                _exp.Category = _expense.Category;
                _exp.SubCategory = _expense.SubCategory;
                _exp.LastUpdatedBy = User.Identity.GetUserId();
                _exp.LastUpdatedDt = DateTime.Now;

                bool result = _DataLayer.UpdateExpensesDL(_exp, _lst);

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("DeleteExpense")]
        [HttpGet]
        public bool DeleteExpense(string expenseId)
        {
            //Before Delete make sure this salary details and plan details will be deleted  
            return _DataLayer.DeleteExpensesDL(expenseId);
        }

        [Route("GetAllExpense")]
        [HttpGet]
        public List<tblGymExpensModel> GetAllExpense()
        {
            List<tblGymExpensModel> _expense = new List<tblGymExpensModel>();
            string userId = User.Identity.GetUserId();  // Current login userid
            _expense = _DataLayer.GetExpensesDL(userId);
            return _expense;
        }

        [Route("GetGymProfile")]
        [HttpGet]
        public SP_GetGymProfileModel GetGymProfile()
        {
            SP_GetGymProfileModel _profile = new SP_GetGymProfileModel();
            string _AddedBy = User.Identity.GetUserId();
            _profile = _DataLayer.GetGymProfileByIdDL(_AddedBy);
            return _profile;
        }

        [Route("UpdateGymProfile")]
        [HttpPost]
        public bool UpdateGymProfile(tblGymProfileModel _profile)
        {
            SP_GetGymProfileModel _GetGymProfileModel = new SP_GetGymProfileModel();
            tblGymProfileModel _Gymprofile = new tblGymProfileModel();
            string _AddedBy = string.Empty;
            bool result = false;
            if (_profile != null)
            {
                _AddedBy = User.Identity.GetUserId();
                _GetGymProfileModel = _DataLayer.GetGymProfileByIdDL(_AddedBy);

                if (_GetGymProfileModel == null || _GetGymProfileModel.GymName == null)
                {

                    _profile.GymProfileId = Guid.NewGuid().ToString();
                    _profile.LastUpdatedBy = _AddedBy;

                    // Save Data
                    result = _DataLayer.SaveGymProfileDL(_profile);

                }
                else
                {
                    _Gymprofile.LastUpdatedBy = User.Identity.GetUserId();

                    List<string> _lst = new List<string>();
                    _lst.Add("FName");
                    _lst.Add("LName");
                    _lst.Add("GymName");
                    _lst.Add("EMailId");
                    _lst.Add("MemberShipStatus");
                    _lst.Add("MobileNumber");
                    _lst.Add("Website");
                    _lst.Add("Address");
                    _lst.Add("GSTNo");
                    _lst.Add("LastUpdatedBy");
                    _lst.Add("LastUpdatedDt");

                    _Gymprofile.GymProfileId = _profile.GymProfileId;
                    _Gymprofile.FName = _profile.FName;
                    _Gymprofile.LName = _profile.LName;
                    _Gymprofile.GymName = _profile.GymName;
                    _Gymprofile.EMailId = _profile.EMailId;
                    _Gymprofile.MemberShipStatus = _profile.MemberShipStatus;
                    _Gymprofile.MobileNumber = _profile.MobileNumber;
                    _Gymprofile.Website = _profile.Website;
                    _Gymprofile.Address = _profile.Address;
                    _Gymprofile.GSTNo = _profile.GSTNo;
                    _Gymprofile.LastUpdatedBy = User.Identity.GetUserId();
                    _Gymprofile.LastUpdatedDt = DateTime.Now;

                    result = _DataLayer.UpdateGymProfileDL(_Gymprofile, _lst);
                }

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("SendFeebackEmail")]
        [HttpGet]
        public bool SendFeebackEmail()
        {
            MailAddress to = new MailAddress("chetanshinde1707@gmail.com");
            MailAddress from = new MailAddress("chetan9258@gmail.com");
            MailMessage message = new MailMessage(from, to);
            message.Subject = "Good morning, Charles";
            message.Body = "Charles, Long time no talk. Would you be up for lunch in Soho on Monday? I'm paying.;";
            SmtpClient client = new SmtpClient("smtp.gmail.com", 587)
            {
                Credentials = new NetworkCredential("chetan9258@gmail.com", "Padmavati@123"),
                EnableSsl = true
                // specify whether your host accepts SSL connections
            };
            // code in brackets above needed if authentication required
            try
            {
                client.Send(message);
            }
            catch (SmtpException ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return true;
        }

        [Route("SendPromotionMessage")]
        [HttpGet]
        public bool SendPromotionMessage(string[] membersLists)
        {
             // Send Promotion Message
            return true;
        }

        [Route("GetDashboardData")]
        [HttpGet]
        public DashboardDataModel GetDashboardData()
        {
            DashboardDataModel _model = new DashboardDataModel();
            string userId = User.Identity.GetUserId();  // Current login userid
             
            _model.countModel = _DataLayer.GetGymMembersCountsDL(userId);

            _model.enquiryModel = _DataLayer.GetEnquiryMembersDetailsDL(userId);
             
            _model.salesModel = _DataLayer.GetSalesReportByMonthsDL(userId);

            return _model;
        }
    }
    }