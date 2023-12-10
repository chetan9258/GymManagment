import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public gridApi;
    public gridColumnApi;
    public columnDefs;
    public gridApi1;
    public gridColumnApi1;
    public columnDefs1;
    closeResult: string;
    IsSessionEnable: boolean;
    GymMember: any=0;
    Trainer: any = 0;
    PT: any = 0;
    Enquiry: any = 0;
    MbrShipExpiring: any=0;
    Events: any;
    
    constructor(private gymServices: GymService, private _router: Router, public route: ActivatedRoute) {
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
                headerName: 'Enquiry for',
                field: 'EnquiryFor',
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Expected date to join ',
                field: 'ExpectedDtToJoin',
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Enquiry Date',
                field: 'enquiryDate',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Last follow up',
                field: 'enquiryDate',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
        ];

        this.columnDefs1 = [
            {
                headerName: 'MbrId',
                field: 'Id',
                Filter: true,
                enableSorting: true,
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
                headerName: 'Designaion',
                field: 'MbrType',
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
                headerName: 'BIRTHDAY',
                field: 'BIRTHDAY',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'AGE',
                field: 'AGE_NOW',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
        ];

    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetDashboardData().subscribe(result => {
            if (!isNull(result)) {
                debugger;
                if (result.countModel != null) {
                    
                    this.GymMember = result.countModel.filter(x => x.MbrType == "GymMember")[0].count; //(result.countModel['GymMember'] == undefined || result.countModel['GymMember'] == null) ? 0 : result.countModel['GymMember'].count;
                    this.Trainer = result.countModel.filter(x => x.MbrType == "Trainer")[0].count;
                    this.PT = result.countModel.filter(x => x.MbrType == "PT")[0].count;
                    this.Enquiry = result.countModel.filter(x => x.MbrType == "Enquiry")[0].count;
                    this.MbrShipExpiring = result.countModel.filter(x => x.MbrType == "MbrShipExpiring")[0].count;
                    this.Events = '0';

                }
                dataValue = result.enquiryModel;
                params.api.setRowData(dataValue);

                if (result.salesModel) {
                    for (let n = 0; n < result.salesModel.length; ++n) {
                        this.saleData.push({ "name": result.salesModel[n].Months, "value": Number(result.salesModel[n].Amt) });
                    }
                }
                // ngs chart does not detect the data change sp we add below line
                this.saleData = [...this.saleData];
            }
            else {

                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message))
    }


    onGridReady1(params) {
        params.api.sizeColumnsToFit();
        this.gridApi1 = params.api;
        this.gridColumnApi1 = params.columnApi;
         
        this.gymServices.GetUpcomingBirthdays().subscribe(result => {
            if (!isNull(result)) {
                params.api.setRowData(result);

            } 
        }, error => alert(error.message))
    }

    saleData = [];
}
