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

import { MbrShipPlanClass } from '../Models/mbr-ship-plan-class.model';
import { GymMembersClass } from '../Models/GymMembersClass';
import { DatePipe } from '@angular/common'


@Component({
    selector: 'app-renewal-payments',
    templateUrl: './renewal-payments.component.html',
    styleUrls: ['./renewal-payments.component.css']
})
export class RenewalPaymentsComponent implements OnInit {

    RenewalPaymentForm: UntypedFormGroup;
    _MbrPlans: MbrShipPlanClass[] = [];

    MbrId: string;
    MbrName: string;
    MbrBatch: string;
    MbrShipId: string;
    MbrShipCharges: string;
    Days: string;
    PaidAmt: string;
    PaidBy: string
    PaidDt: string;
    MbrshipStartDt: string;
    MbrshipEndDt: string;
    MembershipType: string;
    submitted = false;
    date: Date;
    IsSessionEnable : boolean;

    constructor(private gymServices: GymService, public formBuilder: UntypedFormBuilder, private _router: Router, public route: ActivatedRoute, public datepipe: DatePipe) { }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.GetAllMemberShipPlan();

        this.RenewalPaymentForm = this.formBuilder.group({

            MbrId: ['', Validators.required],
            MbrName: ['', Validators.required],
            MbrBatch: ['', Validators.required],
            MbrShipId: ['', Validators.required],
            MbrShipCharges: ['', Validators.required],
            Days: ['', Validators.required],
            PaidAmt: ['', Validators.required],
            PaidBy: ['', Validators.required],
            PaidDt: ['', Validators.required],
            MbrshipStartDt: ['', Validators.required],
            MbrshipEndDt: ['', Validators.required],
            MembershipType: [''],



        });

        this.route.queryParams.subscribe((params) => {
            debugger;
            if (params != null && params.MbrName != undefined) { 
                this.MbrId = params.MbrId;
                this.MbrName = params.MbrName;
                this.MbrBatch = params.MbrBatch;
                this.MbrName = params.MbrName;
                 
            }
        })
    }

    onDateChange(value) {
        this.date = new Date(value.srcElement.value);
        this.date.setDate(this.date.getDate() + +this.Days);
        this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    }


    onSubmit() {
        this.submitted = true;
        if (!this.RenewalPaymentForm.invalid) {
            this.RenewalPaymentForm.value["MembershipType"] = "GymMembership";
            this.gymServices.AddPTMembers(this.RenewalPaymentForm.value).subscribe(result => {
                if (!isNull(result)) {
                    alert(result);
                    return this._router.navigate(["/RenewalMembership"]);
                }
                else {
                    alert("Incorrect Creiditials");
                }
            }, error => alert(error.message))
        }
    }
    onCancel() {
        return this._router.navigate(["/RenewalMembership"]);
    }

    get fval() {
        return this.RenewalPaymentForm.controls;
    }

    GetAllMemberShipPlan() {
        this.gymServices.GetAllMemberShipPlan().subscribe(res => {
            this._MbrPlans = res;
            // data contains actual array of users
        },
            error => alert(error.message));
    }

    showMemberShipPlan(value) {

        this.MbrShipCharges = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipAmt.toString();
        this.Days = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipDurationInDays.toString()

    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;

    }

}
