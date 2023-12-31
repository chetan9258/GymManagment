
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
import { ConfirmEqualValidatorDirective } from '../confirm-equal-validator.directive.ts.directive';
import { MbrShipPlanClass } from '../Models/mbr-ship-plan-class.model';
import { GymMembersClass } from '../Models/GymMembersClass';
import { DatePipe } from '@angular/common' 

@Component({
    selector: 'app-all-invoices',
    templateUrl: './all-invoices.component.html',
    styleUrls: ['./all-invoices.component.css']
})
export class AllInvoicesComponent implements OnInit {

    AddInvoiceForm: UntypedFormGroup;
    _InvoiceMbrs: GymMembersClass[] = [];
    _InvoiceMbrsList: MbrShipPlanUserClass[] = [];
     
    IsSessionEnable: any;
    InvoiceNumber: any;
    GymName: any;
    GymAddress: any;
    GymContactNo: any;
    PaidDt: any;
    Serivice1: any;
    PaidAmt: any;
    InvoiceYear: any;
    MbrId: any;
    MbrUserId: any;
    DispayInvoice: any = false;
     
    constructor(private gymServices: GymService, public formBuilder: UntypedFormBuilder, private _router: Router, private datePipe: DatePipe) { }

    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.AddInvoiceForm = this.formBuilder.group({

            InvoiceNumber: [''],
            MbrUGymNameserId: [''],
            GymAddress: [''],
            GymContactNo: [''],
            PaidDt: [''],
            Serivice1: [''],
            PaidAmt: [''],
            InvoiceYear: [''],
            MbrId: [''],
            MbrUserId: [''],
        });

        this.DispayInvoice = false;
    }

    ShowMembersByYear(Year) {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!isNull(result)) {
                result = result.filter(x => x.MbrType != "Enquiry");
                this._InvoiceMbrs = result.filter(x => x.LastUpdatedDt == null ? "" : new Date(x.LastUpdatedDt).getFullYear() == Year);
            }
            else {
                this._InvoiceMbrs = null;
            }
        }, error => alert(error.message))
    }

    GetInvoiceList(MbrId) {
        this.MbrUserId = 'undefined'

        this.gymServices.GetInvoiceList(MbrId).subscribe(result => {
            if (!isNull(result)) {
                this._InvoiceMbrsList = result;
            }
            else {
                this._InvoiceMbrsList = null;

            }
        }, error => alert(error.message))
    }

    ShowInvoice(MbrUserId) {
        this.gymServices.GetInvoice(MbrUserId).subscribe(result => {
            if (!isNull(result)) {
                this.InvoiceNumber = result.InvoiceId;
                this.GymName = result.GymName;
                this.GymAddress = result.Address;
                this.GymContactNo = result.MobileNumber;
                this.Serivice1 = result.MembershipType;
                this.PaidAmt = result.PaidAmt; 
                this.PaidDt = result.PaidDt;
                this.DispayInvoice = true;
            }
        }, error => alert(error.message))
    }
}
