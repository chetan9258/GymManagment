import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { GymService } from '../services/gym.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { isNull } from 'util';
import { GymMembersClass } from '../Models/GymMembersClass';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
    selector: 'app-send-message',
    templateUrl: './send-message.component.html',
    styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

    //dropdownList = [];
    selectedItems = []; 
    dropdownSettings: IDropdownSettings;

    SendMsgForm: FormGroup;
    submitted = false;
    _Members: GymMembersClass[] = [];
    IsSessionEnable: any;
   
    MbrType: any;
    MbrMessage: any;
    constructor(public formBuilder: FormBuilder, private _router: Router, private gymServices: GymService) {

    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.SendMsgForm = this.formBuilder.group({

           
            MbrType: ['', Validators.required],
            MbrMessage: ['', Validators.required],
           
        });

        this.GetAllMembers();
         
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'MbrId',
            textField: 'MbrName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        }; 
    }
     
    onSubmit() {
        debugger;
        this.submitted = true;
        if (!this.SendMsgForm.invalid) {
            this.gymServices.SendPromotionMessage(this.selectedItems).subscribe(result => {
                alert('Message Send');

            }, error => alert(error.message))
        }
    }

    onItemSelect(item: any) {
        this.selectedItems.push(item.MbrId);
    }
    onSelectAll(items: any) {
         this.selectedItems.push(items.map(x => x.MbrId));
    }

    GetAllMembers() {
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!isNull(result)) {
                this._Members = result.filter(x => x.MbrType == "GymMember");
                  
            }
        }, error => alert(error.message))
    }

    get fval() {
        return this.SendMsgForm.controls;
    }
}
