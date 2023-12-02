import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

@Component({
    selector: 'app-add-remaining-balance',
    templateUrl: './add-remaining-balance.component.html',
    styleUrls: ['./add-remaining-balance.component.css']
})
export class AddRemainingBalanceComponent implements OnInit {

    AddRemBalForm: FormGroup;
    _PTMembers: GymMembersClass[] = [];
    _PTTrainer: GymMembersClass[] = [];
    _MbrPlans: MbrShipPlanClass[] = [];
    submitted = false;

    MbrId: string;
    MbrName: string;
    MbrShipId: string;
    RemBalance: string;
    MembershipType: string;
    Discription: string;
    BalRemaining: string;
    PaidDt: string;
    PaidBy: string;
    PaidAmt: string;
    MbrshipStartDt: string;
    MbrshipEndDt: string;
    IsSessionEnable: boolean;

    constructor(private gymServices: GymService, public formBuilder: FormBuilder, private _router: Router, public route: ActivatedRoute) {

    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.AddRemBalForm = this.formBuilder.group({

            MbrId: ['', Validators.required],
            MbrName: ['', Validators.required],
            MbrShipId: ['', Validators.required],
            RemBalance: ['', Validators.required],
            MembershipType: ['', Validators.required],
            PaidDt: ['', Validators.required],
            PaidBy: ['', Validators.required],
            PaidAmt: ['', Validators.required],
            BalRemaining: [''],
            Discription: [''],
            MbrshipStartDt: ['', Validators.required],
            MbrshipEndDt: ['', Validators.required],
        });



        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrName != undefined) {

                this.MbrId = params.MbrId;
                this.MbrName = params.MbrName;
                this.MbrShipId = params.MbrShipId;
                this.RemBalance = params.RemBalance;
                this.MembershipType = params.MembershipType;
                this.MbrshipStartDt = params.MbrshipStartDt;
                this.MbrshipEndDt = params.MbrshipEndDt;
            }
        })
        this.GetAllMemberShipPlan();

    }

    get fval() {
        return this.AddRemBalForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        debugger;
        if (!this.AddRemBalForm.invalid) {
            // adding new remaining balance to existing 
            this.AddRemBalForm.value.RemBalance = this.BalRemaining;
            this.gymServices.AddPTMembers(this.AddRemBalForm.value).subscribe(result => {
                if (!isNull(result)) {
                    alert(result);
                    return this._router.navigate(["/RemainingBalance"]);
                }

            }, error => alert(error.message))

        }
    }

    onCancel() {
        return this._router.navigate(["/RemainingBalance"]);
    }

    GetAllMemberShipPlan() {
        this.gymServices.GetAllMemberShipPlan().subscribe(res => {
            this._MbrPlans = res;

        },
            error => alert(error.message));
    }

    //BalanceAmount(event): boolean {

    //    let amt;
    //    if (this.PaidAmt != undefined)
    //        amt = this.PaidAmt + event.key;
    //    else
    //        amt = event.key;

    //    if (JSON.parse(amt) > 0) {
    //        let valu = JSON.parse(this.RemBalance) - JSON.parse(amt);
    //        this.BalRemaining = JSON.parse(valu.toString());
    //    }
    //    return true;

    //}
}
