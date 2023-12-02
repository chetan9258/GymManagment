import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-remaining-balance',
  templateUrl: './remaining-balance.component.html',
  styleUrls: ['./remaining-balance.component.css']
})
export class RemainingBalanceComponent implements OnInit {

    private gridApi;
    private gridColumnApi;
    private columnDefs;
    frameworkComponents: any;
    closeResult: string;


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
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true

            },
            {
                headerName: 'Membership Plan',
                field: 'MbrshipPlan',
                Filter: true,
                enableSorting: true,
                sortable: true
            }, 
            {
                headerName: 'Last Payment',
                field: 'lastPayment',
                Filter: true,
                enableSorting: true,
                sortable: true
            },
            {
                headerName: 'Last Payment Date',
                field: 'lastPaymentDt',

            },
            {
                headerName: 'Remaining Balance',
                field: 'RemBalance',

            },

            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),

                }

            },

        ];
    }

  ngOnInit() {
  }

    onBtnClick(e) {
        /*alert(e.rowData);   */
        return this._router.navigate(["/RenewalPayments"], { queryParams: e.rowData });
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllMemberShipPlanUser().subscribe(result => {
            if (!isNull(result)) {
                debugger;
                result = result.filter(m => m.RemBalance > 0)
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
