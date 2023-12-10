import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-gym-expenses',
  templateUrl: './gym-expenses.component.html',
  styleUrls: ['./gym-expenses.component.css']
})
export class GymExpensesComponent implements OnInit {

    public gridApi;
    public gridColumnApi;
    public columnDefs;
    frameworkComponents: any;
    closeResult: string;
    IsSessionEnable: boolean;
    public rowData;
    constructor(private gymServices: GymService, private _router: Router, public route: ActivatedRoute) {
        this.frameworkComponents = {
            buttonRenderer: BtnCellRendererComponent,
        }
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'ExpensesId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,

            },
            {
                headerName: 'Date',
                field: 'ExpenseDate',
                Filter: true,
                enableSorting: true,
                sortable: true,
                cellRenderer: (params) => {
                    const date = new Date(params.value);
                    const formattedDate = date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
                    return formattedDate;
                },
                filter: 'agTextColumnFilter'


            },
            {
                headerName: 'Category',
                field: 'Category',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Amount',
                field: 'Amount',
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
                sortable: true,
                filter: 'agTextColumnFilter'

            }, 
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeleteMember.bind(this),

                },
                filter: 'agTextColumnFilter'


            },

        ];

    }

    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
  }

    AddExpense() {
        return this._router.navigate(["/AddExpenses"]);
    }

    onBtnClick(e) {
        
        return this._router.navigate(["/AddExpenses"], { queryParams: e.rowData });
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllExpense().subscribe(result => {
            if (!isNull(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                this.rowData = null;
            }
        }, error => alert(error.message))
    }

    OnDeleteMember(params) {
        alert(params.ExpensesId);
        this.gymServices.DeleteExpense(params.ExpensesId).subscribe(result => {
            if (!isNull(result)) {
                alert('Deleted Successfully !');
                return this._router.navigate(["/GymExpenses"]);
            }
            else {
                alert("Error !");
            }
        }, error => alert(error.message))
    }
}
