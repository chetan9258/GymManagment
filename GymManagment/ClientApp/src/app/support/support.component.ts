import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

    AppSuportForm: UntypedFormGroup;
    submitted = false;
    SupportName: string;
    SupportContact: string;
    SupportSubject: string;
    SupportBody: string; 
    IsSessionEnable: any;

    constructor(public formBuilder: UntypedFormBuilder, private _router: Router, private gymServices: GymService) {
         
    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.AppSuportForm = this.formBuilder.group({

            SupportName: ['', Validators.required],
            SupportContact: ['', Validators.required],
            SupportSubject: ['', Validators.required],
            SupportBody: ['', Validators.required],
 
        });

    }

    onSubmit() {
        debugger;
        this.submitted = true; 
        if (!this.AppSuportForm.invalid) {
            this.gymServices.SendFeedbackEmail().subscribe(result => {
                alert('Feedback Send');

            }, error => alert(error.message))
        }

        
    }

    get fval() {
        return this.AppSuportForm.controls;
    }
}

 