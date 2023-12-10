import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { EditBtnRendererComponent } from '../Renders/edit-btn-renderer.component';



@Component({
    selector: 'app-remaining-balance',
    templateUrl: './remaining-balance.component.html',
    styleUrls: ['./remaining-balance.component.css']
})
export class RemainingBalanceComponent implements OnInit {

    //public gridApi;
    //public gridColumnApi;
    //public columnDefs;
    //frameworkComponents: any;
    //closeResult: string;
    //IsSessionEnable: boolean;

    //constructor(private gymServices: GymService, private _router: Router, public route: ActivatedRoute) {

    //    this.frameworkComponents = {
    //        buttonRenderer: EditBtnRendererComponent,
    //    }

    //    this.columnDefs = [
    //        {
    //            headerName: 'Id',
    //            field: 'MbrId',
    //            Filter: true,
    //            enableSorting: true,
    //            sortable: true,
    //            hide: true,

    //        },
    //        {
    //            headerName: 'Name',
    //            field: 'MbrName',
    //            Filter: true,
    //            enableSorting: true,
    //            sortable: true,
    //            filter: 'agTextColumnFilter'


    //        },
    //        {
    //            headerName: 'Mobile',
    //            field: 'MbrMob',
    //            Filter: true,
    //            enableSorting: true,
    //            sortable: true,
    //            filter: 'agTextColumnFilter'


    //        },
    //        {
    //            headerName: 'Membership Plan',
    //            field: 'MbrShipName',
    //            Filter: true,
    //            enableSorting: true,
    //            sortable: true,
    //            filter: 'agTextColumnFilter'

    //        }, 
    //        {
    //            headerName: 'Batch',
    //            field: 'MbrBatch',
    //            Filter: true,
    //            enableSorting: true,
    //            sortable: true,
    //            filter: 'agTextColumnFilter'

    //        },
    //        {
    //            headerName: 'Last Paid Amount',
    //            field: 'lastPaidAmt',
    //            filter: 'agTextColumnFilter'

    //        },
    //        {
    //            headerName: 'Last Payment Date',
    //            field: 'PaidDt',
    //            filter: 'agTextColumnFilter'

    //        },
    //        {
    //            headerName: 'Last Paid By',
    //            field: 'LastPaidBy',
    //            filter: 'agTextColumnFilter'

    //        },
    //        {
    //            headerName: 'Remaining Balance',
    //            field: 'RemBalance',
    //            filter: 'agTextColumnFilter'


    //        },
    //        {
    //            headerName: 'Membership StartDt',
    //            field: 'MbrshipStartDt',
    //            filter: 'agTextColumnFilter'


    //        },
    //        {
    //            headerName: 'Membership EndDt',
    //            field: 'MbrshipEndDt',
    //            filter: 'agTextColumnFilter'


    //        },
    //        {
    //            headerName: 'Payment of',
    //            field: 'MembershipType',
    //            filter: 'agTextColumnFilter'

    //        },
    //        {
    //            headerName: 'Action',
    //            cellRenderer: 'buttonRenderer',
    //            cellRendererParams: {
    //                onClick: this.onBtnClick.bind(this),

    //            } 
    //        },

    //    ];
    //}

    ngOnInit() {
        //this.IsSessionEnable = this.gymServices.CheckToken();
        //if (!this.IsSessionEnable)
        //    return this._router.navigate([""]);
    }

    //onBtnClick(e) {
    //    /*alert(e.rowData);   */
    //    return this._router.navigate(["/AddRemainingBalance"], { queryParams: e.rowData });
    //}

    //onGridReady(params) {
    //    params.api.sizeColumnsToFit();
    //    this.gridApi = params.api;
    //    this.gridColumnApi = params.columnApi;
    //    let dataValue; 
    //    this.gymServices.GetAllMemberShipPlanUser().subscribe(result => {
    //        if (!isNull(result)) {

    //            dataValue = result;
    //            params.api.setRowData(dataValue);
    //        }
    //        else {

    //            dataValue = "";
    //            params.api.setRowData(dataValue);
    //        }
    //    }, error => alert(error.message))
    //}

}
