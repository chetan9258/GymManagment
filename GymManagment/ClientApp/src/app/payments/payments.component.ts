import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

    private gridApi;
    private gridColumnApi;
    private columnDefs; 
    closeResult: string;
    IsSessionEnable: boolean;

    constructor(private gymServices: GymService, private _router: Router, public route: ActivatedRoute) { /*, private modalService: NgbModal */
         
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
                headerName: 'Designaion',
                field: 'MbrType',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Plan',
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
                headerName: 'Member Ship',
                field: 'MembershipType',
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
        this.gymServices.GetPaymentDetails().subscribe(result => {
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
