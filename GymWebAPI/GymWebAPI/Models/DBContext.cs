using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Linq.Expressions;

namespace GymWebAPI.Models
{
    public class DBContext : IDisposable
    {
        public int UpdateUsersName(AspNetUser _AspNetUser, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.AspNetUsers.Attach(_AspNetUser);
                var entry = DbContext.Entry(_AspNetUser);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    return DbContext.SaveChanges();
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return 0;
                }
            }
        }


        #region  user Details
        public bool SaveGymUserDetails(tblGymMbr user)
        {
            bool result = false;
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblGymMbrs.Add(user);
                DbContext.SaveChanges();
                result = true;
            }
            return result;
        }

        public bool UpdateGymUsersProfile(tblGymMbr _user, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblGymMbrs.Attach(_user);
                var entry = DbContext.Entry(_user);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    DbContext.SaveChanges();
                    return true;
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return false;
                }
            }
        }

        public tblGymMbr FindByGym(Expression<Func<tblGymMbr, bool>> predicate)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.tblGymMbrs.Where(predicate).FirstOrDefault();
            }
        }

        public bool DeleteGymUser(string userId)
        {
            bool result = false;
            try
            {
                using (GymDBEntities DbContext = new GymDBEntities())
                {
                    tblGymMbr user = DbContext.tblGymMbrs.Where(m => m.MbrId == userId).First();

                    // Delete plan 
                    tblMbrShipPlanUser _plan = DbContext.tblMbrShipPlanUsers.Where(m => m.MbrShipId == user.MbrShipId).First();
                    DbContext.tblMbrShipPlanUsers.Remove(_plan);
                    //Delete Salary 
                    tblGymMbr _gymMbr = DbContext.tblGymMbrs.Where(m => m.MbrId == user.MbrId).First();
                    DbContext.tblGymMbrs.Remove(_gymMbr);
                    //Delete user
                    DbContext.tblGymMbrs.Remove(user);

                    DbContext.SaveChanges();
                    result = true;
                }
                return result;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return result;
            }
        }

        public tblGymMbrModel ValidateGymUser(string mobileNo, string password)
        {
            tblGymMbrModel _user = new tblGymMbrModel();
            try
            {
                using (GymDBEntities context = new GymDBEntities())
                {
                    var result = context.tblGymMbrs.Where(m => m.MbrMob == mobileNo).ToList();

                    if (result != null && result.Count() > 0)
                    {
                        _user.MbrId = result[0].MbrId;
                        _user.MbrName = result[0].MbrName;
                        _user.MbrMob = result[0].MbrMob;
                    }
                    else
                    {
                        _user = null;
                    }

                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }

            return _user;
        }

        public int UpdateGymUsersName(AspNetUser _AspNetUser, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.AspNetUsers.Attach(_AspNetUser);
                var entry = DbContext.Entry(_AspNetUser);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    return DbContext.SaveChanges();
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return 0;
                }
            }
        }

        public List<SP_GetAllMembersDetails_Result> GetAllGymUsers(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                //return DbContext.tblGymMbrs.Where(m => m.AddedBy == _UserId || m.AddedBy == null).ToList();
                return DbContext.SP_GetAllMembersDetails(_UserId).ToList();
            }
        }

        #endregion

        #region Salary Details

        public bool SaveSalaryDetails(TblSalary _salary)
        {
            bool result = false;
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.TblSalaries.Add(_salary);
                DbContext.SaveChanges();
                result = true;
            }
            return result;
        }

        public bool UpdateSalaryDetails(TblSalary _salary, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.TblSalaries.Attach(_salary);
                var entry = DbContext.Entry(_salary);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    DbContext.SaveChanges();
                    return true;
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return false;
                }
            }
        }

        public bool DeleteSalaryDetails(string _salId)
        {
            bool result = false;
            try
            {

                using (GymDBEntities DbContext = new GymDBEntities())
                {
                    TblSalary user = DbContext.TblSalaries.Where(m => m.sal_Id == _salId).First();
                    DbContext.TblSalaries.Remove(user);
                    DbContext.SaveChanges();
                    result = true;
                }
                return result;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return result;

            }
        }

        public bool SaveSalaryMst(TblSalaryMst _TblSalaryMst)
        {
            bool result = false;
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.TblSalaryMsts.Add(_TblSalaryMst);
                DbContext.SaveChanges();
                result = true;
            }
            return result;
        }

        public bool UpdateSalaryMst(TblSalaryMst _salary, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.TblSalaryMsts.Attach(_salary);
                var entry = DbContext.Entry(_salary);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    DbContext.SaveChanges();
                    return true;
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return false;
                }
            }
        }

        public bool DeleteMembersSalary(string _salId)
        {
            bool result = false;
            try
            {

                using (GymDBEntities DbContext = new GymDBEntities())
                {
                    TblSalaryMst user = DbContext.TblSalaryMsts.Where(m => m.SalMst_Id == _salId).First();
                    DbContext.TblSalaryMsts.Remove(user);
                    DbContext.SaveChanges();
                    result = true;
                }
                return result;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return result;

            }
        }

        public List<SP_GetAllSalaryMstDetails_Result> GetSalaryMstList(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetAllSalaryMstDetails(_UserId).ToList();
            }
        }

        public List<SP_GetAllSalaryMstDetailsByMbr_Result> GetSalaryMstListByMbr(string _mbrid)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetAllSalaryMstDetailsByMbr(_mbrid).ToList();
            }
        }

        public TblSalaryMst GetMembersSalaryMst(string _SalMstId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.TblSalaryMsts.Where(m => m.SalMst_Id == _SalMstId).FirstOrDefault();
            }
        }

        #endregion


        public List<tblMbrShipPlan> GetAllMembershipPlan(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.tblMbrShipPlans.Where(m => m.LastUpdatedBy == _UserId).ToList();
            }
        }

        public bool SaveMembershipPlan(tblMbrShipPlan _tblMbrShipPlan)
        {
            bool result = false;
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblMbrShipPlans.Add(_tblMbrShipPlan);
                DbContext.SaveChanges();
                result = true;
            }
            return result;
        }

        public bool UpdateMembershipPlan(tblMbrShipPlan _tblMbrShipPlan, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblMbrShipPlans.Attach(_tblMbrShipPlan);
                var entry = DbContext.Entry(_tblMbrShipPlan);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    DbContext.SaveChanges();
                    return true;
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return false;
                }
            }
        }

        public bool DeleteMembershipPlan(string _PlanId)
        {
            bool result = false;
            try
            {
                using (GymDBEntities DbContext = new GymDBEntities())
                {
                    tblMbrShipPlan user = DbContext.tblMbrShipPlans.Where(m => m.MbrShipId == _PlanId).First();
                    DbContext.tblMbrShipPlans.Remove(user);
                    DbContext.SaveChanges();
                    result = true;
                }
                return result;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return result;
            }
        }


        public List<tblMbrShipPlanUser> GetAllMembershipPlanUser(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.tblMbrShipPlanUsers.ToList();
            }
        }

        public tblMbrShipPlanUser FindMembershipPlanUserBy(Expression<Func<tblMbrShipPlanUser, bool>> predicate)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.tblMbrShipPlanUsers.Where(predicate).FirstOrDefault();
            }
        }
        public bool SaveMembershipPlanUser(tblMbrShipPlanUser _tblMbrShipPlanUser)
        {
            bool result = false;
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblMbrShipPlanUsers.Add(_tblMbrShipPlanUser);
                DbContext.SaveChanges();
                result = true;

                // Update is Renewed if membership Reneweds
                tblMbrShipPlanUser _user = DbContext.tblMbrShipPlanUsers.Where(m => m.MbrId == _tblMbrShipPlanUser.MbrId && m.MembershipType == "GymMembership" && m.IsRenewed == false).FirstOrDefault();
                if(_user != null)
                {
                    List<string> _lst = new List<string>();
                    _lst.Add("IsRenewed");
                    _user.IsRenewed = true;
                    _user.LastUpdatedDt = _tblMbrShipPlanUser.LastUpdatedDt;
                    _user.LastUpdatedBy = _tblMbrShipPlanUser.LastUpdatedBy;

                    UpdateMembershipPlanUser(_user, _lst);
                }


            }



            return result;
        }

        public bool UpdateMembershipPlanUser(tblMbrShipPlanUser _tblMbrShipPlanUser, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblMbrShipPlanUsers.Attach(_tblMbrShipPlanUser);
                var entry = DbContext.Entry(_tblMbrShipPlanUser);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    DbContext.SaveChanges();
                    return true;
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return false;
                }
            }
        }

        public bool DeleteMembershipPlanUser(string _MbrUserId)
        {
            bool result = false;
            try
            {
                using (GymDBEntities DbContext = new GymDBEntities())
                {
                    tblMbrShipPlanUser user = DbContext.tblMbrShipPlanUsers.Where(m => m.MbrUserId == _MbrUserId).First();
                    DbContext.tblMbrShipPlanUsers.Remove(user);
                    DbContext.SaveChanges();
                    result = true;
                }
                return result;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return result;
            }
        }


        public List<TblMbrType> GetAllMembersTypes()
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.TblMbrTypes.ToList();
            }
        }


        public List<SP_GetPaymentDtls_Result> GetGymPaymentsDetails(string _userId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetPaymentDtls(_userId).ToList();
            }
        }

         
        #region Gym Expense Details

        public tblGymExpens GetGymExpensesById(string _ExpenseId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.tblGymExpenses.Where(m => m.ExpensesId == _ExpenseId).FirstOrDefault();
            }
        }

        public List<tblGymExpens> GetGymExpenses(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.tblGymExpenses.Where(m => m.LastUpdatedBy == _UserId).ToList();
            }
        }

        public bool SaveExpenses(tblGymExpens _tblGymExpens)
        {
            bool result = false;
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblGymExpenses.Add(_tblGymExpens);
                DbContext.SaveChanges();
                result = true;
            }
            return result;
        }

        public bool UpdateExpenses(tblGymExpens _tblGymExpens, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblGymExpenses.Attach(_tblGymExpens);
                var entry = DbContext.Entry(_tblGymExpens);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    DbContext.SaveChanges();
                    return true;
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return false;
                }
            }
        }

        public bool DeleteExpenses(string _ExpensesId)
        {
            bool result = false;
            try
            {
                using (GymDBEntities DbContext = new GymDBEntities())
                {
                    tblGymExpens user = DbContext.tblGymExpenses.Where(m => m.ExpensesId == _ExpensesId).First();
                    DbContext.tblGymExpenses.Remove(user);
                    DbContext.SaveChanges();
                    result = true;
                }
                return result;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return result;
            }
        }


        #endregion

        #region  Gym Profile

        public SP_GetGymProfile_Result GetGymProfileById(string _AddedBy)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetGymProfile(_AddedBy).FirstOrDefault();
            }
        }

        public bool SaveGymProfiles(tblGymProfile _tblGymProfile)
        {
            bool result = false;
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblGymProfiles.Add(_tblGymProfile);
                DbContext.SaveChanges();
                result = true;
            }
            return result;
        }
        public bool UpdateGymProfile(tblGymProfile _tblGymProfile, List<string> UpdatedProp)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                DbContext.tblGymProfiles.Attach(_tblGymProfile);
                var entry = DbContext.Entry(_tblGymProfile);

                foreach (string name in UpdatedProp)
                    entry.Property(name).IsModified = true;

                try
                {
                    DbContext.SaveChanges();
                    return true;
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return false;
                }
            }
        }

        #endregion

        #region Get Member Remaining balance

        public List<SP_GetRemainingBalance_Result> GetGymMemberRemainingBalance(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetRemainingBalance(_UserId).ToList();
            }
        }


        #endregion

        public List<SP_GetAllPTMembers_Result> GetAllPtMembersDetails(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            { 
                return DbContext.SP_GetAllPTMembers(_UserId).ToList();
            }
        }

        public List<SP_GetMembershipGoingtoExxpiredMembers_Result> GetMembershipGoingtoExxpiredMembers(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetMembershipGoingtoExxpiredMembers(_UserId).ToList();
            }
        }

        public List<SP_GetGymMbrHistory_Result> GetGymMemberHistoryById(string MemberId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetGymMbrHistory(MemberId).ToList();
            }
        }

        public List<tblMbrShipPlanUser> GetInvoiceList(string _MbrId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            { 
                return DbContext.tblMbrShipPlanUsers.Where(m=>m.MbrId == _MbrId).ToList();
            }
        }

        public SP_GetInvoice_Result GetInvoice(string _MbrUserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetInvoice(_MbrUserId).FirstOrDefault();
            }
        }

        #region All Gym Reports

        public List<SP_GetMemberYeayrlyReport_Result> GetMemberYearlyReport(string _MbrId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetMemberYeayrlyReport(_MbrId).ToList();
            }
        }

        public List<SP_GetMembershipReport_Result> GetMembershipReport(string _userId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetMembershipReport(_userId).ToList();
            }
        }

        public List<SP_GetPTReport_Result> GetPTReport(string _userId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetPTReport(_userId).ToList();
            }
        }

        public List<SP_GetSummaryReport_Result> GetSummaryReport(string _userId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetSummaryReport(_userId).ToList();
            }
        }


        #endregion

        #region

        public List<SP_GetGymMembersCounts_Result> GetGymMembersCounts(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetGymMembersCounts(_UserId).ToList();
            }
        }

        public List<SP_GetSalesReportByMonths_Result> GetSalesReportByMonths(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetSalesReportByMonths(_UserId).ToList();
            }
        }

        public List<SP_GetEnquiryMembersDetails_Result> GetEnquiryMembersDetails(string _UserId)
        {
            using (GymDBEntities DbContext = new GymDBEntities())
            {
                return DbContext.SP_GetEnquiryMembersDetails(_UserId).ToList();
            }
        }

        #endregion

        public void Dispose()
        {

        }
    }
}