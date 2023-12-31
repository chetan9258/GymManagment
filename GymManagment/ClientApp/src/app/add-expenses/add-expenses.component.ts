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
import { MbrShipPlanClass } from '../Models/mbr-ship-plan-class.model';

@Component({
    selector: 'app-add-expenses',
    templateUrl: './add-expenses.component.html',
    styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

    AddExpensesForm: UntypedFormGroup;
    ExpensesId: string;
    ExpenseDate: string;
    Category: string;
    SubCategory: string;
    Amount: string;
    Description: string;
    btnVal: any;
    modelheaderval: any;
    submitted = false;
    IsSessionEnable : boolean;

    constructor(private gymServices: GymService, public formBuilder: UntypedFormBuilder, private _router: Router, public route: ActivatedRoute) {

    }

    ngOnInit() {

        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);

        this.btnVal = 'Save';
        this.modelheaderval = 'Add Expense';

        this.AddExpensesForm = this.formBuilder.group({
            ExpensesId: [''],
            ExpenseDate: ['', Validators.required],
            Category: ['', Validators.required],
            Amount: ['', Validators.required], 
            Description: [''],
        });

        this.route.queryParams.subscribe((params) => {
            debugger;
            if (params != null && params.ExpensesId != undefined) {
                this.ExpensesId = params.ExpensesId;
                this.ExpenseDate = params.ExpenseDate;
                this.Category = params.Category;
                this.SubCategory = params.SubCategory;
                this.Amount = params.Amount;
                this.Description = params.Description;

                this.btnVal = 'update';
                this.modelheaderval = 'Update Expenses';

            }
        })

    }

    onSubmit() {
        this.submitted = true;
        if (!this.AddExpensesForm.invalid) {
            if (this.btnVal == "Save") {
                this.gymServices.CreateExpense(this.AddExpensesForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/GymExpenses"]);
                    }
                    else {
                        alert("Error.");
                    }
                }, error => alert(error.message))
            }
            else { // Update 
                this.gymServices.UpdateExpense(this.AddExpensesForm.value).subscribe(result => {
                    if (!isNull(result)) {
                        alert(result);
                        return this._router.navigate(["/GymExpenses"]);
                    }
                    else {
                        alert("Error.");
                    }
                }, error => alert(error.message))
            }
        }
    }

    onCancel() {
        return this._router.navigate(["/GymExpenses"]);
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;

    }

    get fval() {
        return this.AddExpensesForm.controls;
    }

}
