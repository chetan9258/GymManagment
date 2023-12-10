import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { BtnRendererComponent } from '../Renders/btn-renderer.component';


@Component({
  selector: 'app-renewal-membership',
  templateUrl: './renewal-membership.component.html',
  styleUrls: ['./renewal-membership.component.css']
})
export class RenewalMembershipComponent implements OnInit {
    public gridApi;
    public gridColumnApi;
    public columnDefs;
    frameworkComponents: any;
    closeResult: string;
    IsSessionEnable: boolean;

    constructor(private gymServices: GymService, private _router: Router, public route: ActivatedRoute) {
        this.frameworkComponents = {
            buttonRenderer: BtnRendererComponent,
        }

        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,

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
                headerName: 'Mobile No',
                field: 'MbrMob',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Membership Plan',
                field: 'MbrShipName',
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
                headerName: 'Membership Type',
                field: 'MembershipType',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Last Payment',
                field: 'PaidAmt',
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Last Payment Date',
                field: 'PaidDt',
                filter: 'agTextColumnFilter'
                 
            },
            {
                headerName: 'Expire Date',
                field: 'MbrshipEndDt',
                filter: 'agTextColumnFilter'
                 
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    label: 'Click'
                } 
            }, 
        ];
     }

    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
  }
     
    
    onBtnClick(e) { 
        return this._router.navigate(["/RenewalPayments"], { queryParams: e.rowData }); 
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetMembershipGoingtoExxpiredMembers().subscribe(result => {
            if (!isNull(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                
                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message))
    }
     
}
