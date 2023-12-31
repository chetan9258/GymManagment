import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNull } from 'util';
import { GymMembersClass } from '../Models/GymMembersClass';
import { GymService } from '../services/gym.service';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {

    AddSalaryForm: UntypedFormGroup;
    _SalMembers: GymMembersClass[] = [];

    submitted = false;
     
    MbrId: string;
    MbrDesignation: string;
    SalMonth: string;
    SalPaidDt: string;
    TotalSal: string;
    PaidSal: string;
    TotalLeaves: string;
    Comment: string;

    btnVal: string;
    modelheaderval: any;
    IsSessionEnable: any;

    constructor(private gymServices: GymService, public formBuilder: UntypedFormBuilder, private _router: Router, public route: ActivatedRoute) { }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.btnVal = 'Save';
        this.modelheaderval = 'Add PT Member';

        this.AddSalaryForm = this.formBuilder.group({

            MbrId: ['', Validators.required],
            MbrDesignation: ['',],
            SalMonth: ['', Validators.required],
            SalPaidDt: ['', Validators.required],
            TotalSal: ['',],
            PaidSal: ['', Validators.required],
            TotalLeaves: [''],
            Comment: ['',],
             
        });

        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrName != undefined) {
                this.MbrId = params.MbrId;
                this.MbrDesignation = params.MbrDesignation;
                this.SalMonth = params.SalMonth;
                this.SalPaidDt = params.SalPaidDt;
                this.TotalSal = params.TotalSal;
                this.PaidSal = params.PaidSal;
                this.TotalLeaves = params.TotalLeaves;
                this.Comment = params.Comment;
                 
                this.btnVal = 'update';
                this.modelheaderval = 'Update Member';

               
            }
        })


        this.GetAllMembers();
  }

    get fval() {
        return this.AddSalaryForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (!this.AddSalaryForm.invalid) {
            if (this.btnVal == "Save") {

                debugger;
                this.gymServices.SaveSalaryMst(this.AddSalaryForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/AddSalary"]);
                    }

                }, error => alert(error.message))
            }
            else { // Update 
                this.gymServices.UpdateSalaryMst(this.AddSalaryForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/AddSalary"]);
                    }

                }, error => alert(error.message))
            }
        }
    }

    onCancel() {
        return this._router.navigate(["/SalaryDetails"]);
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;

    }

    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!isNull(result)) { 
                this._SalMembers = result.filter(x => x.MbrType != "GymMember");
                this.ShowDesignations(this.MbrId);

            }
        }, error => alert(error.message))
    }

    ShowDesignations(value) {

        this.MbrDesignation = this._SalMembers.find(x => x.MbrId == value).MbrType.toString();
        this.TotalSal = this._SalMembers.find(x => x.MbrId == value).MbrSalary.toString();
         
    }

}
