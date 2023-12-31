
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
import { SP_GetAllMembersDetailsClass } from '../Models/SP_GetAllMembersDetailsClass';
import { salaryMasterClass } from '../Models/salaryMasterClass';
import { MbrShipPlanUserClass } from '../Models/MbrShipPlanUserClass';
import { ConfirmEqualValidatorDirective } from '../confirm-equal-validator.directive.ts.directive';
import { MbrShipPlanClass } from '../Models/mbr-ship-plan-class.model';
import { GymMembersClass } from '../Models/GymMembersClass';
import { DatePipe } from '@angular/common'

//import { debug } from 'console';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

    AddEmpForm: UntypedFormGroup;
    _MbrPlans: MbrShipPlanClass[] = [];
    _Members: GymMembersClass[] = [];
    _PTMembers: GymMembersClass[] = [];
    _PTTrainer: GymMembersClass[] = [];
    submitted = false;

    MbrTypeddl: any;
    MbrCityddl: any;
    MbrStateddl: any;
    MbrPaidByddl: any;
   
    MbrGenderddl: any;
    MbrPlansddl: any;


    MbrId: string;
    sal_Id: string;
    MbrShipId: string;
    MbrUserId: string;
    MbrType: string;
    MbrshipAmt: string;
    MbrshipDays: string;
    MbrName: string;
    MbrMob: string
    MbrMob2: string;
    MbrDOB: string;
    MbrGender: string; 
    MbrDOE: string;  
    MbrEmail: string;
    MbrAddr: string;
    MbrCity: string;
    MbrState: string;
    MbrPincode: string;
    MbrSalary: string;
    SalDesc: string;
    GeneralDesc: string;
    MbrCertificationDt: string;
    EmpName: string;
    RemBalance: string;
    MbrCertification: string;
    MbrPlans: string;
    MbrshipPaidAmt: string;
    MbrPTCharges: string;
    MbrBatch: string;
    MbrshipStartDt: string;
    MbrshipEndDt: string;
    MbrshipDesc: string;
    MbrPaidBy: string;
    PaidDt: string;
    btnVal: any;
    modelheaderval: any;

    MbrPTPlanId: string;
    MbrPtDays: string;
    MbrPtTrainerId: string;
    MbrPTChargesofTrainer: string;
    MbrPTAmt: string;
    MbrPTAmtPaidBy: string;
    MbrPTStartDt: string;
    MbrPTEndDt: string;
    MbrPTDesc: string;
    PtMemberId: string;
    IsSessionEnable: boolean;

    date: Date;

    constructor(private gymServices: GymService, public formBuilder: UntypedFormBuilder, private _router: Router, public route: ActivatedRoute, public datepipe: DatePipe  ) {

    }

    ngOnInit() {

         this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);


        //debugger; 
        this.btnVal = 'Save';
        this.modelheaderval = 'Add Member';


        this.AddEmpForm = this.formBuilder.group({
             
            MbrType: ['', Validators.required],
            MbrId: [''],
            sal_Id:[''],
            MbrName: ['', Validators.required], 
            MbrMob: ['', [Validators.required,  Validators.minLength(10), Validators.maxLength(10)]],
            MbrMob2: [''],
            MbrDOB: [''],
            MbrGender: ['', Validators.required],
            
            MbrDOE: [''], 
            MbrEmail: [''],
            MbrAddr: [''],
            MbrCity: [''],
            MbrState: [''],
            MbrPincode: [''],
            MbrSalary: [''],
            SalDesc: [''],
            GeneralDesc: [''], 
            MbrCertification: [''],
            MbrCertificationDt: [''],
            EmpName: [''],
            RemBalance: [''],
            MbrPlans: [''],
            MbrshipAmt: [''],
            MbrshipPaidAmt: [''],
            MbrshipDays: [''],
            MbrshipStartDt: [''],
            MbrshipEndDt: [''],
            MbrshipDesc: [''],
            MbrPaidBy: [''],
            PaidDt: [''],
            MbrShipId: [''],
            MbrUserId: [''],
            MbrPTCharges: [''],

            MbrBatch: [''],


            MbrPTPlanId: [''],
            MbrPtDays: [''],
            MbrPtTrainerId: [''],
            MbrPTChargesofTrainer: [''],
            MbrPTAmt: [''],
            MbrPTAmtPaidBy: [''],
            MbrPTStartDt: [''],
            MbrPTEndDt: [''],
            MbrPTDesc: [''],
            PtMemberId: [''],

        });

        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrName != undefined) {
                this.MbrId = params.MbrId;
                this.sal_Id = params.sal_Id;
                this.MbrShipId = params.MbrShipId;
                this.MbrUserId = params.MbrUserId;
                this.MbrName = params.MbrName;
                this.MbrTypeddl = params.MbrType;
                this.MbrMob = params.MbrMob;
                this.MbrMob2 = params.MbrMob2;
                this.MbrDOB = params.MbrDOB;
                this.MbrGender = params.MbrGender;
                this.MbrDOE = params.MbrDOE;  
                this.MbrEmail = params.MbrEmail;
                this.MbrAddr = params.MbrAddr;
                this.MbrCityddl = params.MbrCity;
                this.MbrStateddl = params.MbrState;
                this.MbrPincode = params.MbrPincode;
                this.MbrSalary = params.MbrSalary;
                this.SalDesc = params.SalDesc;
                this.GeneralDesc = params.GeneralDesc;
                this.MbrCertification = params.MbrCertification;
                this.MbrCertificationDt = params.MbrCertificationDt;
                this.EmpName = params.EmpName;
                this.RemBalance = params.RemBalance; 
                this.MbrPlansddl = params.MbrShipId;
                this.MbrshipAmt = params.MbrShipAmt;
                this.MbrshipPaidAmt = params.PaidAmt;
                this.MbrshipDays = params.MbrShipDurationInDays;
                this.MbrshipStartDt = params.MbrshipStartDt;
                this.MbrshipEndDt = params.MbrshipEndDt;
                this.MbrshipDesc = params.Description;
                this.MbrPaidByddl = params.PaidBy;
                this.MbrPTCharges = params.MbrPTCharges;
                this.MbrBatch = params.MbrBatch;


                this.MbrPTPlanId = params.MbrPTPlanId;
                this.MbrPtDays = params.MbrPtDays;
                this.MbrPtTrainerId = params.MbrPtTrainerId;
                this.MbrPTChargesofTrainer = params.MbrPTChargesofTrainer;
                this.MbrPTAmt = params.MbrPTAmt;
                this.MbrPTAmtPaidBy = params.MbrPTAmtPaidBy;
                this.MbrPTStartDt = params.MbrPTStartDt;
                this.MbrPTEndDt = params.MbrPTEndDt;
                this.MbrPTDesc = params.MbrPTDesc;
                this.PtMemberId = params.PtMemberId;


                this.btnVal = 'update';
                this.modelheaderval = 'Update Member';

            }
        })

        this.GetAllMemberShipPlan();
        this.GetAllMembers();
    }

    get fval() {
        return this.AddEmpForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (!this.AddEmpForm.invalid) {
            if (this.btnVal == "Save") {
                this.gymServices.AddMembers(this.AddEmpForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/Employee"]);
                    }

                }, error => alert(error.message))
            }
            else { // Update 
                this.gymServices.UpdateMember(this.AddEmpForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/Employee"]);
                    }

                }, error => alert(error.message))
            }
        }
    }

    onCancel() {
        return this._router.navigate(["/Employee"]);
    }

    GetAllMemberShipPlan() {
        this.gymServices.GetAllMemberShipPlan().subscribe(res => {
            this._MbrPlans = res;
            // data contains actual array of users
        },
            error => alert(error.message));
    }

    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!isNull(result)) {
                this._Members = result;
                this._PTMembers = result.filter(x => x.MbrType == "GymMember");
                this._PTTrainer = result.filter(x => x.MbrType == "FloorManager" || x.MbrType == "Trainer");

            }
        }, error => alert(error.message))
    }

    filterForeCasts(value) {
        this.MbrTypeddl = value;
    }

    showMemberShipPlan(value) {

        this.MbrshipAmt = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipAmt.toString();
        this.MbrshipDays = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipDurationInDays.toString()

    }

    showPersonalTrainingPlans(value) {

        this.MbrPtDays = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipDurationInDays.toString()

    }

    onDateChange(value) { 
        this.date = new Date(value.srcElement.value);
        this.date.setDate(this.date.getDate() + +this.MbrshipDays);
        this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd'); 
    }

    onDOBSelect(value) {
        this.date = new Date(value.srcElement.value);
        let timeDiff = Math.abs(Date.now() - this.date.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        if (age < 18) {
            alert('Age must be greater than 18');
            this.MbrDOB = '';
        }
    }
    

    showPTTrainerCharges(value) {

        this.MbrPTChargesofTrainer = this._PTTrainer.find(x => x.MbrId == value).MbrPTCharges

    }
     
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;

    }

}
