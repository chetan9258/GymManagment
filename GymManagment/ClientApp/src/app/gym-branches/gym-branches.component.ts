import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';
import { first } from 'rxjs/operators';
import { isNull } from 'util';
import { Router } from '@angular/router';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';


@Component({
  selector: 'app-gym-branches',
  templateUrl: './gym-branches.component.html',
  styleUrls: ['./gym-branches.component.css']
})
export class GymBranchesComponent implements OnInit {

    private gridApi;
    private gridColumnApi;
    private columnDefs;
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
                field: 'test2',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Address',
                field: 'test3',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
            {
                headerName: 'Contact No',
                field: 'test3',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'

            },
             {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParam: {

                }

            },

        ];
    }

    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
  }

    AddEmployee() {
        return this._router.navigate(["/AddBranches"]);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        let dataValue;
        dataValue = [{ "test2": "Branch 1", "test3": "002" },
                    { "test2": "Branch 2", "test3": "004" },
                    { "test2": "Branch 3", "test3": "006" },
                    { "test2": "Branch 4", "test3": "008" }]

        //this.gymServices.GetAllEmployee().subscribe(result => {
        //    if (!isNull(result.data)) {
        //        dataValue = result.data;
        //    }
        //    else {
        //        alert("Incorrect Creiditials");
        //    }
        //}, error => alert(error.message))

        params.api.setRowData(dataValue);
    }
}
