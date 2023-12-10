import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';

@Component({
    selector: 'app-membership-plan',
    templateUrl: './membership-plan.component.html',
    styleUrls: ['./membership-plan.component.css']
})
export class MembershipPlanComponent implements OnInit {
    public gridApi;
    public gridColumnApi;
    public columnDefs;
    frameworkComponents: any;
    closeResult: string;
    IsSessionEnable: boolean;

    constructor(private gymServices: GymService, private _router: Router) {
        this.frameworkComponents = {
            buttonRenderer: BtnCellRendererComponent,
        }
        this.columnDefs = [
            {
                headerName: 'Name',
                field: 'MbrShipName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Amount',
                field: 'MbrShipAmt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Days',
                field: 'MbrShipDurationInDays',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Start Date',
                field: 'StartDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'End Date',
                field: 'EndDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Description',
                field: 'Description',
                Filter: true,
                enableSorting: true,
                sortable: true
            },
            {
                headerName: 'Active/In-Active',
                field: 'Active',
                Filter: true,
                enableSorting: true,
                sortable: true,
                valueGetter: function (params) { 
                    if (params.data.Active == true) {
                        return "Active"
                    } else {
                        return "In-Active"
                    } 
                },
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeletePlan.bind(this),

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
        if (e == undefined)
            return this._router.navigate(["/AddMbrPlans"]);
        else
            return this._router.navigate(["/AddMbrPlans"], { queryParams: e.rowData });
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllMemberShipPlan().subscribe(result => {
            if (!isNull(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                dataValue = "No Data Available";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message))
    }

    OnDeletePlan(mbrId) {
        this.gymServices.DeletePlan(mbrId).subscribe(result => {
            if (!isNull(result)) {
                alert('Member Deleted Successfully !');
                return this._router.navigate(["/Employee"]);
            }
            else {
                alert("Error !");
            }
        }, error => alert(error.message))
    }
}
