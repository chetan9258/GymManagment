import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNull } from 'util';
import { GymService } from '../services/gym.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    ForgotPasswordform: UntypedFormGroup;

    constructor(private gymServices: GymService, public formBuilder: UntypedFormBuilder, private _router: Router) { }

    ngOnInit() {
        /*this.nav.hide();*/

        this.ForgotPasswordform = this.formBuilder.group({
            EmailAdr: ['', Validators.required],
        });
    }

    onSubmit() {
        //return this._router.navigate(["/Employee"]);

        this.gymServices.ForgotPassword(this.ForgotPasswordform.controls.EmailAdr.value).subscribe(result => {
            if (!isNull(result.access_token)) { 
                return this._router.navigate(["/Login"]);
            }

        }, error => alert(error.message))
    }
}
