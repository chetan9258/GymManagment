
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
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-add-ptdetails',
  templateUrl: './add-ptdetails.component.html',
  styleUrls: ['./add-ptdetails.component.css']
})
export class AddPTDetailsComponent implements OnInit {

    AddPTForm: FormGroup;
    _PTMembers: GymMembersClass[] = [];
    _PTTrainer: GymMembersClass[] = [];
    _MbrPlans: MbrShipPlanClass[] = [];
    submitted = false;

    MbrId: string;
    MbrUserId: string;
    MbrShipId: string;
    TrainerId: string; 
    MbrPtDays: string;
    MbrPTChargesofTrainer: string;
    PaidAmt: string;
    PaidBy: string;
    PaidDt: string;
    MbrshipStartDt: string;
    MbrshipEndDt: string;
    Discription: string;
    PTSessions: string;
    MembershipType: string = 'PT';
    date: Date;
    btnVal: any;
    modelheaderval: any;
    IsSessionEnable: any;

    constructor(private gymServices: GymService, public formBuilder: FormBuilder, private _router: Router, public route: ActivatedRoute, public datepipe: DatePipe) {

    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);


        this.btnVal = 'Save';
        this.modelheaderval = 'Add PT Member';

        this.AddPTForm = this.formBuilder.group({
              
            MbrId: ['', Validators.required],
            MbrUserId: [''],
            MbrShipId: ['', Validators.required],
            TrainerId: ['', Validators.required],
            MbrPtDays: [''],  
            PaidAmt: ['', Validators.required],
            PaidBy: ['', Validators.required],
            PaidDt: ['', Validators.required],
            MbrshipStartDt: [''],
            MbrshipEndDt: [''],
            Discription: [''],
            PTSessions: [''],
            MbrPTChargesofTrainer: [''],
            MembershipType: [''],
            
        });

        

        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrName != undefined) {

                //this.GetAllMemberShipPlan();
                //this.GetAllMembers();

                this.MbrId = params.MbrId;
                this.MbrUserId = params.MbrUserId;
                this.MbrShipId = params.MbrShipId;
                this.TrainerId = params.TrainerId; 
                //this.MbrPtDays = params.MbrPtDays;  
                //this.showPersonalTrainingPlans(params.MbrShipId)
                this.PaidAmt = params.PaidAmt;
                this.PaidBy = params.PaidBy;
                this.PaidDt = params.PaidDt;
                this.MbrshipStartDt = params.MbrshipStartDt;
                this.MbrshipEndDt = params.MbrshipEndDt;
                this.Discription = params.Discription;
                this.PTSessions = params.PTSessions;
                this.MembershipType = 'PT';
                
                //this.MbrPTChargesofTrainer = params.MbrPTChargesofTrainer;
                //this.showPTTrainerCharges(params.MbrId)

                this.btnVal = 'update';
                this.modelheaderval = 'Update Member';



            }
        })
        this.GetAllMemberShipPlan();
        this.GetAllMembers();
       

    }

    get fval() {
        return this.AddPTForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (!this.AddPTForm.invalid) {
            if (this.btnVal == "Save") {
                 
                debugger;
                this.gymServices.AddPTMembers(this.AddPTForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/PTDetails"]);
                    }

                }, error => alert(error.message))
            }
            else { // Update 
                this.gymServices.UpdatePTMembers(this.AddPTForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/PTDetails"]);
                    }

                }, error => alert(error.message))
            }
        }
    }

    onCancel() {
        return this._router.navigate(["/PTDetails"]);
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;

    }
  
    GetAllMemberShipPlan() {
        this.gymServices.GetAllMemberShipPlan().subscribe(res => {
            this._MbrPlans = this._PTMembers = res.filter(x => x.PlanType == "PT");;
            if (this.MbrShipId != undefined) {
                this.showPersonalTrainingPlans(this.MbrShipId)
            }
             
        },
            error => alert(error.message));
    }

    onDateChange(value) {
        this.date = new Date(value.srcElement.value);
        this.date.setDate(this.date.getDate() + +this.MbrPtDays);
        this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    }


    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!isNull(result)) {
                this._PTMembers = result.filter(x => x.MbrType == "GymMember");
                this._PTTrainer = result.filter(x => x.MbrType == "FloorManager" || x.MbrType == "Trainer");

                if (this.TrainerId != undefined) {
                    this.showPTTrainerCharges(this.TrainerId)
                }

            }
        }, error => alert(error.message))
    }

    showPersonalTrainingPlans(value) {

        this.MbrPtDays = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipDurationInDays.toString()

    }
     

    showPTTrainerCharges(value) {
         
        this.MbrPTChargesofTrainer = this._PTTrainer.find(x => x.MbrId == value).MbrPTCharges

    }

}
