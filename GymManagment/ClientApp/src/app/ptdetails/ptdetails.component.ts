import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ptdetails',
  templateUrl: './ptdetails.component.html',
  styleUrls: ['./ptdetails.component.css']
})
export class PTDetailsComponent implements OnInit {

    private gridApi;
    private gridColumnApi;
    private columnDefs;
    frameworkComponents: any;
    closeResult: string;
    IsSessionEnable: boolean;

    private rowData;

    constructor(private gymServices: GymService, private _router: Router, public route: ActivatedRoute) {
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
                headerName: 'MbrUserId',
                field: 'MbrUserId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'MbrShipId',
                field: 'MbrShipId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'TrainerId',
                field: 'TrainerId',
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
                headerName: 'Mobile No',
                field: 'MbrMob',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },  
            {
                headerName: 'Member Ship',
                field: 'MbrType',
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Paid Amount',
                field: 'PaidAmt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Paid By',
                field: 'PaidBy',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            }, 
            {
                headerName: 'Paid Dt',
                field: 'PaidDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Start Dt',
                field: 'MbrshipStartDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'End sDt',
                field: 'MbrshipEndDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeleteMember.bind(this),

                }

            },

        ];     }

    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

  }

    AddPT() {
        return this._router.navigate(["/AddPTDetails"]);
    }

    onBtnClick(e) {
        /*alert(e.rowData);   */
        return this._router.navigate(["/AddPTDetails"], { queryParams: e.rowData });
    }

    onGridReady(params) {
        debugger;
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllPTMembers().subscribe(result => {
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

    OnDeleteMember(data) {
        this.gymServices.DeletePTMembers(data.MbrUserId).subscribe(result => {
            if (!isNull(result)) {
                alert('Member Deleted Successfully !');
                this.gymServices.GetAllPTMembers().subscribe(result => {
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
}
