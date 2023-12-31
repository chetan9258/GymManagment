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
import { GridOptions } from 'ag-grid-community';
import * as XLSX from 'xlsx';


@Component({
    selector: 'app-all-reports',
    templateUrl: './all-reports.component.html',
    styleUrls: ['./all-reports.component.css']
})
export class AllReportsComponent implements OnInit {
    IsSessionEnable: any;
    AllReportsForm: UntypedFormGroup;
    rdValue: any;
    public  gridApi;
    public gridColumnApi;
    public columnDefs;
    public rowData;
    MemberId: string;
    optionValue: boolean = false;
    _Members: GymMembersClass[] = [];

    constructor(private gymServices: GymService, public formBuilder: UntypedFormBuilder, private _router: Router) {
        this.columnDefs = [

            {
                headerName: 'Name',
                field: 'MbrName',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Mobile No',
                field: 'MbrMob',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'DOB',
                field: 'MbrDOB',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Marrial Status',
                field: 'MbrMarrialStatus',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Email',
                field: 'MbrEmail',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Addr',
                field: 'MbrAddr',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'City',
                field: 'MbrCity',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'State',
                field: 'MbrState',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Pincode',
                field: 'MbrPincode',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'PT Charges',
                field: 'MbrPTCharges',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Batch',
                field: 'MbrBatch',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Desciption',
                field: 'GeneralDesc',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Gender',
                field: 'MbrGender',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Membership Name',
                field: 'MbrShipName',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'MemberShip Start Dt',
                field: 'MbrshipStartDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'MemberShip End Dt',
                field: 'MbrshipEndDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Amt',
                field: 'PaidAmt',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Paid Dt',
                field: 'PaidDt',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Paid By',
                field: 'PaidBy',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership',
                field: 'MembershipType',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Remaining Bal',
                field: 'RemBalance',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Total Members',
                field: 'TotalMembers',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Total Earn',
                field: 'TotalEarn',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Total Amount',
                field: 'TotalAmount',
                filter: 'agTextColumnFilter'
            }

        ];

    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);


        this.AllReportsForm = this.formBuilder.group({
            MemberId: ['', [Validators.required, Validators.min(1)]],

        });

        this.GetAllMembers();

    }

    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!isNull(result)) {
                this._Members = result;
            }

        }, error => alert(error.message))
    }

    OnReportChanges(e) {
        this.rdValue = e.target.value;

        if (e.target.value == 'YearlyReport') {
            this.optionValue = true;
        }
        else
            this.optionValue = false;
    }

    onGridReady(params) {
        debugger;
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

    }

    onSubmit() {

        debugger;
        this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrMob', 'MbrDOB', 'MbrMarrialStatus', 'MbrEmail', 'MbrAddr', 'MbrCity', 'MbrState', 'MbrPincode', 'MbrPTCharges', 'MbrBatch', 'GeneralDesc', 'MbrGender', 'MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'PaidAmt', 'PaidDt', 'PaidBy', 'MembershipType', 'RemBalance', 'TotalAmount', 'TotalEarn', 'TotalMembers'], false);

        if (this.rdValue == "YearlyReport") {

            if (this.MemberId != null) {
                this.gymServices.GetMemberYearlyReport(this.MemberId).subscribe(result => {
                    if (!isNull(result)) {
                        this.rowData = result;
                        this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrMob', 'MbrDOB', 'MbrMarrialStatus', 'MbrEmail', 'MbrAddr', 'MbrCity', 'MbrState', 'MbrPincode', 'MbrPTCharges', 'MbrBatch', 'GeneralDesc', 'MbrGender', 'MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'PaidAmt', 'PaidDt', 'PaidBy', 'MembershipType', 'RemBalance'], true);
                    }
                    else {

                        this.rowData = "";

                    }

                }, error => alert(error.message))
            }
            else {
                alert("Please select Members")
            }

        }
        else if (this.rdValue == "FinantialReport") {

            //this.gymServices.().subscribe(result => {
            //    if (!isNull(result)) {
            //        alert(result);
            //        return this._router.navigate(["/PTDetails"]);
            //    }

            //}, error => alert(error.message))
        }
        else if (this.rdValue == "Summury") {
            this.gymServices.GetSummaryReport().subscribe(result => {
                if (!isNull(result)) {
                    this.rowData = result;
                    this.gridColumnApi.setColumnsVisible(['MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'TotalMembers', 'TotalEarn'], true);

                }
                else {

                    this.rowData = "";

                }

            }, error => alert(error.message))
        }
        else if (this.rdValue == "MbrShipReport") {
            this.gymServices.GetMembershipReport().subscribe(result => {
                if (!isNull(result)) {
                    this.rowData = result;

                    this.gridColumnApi.setColumnsVisible(['MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'TotalMembers', 'TotalEarn'], true);


                }
                else {

                    this.rowData = "";

                }

            }, error => alert(error.message))
        }
        else if (this.rdValue == "PersonalTraining") {
            this.gymServices.GetPTReport().subscribe(result => {
                if (!isNull(result)) {
                    this.rowData = result;
                    this.gridColumnApi.setColumnsVisible(['MbrName', 'TotalAmount'], true);

                }
                else {

                    this.rowData = "";

                }

            }, error => alert(error.message))
        }
    }

    exportToExcel(): void {
        // Get the grid data
        const rowData = this.rowData;

        // Create a new workbook
        const workbook = XLSX.utils.book_new();

        // Create a new worksheet
        const worksheet = XLSX.utils.json_to_sheet(rowData);

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

        // Generate the Excel file
        XLSX.writeFile(workbook, 'data.xlsx');
    }

}
