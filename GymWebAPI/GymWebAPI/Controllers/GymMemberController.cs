using GymWebAPI.Models;
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
    //[DisableCorsAttribute()]
    [RoutePrefix("api/Member")]
    public class GymMemberController : ApiController
    {

        DBContext _DBContext = new DBContext(); // For all database query
        DataLayer.DataLayer _DataLayer = new DataLayer.DataLayer();

        [Route("CreateMember")]
        [HttpPost]
        public bool createMember(tblGymMbrModel UserProfile)
        {
            bool result = false;

            if (UserProfile != null)
            {
                UserProfile.LastUpdatedBy = User.Identity.GetUserId();  // Current login userid

                if (UserProfile.MbrType != "PT")
                {
                    UserProfile.MbrId = Guid.NewGuid().ToString();
                    UserProfile.LastUpdatedDt = DateTime.Now.ToString();

                    UserProfile.isDeleted = false;
                    result = _DataLayer.SaveGymUserDetailsDL(UserProfile);
                }

                if (UserProfile.MbrType != "Enquiry" && UserProfile.MbrType != "GymMember" && UserProfile.MbrType != "PT") // for gym user
                {
                    tblSalaryModel _Salary = new tblSalaryModel();
                    _Salary.sal_Id = Guid.NewGuid().ToString();
                    _Salary.Sal_Amt = string.IsNullOrEmpty(UserProfile.MbrSalary) ? 0 : int.Parse(UserProfile.MbrSalary);
                    _Salary.Sal_Desc = UserProfile.SalDesc;
                    _Salary.emp_Id = UserProfile.MbrId;
                    _Salary.LastUpdatedDt = DateTime.Now;
                    _Salary.LastUpdatedBy = User.Identity.GetUserId();

                    // Add Salary for the GymMember
                    _DataLayer.SaveSalaryDetailsDL(_Salary);
                }

                if (UserProfile.MbrType == "GymMember" || UserProfile.MbrType == "Trainer" || UserProfile.MbrType == "FloorManager") // Add MemberShip Details
                {
                    if (!string.IsNullOrEmpty(UserProfile.MbrPlans))
                    {
                        tblMbrShipPlanUserModel _Plan = new tblMbrShipPlanUserModel();

                        _Plan.MbrId = UserProfile.MbrId; // Member Id Id
                        _Plan.MembershipType = "GymMembership";
                        _Plan.Discription = UserProfile.MbrshipDesc;
                        _Plan.MbrshipEndDt = UserProfile.MbrshipEndDt;
                        _Plan.MbrShipId = UserProfile.MbrPlans; // MemberShip Plan Id which he taken
                        _Plan.MbrshipStartDt = UserProfile.MbrshipStartDt;
                        _Plan.MbrUserId = Guid.NewGuid().ToString();
                        _Plan.PaidAmt = int.Parse(UserProfile.MbrshipPaidAmt);
                        _Plan.PaidDt = DateTime.Now.ToString();
                        _Plan.PaidBy = UserProfile.MbrPaidBy;
                        _Plan.RemBalance = string.IsNullOrEmpty(UserProfile.RemBalance) ? 0 : int.Parse(UserProfile.RemBalance);
                        _Plan.Disscount = 0;
                        _Plan.LastUpdatedDt = DateTime.Now;
                        _Plan.LastUpdatedBy = User.Identity.GetUserId();

                        // Add Gym plan 
                        _DataLayer.SaveMembershipPlanUserDL(_Plan);
                        result = true;
                    }
                }
                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("UpdateMember")]
        [HttpPost]
        public bool UpdateMember(tblGymMbrModel UserProfile)
        {
            if (UserProfile != null)
            {
                List<string> _lst = new List<string>();

                _lst.Add("MbrName");
                _lst.Add("MbrType");
                _lst.Add("MbrMob");
                _lst.Add("MbrDOB");
                _lst.Add("MbrGender");
                _lst.Add("MbrMarrialStatus");
                _lst.Add("MbrDOE");
                _lst.Add("MbrEmail");
                _lst.Add("MbrAddr");
                _lst.Add("MbrCity");
                _lst.Add("MbrState");
                _lst.Add("MbrPincode");
                _lst.Add("MbrPTCharges");
                _lst.Add("MbrBatch");
                _lst.Add("LastUpdatedDt");
                _lst.Add("LastUpdatedBy");

                UserProfile.LastUpdatedDt = DateTime.Now.ToString();
                UserProfile.LastUpdatedBy = User.Identity.GetUserId();

                bool result = _DataLayer.UpdateGymUsersProfileDL(UserProfile, _lst);

                if (UserProfile.MbrType != "GymMember" && result) // for gym user
                {
                    tblSalaryModel _tblSalaryModel = new tblSalaryModel();
                    List<string> _lstSalary = new List<string>();
                    _lstSalary.Add("Sal_Amt");
                    _lstSalary.Add("Sal_Desc");
                    _lstSalary.Add("LastUpdatedDt");
                    _lstSalary.Add("LastUpdatedBy");

                    _tblSalaryModel.sal_Id = UserProfile.sal_Id;
                    _tblSalaryModel.Sal_Desc = UserProfile.SalDesc;
                    _tblSalaryModel.Sal_Amt = !string.IsNullOrEmpty(UserProfile.MbrSalary) ? int.Parse(UserProfile.MbrSalary) : 0;
                    _tblSalaryModel.LastUpdatedDt = DateTime.Now;
                    _tblSalaryModel.LastUpdatedBy = User.Identity.GetUserId();

                    _DataLayer.UpdateSalaryDetailsDL(_tblSalaryModel, _lstSalary);
                }

                if (result)
                {
                    if (!string.IsNullOrEmpty(UserProfile.MbrUserId))
                    {

                        List<string> _lstPlan = new List<string>();

                        _lstPlan.Add("MbrshipStartDt");
                        _lstPlan.Add("MbrshipEndDt");
                        _lstPlan.Add("PaidAmt");
                        _lstPlan.Add("PaidBy");
                        _lstPlan.Add("PaidDt");
                        _lstPlan.Add("Discription");
                        _lstPlan.Add("MbrShipId");
                        _lstPlan.Add("RemBalance");
                        _lstPlan.Add("LastUpdatedDt");
                        _lstPlan.Add("LastUpdatedBy");


                        // Membership Update
                        tblMbrShipPlanUserModel _tblMbrShipPlanUserModel = _DataLayer.GetMembershipPlanUserById(UserProfile.MbrUserId, "GymMembership");
                        if (_tblMbrShipPlanUserModel != null)
                        {
                            _tblMbrShipPlanUserModel.MbrshipEndDt = UserProfile.MbrshipEndDt;
                            _tblMbrShipPlanUserModel.MbrshipStartDt = UserProfile.MbrshipStartDt;
                            _tblMbrShipPlanUserModel.PaidAmt = int.Parse(UserProfile.MbrshipPaidAmt);
                            _tblMbrShipPlanUserModel.PaidBy = UserProfile.MbrPaidBy;
                            _tblMbrShipPlanUserModel.Discription = UserProfile.MbrshipDesc;
                            _tblMbrShipPlanUserModel.MbrShipId = UserProfile.MbrPlans; // MemberShip Plan Id which he taken 
                            _tblMbrShipPlanUserModel.PaidAmt = int.Parse(UserProfile.MbrshipPaidAmt);
                            _tblMbrShipPlanUserModel.RemBalance = string.IsNullOrEmpty(UserProfile.RemBalance) ? 0 : int.Parse(UserProfile.RemBalance);
                            _tblMbrShipPlanUserModel.LastUpdatedDt = DateTime.Now;
                            _tblMbrShipPlanUserModel.LastUpdatedBy = User.Identity.GetUserId();

                            _DataLayer.UpdateMembershipPlanUserDL(_tblMbrShipPlanUserModel, _lstPlan);
                        }
                    }
                    else
                    {
                        if (!string.IsNullOrEmpty(UserProfile.MbrPlans))
                        {
                            tblMbrShipPlanUserModel _Plan = new tblMbrShipPlanUserModel();

                            _Plan.MbrId = UserProfile.MbrId; // Member Id Id
                            _Plan.MembershipType = "GymMembership";
                            _Plan.Discription = UserProfile.MbrshipDesc;
                            _Plan.MbrshipEndDt = UserProfile.MbrshipEndDt;
                            _Plan.MbrShipId = UserProfile.MbrPlans; // MemberShip Plan Id which he taken
                            _Plan.MbrshipStartDt = UserProfile.MbrshipStartDt;
                            _Plan.MbrUserId = Guid.NewGuid().ToString();
                            _Plan.PaidAmt = int.Parse(UserProfile.MbrshipPaidAmt);
                            _Plan.PaidDt = DateTime.Now.ToString();
                            _Plan.PaidBy = UserProfile.MbrPaidBy;
                            _Plan.RemBalance = string.IsNullOrEmpty(UserProfile.RemBalance) ? 0 : int.Parse(UserProfile.RemBalance);
                            _Plan.Disscount = 0;
                            _Plan.LastUpdatedDt = DateTime.Now;
                            _Plan.LastUpdatedBy = User.Identity.GetUserId();

                            // Add Gym plan 
                            _DataLayer.SaveMembershipPlanUserDL(_Plan);
                        }
                    }

                }

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("DeleteMember")]
        [HttpGet]
        public bool DeleteMember(string UserId)
        {
            List<string> _lst = new List<string>();
            tblGymMbrModel UserProfile = new tblGymMbrModel();
            UserProfile = _DataLayer.GetGymUserDetailsByIdDL(UserId);

            _lst.Add("isDeleted");
            _lst.Add("LastUpdatedDt");
            _lst.Add("LastUpdatedBy");



            if (UserProfile != null)
            {
                UserProfile.isDeleted = true;
                UserProfile.LastUpdatedDt = DateTime.Now.ToString();
                UserProfile.LastUpdatedBy = User.Identity.GetUserId();

                return _DataLayer.UpdateGymUsersProfileDL(UserProfile, _lst);
            }
            else
                return false;
        }

        [Route("GetAllMembers")]
        [HttpGet]
        public List<SP_GetAllMembersDetailsModel> GetAllMembers()
        {
            ResponseModel _result = new ResponseModel();

            List<SP_GetAllMembersDetailsModel> _user = new List<SP_GetAllMembersDetailsModel>();
            string userId = User.Identity.GetUserId();  // Current login userid
            _user = _DataLayer.GetGymAllUsersDL(userId);

            //if(_user != null && _user.Count() > 0)
            //{
            //    _result.IsSuccess = true;
            //    _result.data = JsonConvert.DeserializeObject(_user.ToString()) ;
            //}
            //else
            //{
            //    _result.IsSuccess = true;
            //    _result.Message = "No data available";
            //} 

            return _user;
        }

        [Route("GetMemberDetails")]
        [HttpGet]
        public tblGymMbrModel GetMemberDetails(string UserId)
        {
            tblGymMbrModel _user = new tblGymMbrModel();
            _user = _DataLayer.GetGymUserDetailsByIdDL(UserId);
            return _user;
        }

        [Route("GetGymMembersTypes")]
        [HttpGet]
        public List<TblMbrTypeModel> GetGymMembersTypes()
        {
            List<TblMbrTypeModel> _types = new List<TblMbrTypeModel>();
            _types = _DataLayer.GetAllMembersTypeDL();
            return _types;
        }

        [Route("GetGymMemberRemainingBalance")]
        [HttpGet]
        public List<RemainingBalanceModel> GetGymMemberRemainingBalance()
        {
            List<RemainingBalanceModel> _user = new List<RemainingBalanceModel>();
            string userId = User.Identity.GetUserId();  // Current login userid
            _user = _DataLayer.GetGymMemberRemainingBalanceDL(userId);
            return _user;
        }


        [Route("GetAllPtMembers")]
        [HttpGet]
        public List<GetAllPTMembersModel> GetAllPtMembers()
        {

            List<GetAllPTMembersModel> _user = new List<GetAllPTMembersModel>();
            string userId = User.Identity.GetUserId();  // Current login userid
            _user = _DataLayer.GetAllPtMembersDL(userId);

            return _user;
        }

        [Route("GetMembershipGoingtoExxpiredMembers")]
        [HttpGet]
        public List<MembershipGoingtoExxpiredMembersModel> GetMembershipGoingtoExxpiredMembers()
        {

            List<MembershipGoingtoExxpiredMembersModel> _user = new List<MembershipGoingtoExxpiredMembersModel>();
            string userId = User.Identity.GetUserId();  // Current login userid
            _user = _DataLayer.GetMembershipGoingtoExxpiredMembersDL(userId);

            return _user;
        }

        [Route("GetGymMemberHistoryById")]
        [HttpGet]
        public List<GetGymMbrHistoryModel> GetGymMemberHistoryById(string MemberId)
        {
            List<GetGymMbrHistoryModel> _user = new List<GetGymMbrHistoryModel>();
            _user = _DataLayer.GetGymMemberHistoryByIdDL(MemberId);

            return _user;
        }

        [Route("GetInvoiceList")]
        [HttpGet]
        public List<tblMbrShipPlanUserModel> GetInvoiceList(string MbrId)
        {
            ResponseModel _result = new ResponseModel();

            List<tblMbrShipPlanUserModel> _user = new List<tblMbrShipPlanUserModel>();
            _user = _DataLayer.GetInvoiceListDL(MbrId);

            return _user;
        }

        [Route("GetInvoice")]
        [HttpGet]
        public GetInvoiceModel GetInvoice(string MbrUserId)
        {
            GetInvoiceModel _user = new GetInvoiceModel();
            _user = _DataLayer.GetInvoice(MbrUserId);

            return _user;
        }

        [Route("SaveSalaryMst")]
        [HttpPost]
        public bool SaveSalaryMst(TblSalaryMstModel _sal)
        {
            if (_sal != null)
            {
                _sal.SalMst_Id = Guid.NewGuid().ToString();
                _sal.LastUpdatedBy = User.Identity.GetUserId();
                _sal.LastUpdatedDt = DateTime.Now.ToString();

                var result = _DataLayer.SaveSalaryMstDL(_sal);

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("UpdateSalaryMst")]
        [HttpPost]
        public bool UpdateSalaryMst(TblSalaryMstModel _sal)
        {
            if (_sal != null)
            {
                List<string> _lst = new List<string>();
                _lst.Add("SalMonth");
                _lst.Add("SalPaidDt");
                _lst.Add("TotalSal");
                _lst.Add("PaidSal");
                _lst.Add("TotalLeaves");
                _lst.Add("Comment");
                _lst.Add("LastUpdatedBy");
                _lst.Add("LastUpdatedDt");
                   
                TblSalaryMstModel _exp = _DataLayer.GetMembersSalaryMstDL(_sal.SalMst_Id);

                _exp.SalMonth = _sal.SalMonth;
                _exp.SalPaidDt = _sal.SalPaidDt;
                _exp.TotalSal = _sal.TotalSal;
                _exp.PaidSal = _sal.PaidSal;
                _exp.TotalLeaves = _sal.TotalLeaves;
                _exp.Comment = _sal.Comment;
                _exp.LastUpdatedBy = User.Identity.GetUserId();
                _exp.LastUpdatedDt = DateTime.Now.ToString();

                bool result = _DataLayer.UpdateSalaryMstDL(_exp, _lst);

                return result;
            }
            else
            {
                return false;
            }
        }

        [Route("GetSalaryMstList")]
        [HttpGet]
        public List<GetAllSalaryMstDetailsModel> GetSalaryMstList()
        {
            ResponseModel _result = new ResponseModel();
            string _userId = User.Identity.GetUserId();
            List<GetAllSalaryMstDetailsModel> _user = new List<GetAllSalaryMstDetailsModel>();
            _user = _DataLayer.GetSalaryMstListDL(_userId);

            return _user;
        }

        [Route("GetSalaryMstListByMbr")]
        [HttpGet]
        public List<GetAllSalaryMstDetailsByMbrModel> GetSalaryMstListByMbr(string MbrId)
        { 
            List<GetAllSalaryMstDetailsByMbrModel> _user = new List<GetAllSalaryMstDetailsByMbrModel>();
            _user = _DataLayer.GetSalaryMstListByMbrDL(MbrId);

            return _user;
        }

        [Route("DeleteMembersSalaryMst")]
        [HttpGet]
        public bool DeleteMembersSalaryMst(string _SalId)
        {
            //Before Delete make sure this salary details and plan details will be deleted  
            return _DataLayer.DeleteMembersSalaryDL(_SalId);
        }
    }
}