import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SalaryMasterComponent } from './salary-master/salary-master.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MembershipPlanComponent } from './membership-plan/membership-plan.component';
import { GymBranchesComponent } from './gym-branches/gym-branches.component';
import { GymProfileComponent } from './gym-profile/gym-profile.component';
import { AddMembershipPlanComponent } from './add-membership-plan/add-membership-plan.component';
import { AddGymBranchesComponent } from './add-gym-branches/add-gym-branches.component';
import { PaymentsComponent } from './payments/payments.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GymExpensesComponent } from './gym-expenses/gym-expenses.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { RenewalMembershipComponent } from './renewal-membership/renewal-membership.component';
import { RemainingBalanceComponent } from './remaining-balance/remaining-balance.component';
import { MembershipHistoryComponent } from './membership-history/membership-history.component';
import { TrainersHistoryComponent } from './trainers-history/trainers-history.component';
import { RenewalPaymentsComponent } from './renewal-payments/renewal-payments.component';
import { AddRemainingBalanceComponent } from './add-remaining-balance/add-remaining-balance.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive.ts.directive';
import { DatePipe } from '@angular/common';
import { PTDetailsComponent } from './ptdetails/ptdetails.component';
import { AddPTDetailsComponent } from './add-ptdetails/add-ptdetails.component'
import { BtnRendererComponent } from './Renders/btn-renderer.component';
import { EditBtnRendererComponent } from './Renders/edit-btn-renderer.component';
import { AllInvoicesComponent } from './all-invoices/all-invoices.component';
import { SupportComponent } from './support/support.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';  
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

  
/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/
 
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        SalaryMasterComponent,
        EmployeeComponent,
        LoginComponent,
        BtnCellRendererComponent,
        BtnRendererComponent,
        EditBtnRendererComponent,
        AddEmployeeComponent,
        MembershipPlanComponent,
        GymBranchesComponent,
        GymProfileComponent,
        AddMembershipPlanComponent,
        AddGymBranchesComponent,
        PaymentsComponent,
        GymExpensesComponent,
        AddExpensesComponent,
        RenewalMembershipComponent,
        RemainingBalanceComponent,
        MembershipHistoryComponent,
        TrainersHistoryComponent,
        RenewalPaymentsComponent,
        AddRemainingBalanceComponent,
        ConfirmEqualValidatorDirective,
        PTDetailsComponent,
        AddPTDetailsComponent,
        AllInvoicesComponent,
        SupportComponent,
        SendMessageComponent,
        AllReportsComponent,
        AddSalaryComponent, 
        ForgotPasswordComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        NgxChartsModule,
        ReactiveFormsModule, 
        //NgbModule,
        AgGridModule.withComponents([BtnCellRendererComponent, BtnRendererComponent, EditBtnRendererComponent]),
        RouterModule.forRoot([
            { path: '', component: LoginComponent },
            { path: 'Home', component: HomeComponent },
            { path: 'Employee', component: EmployeeComponent },
            { path: 'AddEmployee', component: AddEmployeeComponent },
            { path: 'MbrPlans', component: MembershipPlanComponent },
            { path: 'AddMbrPlans', component: AddMembershipPlanComponent },
            { path: 'GymBranches', component: GymBranchesComponent },
            { path: 'AddBranches', component: AddGymBranchesComponent },
            { path: 'GymProfile', component: GymProfileComponent },
            { path: 'Payments', component: PaymentsComponent },
            { path: 'GymExpenses', component: GymExpensesComponent },
            { path: 'AddExpenses', component: AddExpensesComponent },
            { path: 'RenewalMembership', component: RenewalMembershipComponent },
            { path: 'RenewalPayments', component: RenewalPaymentsComponent },
            { path: 'RemainingBalance', component: RemainingBalanceComponent },
            { path: 'AddRemainingBalance', component: AddRemainingBalanceComponent },
            { path: 'MembershipHistory', component: MembershipHistoryComponent },
            { path: 'PTDetails', component: PTDetailsComponent },
            { path: 'AddPTDetails', component: AddPTDetailsComponent },
            { path: 'AllInvoices', component: AllInvoicesComponent },
            { path: 'AppSupport', component: SupportComponent },
            { path: 'SendMessage', component: SendMessageComponent },
            { path: 'AllReports', component: AllReportsComponent },
            { path: 'AddSalary', component: AddSalaryComponent },
            { path: 'SalaryDetails', component: SalaryMasterComponent },
            { path: 'ForgotPassword', component: ForgotPasswordComponent },

             
        ]),
        NgMultiSelectDropDownModule.forRoot()

        

    ],
    providers: [DatePipe],
    entryComponents: [BtnCellRendererComponent, BtnRendererComponent, EditBtnRendererComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }      
