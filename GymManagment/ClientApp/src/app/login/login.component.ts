 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginform: FormGroup;

    constructor(private gymServices: GymService, public formBuilder: FormBuilder, private _router: Router) { } /*, public nav: NavMenuComponent*/

    ngOnInit() { 
        this.loginform = this.formBuilder.group({
            MobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            password: ['', Validators.required]
        });
    }

    onSubmit() { 
        if (this.loginform.controls.MobileNo.value == undefined || this.loginform.controls.MobileNo.value.length != 10) {
            alert("Please provide valid 10 digit number");
            return;
        }

        if (this.loginform.controls.password.value == undefined || this.loginform.controls.password.value.length != 5) {
            alert("Invalid password");
            return;
        }

        this.gymServices.login(this.loginform.controls.MobileNo.value, this.loginform.controls.password.value).subscribe(result => {
            if (!isNull(result.access_token)) {  
                localStorage.setItem("token", result.access_token);
                localStorage.setItem("isAdmin", 'false');

                return this._router.navigate(["/Home"]);
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

    get fval() {
        return this.loginform.controls;
    }

}
