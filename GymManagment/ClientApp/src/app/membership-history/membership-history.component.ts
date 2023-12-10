import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GymMembersClass } from '../Models/GymMembersClass';


@Component({
    selector: 'app-membership-history',
    templateUrl: './membership-history.component.html',
    styleUrls: ['./membership-history.component.css']
})
export class MembershipHistoryComponent implements OnInit {

    MbrHistoryForm: FormGroup;
    public gridApi;
    public gridColumnApi;
    public columnDefs;
    frameworkComponents: any;
    closeResult: string;
    public rowData;
    PtMemberId: string;
    _Members: GymMembersClass[] = [];
    IsSessionEnable: boolean;

    constructor(private gymServices: GymService, private _router: Router, public route: ActivatedRoute, public formBuilder: FormBuilder) {
        this.frameworkComponents = {
            buttonRenderer: BtnCellRendererComponent,
        }

        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Batch',
                field: 'MbrBatch',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Membership Name',
                field: 'MbrShipName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Membership Amt',
                field: 'MbrShipAmt',
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Paid Amt',
                field: 'PaidAmt',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Paid By',
                field: 'PaidBy',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Paid Dt',
                field: 'PaidDt',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Start Dt',
                field: 'MbrshipStartDt',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'End Dt',
                field: 'MbrshipEndDt',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Type',
                field: 'MembershipType',
                filter: 'agTextColumnFilter'

            },

        ];

    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.MbrHistoryForm = this.formBuilder.group({

            PtMemberId: ['', [Validators.required, Validators.min(1)]],
             
        });

        this.GetAllMembers();

    }

    onGridReady(params) {
        this.rowData = '';
    }

    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!isNull(result)) {
                this._Members = result;
            }

        }, error => alert(error.message))
    }

    showPersonalTrainingPlans(value) {
        
        let MemberId = value;
        this.gymServices.GetGymMemberHistoryById(MemberId).subscribe(result => {
            if (!isNull(result)) { 
                this.rowData = result;
            }
            else {
                 
                this.rowData = null;
            }
        }, error => alert(error.message))

    }
}
