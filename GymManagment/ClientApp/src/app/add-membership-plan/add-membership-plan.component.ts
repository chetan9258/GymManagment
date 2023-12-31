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

@Component({
    selector: 'app-add-membership-plan',
    templateUrl: './add-membership-plan.component.html',
    styleUrls: ['./add-membership-plan.component.css']
})
export class AddMembershipPlanComponent implements OnInit {

    AddPlanForm: UntypedFormGroup;
    submitted = false;

    MbrShipId: string;
    MbrShipName: string;
    MbrShipAmt: string;
    MbrShipDurationInDays: string;
    StartDt: string;
    EndDt: string;
    Description: string;

    btnVal: any;
    modelheaderval: any;
    IsSessionEnable: any;

    constructor(private gymServices: GymService, public formBuilder: UntypedFormBuilder, private _router: Router, public route: ActivatedRoute) { }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.btnVal = 'Save';
        this.modelheaderval = 'Add Membership Plan';


        this.AddPlanForm = this.formBuilder.group({

            MbrShipId: [''],
            MbrShipName: ['', Validators.required],
            MbrShipAmt: ['', Validators.required],
            MbrShipDurationInDays: ['', Validators.required],
            StartDt: [''],
            EndDt: [''],
            Description: [''],

        });

        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrShipName != undefined) {

                this.MbrShipId = params.MbrShipId;
                this.MbrShipName = params.MbrShipName;
                this.MbrShipAmt = params.MbrShipAmt;
                this.MbrShipDurationInDays = params.MbrShipDurationInDays;
                this.StartDt = params.StartDt;
                this.EndDt = params.EndDt;
                this.Description = params.Description;

                this.btnVal = 'update';
                this.modelheaderval = 'Update Plan';

            }
        })
    }

    onSubmit() {
        this.submitted = true;
        if (!this.AddPlanForm.invalid) {
            if (this.btnVal == "Save") {
                this.gymServices.AddPlan(this.AddPlanForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/MbrPlans"]);
                    }
                    else {
                        alert("Incorrect Creiditials");
                    }
                }, error => alert(error.message))
            }
            else { // Update 
                this.gymServices.UpdatePlan(this.AddPlanForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/MbrPlans"]);
                    }
                    else {
                        alert("Incorrect Creiditials");
                    }
                }, error => alert(error.message))
            }
        }
    }

    onCancel() {
        return this._router.navigate(["/MbrPlans"]);
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;

    }

    get fval() {
        return this.AddPlanForm.controls;
    }

}
