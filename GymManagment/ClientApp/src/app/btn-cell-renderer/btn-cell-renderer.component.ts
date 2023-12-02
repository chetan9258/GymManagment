import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular'
import { Router } from '@angular/router';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';
import { GymService } from '../services/gym.service';

@Component({
  selector: 'app-btn-cell-renderer',
    template: '<img (click)="OnEditClick($event)" src="./assets/Edit_img.png" alt="" class = "picture1" /> <img (click)="OnDelete($event)" src="./assets/Delete_img.png" alt="" class = "picture1" />',
  /*styleUrls: ['./btn-cell-renderer.component.css']*/
})
export class BtnCellRendererComponent implements ICellRendererAngularComp {
    params;
    constructor(private gymServices: GymService, private _router: Router) { }
    _MbrPlans: any;

    agInit(params): void {
        this.params = params; 
    }
     
    refresh(param?: any): boolean {
        return true;
    }

    OnEditClick($event) {
         
        const params = {
            event: $event,
            rowData: this.params.node.data, 
            // ...something
        }
        //return this._router.navigate(["/AddEmployee"]);
        this.params.onClick(params);
        
    }

    OnDelete($event) {

        const params = {
            event: $event,
            rowData: this.params.node.data,
            // ...something
        }

        if (window.confirm("Are you sure to delete ? ")) {
            this.params.OnDelete(this.params.node.data);
        }

    }
}
