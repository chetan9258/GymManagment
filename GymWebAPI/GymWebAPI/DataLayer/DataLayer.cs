 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nelibur.ObjectMapper;
using GymWebAPI.Models; 

namespace GymWebAPI.DataLayer
{
    public class DataLayer
    {


        #region  Code for Gym Membership

        public int UpdateUsersName(AspNetUserModel _usrProfile, List<string> _UpdateList)
        {
            using (DBContext _DBContext = new DBContext())
            {
                AspNetUser _AspNetUser = new AspNetUser();

                TinyMapper.Bind<AspNetUserModel, AspNetUser>();
                _AspNetUser = TinyMapper.Map<AspNetUser>(_usrProfile);

                return _DBContext.UpdateUsersName(_AspNetUser, _UpdateList);
            }
        }

        #region  user Details

        public List<SP_GetAllMembersDetailsModel> GetGymAllUsersDL(string _UserId)
        {
            List<SP_GetAllMembersDetailsModel> _SP_GetAllMembersDetailsModel = new List<SP_GetAllMembersDetailsModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetAllMembersDetails_Result> _TblBishiMembPersDetail = _DBContext.GetAllGymUsers(_UserId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetAllMembersDetails_Result>, List<SP_GetAllMembersDetailsModel>>();
                    _SP_GetAllMembersDetailsModel = TinyMapper.Map<List<SP_GetAllMembersDetailsModel>>(_TblBishiMembPersDetail);
                }
                else
                    _SP_GetAllMembersDetailsModel = null;

                return _SP_GetAllMembersDetailsModel;
            }
        }
         
        public bool SaveGymUserDetailsDL(tblGymMbrModel _usrProfile)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblGymMbr _TblUserProfile = new tblGymMbr();

                TinyMapper.Bind<tblGymMbrModel, tblGymMbr>();
                _TblUserProfile = TinyMapper.Map<tblGymMbr>(_usrProfile);

                return _DBContext.SaveGymUserDetails(_TblUserProfile);
            }
        }

        public bool UpdateGymUsersProfileDL(tblGymMbrModel _profile, List<string> _UpdateList)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblGymMbr _tblGymMbr = new tblGymMbr();

                TinyMapper.Bind<tblGymMbrModel, tblGymMbr>();
                _tblGymMbr = TinyMapper.Map<tblGymMbr>(_profile);

                return _DBContext.UpdateGymUsersProfile(_tblGymMbr, _UpdateList);
            }
        }

        

        public string GetGymUserIdByNameDL(string _Name)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblGymMbr mapping = _DBContext.FindByGym(c => c.MbrName == _Name);

                if (mapping != null)
                    return mapping.MbrId;
                else
                    return "";
            }
        }

        public tblGymMbrModel GetGymUserDetailsByIdDL(string userId)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblGymMbrModel _tblGymMbrModel = new tblGymMbrModel();
                tblGymMbr _TblUserProfile = _DBContext.FindByGym(c => c.MbrId == userId);

                if (_TblUserProfile != null)
                {
                    TinyMapper.Bind<tblGymMbr, tblGymMbrModel>();
                    _tblGymMbrModel = TinyMapper.Map<tblGymMbrModel>(_TblUserProfile);
                }
                else
                    _tblGymMbrModel = null;

                return _tblGymMbrModel;
            }
        }
         
        #endregion

        #region Salary Details

        public bool SaveSalaryDetailsDL(tblSalaryModel _tblSalaryModel)
        {
            using (DBContext _DBContext = new DBContext())
            {
                TblSalary _tblSalary = new TblSalary();

                TinyMapper.Bind<tblSalaryModel, TblSalary>();
                _tblSalary = TinyMapper.Map<TblSalary>(_tblSalaryModel);

                return _DBContext.SaveSalaryDetails(_tblSalary);
            }
        }

        public bool UpdateSalaryDetailsDL(tblSalaryModel _profile, List<string> _UpdateList)
        {
            using (DBContext _DBContext = new DBContext())
            {
                TblSalary _TblSalary = new TblSalary();

                TinyMapper.Bind<tblSalaryModel, TblSalary>();
                _TblSalary = TinyMapper.Map<TblSalary>(_profile);

                return _DBContext.UpdateSalaryDetails(_TblSalary, _UpdateList);
            }
        }

        public bool SaveSalaryMstDL(TblSalaryMstModel _TblSalaryMstModel)
        {
            using (DBContext _DBContext = new DBContext())
            {
                TblSalaryMst _TblSalaryMst = new TblSalaryMst();

                TinyMapper.Bind<TblSalaryMstModel, TblSalaryMst>();
                _TblSalaryMst = TinyMapper.Map<TblSalaryMst>(_TblSalaryMstModel);

                return _DBContext.SaveSalaryMst(_TblSalaryMst);
            }
        }

        public bool UpdateSalaryMstDL(TblSalaryMstModel _profile, List<string> _UpdateList)
        {
            using (DBContext _DBContext = new DBContext())
            {
                TblSalaryMst _TblSalaryMst = new TblSalaryMst();

                TinyMapper.Bind<TblSalaryMstModel, TblSalaryMst>();
                _TblSalaryMst = TinyMapper.Map<TblSalaryMst>(_profile);

                return _DBContext.UpdateSalaryMst(_TblSalaryMst, _UpdateList);
            }
        }

        public bool DeleteMembersSalaryDL(string _UserId)
        {
            using (DBContext _DBContext = new DBContext())
            {
                if (_UserId != null)
                {
                    return _DBContext.DeleteMembersSalary(_UserId);
                }
                else
                    return false;
            }
        }

        public List<GetAllSalaryMstDetailsModel> GetSalaryMstListDL(string _UserId)
        {
            List<GetAllSalaryMstDetailsModel> _TblSalaryMstModel = new List<GetAllSalaryMstDetailsModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetAllSalaryMstDetails_Result> _TblSalaryMst = _DBContext.GetSalaryMstList(_UserId);

                if (_TblSalaryMst.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetAllSalaryMstDetails_Result>, List<GetAllSalaryMstDetailsModel>>();
                    _TblSalaryMstModel = TinyMapper.Map<List<GetAllSalaryMstDetailsModel>>(_TblSalaryMst);
                }
                else
                    _TblSalaryMstModel = null;

                return _TblSalaryMstModel;
            }
        }

        public List<GetAllSalaryMstDetailsByMbrModel> GetSalaryMstListByMbrDL(string _MbrId)
        {
            List<GetAllSalaryMstDetailsByMbrModel> _TblSalaryMstModel = new List<GetAllSalaryMstDetailsByMbrModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetAllSalaryMstDetailsByMbr_Result> _TblSalaryMst = _DBContext.GetSalaryMstListByMbr(_MbrId);

                if (_TblSalaryMst.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetAllSalaryMstDetailsByMbr_Result>, List<GetAllSalaryMstDetailsByMbrModel>>();
                    _TblSalaryMstModel = TinyMapper.Map<List<GetAllSalaryMstDetailsByMbrModel>>(_TblSalaryMst);
                }
                else
                    _TblSalaryMstModel = null;

                return _TblSalaryMstModel;
            }
        }

        public TblSalaryMstModel GetMembersSalaryMstDL(string _SalMstId)
        {
            TblSalaryMstModel _TblSalaryMstModel = new TblSalaryMstModel();
            using (DBContext _DBContext = new DBContext())
            {
                TblSalaryMst _TblSalaryMst = _DBContext.GetMembersSalaryMst(_SalMstId);

                if (_TblSalaryMstModel != null)
                {
                    TinyMapper.Bind<TblSalaryMst, TblSalaryMstModel>();
                    _TblSalaryMstModel = TinyMapper.Map<TblSalaryMstModel>(_TblSalaryMst);
                }
                else
                    _TblSalaryMstModel = null;

                return _TblSalaryMstModel;
            }
        }

        #endregion

        #region Get All membership Plans

        public List<tblMbrShipPlanModel> GetAllMembershipPlan(string _UserId)
        {
            List<tblMbrShipPlanModel> _tblMbrShipPlanModel = new List<tblMbrShipPlanModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<tblMbrShipPlan> _TblBishiMembPersDetail = _DBContext.GetAllMembershipPlan(_UserId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<tblMbrShipPlan>, List<tblMbrShipPlanModel>>();
                    _tblMbrShipPlanModel = TinyMapper.Map<List<tblMbrShipPlanModel>>(_TblBishiMembPersDetail);
                }
                else
                    _tblMbrShipPlanModel = null;

                return _tblMbrShipPlanModel;
            }
        }
        public bool SaveMembershipPlanDL(tblMbrShipPlanModel _tblMbrShipPlanModel)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblMbrShipPlan _tblMbrShipPlan = new tblMbrShipPlan();

                TinyMapper.Bind<tblMbrShipPlanModel, tblMbrShipPlan>();
                _tblMbrShipPlan = TinyMapper.Map<tblMbrShipPlan>(_tblMbrShipPlanModel);

                return _DBContext.SaveMembershipPlan(_tblMbrShipPlan);
            }
        }

        public bool UpdateMembershipPlanDL(tblMbrShipPlanModel _Plan, List<string> _UpdateList)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblMbrShipPlan _tblMbrShipPlan = new tblMbrShipPlan();

                TinyMapper.Bind<tblMbrShipPlanModel, tblMbrShipPlan>();
                _tblMbrShipPlan = TinyMapper.Map<tblMbrShipPlan>(_Plan);

                return _DBContext.UpdateMembershipPlan(_tblMbrShipPlan, _UpdateList);
            }
        }

        public bool DeleteMembershipPlanDL(string _PlanId)
        {
            using (DBContext _DBContext = new DBContext())
            {
                if (_PlanId != null)
                {
                    return _DBContext.DeleteMembershipPlan(_PlanId);
                }
                else
                    return false;
            }
        }

        #endregion

        #region Get All MemberShip Plan which user takes
        public tblMbrShipPlanUserModel GetMembershipPlanUserById(string _MbrUserId,string _MembershipType)
        {
            tblMbrShipPlanUserModel _tblMbrShipPlanUserModel = new tblMbrShipPlanUserModel();
            using (DBContext _DBContext = new DBContext())
            {
                tblMbrShipPlanUser mapping = _DBContext.FindMembershipPlanUserBy(c => c.MbrUserId == _MbrUserId && c.MembershipType == _MembershipType);

                if (mapping != null)
                {
                    TinyMapper.Bind<tblMbrShipPlanUser, tblMbrShipPlanUserModel>();
                    _tblMbrShipPlanUserModel = TinyMapper.Map<tblMbrShipPlanUserModel>(mapping);
                }
                else
                    _tblMbrShipPlanUserModel = null;

                return _tblMbrShipPlanUserModel;
            }
        }
        public List<tblMbrShipPlanUserModel> GetAllMembershipPlanUser(string _UserId)
        {
            List<tblMbrShipPlanUserModel> _tblMbrShipPlanUserModel = new List<tblMbrShipPlanUserModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<tblMbrShipPlanUser> _TblBishiMembPersDetail = _DBContext.GetAllMembershipPlanUser(_UserId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<tblMbrShipPlanUser>, List<tblMbrShipPlanUserModel>>();
                    _tblMbrShipPlanUserModel = TinyMapper.Map<List<tblMbrShipPlanUserModel>>(_TblBishiMembPersDetail);
                }
                else
                    _tblMbrShipPlanUserModel = null;

                return _tblMbrShipPlanUserModel;
            }
        }
        public bool SaveMembershipPlanUserDL(tblMbrShipPlanUserModel _tblMbrShipPlanUserModel)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblMbrShipPlanUser _tblMbrShipPlanUser = new tblMbrShipPlanUser();

                TinyMapper.Bind<tblMbrShipPlanUserModel, tblMbrShipPlanUser>();
                _tblMbrShipPlanUser = TinyMapper.Map<tblMbrShipPlanUser>(_tblMbrShipPlanUserModel);

                return _DBContext.SaveMembershipPlanUser(_tblMbrShipPlanUser);
            }
        }

        public bool UpdateMembershipPlanUserDL(tblMbrShipPlanUserModel _profile, List<string> _UpdateList)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblMbrShipPlanUser _tblMbrShipPlanUser = new tblMbrShipPlanUser();

                TinyMapper.Bind<tblMbrShipPlanUserModel, tblMbrShipPlanUser>();
                _tblMbrShipPlanUser = TinyMapper.Map<tblMbrShipPlanUser>(_profile);

                return _DBContext.UpdateMembershipPlanUser(_tblMbrShipPlanUser, _UpdateList);
            }
        }

        public bool DeleteMembershipPlanUserDL(string _MbrUserId)
        {
            using (DBContext _DBContext = new DBContext())
            {
                if (_MbrUserId != null)
                {
                    return _DBContext.DeleteMembershipPlanUser(_MbrUserId);
                }
                else
                    return false;
            }
        }

        #endregion


        public List<TblMbrTypeModel> GetAllMembersTypeDL()
        {
            List<TblMbrTypeModel> _TblMbrTypeModel = new List<TblMbrTypeModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<TblMbrType> _TblMbrType = _DBContext.GetAllMembersTypes();

                if (_TblMbrType.Count() > 0)
                {
                    TinyMapper.Bind<List<TblMbrType>, List<TblMbrTypeModel>>();
                    _TblMbrTypeModel = TinyMapper.Map<List<TblMbrTypeModel>>(_TblMbrType);
                }
                else
                    _TblMbrTypeModel = null;

                return _TblMbrTypeModel;
            }
        }

        public List<GetPaymentDtlsModel> GetGymPaymentsDetailsDL(string _userId)
        {
            List<GetPaymentDtlsModel> _GetPaymentDtlsModel = new List<GetPaymentDtlsModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetPaymentDtls_Result> _TblBishiMembPersDetail = _DBContext.GetGymPaymentsDetails(_userId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetPaymentDtls_Result>, List<GetPaymentDtlsModel>>();
                    _GetPaymentDtlsModel = TinyMapper.Map<List<GetPaymentDtlsModel>>(_TblBishiMembPersDetail);
                }
                else
                    _GetPaymentDtlsModel = null;

                return _GetPaymentDtlsModel;
            }
        }


        #endregion


        #region Gym Expenses

        public tblGymExpensModel GetExpenseById(string _ExpenseId)
        {
            tblGymExpensModel _tblGymExpensModel = new tblGymExpensModel();
            using (DBContext _DBContext = new DBContext())
            {
                tblGymExpens _tblGymExpens = _DBContext.GetGymExpensesById(_ExpenseId);

                if (_tblGymExpens != null)
                {
                    TinyMapper.Bind<tblGymExpens, tblGymExpensModel>();
                    _tblGymExpensModel = TinyMapper.Map<tblGymExpensModel>(_tblGymExpens);
                }
                else
                    _tblGymExpensModel = null;

                return _tblGymExpensModel;
            }
        }
        public List<tblGymExpensModel> GetExpensesDL(string _UserId)
        {
            List<tblGymExpensModel> _tblGymExpensModel = new List<tblGymExpensModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<tblGymExpens> _tblGymExpens = _DBContext.GetGymExpenses(_UserId);

                if (_tblGymExpens.Count() > 0)
                {
                    TinyMapper.Bind<List<tblGymExpens>, List<tblGymExpensModel>>();
                    _tblGymExpensModel = TinyMapper.Map<List<tblGymExpensModel>>(_tblGymExpens);
                }
                else
                    _tblGymExpensModel = null;

                return _tblGymExpensModel;
            }
        }
        public bool SaveExpensesDL(tblGymExpensModel _tblGymExpensModel)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblGymExpens _tblGymExpens = new tblGymExpens();

                TinyMapper.Bind<tblGymExpensModel, tblGymExpens>();
                _tblGymExpens = TinyMapper.Map<tblGymExpens>(_tblGymExpensModel);

                return _DBContext.SaveExpenses(_tblGymExpens);
            }
        }

        public bool UpdateExpensesDL(tblGymExpensModel _expense, List<string> _UpdateList)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblGymExpens _tblGymExpens = new tblGymExpens();

                TinyMapper.Bind<tblGymExpensModel, tblGymExpens>();
                _tblGymExpens = TinyMapper.Map<tblGymExpens>(_expense);

                return _DBContext.UpdateExpenses(_tblGymExpens, _UpdateList);
            }
        }

        public bool DeleteExpensesDL(string _expenseId)
        {
            using (DBContext _DBContext = new DBContext())
            {
                if (_expenseId != null)
                {
                    return _DBContext.DeleteExpenses(_expenseId);
                }
                else
                    return false;
            }
        }

        #endregion

        #region Gym Profile

        public SP_GetGymProfileModel GetGymProfileByIdDL(string _ProfileId)
        {
            SP_GetGymProfileModel _tblGymProfileModel = new SP_GetGymProfileModel();
            using (DBContext _DBContext = new DBContext())
            {
                SP_GetGymProfile_Result _GetGymProfile = _DBContext.GetGymProfileById(_ProfileId);

                if (_GetGymProfile != null)
                {
                    TinyMapper.Bind<SP_GetGymProfile_Result, SP_GetGymProfileModel>();
                    _tblGymProfileModel = TinyMapper.Map<SP_GetGymProfileModel>(_GetGymProfile);
                }
                else
                    _tblGymProfileModel = null;

                return _tblGymProfileModel;
            }
        }

        public bool SaveGymProfileDL(tblGymProfileModel _tblGymProfileModel)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblGymProfile _tblGymProfile = new tblGymProfile();

                TinyMapper.Bind<tblGymProfileModel, tblGymProfile>();
                _tblGymProfile = TinyMapper.Map<tblGymProfile>(_tblGymProfileModel);

                return _DBContext.SaveGymProfiles(_tblGymProfile);
            }
        }

        public bool UpdateGymProfileDL(tblGymProfileModel _expense, List<string> _UpdateList)
        {
            using (DBContext _DBContext = new DBContext())
            {
                tblGymProfile _tblGymProfile = new tblGymProfile();

                TinyMapper.Bind<tblGymProfileModel, tblGymProfile>();
                _tblGymProfile = TinyMapper.Map<tblGymProfile>(_expense);

                return _DBContext.UpdateGymProfile(_tblGymProfile, _UpdateList);
            }
        }

        #endregion

        #region

        public List<RemainingBalanceModel> GetGymMemberRemainingBalanceDL(string _UserId)
        {
            List<RemainingBalanceModel> _GetRemainingBalanceModel = new List<RemainingBalanceModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetRemainingBalance_Result> _SP_GetRemainingBalance_Result = _DBContext.GetGymMemberRemainingBalance(_UserId);

                if (_SP_GetRemainingBalance_Result.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetRemainingBalance_Result>, List<RemainingBalanceModel>>();
                    _GetRemainingBalanceModel = TinyMapper.Map<List<RemainingBalanceModel>>(_SP_GetRemainingBalance_Result);
                }
                else
                    _GetRemainingBalanceModel = null;

                return _GetRemainingBalanceModel;
            }
        }

        #endregion


        public List<GetAllPTMembersModel> GetAllPtMembersDL(string _UserId)
        {
            List<GetAllPTMembersModel> _GetAllPTMembersModel = new List<GetAllPTMembersModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetAllPTMembers_Result> _TblBishiMembPersDetail = _DBContext.GetAllPtMembersDetails(_UserId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetAllPTMembers_Result>, List<GetAllPTMembersModel>>();
                    _GetAllPTMembersModel = TinyMapper.Map<List<GetAllPTMembersModel>>(_TblBishiMembPersDetail);
                }
                else
                    _GetAllPTMembersModel = null;

                return _GetAllPTMembersModel;
            }
        }

        public List<MembershipGoingtoExxpiredMembersModel> GetMembershipGoingtoExxpiredMembersDL(string _UserId)
        {
            List<MembershipGoingtoExxpiredMembersModel> _MembershipGoingtoExxpiredMembersModel = new List<MembershipGoingtoExxpiredMembersModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetMembershipGoingtoExxpiredMembers_Result> _TblBishiMembPersDetail = _DBContext.GetMembershipGoingtoExxpiredMembers(_UserId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetMembershipGoingtoExxpiredMembers_Result>, List<MembershipGoingtoExxpiredMembersModel>>();
                    _MembershipGoingtoExxpiredMembersModel = TinyMapper.Map<List<MembershipGoingtoExxpiredMembersModel>>(_TblBishiMembPersDetail);
                }
                else
                    _MembershipGoingtoExxpiredMembersModel = null;

                return _MembershipGoingtoExxpiredMembersModel;
            }
        }

        public List<GetGymMbrHistoryModel> GetGymMemberHistoryByIdDL(string MemberId)
        {
            List<GetGymMbrHistoryModel> _GetGymMbrHistoryModel = new List<GetGymMbrHistoryModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetGymMbrHistory_Result> _TblBishiMembPersDetail = _DBContext.GetGymMemberHistoryById(MemberId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetGymMbrHistory_Result>, List<GetGymMbrHistoryModel>>();
                    _GetGymMbrHistoryModel = TinyMapper.Map<List<GetGymMbrHistoryModel>>(_TblBishiMembPersDetail);
                }
                else
                    _GetGymMbrHistoryModel = null;

                return _GetGymMbrHistoryModel;
            }
        }

        public List<tblMbrShipPlanUserModel> GetInvoiceListDL(string _MbrId)
        {
            List<tblMbrShipPlanUserModel> _tblMbrShipPlanUserModel = new List<tblMbrShipPlanUserModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<tblMbrShipPlanUser> _TblBishiMembPersDetail = _DBContext.GetInvoiceList(_MbrId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<tblMbrShipPlanUser>, List<tblMbrShipPlanUserModel>>();
                    _tblMbrShipPlanUserModel = TinyMapper.Map<List<tblMbrShipPlanUserModel>>(_TblBishiMembPersDetail);
                }
                else
                    _tblMbrShipPlanUserModel = null;

                return _tblMbrShipPlanUserModel;
            }
        }

        public GetInvoiceModel GetInvoice(string _MbrUserId)
        {
            GetInvoiceModel _GetInvoiceModel = new GetInvoiceModel();
            using (DBContext _DBContext = new DBContext())
            {
                SP_GetInvoice_Result _TblBishiMembPersDetail = _DBContext.GetInvoice(_MbrUserId);

                if (_TblBishiMembPersDetail != null)
                {
                    TinyMapper.Bind<SP_GetInvoice_Result, GetInvoiceModel>();
                    _GetInvoiceModel = TinyMapper.Map<GetInvoiceModel>(_TblBishiMembPersDetail);
                }
                else
                    _GetInvoiceModel = null;

                return _GetInvoiceModel;
            }
        }


        #region Gym Reports

        public List<GetMemberYearlyReportModel> GetMemberYearlyReportDL(string _MbrId)
        {
            List<GetMemberYearlyReportModel> _GetMemberYearlyReportModel = new List<GetMemberYearlyReportModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetMemberYeayrlyReport_Result> _TblBishiMembPersDetail = _DBContext.GetMemberYearlyReport(_MbrId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetMemberYeayrlyReport_Result>, List<GetMemberYearlyReportModel>>();
                    _GetMemberYearlyReportModel = TinyMapper.Map<List<GetMemberYearlyReportModel>>(_TblBishiMembPersDetail);
                }
                else
                    _GetMemberYearlyReportModel = null;

                return _GetMemberYearlyReportModel;
            }
        }

        public List<GetMembershipReportModel> GetMembershipReportDL(string _UserId)
        {
            List<GetMembershipReportModel> _GetMembershipReportModel = new List<GetMembershipReportModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetMembershipReport_Result> _SP_GetMembershipReport_Result = _DBContext.GetMembershipReport(_UserId);

                if (_SP_GetMembershipReport_Result.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetMembershipReport_Result>, List<GetMembershipReportModel>>();
                    _GetMembershipReportModel = TinyMapper.Map<List<GetMembershipReportModel>>(_SP_GetMembershipReport_Result);
                }
                else
                    _GetMembershipReportModel = null;

                return _GetMembershipReportModel;
            }
        }

        public List<GetPTReportModel> GetPTReportDL(string _UserId)
        {
            List<GetPTReportModel> _GetPTReportModel = new List<GetPTReportModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetPTReport_Result> _SP_GetPTReport_Result = _DBContext.GetPTReport(_UserId);

                if (_SP_GetPTReport_Result.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetPTReport_Result>, List<GetPTReportModel>>();
                    _GetPTReportModel = TinyMapper.Map<List<GetPTReportModel>>(_SP_GetPTReport_Result);
                }
                else
                    _GetPTReportModel = null;

                return _GetPTReportModel;
            }
        }

        public List<GetSummaryReportModel> GetSummaryReportDL(string _UserId)
        {
            List<GetSummaryReportModel> _GetSummaryReportModel = new List<GetSummaryReportModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetSummaryReport_Result> _SP_GetSummaryReport_Result = _DBContext.GetSummaryReport(_UserId);

                if (_SP_GetSummaryReport_Result.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetSummaryReport_Result>, List<GetSummaryReportModel>>();
                    _GetSummaryReportModel = TinyMapper.Map<List<GetSummaryReportModel>>(_SP_GetSummaryReport_Result);
                }
                else
                    _GetSummaryReportModel = null;

                return _GetSummaryReportModel;
            }
        }

        #endregion


        #region  Dashboard Data

        public List<GetGymMembersCountsModel> GetGymMembersCountsDL(string _UserId)
        {
            List<GetGymMembersCountsModel> _GetGymMembersCountsModel = new List<GetGymMembersCountsModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetGymMembersCounts_Result> _TblBishiMembPersDetail = _DBContext.GetGymMembersCounts(_UserId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetGymMembersCounts_Result>, List<GetGymMembersCountsModel>>();
                    _GetGymMembersCountsModel = TinyMapper.Map<List<GetGymMembersCountsModel>>(_TblBishiMembPersDetail);
                }
                else
                    _GetGymMembersCountsModel = null;

                return _GetGymMembersCountsModel;
            }
        }

        public List<GetSalesReportByMonthsModel> GetSalesReportByMonthsDL(string _UserId)
        {
            List<GetSalesReportByMonthsModel> _GetSalesReportByMonthsModel = new List<GetSalesReportByMonthsModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetSalesReportByMonths_Result> _TblBishiMembPersDetail = _DBContext.GetSalesReportByMonths(_UserId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetSalesReportByMonths_Result>, List<GetSalesReportByMonthsModel>>();
                    _GetSalesReportByMonthsModel = TinyMapper.Map<List<GetSalesReportByMonthsModel>>(_TblBishiMembPersDetail);
                }
                else
                    _GetSalesReportByMonthsModel = null;

                return _GetSalesReportByMonthsModel;
            }
        }

        public List<GetEnquiryMembersDetailsModel> GetEnquiryMembersDetailsDL(string _UserId)
        {
            List<GetEnquiryMembersDetailsModel> _GetEnquiryMembersDetailsModel = new List<GetEnquiryMembersDetailsModel>();
            using (DBContext _DBContext = new DBContext())
            {
                List<SP_GetEnquiryMembersDetails_Result> _TblBishiMembPersDetail = _DBContext.GetEnquiryMembersDetails(_UserId);

                if (_TblBishiMembPersDetail.Count() > 0)
                {
                    TinyMapper.Bind<List<SP_GetEnquiryMembersDetails_Result>, List<GetEnquiryMembersDetailsModel>>();
                    _GetEnquiryMembersDetailsModel = TinyMapper.Map<List<GetEnquiryMembersDetailsModel>>(_TblBishiMembPersDetail);
                }
                else
                    _GetEnquiryMembersDetailsModel = null;

                return _GetEnquiryMembersDetailsModel;
            }
        }

        #endregion
    }
}