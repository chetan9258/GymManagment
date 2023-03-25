﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GymWebAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class GymDBEntities : DbContext
    {
        public GymDBEntities()
            : base("name=GymDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<tblGymExpens> tblGymExpenses { get; set; }
        public virtual DbSet<tblGymMbr> tblGymMbrs { get; set; }
        public virtual DbSet<tblGymProfile> tblGymProfiles { get; set; }
        public virtual DbSet<tblMbrShipPlan> tblMbrShipPlans { get; set; }
        public virtual DbSet<tblMbrShipPlanUser> tblMbrShipPlanUsers { get; set; }
        public virtual DbSet<TblSalary> TblSalaries { get; set; }
        public virtual DbSet<TblMbrType> TblMbrTypes { get; set; }
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<TblSalaryMst> TblSalaryMsts { get; set; }
    
        public virtual ObjectResult<SP_GetAllMembersDetails_Result> SP_GetAllMembersDetails(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetAllMembersDetails_Result>("SP_GetAllMembersDetails", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetAllPTMembers_Result> SP_GetAllPTMembers(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetAllPTMembers_Result>("SP_GetAllPTMembers", userIdParameter);
        }
    
        public virtual int SP_GetBishiProfiteLossDetails(string bishiId)
        {
            var bishiIdParameter = bishiId != null ?
                new ObjectParameter("BishiId", bishiId) :
                new ObjectParameter("BishiId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_GetBishiProfiteLossDetails", bishiIdParameter);
        }
    
        public virtual ObjectResult<SP_GetEnquiryMembersDetails_Result> SP_GetEnquiryMembersDetails(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetEnquiryMembersDetails_Result>("SP_GetEnquiryMembersDetails", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetGymMbrHistory_Result> SP_GetGymMbrHistory(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetGymMbrHistory_Result>("SP_GetGymMbrHistory", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetGymMembersCounts_Result> SP_GetGymMembersCounts(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetGymMembersCounts_Result>("SP_GetGymMembersCounts", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetGymProfile_Result> SP_GetGymProfile(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetGymProfile_Result>("SP_GetGymProfile", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetInvoice_Result> SP_GetInvoice(string mbrUserId)
        {
            var mbrUserIdParameter = mbrUserId != null ?
                new ObjectParameter("MbrUserId", mbrUserId) :
                new ObjectParameter("MbrUserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetInvoice_Result>("SP_GetInvoice", mbrUserIdParameter);
        }
    
        public virtual ObjectResult<SP_GetMemberProfile_Result> SP_GetMemberProfile(string userId, string mbrId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            var mbrIdParameter = mbrId != null ?
                new ObjectParameter("MbrId", mbrId) :
                new ObjectParameter("MbrId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetMemberProfile_Result>("SP_GetMemberProfile", userIdParameter, mbrIdParameter);
        }
    
        public virtual ObjectResult<SP_GetMembershipGoingtoExxpiredMembers_Result> SP_GetMembershipGoingtoExxpiredMembers(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetMembershipGoingtoExxpiredMembers_Result>("SP_GetMembershipGoingtoExxpiredMembers", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetMembershipReport_Result> SP_GetMembershipReport(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetMembershipReport_Result>("SP_GetMembershipReport", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetMemberYeayrlyReport_Result> SP_GetMemberYeayrlyReport(string mbrId)
        {
            var mbrIdParameter = mbrId != null ?
                new ObjectParameter("MbrId", mbrId) :
                new ObjectParameter("MbrId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetMemberYeayrlyReport_Result>("SP_GetMemberYeayrlyReport", mbrIdParameter);
        }
    
        public virtual ObjectResult<SP_GetPaymentDtls_Result> SP_GetPaymentDtls(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetPaymentDtls_Result>("SP_GetPaymentDtls", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetPTReport_Result> SP_GetPTReport(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetPTReport_Result>("SP_GetPTReport", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetRemainingBalance_Result> SP_GetRemainingBalance(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetRemainingBalance_Result>("SP_GetRemainingBalance", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetSalesReportByMonths_Result> SP_GetSalesReportByMonths(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetSalesReportByMonths_Result>("SP_GetSalesReportByMonths", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetSummaryReport_Result> SP_GetSummaryReport(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetSummaryReport_Result>("SP_GetSummaryReport", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetAllSalaryMstDetails_Result> SP_GetAllSalaryMstDetails(string userId)
        {
            var userIdParameter = userId != null ?
                new ObjectParameter("UserId", userId) :
                new ObjectParameter("UserId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetAllSalaryMstDetails_Result>("SP_GetAllSalaryMstDetails", userIdParameter);
        }
    
        public virtual ObjectResult<SP_GetAllSalaryMstDetailsByMbr_Result> SP_GetAllSalaryMstDetailsByMbr(string mbrId)
        {
            var mbrIdParameter = mbrId != null ?
                new ObjectParameter("MbrId", mbrId) :
                new ObjectParameter("MbrId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetAllSalaryMstDetailsByMbr_Result>("SP_GetAllSalaryMstDetailsByMbr", mbrIdParameter);
        }
    }
}
