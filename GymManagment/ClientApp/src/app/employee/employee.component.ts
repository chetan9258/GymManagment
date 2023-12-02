import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    private gridApi;
    private gridColumnApi;
    private columnDefs;
    private rowData;
    frameworkComponents: any;
    closeResult: string;
    IsSessionEnable: boolean;
  
    constructor(private gymServices: GymService, private _router: Router, public route: ActivatedRoute) { /*, private modalService: NgbModal */
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
                headerName: 'DOB',
                field: 'MbrDOB',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            }, 
            {
                headerName: 'Email',
                field: 'MbrEmail',
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Address',
                field: 'MbrAddr',
                filter: 'agTextColumnFilter'

            }, 
            {
                headerName: 'Member Ship',
                field: 'MbrShipName',
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
             
        ];    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

  }
    AddEmployee() {
        return this._router.navigate(["/AddEmployee"]);
    }

    onBtnClick(e) {
        /*alert(e.rowData);   */
        return this._router.navigate(["/AddEmployee"], { queryParams: e.rowData });
    }

    onGridReady(params) {
        debugger;
        params.api.sizeColumnsToFit(); 
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
         let dataValue; 
        this.gymServices.GetAllMembers().subscribe(result => {
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
        this.gymServices.DeleteMember(data.MbrId).subscribe(result => {
            if (!isNull(result)) {
                alert('Member Deleted Successfully !');

                this.gymServices.GetAllMembers().subscribe(result => {
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
