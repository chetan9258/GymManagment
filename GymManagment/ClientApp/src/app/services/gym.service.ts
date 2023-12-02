import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { Token } from '../Models/token.model';
import { Component, Inject } from '@angular/core';
import { baseUrl } from '../..//environments/environment';
 


@Injectable({
    providedIn: 'root'
})
export class GymService {

    constructor(private http: HttpClient) {
         
    }

    SendFeedbackEmail(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymDetails/SendFeebackEmail', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    SendPromotionMessage(_membersList): Observable<any> {

        return this.http.get(baseUrl + 'api/GymDetails/SendPromotionMessage?membersLists=' + _membersList + '', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }
     

    login(username, password): Observable<any> {
        const headers = {
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE'  };
        const userData = "username=" + username + "&password=" + password + "&grant_type=password";

        /*return this.http.post<Token>(baseUrl + 'Token', userData, { 'headers': headers }).pipe(map(data => data));*/
        return this.http.post<Token>(baseUrl + 'Token', userData, { 'headers': headers }).pipe(map(data => data));

    }

    ForgotPassword(Email): Observable<any> {
        return this.http.post<Token>(baseUrl + 'api/Common/forgotPassword?Email=' + Email + '', { 'headers': this.getToken() });


    }

    Logout(): Observable<any> {
        return this.http.post<Token>(baseUrl + 'api/Account/Logout', { 'headers': this.getToken() });
    }


    UpdatePassowrd(model): Observable<any> {
        return this.http.post<Token>(baseUrl + 'api/Account/ChangePassword', JSON.stringify(model), { 'headers': this.getToken() });
    }

    CheckToken() {
        if (localStorage.getItem('token') == null) {
            return false;
        }
        else
            return true;
    }

    VerifyOTP(_OTPValue): Observable<any> {

        return this.http.get(baseUrl + 'api/Common/VerifyOTP?OTPValue=' + _OTPValue + '', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    getToken() {
        return {
            'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') + ''
        };
    }

    /** Error Handling method */

    errorHandler(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                'Backend returned code ' + error.status + ',' +
                'body was: ' + error.error.message + '');
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }

    //------------------------ Employee --------------------

    GetAllMembers(): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetAllMembers', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }


    GetMemberDetailsById(_UserId): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetMemberDetails?UserId=' + _UserId + '', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    AddMembers(_Emp): Observable<any> {

        return this.http.post<Token>(baseUrl + 'api/Member/CreateMember', JSON.stringify(_Emp), { 'headers': this.getToken() })
            .pipe(
                map(
                    res => res));

    }

    UpdateMember(_Emp): Observable<any> {
        return this.http.post<Token>(baseUrl + 'api/Member/UpdateMember', JSON.stringify(_Emp), { 'headers': this.getToken() });
    }

    DeleteMember(_EmpId) {

        return this.http.get(baseUrl + 'api/Member/DeleteMember?UserId=' + _EmpId + '', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    //------------------------ End Employee --------------------

    GetAllMemberShipPlan(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymDetails/GetAllMemberShipPlan', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    AddPlan(_Plan): Observable<any> {

        return this.http.post<Token>(baseUrl + 'api/GymDetails/CreateMemberShipPlan', JSON.stringify(_Plan), { 'headers': this.getToken() })
            .pipe(
                map(
                    res => res));

    }

    UpdatePlan(_Plan): Observable<any> {
        return this.http.post<Token>(baseUrl + 'api/GymDetails/UpdateMemberShipPlan', JSON.stringify(_Plan), { 'headers': this.getToken() });
    }

    DeletePlan(_PlanId) {

        return this.http.get(baseUrl + 'api/GymDetails/DeleteMembershipPlan?PlanId=' + _PlanId + '', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    GetPaymentDetails(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymDetails/GetGymPaymentDetails', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    GetDashboardData(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymDetails/GetDashboardData', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    GetUpcomingBirthdays(): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetUpcomingBirthdays', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    // ------------------------ Expenses Details -----------------

    GetAllExpense(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymDetails/GetAllExpense', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    CreateExpense(_Expenses): Observable<any> {

        return this.http.post<Token>(baseUrl + 'api/GymDetails/CreateExpense', JSON.stringify(_Expenses), { 'headers': this.getToken() })
            .pipe(
                map(
                    res => res));

    }

    UpdateExpense(_Expenses): Observable<any> {
        return this.http.post<Token>(baseUrl + 'api/GymDetails/UpdateExpense', JSON.stringify(_Expenses), { 'headers': this.getToken() });
    }

    DeleteExpense(_expenseId) {

        return this.http.get(baseUrl + 'api/GymDetails/DeleteExpense?expenseId=' + _expenseId + '', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }


    //------------------------ Personal Training --------------------

    GetAllPTMembers(): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetAllPtMembers', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }


    AddPTMembers(_Emp): Observable<any> {

        return this.http.post<Token>(baseUrl + 'api/GymDetails/CreateMemberShipPlanUser', JSON.stringify(_Emp), { 'headers': this.getToken() })
            .pipe(
                map(
                    res => res));

    }

    UpdatePTMembers(_Emp): Observable<any> {
        return this.http.post<Token>(baseUrl + 'api/GymDetails/UpdateMemberShipPlanUser', JSON.stringify(_Emp), { 'headers': this.getToken() });
    }

    DeletePTMembers(_MbrUserId) {

        return this.http.get(baseUrl + 'api/GymDetails/DeleteMembershipPlan?MbrUserId=' + _MbrUserId + '', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }

    //------------------------ End Employee --------------------

    //------------------------ Gym Profile Details --------------------

    GetGymProfileDetails(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymDetails/GetGymProfile', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }


    UpdateGymProfileDetails(_profile): Observable<any> {

        return this.http.post<Token>(baseUrl + 'api/GymDetails/UpdateGymProfile', JSON.stringify(_profile), { 'headers': this.getToken() })
            .pipe(
                map(
                    res => res));

    }

    //------------------------ End Gym Profile Details  --------------------

    GetMembershipGoingtoExxpiredMembers(): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetMembershipGoingtoExxpiredMembers', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    GetAllMemberShipPlanUser(): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetGymMemberRemainingBalance', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }
    GetGymMemberHistoryById(MemberId): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetGymMemberHistoryById?MemberId=' + MemberId + '', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }
    GetInvoiceList(MbrId): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetInvoiceList?MbrId=' + MbrId + '', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }
    GetInvoice(MbrUserId): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetInvoice?MbrUserId=' + MbrUserId + '', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    GetMemberYearlyReport(_MbrId): Observable<any> {

        return this.http.get(baseUrl + 'api/GymReport/GetMemberYearlyReport?MbrId=' + _MbrId + '', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    GetMembershipReport(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymReport/GetMembershipReport', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    GetPTReport(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymReport/GetPTReport', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    GetSummaryReport(): Observable<any> {

        return this.http.get(baseUrl + 'api/GymReport/GetSummaryReport', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    GetSalaryMstList(): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetSalaryMstList', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    GetSalaryMstListByMbr(MbrId): Observable<any> {

        return this.http.get(baseUrl + 'api/Member/GetSalaryMstListByMbr?MbrId=' + MbrId + '', { 'headers': this.getToken() }).
            pipe(map(res => res),
                catchError(this.errorHandler));
    }

    SaveSalaryMst(_Emp): Observable<any> {

        return this.http.post<Token>(baseUrl + 'api/Member/SaveSalaryMst', JSON.stringify(_Emp), { 'headers': this.getToken() })
            .pipe(
                map(
                    res => res));

    }

    UpdateSalaryMst(_Emp): Observable<any> {
        return this.http.post<Token>(baseUrl + 'api/Member/UpdateSalaryMst', JSON.stringify(_Emp), { 'headers': this.getToken() });
    }

    DeleteMembersSalaryMst(_SalId) {

        return this.http.get(baseUrl + 'api/Member/DeleteMembersSalaryMst?_SalId=' + _SalId + '', { 'headers': this.getToken() }).
            pipe(
                map(
                    res => res));
    }
}
