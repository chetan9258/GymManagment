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

import { MbrShipPlanClass } from '../Models/mbr-ship-plan-class.model';
import { GymMembersClass } from '../Models/GymMembersClass';
//import { debug } from 'console';

@Component({
    selector: 'app-gym-profile',
    templateUrl: './gym-profile.component.html',
    styleUrls: ['./gym-profile.component.css']
})
export class GymProfileComponent implements OnInit {

    GymProfileForm: FormGroup;
    submitted = false;

    GymProfileId: string;
    FName: string;
    LName: string;
    GymName: string;
    Address: string;
    EMailId: string;
    MbrShipName: string;
    MbrshipStartDt: string;
    MbrshipEndDt: string;
    PaidAmt: string;
    mbrShipStatus: string;
    MobileNumber: string;
    Website: string;
    GSTNo: string;
    AddedBy: string;
    OldPassword: string;
    NewPassword: string;
    ConfirmPassword: string;
    IsSessionEnable: boolean;
    OTPValue: string;
    btnValue: string ;
    isShown: boolean = false; // hidden by default

    constructor(private gymServices: GymService, public formBuilder: FormBuilder, private _router: Router, public route: ActivatedRoute) { }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        if (localStorage.getItem('isAdmin') != null && localStorage.getItem('isAdmin') == "false") {
            this.btnValue = "Activate Admin Profile";
        }
        else {
            this.btnValue = "De-Activate Admin Profile";
        }

        this.GymProfileForm = this.formBuilder.group({

            GymProfileId: [''],
            FName: [''],
            LName: [''],
            GymName: ['', Validators.required],
            Address: [''],
            EMailId: [''],
            MbrShipName: [''],
            PaidAmt: [''],
            mbrShipStatus: [''],
            MbrshipStartDt: [''],
            MbrshipEndDt: [''],
            GSTNo: [''],
            Password: [''],
            MobileNumber: [''],
            Website: [''],
            AddedBy: [''],
            OldPassword: ['', Validators.required],
            NewPassword: ['', Validators.required],
            ConfirmPassword: ['', Validators.required],
            OTPValue: [''],
        });


        this.GetGymProfile();

    }

    onSubmit(param) {
        debugger;
        this.submitted = true;
         
        if (param.target.value == "Update Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();

            if (!this.GymProfileForm.invalid) {
                this.gymServices.UpdateGymProfileDetails(this.GymProfileForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert("Data Updated.");
                        this.GymProfileForm.controls['OldPassword'].enable();
                        this.GymProfileForm.controls['NewPassword'].enable();
                        this.GymProfileForm.controls['ConfirmPassword'].enable();
                        return this._router.navigate(["/GymProfile"]);
                    }
                    else {

                        this.GymProfileForm.controls['OldPassword'].enable();
                        alert("Error !");
                    }
                }, error => alert(error.message))
            }
        }
        else if (param.target.value == "Activate Admin Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();

            if (!this.GymProfileForm.invalid) {
                this.isShown = true;
            }
        }
        else if (param.target.value == "De-Activate Admin Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();

            if (!this.GymProfileForm.invalid) {
                this.isShown = true;
                this.btnValue = "Activate Admin Profile";
                localStorage.setItem("isAdmin", 'false');
                return this._router.navigate(["/Home"]);

            }
        }
        else { // Update 
            if (!this.GymProfileForm.invalid) {
                this.gymServices.UpdatePassowrd(this.GymProfileForm.value).subscribe(result => {
                    if (isNull(result)) {
                        alert("Password Updated.");
                        return this._router.navigate(["/GymProfile"]);
                    }
                    else {
                        alert("Incorrect Creiditials");
                    }
                }, error => alert(error.message))

            }
        }

    }

    GetGymProfile() {
        debugger;
        this.gymServices.GetGymProfileDetails().subscribe(result => {
            if (!isNull(result)) {
                this.GymProfileId = result.GymProfileId;
                this.FName = result.FName;
                this.LName = result.LName;
                this.GymName = result.GymName;
                this.Address = result.Address;
                this.EMailId = result.EMailId;
                this.MbrShipName = result.MbrShipName;
                this.PaidAmt = result.PaidAmt;
                this.mbrShipStatus = result.mbrShipStatus;
                this.MbrshipStartDt = result.MbrshipStartDt;
                this.MbrshipEndDt = result.MbrshipEndDt;
                this.GSTNo = result.GSTNo;
                this.MobileNumber = result.MobileNumber;
                this.Website = result.Website; 
            }

        }, error => alert(error.message))
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;

    }

    VerifyOTP(event): boolean {

        if ((this.OTPValue.length + 1) == 6) {

            // Verify OTP From DB
            if (!this.GymProfileForm.invalid) {
                this.gymServices.VerifyOTP(this.OTPValue + event.key).subscribe(result => {
                    if (!isNull(result)) {
                        if (result) {
                            this.isShown = false;
                            this.btnValue = "De-Activate Admin Profile";
                            localStorage.setItem("isAdmin", 'true');
                            return this._router.navigate(["/Home"]);

                        }
                        else {

                        }
                    }
                    else {
                        alert("Incorrect OTP");
                    }
                }, error => alert(error.message))
            }
        }
        return true;
    }

    get fval() {
        return this.GymProfileForm.controls;
    }

}
