import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNull } from 'util';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
import { GymMembersClass } from '../Models/GymMembersClass';
import { GymService } from '../services/gym.service';

@Component({
    selector: 'app-salary-master',
    templateUrl: './salary-master.component.html',
    styleUrls: ['./salary-master.component.css']
})
export class SalaryMasterComponent implements OnInit {

    SalaryDetailsForm: FormGroup;

    public gridApi;
    public gridColumnApi;
    public columnDefs;
    frameworkComponents: any;
    closeResult: string;
    IsSessionEnable: boolean;
    chkMbr: any;
    public rowData;
    _Members: GymMembersClass[] = [];
    isShown: boolean = false; // hidden by default
    MemberId: string;


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

            },
            {
                headerName: 'SalMst_Id',
                field: 'SalMst_Id',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'MbrName',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'



            },
            {
                headerName: 'MbrType',
                field: 'MbrType',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'



            },
            {
                headerName: 'SalMonth',
                field: 'SalMonth',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'



            },
            {
                headerName: 'SalPaidDt',
                field: 'SalPaidDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'TotalSal',
                field: 'TotalSal',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'PaidSal',
                field: 'PaidSal',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'TotalLeaves',
                field: 'TotalLeaves',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Comment',
                field: 'Comment',
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeleteSalaryMst.bind(this),

                }

            },

        ];
    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.SalaryDetailsForm = this.formBuilder.group({

            chkMbr: ['',],
            MemberId: ['',],


        });
    }

    AddSalary() {
        return this._router.navigate(["/AddSalary"]);
    }

    onBtnClick(e) {
        /*alert(e.rowData);   */
        return this._router.navigate(["/AddSalary"], { queryParams: e.rowData });
    }


    onGridReady(params) {
        debugger;
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetSalaryMstList().subscribe(result => {
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

    OnDeleteSalaryMst(data) {
        this.gymServices.DeleteMembersSalaryMst(data.SalMst_Id).subscribe(result => {
            if (!isNull(result)) {
                alert('Deleted Successfully !');
                this.gymServices.GetSalaryMstList().subscribe(result => {
                    if (!isNull(result)) {
                        this.rowData = result;
                    }
                    else {

                        this.rowData = "";

                    }
                }, error => alert(error.message))
            }
            else {
                alert("Error !");
            }
        }, error => alert(error.message))
    }

    changed(evt) {
        this.rowData = null;

        if (evt.target.checked) {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], false);
            this.GetAllMembers();
            this.isShown = true;
        }
        else {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], true);
            this.GetSalaryMst();
            this.isShown = false;

        }

    }

    GetSalaryMst() {
        this.gymServices.GetSalaryMstList().subscribe(result => {
            if (!isNull(result)) {
                this.rowData = result;
            }
            else {

                this.rowData = null;
            }
        }, error => alert(error.message))
    }

    GetSalaryMstByMbr(value) {



        this.gymServices.GetSalaryMstListByMbr(value).subscribe(result => {
            if (!isNull(result)) {
                this.rowData = result;
            }
            else {

                this.rowData = '';
            }
        }, error => alert(error.message))
    }

    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!isNull(result)) {
                this._Members = result.filter(x => x.MbrType != "GymMember");
                 
            }

        }, error => alert(error.message))
    }

    changeChk() {
        if (this.chkMbr)
            this.chkMbr = false;
        else
            this.chkMbr = true;

        this.rowData = null;

        if (this.chkMbr) {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], false);
            this.GetAllMembers();
            this.isShown = true;
        }
        else {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], true);
            this.GetSalaryMst();
            this.isShown = false;
        }
    }

}
